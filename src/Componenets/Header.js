import { useState } from "react";
import searchImg from "../Assests/Images/magnifying-glass.png"
import { HeadersLink } from "../Assests/text"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
const Header = () => {

    const [menu, openMenu] = useState(false);

    const removeSearchIcon = (e) => {
        e.target.style.backgroundImage = 'none'
    }
    const addSearchIcon = (e) => {
        e.target.style.backgroundImage = `url(${searchImg})`
    }
    return (
        <div className="h-[64px] w-[100%] bg-[#212731] ">
            <div className="max-w-[1024px] h-[100%] flex justify-between px-2 md:justify-around items-center mx-auto ">
                <div>
                    <form>
                        <input className="w-[258px] rounded-md h-[37px] bg-contain bg-no-repeat px-2 outline-none " style={{ backgroundImage: `url(${searchImg})`, backgroundSize: '30px 30px', backgroundPosition: '10px 50%', }} onFocus={removeSearchIcon} onBlur={addSearchIcon} />
                    </form>

                </div>
                <div className="hidden md:block space-x-10">
                    {
                        HeadersLink.map((link) =>
                            <a href={link.link} className="text-[#D1D6DA]">{link.linkname}</a>
                        )
                    }
                </div>
                {/*hamburger*/}
                {
                    (!menu) ?
                        <div className="md:hidden">
                            <RxHamburgerMenu className="text-white text-[32px]" onClick={() => { openMenu(true) }} />
                        </div> :
                        <div className="md:hidden absolute right-3">
                            <IoClose className="text-white text-[32px]" onClick={() => { openMenu(false) }} />
                        </div>

                }
                <div className={` cursor-pointer absolute left-0 bottom-0 right-0 top-0 bg-transparent  ${menu ? '' : 'hidden'}`} onClick={() => { console.log("clicked"); openMenu(false) }}>

                </div>
                <div className={`absolute top-[66px] right-2 z-10 bg-[#676666] px-4 py-2 rounded-md  ${menu ? '' : 'hidden'}  md:hidden`}>
                    <div className="flex flex-col  ">
                        {
                            HeadersLink.map((link) =>
                                <a href={link.link} className="text-white py-[2.5px] my-[1px] border-b-[1px] border-[#606060] ">{link.linkname}</a>
                            )
                        }
                    </div>
                </div>
            </div>


        </div>
    )


}
export default Header;