import { Fragment } from "react"
import FeaturedProducts from "./FeaturedProducts";
import IconRefund from "./icons/IconRefund";
import IconShiping from "./icons/IconShiping"
import IconSuport from "./icons/IconSuport";
import LatestNews from "./LatestNews";
import WhyUsCard from "./WhyUsCard"

const OthersSection:React.FC = () => {
  return (
    <div className='   px-36 py-24 '>
      {/* ---------------------why Us------------- */}
      <div className='flex gap-8 justify-between flex-wrap mb-28'>
        <WhyUsCard
          title={"FREE SHIPPING"}
          p={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        >
          <Fragment>
            <IconShiping />
          </Fragment>
        </WhyUsCard>
        <WhyUsCard
          title={"100% REFUND"}
          p={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        >
          <Fragment>
            <IconRefund />
          </Fragment>
        </WhyUsCard>
        <WhyUsCard
          title={"SUPPORT 24/7"}
          p={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        >
          <Fragment>
            <IconSuport />
          </Fragment>
        </WhyUsCard>
      </div>

      {/* -------------LatestNews------------- */}
      <LatestNews />
      {/* -------------featured products------------- */}
      <FeaturedProducts/>

    </div>
  );
}

export default OthersSection