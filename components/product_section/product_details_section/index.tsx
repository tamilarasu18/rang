import FooterSection from "../../common/footer_section";
import Navbar from "../../common/navbar";
import ProductDetailsContentSection from "./content_section";

interface ProductDetailsSectionProps { }
const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = (props) => {

    return (
        <div className="">
            <Navbar isAdmin={false} />
            <ProductDetailsContentSection />
            <FooterSection />
        </div>
    );
};

export default ProductDetailsSection;
