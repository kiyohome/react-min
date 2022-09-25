import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate();

  const submit = () => {
    navigate("/home")
  }

  return (
    <div>
      <div>Login page</div>
      <div><button onClick={submit}>Login</button></div>
    </div>
  )
}

export default Login
