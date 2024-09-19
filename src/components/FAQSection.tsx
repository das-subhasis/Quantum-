import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const FAQSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-semibold text-xl">Frequently asked questions</h1>
      </div>
      <FAQ Question={'How long does it take to learn?'} Answer={'It takes around 2 to 3 weeks.'} />
      <FAQ Question={'How long does it take to learn?'} Answer={'It takes around 2 to 3 weeks.'} />
      <FAQ Question={'How long does it take to learn?'} Answer={'It takes around 2 to 3 weeks.'} />
    </div >
  );
};

const FAQ = ({ Question, Answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl w-full px-5">
      <div className="flex items-center justify-between w-full p-4">
        <p className="">{Question}</p>
        <button onClick={() => setIsOpen(!isOpen)} className="text-left transition-all duration-300 ease-out">
          {
            isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
          }
        </button>
      </div>
      <div className={`transition-all duration-300 ease-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <p className="p-4 text-gray-700">{Answer}</p>
      </div>
    </div>
  )
}

export default FAQSection;