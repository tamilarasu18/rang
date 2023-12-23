import { useRouter } from "next/router";

interface ProductCardProps {
    title: string;
    productList: Array<any>;
}
const ProductCard: React.FC<ProductCardProps> = (props) => {
    const router = useRouter();
    const { title, productList } = props;

    const routerFunction = (type: string, subType: string) => {
        router.push(`/product_details?type=${type}&subType=${subType}`);
    }

    return (
        <div className="my-12">
            <div className="custom-container">
                <div className="text-black monsterrat-bold text-2xl pb-6">{title}</div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {productList.map((each, index) => {
                        return <div key={index} onClick={() => { routerFunction(each.type, each.query) }} className="w-full h-full rounded-2xl hover:bg-[#F44336] text-black hover:text-white" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
                            <img className="object-fill w-full h-[84%]" src={each.src} alt="" />
                            <div className="monsterrat-semibold text-lg py-3  text-start px-4 ">{each.name}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
