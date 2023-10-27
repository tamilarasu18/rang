import Navbar from "./navbar";
import TopSection from "./top_section";
import UniqueSection from "./unique_section";


interface LandingPageProps {}
const LandingPage: React.FC<LandingPageProps> = (props) => {
  return (
    <div className="">
     <Navbar/>
     <TopSection/>
     <UniqueSection/>
    </div>
  );
};

export default LandingPage;
