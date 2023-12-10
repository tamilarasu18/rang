interface ProductCardProps {
    title: string;
    productList: Array<any>;
}
const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { title, productList } = props;
    return (
        <div className="my-12">
            <div className="custom-container">
                <div className="text-black monsterrat-bold text-2xl pb-6">{title}</div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {productList.map((each, index) => {
                        return <div key={index} className="w-full h-full rounded-2xl hover:bg-[#F44336] text-black hover:text-white" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
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
