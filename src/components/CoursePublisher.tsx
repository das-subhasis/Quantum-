import { AiFillPlaySquare } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { GiRoundStar } from "react-icons/gi";
import profile from '../assets/images/image_1.webp'
const CoursePublisher = () => {
    return (
        <div className='flex flex-col gap-3 bg-white px-5 py-5 rounded-xl'>
            <h2 className='font-medium text-xl'>Publisher</h2>
            <div className='flex items-center gap-3 mt-1'>
                {/* publisher pic */}
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img src={profile} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-medium'>Ryan Curtis</h2>
                    <p className='text-sm text-gray-500'>3D Artist</p>
                </div>
            </div>
            <div>
                <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque modi voluptatum ducimus molestiae</p>
            </div>
            <ul className='flex flex-col gap-2'>
                <li className="flex items-center gap-2 text-gray-500"><span><GiRoundStar size={20} color="gray" /></span>4.8 Instructor rating</li>
                <li className="flex items-center gap-2 text-gray-500"><span><MdVerified size={20} color="gray" /></span>899 Reviews</li>
                <li className="flex items-center gap-2 text-gray-500"><span><HiMiniUsers size={20} color="gray" /></span>4,887 Students</li>
                <li className="flex items-center gap-2 text-gray-500"><span><AiFillPlaySquare size={20} color="gray" /></span>5 Courses</li>
            </ul>
        </div>
    )
}

export default CoursePublisher