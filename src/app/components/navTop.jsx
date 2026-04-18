import { SiAirbyte } from "react-icons/si";
import { IoMdSearch } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBasket2Line } from "react-icons/ri";

const navTop = () => {
    return (
        <nav className="flex items-center justify-between mt-3 mb-12">
            <div className="flex items-center">
<SiAirbyte className="size-8 mr-2" /> <h4>ByteMe</h4>
            </div>
            <div className="flex items-center justify-end gap-4 ml-6">
                <a href="/"><h5 className="hover:underline">Home</h5></a>
                <a href="/"><h5 className="hover:underline">Phones</h5></a>
                <a href="/"><h5 className="hover:underline">Tablets</h5></a>
                <a href="/"><h5 className="hover:underline">Laptops</h5></a>
                <a href="/"><h5 className="hover:underline">Accessories</h5></a>
            </div>
            <div className="flex items-center">
                <IoMdSearch className="size-7 mr-3" />
                <FiHeart className="size-6 mr-3" />
                <RiShoppingBasket2Line className="size-7" />
            </div>
        </nav>
    );
}
 
export default navTop;