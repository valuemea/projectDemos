import RequestMultiple from './components/RequestMultiple';

const contentList = [
  {
    title: '多个请求并发处理',
    content: [
      '应用场景: ',
      '若要编辑回显时，动态加载选项的方法目前无法正确展示(没有找到方法)',
    ]
  },
]
const Index = () => {
  return (
    <div>
      <RequestMultiple />
    </div>
  );
};

export default Index;