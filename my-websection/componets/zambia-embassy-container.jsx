import PropTypes from "prop-types";

const ZambiaEmbassyContainer = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[23.9px] pl-[299px] pr-5 box-border max-w-full text-left text-77xl text-black font-inter mq1950:pl-[74px] mq1950:box-border mq450:pl-5 mq450:box-border ${className}`}
    >
      <div className="w-[5449px] flex flex-row items-start justify-between max-w-full gap-5 mq1950:flex-wrap mq3450:flex-wrap mq450:flex-wrap mq4925:flex-wrap">
        <div className="w-[3129px] flex flex-col items-start justify-start pt-[9px] pb-0 pl-0 pr-5 box-border max-w-full">
          <h3 className="m-0 w-[1232px] relative text-inherit font-bold font-[inherit] inline-block max-w-full mq1950:text-29xl mq450:text-10xl">
            <p className="m-0">EMBASSY OF THE REPUB</p>
            <p className="m-0">OF ZAMBIA TUKIYE</p>
          </h3>
        </div>
        <div className="w-[653px] flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1950:flex-wrap mq1950:justify-center">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-[123px] h-[123px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/rifacebookfill.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <img
                className="w-[94px] h-[94px] relative"
                loading="lazy"
                alt=""
                src="/frame-1000001308.svg"
              />
            </div>
            <div className="h-[114px] w-[107.1px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/frame-1000001307.svg"
              />
            </div>
            <img
              className="h-[110px] w-[110px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/mdilinkedin.svg"
            />
          </div>
        </div>
        <div className="h-[201px] w-[1029px] rounded-[19.33px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full text-35xl-1 text-neutral-gray-800 mq1950:h-auto">
          <div className="w-[2099.8px] rounded-[19.33px] flex flex-row items-start justify-start pt-0 px-0 pb-[92.6px] box-border gap-[61.8px] shrink-0 max-w-[205%] mq1950:gap-[15px] mq1950:flex-wrap">
            <div className="w-[301px] relative leading-[65.74px] hidden mq1950:text-24xl mq1950:leading-[53px] mq450:text-13xl mq450:leading-[39px]">
              Instructions
            </div>
            <div className="w-[589.5px] rounded-[15.47px] border-black border-[3.9px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-[63px] px-5 min-w-[589.5px] max-w-full text-neutral-gray-400 mq1950:flex-1 mq1950:min-w-full">
              <div className="relative leading-[66px] mq1950:text-24xl mq1950:leading-[53px] mq450:text-13xl mq450:leading-[39px]">
                Seearch
              </div>
            </div>
            <div className="rounded-[19.33px] bg-black flex flex-row items-start justify-start pt-[54.1px] px-[78px] pb-[54.2px] box-border min-w-[394.4px] max-w-full text-center text-50xl-6 text-white mq1950:flex-1 mq1950:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative leading-[86px] font-semibold mq1950:text-37xl mq1950:leading-[68px] mq450:text-23xl mq450:leading-[51px]">
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

ZambiaEmbassyContainer.propTypes = {
  className: PropTypes.string,
};

export default ZambiaEmbassyContainer;