import { SiAirbyte } from "react-icons/si";
import { IoMdSearch } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBasket2Line } from "react-icons/ri";
import Link from "next/link";

const navTop = () => {
    return (
        <nav className="flex items-center justify-between mt-3 mb-12">
            <Link href="/" className="flex items-center">
<SiAirbyte className="size-8 mr-2" /> <h4>ByteMe</h4>
            </Link>
            <div className="flex items-center justify-end gap-4 ml-6">
                <Link href="/"><h5 className="hover:underline">Home</h5></Link>
                <Link href={`/category`}><h5 className="hover:underline">Phones</h5></Link>
                <Link href="/"><h5 className="hover:underline">Tablets</h5></Link>
                <Link href="/"><h5 className="hover:underline">Laptops</h5></Link>
                <Link href="/"><h5 className="hover:underline">Accessories</h5></Link>
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