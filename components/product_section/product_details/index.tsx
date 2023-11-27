import TitleSection from "../../common/title_Section";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface ProductDetailsProps { }
const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
    const productImageList = [
        { src: "assets/images/webp/mens.webp", name: "Men's Clothings" },
        { src: "assets/images/webp/women.webp", name: "Women's Clothings" },
        { src: "assets/images/webp/kids.webp", name: "Kid's Clothings" },
        { src: "assets/images/webp/corporate.webp", name: "Corporate Clothings" },
        { src: "assets/images/webp/school.webp", name: "School Uniforms" },
        { src: "assets/images/webp/baby.webp", name: "Newborn Baby Clothing" },
        { src: "assets/images/webp/sports.webp", name: "Sportswear" },
        { src: "assets/images/webp/sports_jersey.webp", name: "Sports Jersey's" },
        { src: "assets/images/webp/brands.webp", name: "Sports Jersey's" },
        { src: "assets/images/webp/brand_accessoires.webp", name: "Sports Jersey's" },
    ]
    return (
        <div className="my-12">
            <div className="custom-container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {productImageList.map((each, index) => {
                        return <div className="pb-12 rounded-2xl hover:bg-[#F44336] text-black hover:text-white" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
                            <img className="object-fill w-full h-full" key={index} src={each.src} alt="" />
                            <div className="monsterrat-bold text-lg  text-start px-4 mt-2">{each.name}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
