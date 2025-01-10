import { Col, Row } from 'antd';
import Demo from './components/Demo';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';

const Index = () => {
  return (
    <Row>
      <Col> <Demo /> </Col>
      <Col> <Demo1 /> </Col>
      <Col> <Demo2 /> </Col>
    </Row>
  );
};

export default Index;