import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
interface LandingContactSectionProps { }
const LandingContactSection: React.FC<LandingContactSectionProps> = (props) => {
  const router = useRouter();
  const routerFunction = () => {
    router.push("/contact");
  }

  return (
    <div className="bg-[#FFC48B]">
      <div className="lg:flex px-4 pt-6 mg:p-0 items-center justify-start custom-container">
        <div className="">
          <div className="montserrat-medium text-lg md:text-2xl pb-6">Looking for the best custom clothing manufacturer in india?</div>
          <div className="monsterrat-bold text-3xl md:text-4xl pb-6">We are a custom made clothing manufacturer & export house from tamilnadu, india.</div>
          <div className="bg-[#DE291B] monsterrat-semibold text-white rounded text-center w-[50%] md:w-[30%] lg:w-[40%] px-4 lg:px-8 py-2 lg:py-4 text-lg md:text-2xl cursor-pointer" onClick={()=>{routerFunction()}}>
            Contact us <ArrowForwardIcon />
          </div>
        </div>
        <img src="assets/images/webp/landing_contact.webp" alt="" className="pt-8 w-full h-full  lg:w-[50%] lg:h-[50%] object-fill" />
      </div>
    </div>
  );
};

export default LandingContactSection;
