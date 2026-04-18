import { SiAirbyte } from "react-icons/si";
import { IoMdSearch } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBasket2Line } from "react-icons/ri";

const navTop = () => {
    return (
        <nav className="flex items-center justify-between mt-2">
            <div>
<SiAirbyte />
            </div>
            <div className="flex items-center gap-4">
                <a href="/"><h5>Home</h5></a>
                <a href="/"><h5>Phones</h5></a>
                <a href="/"><h5>Tablets</h5></a>
                <a href="/"><h5>Laptops</h5></a>
                <a href="/"><h5>Accessories</h5></a>
            </div>
            <div className="flex">
                <IoMdSearch />
                <FiHeart />
                <RiShoppingBasket2Line />
            </div>
        </nav>
    );
}
 
export default navTop;