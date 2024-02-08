import imageStatusDanger from "../../assets/images/status-danger.svg";
import imageStatusWarning from "../../assets/images/status-warning.svg";
import imageStatusNormal from "../../assets/images/status-normal.svg";
import imageStatusNoData from "../../assets/images/status-no-data.svg";
import imageUser from "../../assets/images/user.png";

export function StuntingStatus({ name, age, image = imageUser, status }) {
  const imageStatus =
    status == "danger"
      ? imageStatusDanger
      : status == "warning"
      ? imageStatusWarning
      : status == "normal"
      ? imageStatusNormal
      : imageStatusNoData;

  return (
    <div className="shadow-s1 rounded-xl bg-white flex p-4 items-center gap-4">
      <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden">
        <img src={image} />
      </div>
      <div className="grow">
        <p className="f-p2-r">Your beloved child</p>
        <h5 className="f-h5 mt-2 line-clamp-1">{name}</h5>
        <p className="f-p2-r">{age}</p>
      </div>
      <div className="w-16 h-16 bg-gray-200 rounded-xl overflow-hidden">
        <img src={imageStatus} />
      </div>
    </div>
  );
}
