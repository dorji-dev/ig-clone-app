import { ChildrenProp } from "@lib/models";
import { ConfigProvider } from "antd";

const AntDesignConfigProvider = ({ children }: ChildrenProp) => {
  return <ConfigProvider theme={{
    token: {
      colorPrimary: '#0095f6',
      fontFamily: '__DM_Sans_ce9349',
    },
    components: {
      Button: {
        borderRadius: 9999
      },
      Tooltip: {
        fontSize: 12,
        padding: 30
      },
    }
  }}>{children}</ConfigProvider>;
};

export default AntDesignConfigProvider;
