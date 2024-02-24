import { Empty } from "antd";

const LikesPage = () => {
  return (
    <Empty
      imageStyle={{
        height: 60,
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 20,
        width: "fit-content",
      }}
      description={<span>You don&apos;t have any liked posts</span>}
    />
  );
};

export default LikesPage;
