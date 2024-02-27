import { ErrorBoundaryFallbackProps } from "@lib/models";
import { useRouter } from "@router/customized";
import { Button, Result } from "antd";

const Fallback = ({ reset }: ErrorBoundaryFallbackProps) => {
  const router = useRouter();

  return (
    <div className="mx-[20px] my-[60px]">
      <Result
        status="500"
        title="Oopsie!"
        subTitle="Sorry, something went wrong."
        extra={[
          <Button onClick={reset} type="primary" key="retry">
            Retry
          </Button>,
          <Button onClick={() => router.push("/")} type="default" key="home">
            Home
          </Button>,
        ]}
        className="bg-white rounded-[8px] shadow-main_shadow"
      />
    </div>
  );
};

export default Fallback;
