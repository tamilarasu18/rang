import { useRouter } from "next/router";
import FooterSection from "../../common/footer_section";
import Navbar from "../../common/navbar";
import ProductCard from "../../common/product_card";
import { useEffect, useState } from "react";
import { brandAcceriesProductList, mensProductList, newbornProductList, sportsWearProductList, womensProductList } from "../../../model/product_category_model";


interface ProductCategorySectionProps { }
const ProductCategorySection: React.FC<ProductCategorySectionProps> = (props) => {
    const router = useRouter();
    const [productList, setProductList] = useState<Array<any>>([]);
    const [title,setTitle] = useState<string>('');

    useEffect(() => {

        if (router.route != null && router.query.type != null) {
            if (router.query.type == "mens") {
                setProductList(mensProductList);
                setTitle("Men’s Clothing");
            } else if (router.query.type == "womens") {
                setProductList(womensProductList);
                setTitle("Women’s Clothings");
            } else if (router.query.type == "newborn") {
                setProductList(newbornProductList);
                setTitle("Newborn Baby Clothing");
            } else if (router.query.type == "brand_accessories") {
                setProductList(brandAcceriesProductList);
                setTitle("Customized Accessories");
            } else if (router.query.type == "sportswear") {
                setProductList(sportsWearProductList);
                setTitle("Sportswear");
            }

        }
    }, [router])


    return (
        <div className="">
            <Navbar isAdmin={false} />
            <ProductCard productList={productList} title={title} />
            <FooterSection />
        </div>
    );
};

export default ProductCategorySection;
