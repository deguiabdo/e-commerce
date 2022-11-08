import FeaturedProductsCard from "./cards/FeaturedProductsCard";

const FeaturedProducts:React.FC = () => {
  return (
    <div>
      <h1 className=' text-4xl font-semibold mb-16 text-center mt-28 '>
        LATEST NEWS
      </h1>
      <div className=' flex flex-wrap justify-between gap-8'>
        <FeaturedProductsCard
          review={4}
          title={"Blue Swade Nike Sneakers"}
          price={499}
          promootonpPrice={599}
          img={"/assetes/shoe-feautured.png"}
        />
        <FeaturedProductsCard
          review={4}
          title={"Blue Swade Nike Sneakers"}
          price={499}
          promootonpPrice={599}
          img={"/assetes/shoe-feautured.png"}
        />
        <FeaturedProductsCard
          review={4}
          title={"Blue Swade Nike Sneakers"}
          price={499}
          promootonpPrice={599}
          img={"/assetes/shoe-feautured.png"}
        />
      </div>

      <div className=' w-[633px] mt-32 mx-auto h-16 flex border border-primary'>
        <input
          className='outline-none px-6 h-full grow text-grayNeutral'
          type='search'
          name=''
          id=''
          value={"Search query..."}
        />
        <button className='  bg-primary h-full w-32 text-white text-xl font-semibold grid place-items-center'>
          Search
        </button>
      </div>
    </div>
  );
}

export default FeaturedProducts