import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";

interface PostOptionsModalProps {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const PostOptionsModal = ({ open, setOpenModal }: PostOptionsModalProps) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpenModal(false)}
      centered
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      closable={false}
      footer={null}
      className="[&_.ant-modal-content]:!p-0"
    >
      <div className="flex flex-col">
        {true && (
          <button className="py-4 border-b font-bold text-red-600">
            Report
          </button>
        )}
        {true && (
          <button className="py-4 border-b font-[500]">Go to post</button>
        )}
        <button className="py-4 border-b font-[500]">Copy link</button>
        <button onClick={() => setOpenModal(false)} className="py-4 font-[500]">
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default PostOptionsModal;
