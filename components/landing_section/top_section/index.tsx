interface TopSectionProps {}
const TopSection: React.FC<TopSectionProps> = (props) => {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute inset-0 text-white">
          <div className="w-full md:w-1/2 lg:w-9/12 h-full px-6 lg:px-24 flex flex-col justify-center">
            <div className="montserrat-semiBold text-5xl md:text-xl lg:text-6xl pb-2 lg:pb-3">
              We’re your one-stop
            </div>
            <div className="montserrat-bold text-5xl md:text-xl lg:text-6xl text-[#FFC400] pb-2 lg:pb-3">
              Manufacturer
            </div>
            <div className="montserrat-semiBold text-5xl md:text-xl lg:text-6xl pb-6 lg:pb-10">
              For your brand.
            </div>
            <div className="montserrat-semiBold text-base pb-1">
              Begin with us
            </div>
            <div className="montserrat-medium leading-5 pr-16 lg:w-1/2" style={{fontSize: '12px'}}>
              Share your clothing concepts with us, and we'll manage every
              aspect, from creating samples to delivering your clothing
              production.
            </div>
            <div className="flex items-start pt-8">
              <div className="mr-4 pt-2 border-t-[0.5px] border-white">
                <div className="montserrat-bold text-3xl pb-2">
                  200+
                </div>
                <div className="montserrat-semiBold lg:text-sm" style={{fontSize: '10px'}}>
                  satisfied clothingbrands globally
                </div>
              </div>
              <div className="ml-4 pt-2 border-t-[0.5px] border-white">
                <div className="montserrat-bold text-3xl pb-2">
                  10yrs+
                </div>
                <div className="montserrat-semiBold lg:text-sm" style={{fontSize: '10px'}}>
                  Of quality industry experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={`/assets/images/png/rang_top_bg.png`}
          alt=""
          className="hidden md:block w-full object-scale-contain"
        />
        <img src={`/assets/images/png/rang_top_bg_mobile.png`}
          alt=""
          className="md:hidden w-full h-[90vh] object-scale-contain" />
      </div>
    </div>
  );
};

export default TopSection;
