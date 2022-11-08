import Logo from "./Logo";
import IconFc from "./icons/IconFc";
import IconTwitter from "./icons/IconTwitter";
const Footer: React.FC = () => {
  return (
    <div className='w-full h-auto bg-primaryTransparent p-[134px]'>
      <div className='flex flex-wrap gap-8 justify-between'>
        <div className=' w-56 h-auto'>
          <Logo className=' w-full' />
          <p className=' mt-4  text-xs text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`s standard dummy
            text ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className=' w-56 h-auto'>
          <h1 className=' font-medium text-lg'>Follow Us</h1>
          <p className=' mt-4  text-xs text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`s standard dummy
            text ever.Since the 1500s, when an unknown printer.
          </p>
          <div className='flex gap-10 items-center pt-5'>
            <IconFc />
            <IconTwitter color="#03A9F4" />
          </div>
        </div>
        <div className=' w-56 h-auto'>
          <h1 className=' font-medium text-lg mb-4'>Infomation</h1>
          <ul className=' text-sm flex flex-col gap-1'>
            <li>About Us </li>
            <li>Infomation </li>
            <li>Privacy </li>
            <li>Policy </li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className=' w-full bg-white h-[2px] mt-16 mx-7 rounded-full'> </div>
{/* --------------payement------------ */}
      <div className=" flex gap-5 mt-7 flex-wrap flex-row-reverse">
        <img className=' h-6 w-10' src='assetes/master-card.png' alt='' />
        <img className=' h-6 w-10' src='assetes/paypal.png' alt='' />
        <img className=' h-6 w-10' src='assetes/Western-union.png' alt='' />
      </div>
    </div>
  );
};

export default Footer;
