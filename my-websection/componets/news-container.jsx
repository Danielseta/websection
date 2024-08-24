'use client'

const NewsContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[5283px] flex flex-row items-start justify-center gap-32 max-w-full text-left text-71xl text-darkseagreen font-inter mq1950:gap-8 mq450:gap-4 mq4925:flex-wrap ${className}`}
    >
      <img
        className="h-[2120px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[2025px] mq3450:min-w-full"
        loading="lazy"
        alt=""
        src="/frame-1000001310@2x.png"
      />
      <div className="w-[2040px] flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border min-w-[2040px] max-w-full mq1950:pt-5 mq1950:box-border mq3450:min-w-full mq4925:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[82px] max-w-full mq1950:gap-[41px] mq450:gap-5">
          <h3 className="m-0 w-[424px] relative text-inherit leading-[78px] font-semibold font-[inherit] inline-block max-w-full mq1950:text-26xl mq1950:leading-[47px] mq450:text-8xl mq450:leading-[31px]">
            LATEST
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[37.5px] max-w-full text-124xl text-black mq1950:gap-[19px]">
            <h1 className="m-0 w-[1928px] relative text-inherit leading-[135px] font-semibold font-[inherit] inline-block max-w-full mq1950:text-38xl mq1950:leading-[81px] mq450:text-17xl mq450:leading-[54px]">
              <p className="m-0">Zambia and Tükiye</p>
              <p className="m-0">{`signs MOU to Boost `}</p>
              <p className="m-0">Economic Growth</p>
            </h1>
            <div className="w-[2024px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-45xl">
              <div className="flex-1 relative leading-[135px] inline-block max-w-full mq1950:text-32xl mq1950:leading-[108px] mq450:text-19xl mq450:leading-[81px]">
                <span className="font-extralight">{`November 10, 2022 | `}</span>
                <span className="font-semibold">News in Turkey</span>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-10 pr-0 box-border max-w-full text-57xl text-darkslategray">
              <div className="w-[2000px] relative leading-[135px] inline-block shrink-0 max-w-full mq1950:text-42xl mq1950:leading-[108px] mq450:text-27xl mq450:leading-[81px]">
                The Zambia Ministry of Education signed a Memorandum of
                understanding with Tukiye Maalif Foundation, a Turkish state led
                institution that provides high
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewsContainer;