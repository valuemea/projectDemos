export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '首页',
    path: '/welcome',
    component: './Welcome',
    hideInBreadcrumb: true,
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    path: '*',
    component: './404',
    layout: false,
  },
];
