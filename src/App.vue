<template>
  <!-- <router-view /> -->
  <el-config-provider :locale="locale">
    <!-- <div class="app-layout">
      <router-view />
    </div> -->
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';

// import { AppProvider } from '/@/components/Application';
// import { useTitle } from '/@/hooks/web/useTitle';
// import { useLocale } from '/@/locales/useLocale';

export default defineComponent({
  name: 'App',
  components: { [ElConfigProvider.name]: ElConfigProvider },
  setup() {
    // useTitle();

    // support Multi-language
    // const { getAntdLocale } = useLocale();

    return {
      locale: en,
    };
  },
});
</script>

<style lang="scss">
.app-layout {
  height: 100%;
}
</style>
