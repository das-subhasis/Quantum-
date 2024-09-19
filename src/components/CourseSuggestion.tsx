import { GiRoundStar } from "react-icons/gi";
import { useSelector } from 'react-redux';

const CourseList = () => {
    const courses = useSelector((state) => state.courses.courses);

    return (
        <div className='flex flex-col gap-3 p-5 bg-white rounded-xl'>
            <h2 className='font-medium text-xl'>Suggested courses</h2>
            {courses.map((course) => (
                <div key={course.id} className=" flex gap-3">
                    <div className='w-28 h-18 rounded-xl overflow-hidden'>
                        <a href="#"><img src={course.instructorImage} alt={course.instructorName} className="w-full h-full"/></a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className="text-sm font-medium line-clamp-1"><a href="#">{course.courseName}</a></h2>
                        <p className="text-xs text-gray-500">By {course.instructorName}</p>
                        <p className="flex items-center gap-1 text-gray-500"><span><GiRoundStar color="orange" /></span> {course.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseList;
