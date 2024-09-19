import { HiOutlinePlay } from "react-icons/hi2";
import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { PiDeviceMobileSpeakerLight } from "react-icons/pi";

const CoursePurchase = () => {
    return (
        <div className="bg-white w-full flex flex-col gap-2 rounded-xl px-5 py-5">
            <div>
                <h2 className="text-sm text-gray-500">Full Course</h2>
            </div>
            <div className="flex justify-between w-full">
                <p className="text-xl font-semibold py-1">$15.99 <span className="text-base font-normal line-through text-gray-500">$39.99</span></p>
                <p className="bg-violet-200 flex items-center px-2 py-1 h-fit rounded-lg text-indigo-500 font-medium">60%</p>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="font-semibold">Course includes:</h2>
                <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2 text-gray-500"><span><HiOutlinePlay color="black" /></span>56 hours on-demand video</li>
                    <li className="flex items-center gap-2 text-gray-500"><span><CiFileOn color="black" /></span>6 Articles</li>
                    <li className="flex items-center gap-2 text-gray-500"><span><CiFolderOn color="black" /></span>8 Downloadable resources</li>
                    <li className="flex items-center gap-2 text-gray-500"><span><PiDeviceMobileSpeakerLight color="black" /></span>Mobile version</li>
                </ul>
            </div>
            <div className="flex flex-col gap-3 mt-3">
                <button className="p-3 flex items-center justify-center bg-indigo-500 rounded-lg text-white">Add to cart</button>
                <button className="p-3 flex items-center justify-center ring-1 ring-indigo-500 rounded-lg text-indigo-500 ">Buy now</button>
            </div>
            <div className="w-full">
                <p className="text-sm text-gray-500 font-light">30-Day money-back guarantee.</p>
            </div>
        </div>
    )
}

export default CoursePurchase