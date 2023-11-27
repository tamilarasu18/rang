import FooterSection from "../common/footer_section";
import Navbar from "../common/navbar";
import ProductDetails from "./product_details";


interface ProductSectionProps { }
const ProductSection: React.FC<ProductSectionProps> = (props) => {
    return (
        <div className="">
            <Navbar isAdmin={false} />
            <ProductDetails />
            <FooterSection />
        </div>
    );
};

export default ProductSection;
