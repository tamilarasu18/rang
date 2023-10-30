interface TitleSectionProps {
  title: string;
  color: string;
}
const TitleSection: React.FC<TitleSectionProps> = (props) => {
  const { title,color } = props;
  return (
    <div className="flex justify-start items-center ">
      <div className={`w-12 lg:w-24 h-[2px] lg:h-[4px] mr-4 ${color == "white" ? "bg-white" : "bg-black"} `}></div>
      <div className={`montserrat-bold text-2xl lg:text-4xl ${color == "white" ? "text-white" : "text-black"}`}>{title}</div>
    </div>
  );
};

export default TitleSection;
