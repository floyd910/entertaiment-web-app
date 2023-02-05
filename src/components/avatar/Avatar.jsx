import avatar from "../../assets/image-avatar.png";
import "./Avatar.css";

export default function Avatar() {
  return (
    <div className="avatar">
      <img src={avatar} alt="User avatar" />
    </div>
  );
}
