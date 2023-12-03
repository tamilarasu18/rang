import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';

interface AboutContentSectionProps { }
const AboutContentSection: React.FC<AboutContentSectionProps> = (props) => {
    const goodAtPoints = [
        { src: "assets/images/webp/hand_pointer.webp", content: "Our Clothing Excels With Unwavering Commitment To Exceptional Craftsmanship, Delivering Garments Of Unparalleled Quality Through A Skilled, Precision-Focused Team." },
        { src: "assets/images/webp/hand_pointer.webp", content: "Setting Ourselves Apart, We Blend Tradition With Modernity, Leveraging Cutting-Edge Technology To Lead In Fashion Production With Expertise Surpassing Industry Standards." },
        { src: "assets/images/webp/hand_pointer.webp", content: "Beyond Crafting Garments, We Prioritize Eco-Friendly Practices, Contributing To A Greener, Responsible Future That Defines Our Commitment To Environmental" },
    ];

    const ourStory = [
        { id: "01", title: "Craftsmanship Commitment", content: "Our story as a clothing manufacturer is defined by a dedication to meticulous craftsmanship, where each garment reflects our commitment to quality and style." },
        { id: "02", title: "Fashion Innovation", content: "Rooted in innovation, our identity as a clothing manufacturer is marked by trendsetting designs and cutting-edge production techniques, constantly redefining industry standards." },
        { id: "03", title: "Craftsmanship Commitment", content: "Beyond clothing, our story centers on sustainability, with a focus on eco-friendly practices from material sourcing to production, echoing our dedication to a greener future." },
    ]

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
