
interface Props {
  children: JSX.Element;
  title: String;
  p: String;
}
const WhyUsCard: React.FC<Props> = ({ children, title, p }) => {
  return (
    <div className=" flex flex-col gap-10  items-center w-48">
      {children}
      <div className=" text-center" >
        <h1 className=' text-2xl font-medium mb-3'>{title}</h1>
        <p className=" text-lg">{p}</p>
      </div>
    </div>
  );
};

export default WhyUsCard