import TitleSection from "../../common/title_Section";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface OurProductProps { }
const OurProduct: React.FC<OurProductProps> = (props) => {
    const productList = [
        { src: "assets/images/webp/mens.webp" },
        { src: "assets/images/webp/women.webp" },
        { src: "assets/images/webp/kids.webp" },
        { src: "assets/images/webp/corporate.webp" },
        { src: "assets/images/webp/school.webp" },
        { src: "assets/images/webp/sports.webp" },
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {productList.map((each,index) => {
                        return <img className="object-fill w-full h-full" key={index} src={each.src} alt="" />
                    })}
                </div>
                <div className="md:hidden flex justify-center items-center pt-4">
                    <div className="text-[#DE291B] rounded border-2 border-[#DE291B] p-1 text-center w-32 ">
                        View All <KeyboardArrowRightIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
