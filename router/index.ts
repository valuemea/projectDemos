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
    name: '请求应用',
    path: '/requestDemos',
    component: './Request',
  },
  {
    name: 'Antd组件应用',
    path: '/antdComponents',
    routes: [
      {
        name: '表单',
        path: '/antdComponents/formUI',
        component: './antdComponents/FormUI',
      },
    ]
  },
  {
    name: '其他',
    path: '/other',
    routes: [
      // {
      //   name: '设备对接',
      //   path: '/other/deviceDock',
      //   component: './other/DeviceDock',
      // },
      {
        name: 'Canvas画布',
        path: '/other/canvas',
        component: './other/Canvas',
      },
      // {
      //   name: '地图',
      //   path: '/other/map',
      //   component: './other/Map',
      // },
    ]
  },
  {
    path: '*',
    component: './404',
    layout: false,
  },
];
