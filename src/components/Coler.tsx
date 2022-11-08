
const Coler: React.FC<{ coler: string }> = ({  coler }) => {
  return (
    <div className=' rounded-full p-[2px] active:border-2  active:border-primaryTransparent bg-transparent h-6 w-6'>
      <div className={`rounded-full h-full w-full ${coler} `}></div>
    </div>
  );
};

export default Coler;