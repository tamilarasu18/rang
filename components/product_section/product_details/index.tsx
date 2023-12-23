import { useRouter } from "next/router";
import { productImageList } from "../../../model/product_category_model";
interface ProductDetailsProps { }
const ProductDetails: React.FC<ProductDetailsProps> = (props) => {

    const router = useRouter();

    const routerFunction = (type: string, subType: string) => {
        if (subType != '') {
            router.push(`/product_details?type=${type}&subType=${subType}`)
        } else {
            router.push(`/category?type=${type}`);
        }
    }
    return (
        <div className="my-12">
            <div className="custom-container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {productImageList.map((each, index) => {
                        return <div onClick={() => { routerFunction(each.query, each.type ?? '') }} key={index} className="w-full h-full rounded-2xl hover:bg-[#F44336] text-black hover:text-white" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
                            <img className="object-fill w-full h-[84%]" src={each.src} alt="" />
                            <div className="monsterrat-semibold text-lg py-3  text-start px-4 ">{each.name}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
