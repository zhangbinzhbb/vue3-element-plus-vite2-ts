import { defineConfig, UserConfigExport, ConfigEnv, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import { configSvgIconsPlugin } from './src/plugins/configSvgIconsPlugin';
import { configMockPlugin } from './src/plugins/configMockPlugin';
import { configStyleImportPlugin } from './src/plugins/configStyleImportPlugin';
import { configHtmlPlugin } from './src/plugins/configHtmlPlugin';
import { configCompressPlugin } from './src/plugins/configCompressPlugin';

import { wrapperEnv } from './src/utils/env';
const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd();

  // loadEnv读取的布尔类型是一个字符串
  // 这个函数可以转换为布尔类型
  const env = loadEnv(mode, root);

  const isBuild = command === 'build';

  const viteEnv = wrapperEnv(env);

  const {
    VITE_PORT,
    VITE_USE_MOCK,
    VITE_BUILD_COMPRESS,
    VITE_GLOB_API_URL,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;

  return defineConfig({
    base: './',
    plugins: [
      vue(),
      configStyleImportPlugin(isBuild), // element-plus 按需引入
      configHtmlPlugin(viteEnv, isBuild), //  EJS 标签处理
      // configSvgIconsPlugin(isBuild), // svg 处理
      // configMockPlugin(VITE_USE_MOCK, isBuild), // mock 模拟请求
      // configCompressPlugin(
      //   VITE_BUILD_COMPRESS,
      //   VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      // ) // gzip 或者 brotli 来压缩资源
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        types: resolve('types'),
        comps: resolve('src/components'),
        apis: resolve('src/apis'),
        views: resolve('src/views'),
        store: resolve('src/store'),
        routes: resolve('src/routes'),
        styles: resolve('src/styles'),
        hooks: resolve('src/hooks'),
      },
    },
    server: {
      // Listening on all local IPs
      host: true,
      //端口号
      port: VITE_PORT,
    },
    // build:{
    //   rollupOptions:{
    //     output: {
    //       assetFileNames: 'css/[name].[hash].css',
    //       chunkFileNames: 'js/[name].[hash].js',
    //       entryFileNames: 'js/[name].[hash].js',
    //       manualChunks(id) {
    //         //打包chunk命名和代码分割
    //         const chunkMap = new Map();
    //         chunkMap.set(/[\\/]src[\\/]layout[\\/]/.test(id), 'basicLayout');
    //         chunkMap.set(/[\\/]src[\\/]components[\\/]/.test(id), 'basicComponent');
    //         chunkMap.set(/[\\/]node_modules[\\/]/.test(id), 'vendors');
    //         chunkMap.set(/[\\/]node_modules[\\/]echarts[\\/]/.test(id), 'echarts');
    //         chunkMap.set(/[\\/]node_modules[\\/]lodash[\\/]/.test(id), 'lodash');
    //         chunkMap.set(/[\\/]node_modules[\\/]moment[\\/]/.test(id), 'moment');
    //         chunkMap.set(/[\\/]node_modules[\\/]xlsx[\\/]xlsx.js/.test(id), 'xlsxIndex');
    //         chunkMap.set(/[\\/]node_modules[\\/]xlsx[\\/](?!(xlsx.js))/.test(id), 'xlsx');
    //         chunkMap.set(/[\\/]node_modules[\\/]element-plus[\\/]/.test(id), 'element');
    //         if(chunkMap.get(true)) return chunkMap.get(true);
    //       }
    //     },
    //   },
    // }
  });
};
