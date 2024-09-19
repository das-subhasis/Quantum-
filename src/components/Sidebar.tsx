import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface CourseSectionProps {
  sections: string[];
}

const Sidebar: React.FC = () => {
  const sections: string[] = [
    "Introduction",
    "Downloading Blender",
    "Settings and Preferences",
    "Blender Interface",
    "Basics of Blender 3D",
  ];

  return (
    <div className="w-64 text-white px-4 py-4 flex flex-col gap-8">
      <div className="text-xs flex items-center gap-2">
        <span>{"<"}</span> Back to courses
      </div>
      <div>
        <h2 className="text-xs font-light">Course</h2>
        <h2 className="font-medium">Blender 3D Fundamentals</h2>
      </div>
      <div className="flex flex-col gap-5">
        <CourseSection sections={sections} />
        <CourseSection sections={sections} />
      </div>
    </div>
  );
};

const CourseSection: React.FC<CourseSectionProps> = ({ sections }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div className="text-sm mb-4 flex items-center justify-between">
        <h2 className={`font-light transition-colors duration-300 ease-out ${toggle ? 'text-white' : 'text-gray-300'}`}>
          Course Introduction
        </h2>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
        </button>
      </div>
      {toggle && (
        <ul className="flex flex-col gap-1">
          {sections.map((section, index) => (
            <li key={index} className="py-2 flex gap-3 text-sm">
              <div className="w-6 h-6 flex items-center justify-center rounded-full ring-2 ring-indigo-400">
                {index + 1}
              </div>
              <h2 className="hover:text-gray-300">
                <a href="#">{section}</a>
              </h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
