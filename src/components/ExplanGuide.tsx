import { Modal } from 'antd';
const ExplanGuide: React.FC<{ onClose: () => void; modleInfo: API.ModalInfo }> = ({ onClose, modleInfo }) => {
  return (
    <Modal
      title={`使用指南${modleInfo?.title ? `--${modleInfo?.title}` : ''}`}
      open={modleInfo.isVisible}
      onCancel={onClose}
      footer={null}
    >
      <div style={{ margin: '20px 0' }}>
        {
          typeof modleInfo.content === 'string' ? <p> <span>{modleInfo.content}</span>  </p> : (
            modleInfo.content && modleInfo.content?.map((item, index) =>
              <p>
                <span style={{ fontWeight: 'bold' }}>{index + 1}.&nbsp;</span>
                <span>{item}</span>
              </p>
            )
          )
        }
      </div>
    </Modal>
  );
};

export default ExplanGuide;