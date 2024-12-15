import LoginForm from '../../components/login/LoginForm'
import LoginLogo from '../../components/login/LoginLogo'
const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-loginBackground">
      <LoginLogo />

      <LoginForm />
    </div>
  )
}

export default Login
