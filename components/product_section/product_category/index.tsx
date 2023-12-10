import FooterSection from "../../common/footer_section";
import Navbar from "../../common/navbar";


interface ProductCategorySectionProps { }
const ProductCategorySection: React.FC<ProductCategorySectionProps> = (props) => {
    
    return (
        <div className="">
            <Navbar isAdmin={false} />
            <FooterSection />
        </div>
    );
};

export default ProductCategorySection;
