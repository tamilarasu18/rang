import TitleSection from "../../common/title_Section";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface OurProductProps { }
const OurProduct: React.FC<OurProductProps> = (props) => {
    const productList = [
        { src: "assets/images/webp/mens.webp", name: "Men's Clothings" },
        { src: "assets/images/webp/women.webp", name: "Women's Clothings" },
        { src: "assets/images/webp/kids.webp", name: "Kid's Clothings" },
        { src: "assets/images/webp/corporate.webp", name: "Corporate Clothings" },
        { src: "assets/images/webp/school.webp", name: "School Uniforms" },
        { src: "assets/images/webp/baby.webp", name: "Newborn Baby Clothing" },
        { src: "assets/images/webp/sports.webp", name: "Sportswear" },
        { src: "assets/images/webp/sports_jersey.webp", name: "Sports Jersey's" },
    ]
    return (
        <div className="">
            <div className="custom-container py-12 ">
                <div className="flex pb-6">
                    <div className="flex-1 px-4">
                        <TitleSection title={"Our Product"} color={"black"} />
                    </div>
                    <div className="hidden md:block text-[#DE291B] montserrat-semiBold text-lg">View All</div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {productList.map((each, index) => {
                        return <div key={index} className="pb-12 rounded-2xl hover:bg-[#F44336] text-black hover:text-white" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
                            <img className="object-fill w-full h-full"  src={each.src} alt="" />
                            <div className="monsterrat-bold text-lg  text-start px-4 mt-2">{each.name}</div>
                        </div>
                    })}
                </div>
                <div className="md:hidden flex justify-center items-center pt-4">
                    <div className="text-[#DE291B] rounded border-2 border-[#DE291B] p-1 text-center w-32 ">
                        View All <KeyboardArrowRightIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
