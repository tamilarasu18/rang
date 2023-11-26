import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface LandingContactSectionProps { }
const LandingContactSection: React.FC<LandingContactSectionProps> = (props) => {
  return (
    <div className="bg-[#FFC48B]">
      <div className="lg:flex px-4 pt-6 mg:p-0 items-center justify-start custom-container">
        <div className="">
          <div className="montserrat-medium text-lg md:text-2xl pb-6">Looking for the best custom clothing manufacturer in india?</div>
          <div className="monsterrat-bold text-3xl md:text-5xl lg:text-6xl pb-6">We are a custom made clothing manufacturer & export house from tamilnadu, india.</div>
          <div className="bg-[#DE291B] montserrat-semiBold text-white rounded text-center w-[40%] md:w-[30%] lg:w-[40%] px-4 lg:px-8 py-2 lg:py-4 text-lg md:text-2xl lg:text-3xl">
            Contact us <ArrowForwardIcon />
          </div>
        </div>
        <img src="assets/images/webp/landing_contact.webp" alt="" className="pt-8 w-full h-full  lg:w-[50%] lg:h-[50%] object-fill" />
      </div>
    </div>
  );
};

export default LandingContactSection;
