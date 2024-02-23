import SignUp from '@component/auth/sign-up'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup to start sharing your best moments',
}

const SignUpPage = () => {
  return (
    <SignUp />
  )
}

export default SignUpPage