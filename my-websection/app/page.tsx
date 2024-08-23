import ZambiaEmbassyContainer from "../componets/zambia-embassy-container";
import NewsContainer from "../componets/news-container";

const Root = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start pt-[159px] px-0 pb-[414px] box-border gap-14 leading-[normal] tracking-[normal] text-left text-45xl text-black font-inter mq1950:gap-7">
      <div className="w-[1807.1px] h-[15px] absolute !m-[0] top-[481px] right-[-822.1px] border-darksalmon border-t-[15px] border-solid box-border" />
      <ZambiaEmbassyContainer />
      <div className="self-stretch flex flex-row items-end justify-start py-0 pl-[1699px] pr-[985px] box-border [row-gap:20px] max-w-full mq1950:flex-wrap mq1950:justify-center mq1950:pl-[424px] mq1950:pr-[246px] mq1950:box-border mq3450:flex-wrap mq3450:justify-center mq450:flex-wrap mq450:justify-center mq450:pl-5 mq450:pr-5 mq450:box-border mq4925:flex-wrap mq4925:justify-center">
        <div className="ml-[-1775.1px] w-[1792.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.1px] box-border max-w-full shrink-0">
          <div className="self-stretch h-[15px] relative border-darkseagreen border-t-[15px] border-solid box-border shrink-0 z-[1]" />
        </div>
        <div className="w-[1805px] flex flex-col items-start justify-start py-0 pl-0 pr-3 box-border max-w-full shrink-0 ml-[-17px]">
          <div className="self-stretch h-[15px] relative border-indianred border-t-[15px] border-solid box-border shrink-0" />
        </div>
        <div className="h-[15px] w-[1807.1px] relative border-gray border-t-[15px] border-solid box-border shrink-0 max-w-full ml-[-17px]" />
      </div>
      <div className="w-[3528px] h-[2040px] relative bg-gainsboro hidden max-w-full z-[3]" />
      <div className="w-[3968px] flex flex-row items-start justify-center pt-0 px-5 pb-[178px] box-border max-w-full">
        <div className="w-[2904px] flex flex-row items-start justify-between max-w-full gap-5 mq3450:flex-wrap">
          <div className="w-[345px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
            <div className="w-[248px] relative leading-[78px] inline-block mq1950:text-32xl mq1950:leading-[62px] mq450:text-19xl mq450:leading-[47px]">
              Home
            </div>
          </div>
          <div className="w-[352px] flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-5 box-border max-w-full">
            <div className="w-[293px] relative leading-[78px] inline-block mq1950:text-32xl mq1950:leading-[62px] mq450:text-19xl mq450:leading-[47px]">
              Embassy
            </div>
          </div>
          <div className="w-[352px] flex flex-col items-start justify-start pt-3 pb-0 pl-0 pr-5 box-border max-w-full">
            <div className="w-[293px] relative leading-[78px] inline-block mq1950:text-32xl mq1950:leading-[62px] mq450:text-19xl mq450:leading-[47px]">
              Consular
            </div>
          </div>
          <div className="w-[352px] flex flex-col items-start justify-start pt-[18px] pb-0 pl-0 pr-5 box-border max-w-full">
            <div className="w-[293px] relative leading-[78px] inline-block mq1950:text-32xl mq1950:leading-[62px] mq450:text-19xl mq450:leading-[47px]">
              Tourism
            </div>
          </div>
          <div className="w-[293px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[78px] mq1950:text-32xl mq1950:leading-[62px] mq450:text-19xl mq450:leading-[47px]">
              Media
            </div>
          </div>
          <div className="w-[400px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch relative leading-[78px] mq1950:text-32xl mq1950:leading-[62px] mq450:text-19xl mq450:leading-[47px]">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <section className="w-[6181px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <NewsContainer />
      </section>
    </div>
  );
};

export default Root;