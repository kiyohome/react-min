import { useNavigate } from "react-router-dom";

function ProfileSetting() {

  const navigate = useNavigate();

  const submit = () => {
    navigate("/home")
  }

  return (
    <div>
      <div>Profile Setting page</div>
      <div><button onClick={submit}>Save</button></div>
    </div>
  )
}

export default ProfileSetting
