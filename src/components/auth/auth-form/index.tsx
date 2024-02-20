import { EmailPassword } from "@lib/models";
import { Button, Form, Input } from "antd";
import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md";

interface AuthFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  submitButtonLabel: string;
  disableSubmitButton: boolean;
}

const AuthForm = ({
  submitButtonLabel,
  onSubmit,
  disableSubmitButton,
}: AuthFormProps) => {
  return (
    <Form
      name="auth-form"
      noValidate
      method="POST"
      onFinish={async (formData: EmailPassword) =>
        onSubmit(formData.email, formData.password)
      }
    >
      <Form.Item
        style={{ marginBottom: 16 }}
        name="email"
        rules={[
          {
            type: "email",
            message: "Email is invalid",
          },
          {
            required: true,
            message: "Email is required",
          },
        ]}
      >
        <Input
          prefix={<MdOutlineMailOutline />}
          type="email"
          placeholder="@email"
        />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: 16 }}
        name="password"
        rules={[{ required: true, message: "Password is required" }]}
      >
        <Input.Password prefix={<MdOutlineLock />} placeholder="@password" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          disabled={disableSubmitButton}
        >
          {submitButtonLabel}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
