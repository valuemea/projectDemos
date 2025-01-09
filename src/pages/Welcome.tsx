import { HeartTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Typography } from 'antd';

const Welcome: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Typography.Title
        level={2}
        style={{ textAlign: 'center', marginTop: '80px' }}
      >
        欢迎使用 <HeartTwoTone twoToneColor="#eb2f96" /> {name}
      </Typography.Title>
    </PageContainer>
  );
};

export default Welcome;
