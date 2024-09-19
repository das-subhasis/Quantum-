import { AiOutlinePlaySquare } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import { LuBarChart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";

// Main CourseDetails Component
const CourseDetails: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-semibold text-xl">Course details</h1>
      </div>
      <div className="flex items-center gap-10">
        <Cbox
          title="Lessons"
          icon={<AiOutlinePlaySquare size={15} strokeWidth={2} />}
          text="128"
        />
        <Cbox
          title="Duration"
          icon={<FaRegClock size={15} strokeWidth={2} />}
          text="3h 55m"
        />
        <Cbox
          title="Skill Level"
          icon={<LuBarChart size={15} strokeWidth={2} />}
          text="Beginner"
        />
        <Cbox
          title="Views"
          icon={<FiEye size={15} strokeWidth={2} />}
          text="12,620"
        />
      </div>
    </div>
  );
};

// Define props interface for Cbox component
interface CboxProps {
  title: string;
  icon: React.ReactNode;
  text: string | number;
}

// Cbox component with props typing
const Cbox: React.FC<CboxProps> = ({ title, icon, text }) => {
  return (
    <div className="w-full rounded-2xl flex flex-col px-5 py-5 bg-white">
      <h1 className="text-gray-500">{title}</h1>
      <span className="flex items-center gap-2">
        {icon}
        <p className="font-semibold">{text}</p>
      </span>
    </div>
  );
};

export default CourseDetails;
