import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import { goodAtPoints, ourStory } from '../../../model/product_category_model';

interface AboutContentSectionProps { }
const AboutContentSection: React.FC<AboutContentSectionProps> = (props) => {
   

    const router = useRouter();
    const routerFunction = () => {
        router.push("/contact");
    }


    return (
        <div className="">
            <div className="custom-container">
                <div className="my-10">
                    <img className="object-fill w-full h-[70%]" src="assets/images/webp/about_bottom.webp" alt="" />
                </div>
                <div className="my-8 lg:flex">
                    <div className="text-black monsterrat-bold text-xl lg:text-4xl lg:w-4/5 flex flex-row lg:flex-col mb-4">
                        <div className="mr-2">We Are Good At </div>
                        <div className="text-[#DE291B]">What We Do 😎</div>
                    </div>
                    <div className="">
                        {goodAtPoints.map((each, index) => {
                            return <div key={index} className="flex justify-start items-start mb-6" >
                                <img className="object-fill w-[28px] h-[28px] mr-4" src={each.src} alt="" />
                                <div className="monsterrat-semibold text-base lg:text-lg  text-start">{each.content}</div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="lg:flex justify-start items-start mb-10">
                    <div className=" lg:mr-8">
                        <img className="object-fill w-full h-fill" src="assets/images/webp/about_top.webp" alt="" />
                    </div>
                    <div className="mt-5">
                        <div className="monsterrat-bold text-2xl lg:text-4xl text-[#DE291B]">Our Story</div>
                        <div className="">
                            {ourStory.map((each, index) => {
                                return <div key={index} className="flex justify-start items-start mb-6 mt-4" >
                                    <div className="monsterrat-semibold text-[#969696] text-base lg:text-xl text-start mr-4">{each.id}</div>
                                    <div className="text-black">
                                        <div className="monsterrat-semibold text-base lg:text-xl text-start">{each.title}</div>
                                        <div className="monsterrat-semibold text-xs lg:text-sm text-start opacity-60">{each.content}</div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#DE291B] to-[#6F150E] text-white text-center py-12">
                <div className="monsterrat-bold text-lg lg:text-3xl pb-2">Let’s Work Together</div>
                <div className="monsterrat-semibold text-xs lg:text-base opacity-80 pb-2">Please Reach Out—We’re Here To Help However We Can</div>
                <div className="cursor-pointer" onClick={()=>{routerFunction()}}>
                    <div className="text-[#DE291B] w-[40%] lg:w-[14%] bg-white mx-auto text-base rounded-md py-2 mt-2">
                        Contact us <ArrowForwardIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContentSection;
