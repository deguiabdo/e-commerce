const OfferBanner: React.FC = () => {
  return (
    <div className='h-auto  relative  -translate-y-[100px]'>
      <img
        className=' min-h-[980px]  h-auto w-full'
        src='assetes/prommotionImage.png'
        alt='prommotionImage'
      />
      <h1 className='absolute lg:w-[40%] md:w-[60%] sm:w-[80%] mx-14 top-[30%]  z-10 text-6xl text-white'>
        Super Flash Sale 50% Off
      </h1>
      <div className=' w-screen absolute px-14   bottom-0 grid place-content-center  bg-white  '>
        <div className='flex w-full   -translate-y-[90px] overflow-x-scroll '>
          <div className='relative  min-w-[418px]  w-[418px]   h-[358px] '>
            <img
              className='   h-full w-full    '
              src='assetes/CROSS-BAG.png'
              alt='CROSS-BAG'
            />
            <div className='absolute top-6 flex items-center justify-between mx-10'>
              <h1 className=' text-xl font-semibold w-[50%] text-darkBlue'>
                FS - Nike Air Max 270 React...
              </h1>
              <h1 className=' text-3xl font-semibold  text-primary'>$299,43</h1>
            </div>

            <div className='absolute bottom-6 flex w-full left-[30%]'>
              <h1 className=' line-through text-lg text-grayNeutral '>
                $534,33{" "}
              </h1>
              <span className=' text-secendery text-lg font-semibold '>
                24% Off
              </span>
            </div>
          </div>
          <div className='relative min-w-[418px] w-[418px]  h-[358px] bg-slate-400'>
            <img
              className='h-full w-full'
              src='assetes/Air-Max.png'
              alt='Air-Max'
            />
            <div className='absolute top-6 flex items-center justify-between mx-10'>
              <h1 className=' text-xl font-semibold w-[50%] text-darkBlue'>
                FS - Nike Air Max 270 React...
              </h1>
              <h1 className=' text-3xl font-semibold  text-primary'>$299,43</h1>
            </div>

            <div className='absolute bottom-6 flex w-full left-[30%]'>
              <h1 className=' line-through text-lg text-grayNeutral '>
                $534,33{" "}
              </h1>
              <span className=' text-secendery text-lg font-semibold '>
                24% Off
              </span>
            </div>
          </div>
          <div className='relative min-w-[418px]  w-[418px] h-[358px] bg-slate-200'>
            <img
              className='   h-full w-full    '
              src='assetes/FS-Nike.png'
              alt='FS-Nike'
            />
            <div className='absolute top-6 flex items-center justify-between mx-10'>
              <h1 className=' text-xl font-semibold w-[50%] text-darkBlue'>
                FS - Nike Air Max 270 React...
              </h1>
              <h1 className=' text-3xl font-semibold  text-primary'>$299,43</h1>
            </div>

            <div className='absolute bottom-6 flex w-full left-[30%]'>
              <h1 className=' line-through text-lg text-grayNeutral '>
                $534,33{" "}
              </h1>
              <span className=' text-secendery text-lg font-semibold '>
                24% Off
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
