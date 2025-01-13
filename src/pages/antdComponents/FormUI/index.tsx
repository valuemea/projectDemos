import ExplanGuide from '@/components/ExplanGuide';
import { AppstoreOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CascadeAntd from './components/cascadeAntd';
const contentList = [
  {
    title: '动态加载',
    content: [
      '使用 loadData 实现动态加载选项，与showSearch 无法一起使用',
      '若要编辑回显时，动态加载选项的方法目前无法正确展示(没有找到方法)',
    ]
  },
]
const index = () => {
  const [modleInfo, setModleInfo] = useState<API.ModalInfo>({ isVisible: false });

  const showDetailsModal = (index: number) => {
    setModleInfo({
      isVisible: true,
      ... (contentList[index] || {})
    })
  }

  // antd UI 组件库较好或复杂的使用案例
  return (
    <div>
      <h3>级联选择框动态加载选项 <AppstoreOutlined onClick={() => { showDetailsModal(0) }} /></h3>
      <CascadeAntd />
      <ExplanGuide onClose={() => { setModleInfo({ isVisible: false }) }} modleInfo={modleInfo} />
    </div>
  );
};

export default index;