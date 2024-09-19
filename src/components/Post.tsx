import ReactPlayer from "react-player";
import { CiHeart } from "react-icons/ci"
import { FiShare } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import profile from '../assets/images/image_1.webp'

interface PostProps {
    image: string,
    user_pic: string,
    name: string,
    title: string,
    likes: number
}


const Post: React.FC<PostProps> = ({ image, user_pic, name, title, likes }) => {
    return (
        <div className="flex flex-col gap-3 font-poppins">
            {/* Banner Image */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                <ReactPlayer
                    url={'https://www.youtube.com/watch?v=r6ZQil-zd5Y&t=1s'}
                    width='100%'
                    height='100%'
                />
            </div>
            {/* Post Details */}
            <div className="flex justify-between ">
                {/* Profile Image */}
                <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <a href="#"><img src={profile} alt="" className="w-full h-full object-cover"/></a>
                    </div>
                    <div className="flex flex-col ">
                        <h1 className="font-semibold">Ryan Curtis</h1>
                        <h2 className="font-light text-gray-600">Publisher</h2>
                    </div>
                </div>
                {/* Links */}
                <div className="h-full flex gap-5">
                    <button className="flex items-center h-fit">
                        <CiHeart size={22} strokeWidth={1} className="h-full" />
                        <h1 className="ml-1">{1000}</h1>
                    </button>
                    <button className="flex items-center h-fit">
                        <FiShare size={20} strokeWidth={2} className="h-full" />
                        <h1 className="ml-1">Share</h1>
                    </button>
                    <button className="flex items-center h-fit">
                        <BiDotsHorizontalRounded size={25} className="h-full" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post