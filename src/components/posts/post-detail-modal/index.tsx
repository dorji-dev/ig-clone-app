"use client";

import { ChildrenProp } from "@lib/models";
import { Modal } from "antd";
import { useRouter } from "next/navigation";

const PostDetailModalContainer = ({ children }: ChildrenProp) => {
  const router = useRouter();

  return (
    <Modal
      open={true}
      onCancel={router.back}
      centered
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default PostDetailModalContainer;
