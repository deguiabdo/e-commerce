import IconLogo from "./icons/IconLogo";

const Logo = ({className}) => {
  return (
    <div className={`flex items-center gap-2 min-w-fit ${className}`}>
      <div className=' rounded-2xl w-11 h-11 bg-primary grid place-items-center'>
        <IconLogo />
      </div>
      <h1 className='font-bold text-[18px] text-dark'>E-Comm</h1>
    </div>
  );
}

export default Logo