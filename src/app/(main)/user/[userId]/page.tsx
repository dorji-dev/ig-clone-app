import { Button, Empty } from "antd";

const UserPostsPage = () => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 20,
        width: "fit-content",
      }}
      description={<span>You don&apos;t have any posts</span>}
    >
      <Button type="primary">Create Now</Button>
    </Empty>
  );
};

export default UserPostsPage;
