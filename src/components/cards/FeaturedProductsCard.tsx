import IconStar from "../icons/IconStar";

interface Props {
  review: number;
  title: string;
  price: number;
  promootonpPrice: number;
  img: string;
}
const FeaturedProductsCard: React.FC<Props> = ({
  review,
  title,
  price,
  promootonpPrice,
  img
}) => {
  return (
    <div className=' flex gap-5 w-[280PX]'>
      <div className='h-full w-36 grid place-items-center'>
        <img className='w-full h-auto ' src={img} alt={title} />
      </div>
      <div>
        <h1 className='text-xl text-dark flex flex-col  '>{title}</h1>
        <div className='flex gap-1 my-2'>
          <IconStar color={"#FFC600"} />
          <IconStar color={"#FFC600"} />
          <IconStar color={"#FFC600"} />
          <IconStar color={"#FFC600"} />
          <IconStar color={"#C1C8CE"} />
        </div>
        <h1 className='text-lg font-medium text-secendery'>
          ${price} {" "}
          <samp className=' text-grayMuted font-normal'> 
            ${promootonpPrice}
          </samp>
        </h1>
      </div>
    </div>
  );
};

export default FeaturedProductsCard;
