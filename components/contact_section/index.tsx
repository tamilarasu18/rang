import FooterSection from "../common/footer_section";
import Navbar from "../common/navbar";
import ContactContentSection from "./contact_content_section";


interface ContactSectionProps {}
const ContactSection: React.FC<ContactSectionProps> = (props) => {
  return (
    <div className="">
     <Navbar isAdmin={false}/>
     <ContactContentSection/>
     <FooterSection/>
    </div>
  );
};

export default ContactSection;
