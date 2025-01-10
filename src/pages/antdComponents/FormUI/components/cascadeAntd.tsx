import { Cascader, CascaderProps } from 'antd';
import { useEffect, useState } from 'react';
import { getAreaList } from './service';
interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
  arcoCode?: string;
  arcoName?: string;
}
// 级联选择框动态加载选项
// 说明：
// 1. 使用 loadData 实现动态加载选项，与showSearch 无法一起使用;  
// 2若要编辑回显时，动态加载选项的方法目前无法正确展示(没有找到方法)
const CascadeAntd = () => {
  const [areaOptions, setAreaOptions] = useState([])
  const getAreaData = async (parentCode?: string) => {
    const response = await getAreaList({ parentCode: parentCode })
    if (response?.code === 200) setAreaOptions(response?.data || [])
  }
  useEffect(() => { getAreaData() }, [])
  // 级联选择框动态获取数据
  const loadData = async (selectedOptions: Option[]) => {
    console.log(selectedOptions, 'bbbb')
    const targetOption = selectedOptions[selectedOptions.length - 1];
    const response = await getAreaList({ parentCode: targetOption.arcoCode });
    targetOption.children = response?.data || []
    setAreaOptions([...areaOptions]);
  };
  const onChange: CascaderProps<any>['onChange'] = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  return (
    <div>
      <Cascader
        placeholder='请选择'
        style={{ width: '300px' }}
        options={areaOptions}
        loadData={loadData}
        onChange={onChange}
        fieldNames={{ label: 'arcoName', value: 'arcoCode' }}
        changeOnSelect
      />
    </div>
  );
};

export default CascadeAntd;

