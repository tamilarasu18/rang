import TitleSection from "../../common/title_Section";

interface UniqueSectionProps {}
const UniqueSection: React.FC<UniqueSectionProps> = (props) => {
  const {} = props;

  const uniqueData = [
    {
      src: "assets/images/svg/wide_variety.svg",
      title: "Wide variety",
      content:
        "RANG provides a wide range of garment options. these options aretailored to meet specific requirements.",
    },
    {
      src: "assets/images/svg/quality.svg",
      title: "Quality",
      content:
        "We employ high-quality raw materials and fabrics to guarantee that each rang clothings exudes a premium quality.",
    },
    {
      src: "assets/images/svg/expert_service.svg",
      title: "Expert service",
      content:
        "We provide high-quality, customized garments across various types with modern design techniques.",
    },
    {
      src: "assets/images/svg/timely_delivery.svg",
      title: "Timely delivery",
      content:
        "RANG employs as a streamlined production process to ensure punctual uniform delivery from start to finish.",
    },
    {
      src: "assets/images/svg/customer_support.svg",
      title: "Customer support",
      content:
        "We are at your service 24/7 to assist with any questions or requests regarding the garments you wish to buy.",
    },
    {
      src: "assets/images/svg/customization.svg",
      title: "Customization",
      content:
        "At RANG, your preferences are paramount, allowing you to customize your garments to your exact specifications.",
    },
  ];

  return (
    <div className="bg-[#2E2E2E]">
    <div className="custom-container py-12 px-4 ">
      <TitleSection title={"What Makes Us Unique"} color={"white"} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
        {uniqueData.map((each,index) => {
          return (
            <div key={index} className="px-4 lg:px-8 py-4 lg:py-6 bg-black text-white rounded-md">
              <div className="bg-white rounded-full w-8 h-8 lg:w-14 lg:h-14 flex justify-center items-center mb-2">
                <img src={each.src} alt="" className="object-fill w-4 h-4 lg:w-8 lg:h-8" />
              </div>
              <div className="monsterrat-bold text-base lg:text-2xl mb-1">{each.title}</div>
              <div className="montserrat-medium text-[10px] lg:text-xs">{each.content}</div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default UniqueSection;
