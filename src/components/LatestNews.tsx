import LatestNewsCard from "./cards/LatestNewsCard";

const LatestNews:React.FC = () => {
  return (
    <div>
      <h1 className=' text-4xl font-semibold mb-16 text-center '>
        LATEST NEWS
      </h1>

      <div className=' flex flex-wrap justify-between gap-8'>
        <LatestNewsCard
          date={"01 Jan, 2015"}
          title={"Fashion Industry"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          img={"/assetes/nike.png"}
        />
        <LatestNewsCard
          date={"01 Jan, 2015"}
          title={"Fashion Industry"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          img={"/assetes/kronos.png"}
        />
        <LatestNewsCard
          date={"01 Jan, 2015"}
          title={"Fashion Industry"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          img={"/assetes/nike.png"}
        />
      </div>
    </div>
  );
}

export default LatestNews;