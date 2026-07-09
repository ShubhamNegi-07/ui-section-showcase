import workImg1 from "../../assets/Work img1.jpg";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className="h-full overflow-hidden relative w-65 bg-red-500 rounded-4xl">
      <img className="h-full w-full object-cover" src={workImg1} alt="Work" />
      <RightCardContent/>
    </div>
  );
};

export default RightCard