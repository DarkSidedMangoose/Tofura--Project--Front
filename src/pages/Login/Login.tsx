import LoginForm from "../../components/login/loginForm";
import LoginLogo from "../../components/login/loginLogo";
const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-loginBackground">
      <LoginLogo />

      <LoginForm />
    </div>
  );
};

export default Login;
