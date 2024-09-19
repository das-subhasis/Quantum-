import { HiBars3BottomLeft } from "react-icons/hi2";
import { CiHeart, CiBellOn } from "react-icons/ci";
import { PiBagThin } from "react-icons/pi";


const Navbar = () => {
    return (
        <div className='flex justify-between px-5 py-4 font-poppins text-white font-semibold'>
            <div className="flex gap-3 items-center">
                {/* Sidebar Section */}
                <div className="flex ">
                    <button><HiBars3BottomLeft size={23} /></button>
                </div>

                {/* Logo Section */}
                <div>
                    <a href="#">Quantum</a>
                </div>
            </div>

            {/* Links Section */}
            <div className="flex items-center gap-5">
                <div>
                    <a href="#">
                        <CiHeart size={20} strokeWidth={0.5} />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <PiBagThin size={20} strokeWidth={7} />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <CiBellOn size={20} strokeWidth={0.5} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar