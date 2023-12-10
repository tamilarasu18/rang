import { uniqueData } from "../../../model/product_category_model";
import TitleSection from "../../common/title_Section";

interface UniqueSectionProps {}
const UniqueSection: React.FC<UniqueSectionProps> = (props) => {
  const {} = props;

  

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
