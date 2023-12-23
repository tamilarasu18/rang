import { useRouter } from "next/router";
import TitleSection from "../../common/title_Section";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { productList } from "../../../model/product_category_model";

interface OurProductProps { }
const OurProduct: React.FC<OurProductProps> = (props) => {
    const router = useRouter();

    const navigator = () => {
        router.push("/products");
    };


    const routerFunction = (type: string, subType: string) => {
        if (subType != '') {
            router.push(`/product_details?type=${type}&subType=${subType}`)
        } else {
            router.push(`/category?type=${type}`);
        }
    }

    return (
        <div className="">
            <div className="custom-container py-12 ">
                <div className="flex pb-6">
                    <div className="flex-1 px-4">
                        <TitleSection title={"Our Product"} color={"black"} />
                    </div>
                    <div className="hidden md:block text-[#DE291B] monsterrat-semibold text-lg cursor-pointer" onClick={() => { navigator() }}>View All</div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {productList.map((each, index) => {
                        return <div onClick={()=>{routerFunction(each.query, each.type ?? '')}} key={index} className="w-full h-full rounded-2xl hover:bg-[#F44336] text-black hover:text-white" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
                            <img className="object-fill w-full h-[84%]" src={each.src} alt="" />
                            <div className="monsterrat-semibold text-lg py-3  text-start px-4 ">{each.name}</div>
                        </div>
                    })}
                </div>
                <div className="md:hidden flex justify-center items-center pt-4">
                    <div className="text-[#DE291B] rounded border-2 border-[#DE291B] p-1 text-center w-32 " onClick={() => { navigator() }}>
                        View All <KeyboardArrowRightIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
