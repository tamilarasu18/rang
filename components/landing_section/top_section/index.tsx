interface TopSectionProps {}
const TopSection: React.FC<TopSectionProps> = (props) => {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute inset-0 text-white">
          <div className="w-full md:w-1/2 lg:w-9/12 h-full px-6 lg:px-24 flex flex-col justify-center ">
            <div className="monsterrat-semibold text-5xl md:text-xl lg:text-6xl pb-2 lg:pb-3">
              {`We're your one-stop`}
            </div>
            <div className="monsterrat-bold text-5xl md:text-xl lg:text-6xl text-[#FFC400] pb-2 lg:pb-3">
              Manufacturer
            </div>
            <div className="monsterrat-semibold text-5xl md:text-xl lg:text-6xl pb-6 lg:pb-10">
              For your brand.
            </div>
            <div className="monsterrat-semibold md:text-lg lg:text-2xl pb-1">
              Begin with us
            </div>
            <div className="montserrat-medium leading-5 pr-16 lg:w-1/2 md:text-xs">
              {`Share your clothing concepts with us, and we'll manage every
              aspect, from creating samples to delivering your clothing
              production.`}
            </div>
            <div className="flex items-start pt-8">
              <div className="mr-4 pt-2 border-t-[0.5px] border-white">
                <div className="monsterrat-bold md:text-lg lg:text-4xl pb-2">
                  200+
                </div>
                <div className="monsterrat-semibold md:text-xs lg:text-lg">
                  satisfied clothingbrands globally
                </div>
              </div>
              <div className="ml-4 pt-2 border-t-[0.5px] border-white">
                <div className="monsterrat-bold md:text-lg lg:text-4xl pb-2">
                  10yrs+
                </div>
                <div className="monsterrat-semibold md:text-xs lg:text-lg">
                  Of quality industry experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-28 bottom-28" >
          <img src="/assets/images/webp/cotton_img.webp" alt="" className="w-full h-full" />
        </div>
        <img
          src={`/assets/images/webp/rang_top_bg.webp`}
          alt=""
          className="hidden md:block w-full h-full object-scale-contain"
        />
        <img src={`/assets/images/webp/rang_top_bg_mobile.webp`}
          alt=""
          className="md:hidden w-full h-full object-scale-contain" />
      </div>
    </div>
  );
};

export default TopSection;
