import { Empty } from "antd";

const SavedPage = () => {
  return (
    <Empty
      imageStyle={{
        height: 60,
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 20,
        width: "fit-content",
      }}
      description={<span>You don&apos;t have any saved posts</span>}
    />
  );
};

export default SavedPage;
