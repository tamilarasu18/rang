import FooterSection from "../common/footer_section";
import ClientSection from "./client_Section";
import FaqSection from "./faq_section";
import LandingContactSection from "./landing_contact_section";
import Navbar from "../common/navbar";
import OurProduct from "./our_product";
import TopSection from "./top_section";
import UniqueSection from "./unique_section";

interface LandingPageProps {}
const LandingPage: React.FC<LandingPageProps> = (props) => {
  return (
    <div className="">
     <Navbar/>
     <TopSection/>
     <UniqueSection/>
     <OurProduct/>
     <LandingContactSection/>
     <ClientSection/>
     <FaqSection/>
     <FooterSection/>
    </div>
  );
};

export default LandingPage;
