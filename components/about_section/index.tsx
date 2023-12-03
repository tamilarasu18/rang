import FooterSection from "../common/footer_section";
import Navbar from "../common/navbar";
import AboutContentSection from "./about_content_section";


interface AboutSectionProps { }
const AboutSection: React.FC<AboutSectionProps> = (props) => {
    return (
        <div className="">
            <Navbar isAdmin={false} />
            <AboutContentSection />
            <FooterSection />
        </div>
    );
};

export default AboutSection;
