<template>
  <div class="app-wrapper">
    <el-container class="container">
      <LayoutSider />
      <el-container class="app-wrapper-content">
        <LayoutHeader />
        <div class="app-wrapper-main">
          <router-view />
        </div>
        <LayoutFooter />
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutHeader from './component/header/index.vue';
import LayoutSider from './component/sider/index.vue';
import LayoutFooter from './component/footer/index.vue';
export default defineComponent({
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutSider,
    LayoutFooter,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.app-wrapper {
  min-height: 100vh;
  background-color: #fff;
}

.container {
  height: 100vh;
}

.aside {
  width: 200px !important;
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.aside::-webkit-scrollbar {
  display: none;
}

.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.head span {
  font-size: 20px;
  color: #fff;
}

.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.app-wrapper-content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}

.app-wrapper-main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.el-menu {
  border-right: none !important;
}

.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.el-submenu:first-child {
  border-top: none;
}

.el-submenu [class^='el-icon-'] {
  vertical-align: -1px !important;
}

a {
  color: #409eff;
  text-decoration: none;
}

.el-pagination {
  text-align: center;
  margin-top: 20px;
}

.el-popper__arrow {
  display: none;
}
</style>
