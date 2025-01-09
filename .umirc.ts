import { defineConfig } from '@umijs/max';
import router from './router';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '知识库',
  },
  define: {
    HOME_PATH: '/',
  },
  routes: router,
  npmClient: 'yarn',
});
