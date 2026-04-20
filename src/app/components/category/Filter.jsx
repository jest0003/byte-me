import { IoOptionsOutline } from "react-icons/io5";

const Filter = () => {
    return ( 
        <section className="border-solid border-t-2 border-r-2 border-b-2 fixed top-22 left-0 pl-8 pr-5 pb-2">
            <div className="flex items-center gap-3 pt-2 pb-2"><IoOptionsOutline className="size-7" /> <h4>FILTER</h4></div>
            <div className="mt-2 ml-4">
                <section className="mb-4"><h4>Price</h4>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>under 500</p></div>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>over 500</p></div>
                </section>

                <section className="mb-4"><h4>Brand</h4>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>Apple</p></div>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>Samsung</p></div>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>Hauwai</p></div>
                </section>

                <section className="mb-4"><h4>Color</h4>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>Black</p></div>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>Red</p></div>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>Purple</p></div>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>Blue</p></div>
                <div className="flex items-center gap-3"><input type="checkbox" name="" id="" /> <p>Green</p></div>
                </section>
                </div>
        </section>
     );
}
 
export default Filter;
<section>
    <div className="flex">ICON <h4>FILTER</h4></div>

</section>