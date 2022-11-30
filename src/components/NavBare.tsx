import IconArrowDown from "./icons/IconArrowDown";
import IconCart from "./icons/IconCart";
import IconProfile from "./icons/IconProfile";
import IconSearch from "./icons/IconSearch";
import Logo from "./Logo";
import Link from "next/link";

const NavBare: React.FC = () => {
  return (
    <div className=' w-full relative z-[100] h-[165px] bg-white '>
      {/* -----------Header--------- */}
      <div className='pl-[104px]  pr-[134px]  border  border-b-gray-100 h-16 flex justify-between items-center'>
        <div className=' flex gap-3 items-center text-dark  '>
          <div className='  flex items-center gap-[6px]   '>
            <h1>EN</h1>
            <IconArrowDown />
          </div>
          <button className=' flex items-center gap-[6px]'>
            <h1>USD</h1>
            <IconArrowDown />
          </button>
        </div>

        <ul className='flex items-center gap-8'>
          <li className='items-center flex gap-1 '>
            <IconProfile />
            <h1>My profile</h1>
          </li>
          <li className=' w-6 h-6 relative'>
            <IconCart />
            <div className=' absolute -top-2 -right-2 grid place-items-center h-5 w-5 bg-secendery rounded-full font-bold text-[10px] text-white'>
              2
            </div>
          </li>
          <li> Items</li>
          <li className='items-center flex gap-2 '>
            <input
              className=' text-gray-400 outline-none  w-14'
              type='text'
              value={"$0.00"}
            />
            <IconSearch />
          </li>
        </ul>
      </div>
      {/* -----------Navigation--------- */}
      <div className='pl-[104px] pr-[134px]  h-24 flex items-center justify-between'>
        <Logo className={"w-[25%]"} />
        <ul className=' font-medium text-2xl flex items-center grow justify-between'>
          <li className=' text-primary'><Link href='/'> HOME</Link> </li>
          <li>
            <Link href='/category'> SNEAKERS</Link>
          </li>
          <li>BAGS</li>

          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBare
