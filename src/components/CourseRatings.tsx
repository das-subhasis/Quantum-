import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const CourseRatings = () => {
    const [rating, setRating] = useState(1)

    const handleRating = (index: number) => {
        setRating(index)
    }
    return (
        <div className="w-full flex justify-between bg-white rounded-xl px-5 py-5">
            <div className="flex items-center">
                {/* Emoji */}
                <span className="text-5xl">🤩</span>
                <div className="flex flex-col">
                    <h2 className="font-medium text-lg">Rating</h2>
                    <p className="text-gray-400">2,492 Students</p>
                </div>
            </div>
            <div className="flex">
                {
                    Array.from({ length: 5 }).map((_, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => handleRating(index)}
                                className="h-fit"
                            >
                                {index <= rating ? <FaStar color="orange" /> : <CiStar />}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CourseRatings