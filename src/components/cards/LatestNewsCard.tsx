import Image from "next/image";
interface Props {
  date: string;
  title: string;
  description: string;
  img: string;
}
const LatestNewsCard: React.FC<Props> = ({ date, title, description, img }) => {
  return (
    <div className=' flex gap-5 w-[320PX]'>
      <div className='h-full w-36 grid place-items-center'>
        <img className='w-full h-auto ' src={img} alt={title} />
      </div>
      <div>
        <h1 className="text-lg text-gray-300  font-medium">{date}</h1>
        <h1 className="text-5 font-semibold">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
