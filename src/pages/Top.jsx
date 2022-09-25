import { Link } from "react-router-dom"

function Top() {

  return (
    <div>
      <div>Top page</div>
      <div><Link to="/login">Login</Link></div>
      <div><Link to="/profile-setting">Profile Setting</Link></div>
    </div>
  )
}

export default Top
