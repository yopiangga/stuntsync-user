export function StuntingStatus({ name, age, image, status }) {
  return (
    <div className="shadow-s1 rounded-xl bg-white flex p-4 items-center gap-4">
      <div className="w-20 h-20 bg-gray-200 rounded-xl">
        <img src={image} />
      </div>
      <div className="grow">
        <p className="f-p2-r">Your beloved child</p>
        <h4 className="f-h4 mt-2 line-clamp-1">{name}</h4>
        <p className="f-p2-m">{age}</p>
      </div>
      <div className="w-16 h-16 bg-gray-200 rounded-xl">
        <img src={status} />
      </div>
    </div>
  );
}
