import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Drawer from '@mui/material/Drawer';
import { useEffect, useState } from 'react';
import ContactLogin from '../contact_login';
import ContactDetails from '../contact_details';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { ContactLogModel } from '../../../model/contact_log_model';

interface ContactLogProps {
    password: string;
    contactData: Array<ContactLogModel>;
}
const ContactLog: React.FC<ContactLogProps> = (props) => {
    const { password, contactData } = props;
    const [isOpen, setIsOpen] = useState(true);
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [isMobileView, setIsMobileView] = useState<boolean>();
    const [selectedData, setSelectedData] = useState<any>();
    const [finalData, setFinalData] = useState<Array<ContactLogModel>>([]);

    useEffect(() => {
        console.log("contactData",contactData);
        
        if (isMobileView == null) {
            setIsMobileView(window.innerWidth <= 768);
        }
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        let temp: Array<ContactLogModel>;
        temp = [...adminData, ...contactData];
        setFinalData(temp);
    }, [contactData])

    const toggleNavbar = (value: boolean) => {
        setIsOpen(value);

    };
    const toggleNavbarDetails = () => {
        setIsOpenDetails(!isOpenDetails);
    };
    const setData = (data: any) => {
        setSelectedData(data)
        setIsOpenDetails(true)
    }

    const adminData: ContactLogModel[] = [
        new ContactLogModel({
            id: "",
            name: "Name",
            mobile: "Mobile No",
            email: "Email ID",
            catergorie: "Categorie",
            type: "Type",
            country: "City & Country",
            message: "Message"
        }),
    ];

    console.log("finalData",finalData);
    


    return (
        <div className="px-8 py-4 md:py-8">
            {/* title */}
            <div className="text-black monsterrat-semibold text-xl lg:text-3xl pb-8">
                Contact logs
            </div>
            {/* mobile view */}
            <div className="lg:hidden">
                {finalData && finalData?.map((each, index) => {
                    return <div key={index} onClick={() => { setData(each) }} className={`${index == 0 ? "" : "mb-8"}`}  >
                        {index != 0 ? <div className="text-black flex items-center justify-between px-4 py-2 rounded-md" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
                            <div className="">
                                <div className="text-sm py-1">{each?.name}</div>
                                <div className="text-xs py-1">{each?.catergorie}</div>
                                <div className="text-xs opacity-60 py-1">{each?.city}, {each?.country}</div>
                                <div className="text-xs opacity-60 py-1">{each?.mobile} | {each?.email}</div>
                            </div>
                            <ArrowForwardIosIcon />
                        </div> : <></>}
                    </div>
                })}

            </div>
            <div className="hidden lg:block py-2" style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }}>
                {finalData?.map((each, index) => {
                    return <div key={index} onClick={() => { setData(each) }} className={`${index % 2 == 0 ? "bg-white" : "bg-[#F7F7F7]"} grid grid-cols-12 gap-2 text-start py-4 px-4`} >
                        <div className={`${index == 0 ? "text-base monsterrat-semibold" : "text-sm monsterrat-regular opacity-60"} col-span-2`}>{each?.name}</div>
                        <div className={`${index == 0 ? "text-base monsterrat-semibold" : "text-sm monsterrat-regular opacity-60"} col-span-1`}>{each?.mobile}</div>
                        <div className={`${index == 0 ? "text-base monsterrat-semibold" : "text-sm monsterrat-regular opacity-60"} col-span-1`}>{each?.type}</div>
                        <div className={`${index == 0 ? "text-base monsterrat-semibold" : "text-sm monsterrat-regular opacity-60"} col-span-1`}>{each?.catergorie}</div>
                        <div className={`${index == 0 ? "text-base monsterrat-semibold" : "text-sm monsterrat-regular opacity-60"} col-span-2`}>{each?.city ? each?.city + "," : ""} {each?.country}</div>
                        <div className={`${index == 0 ? "text-base monsterrat-semibold" : "text-sm monsterrat-regular opacity-60"} col-span-4 truncate w-full`}>{each?.message}</div>
                        <div className={`col-span-1`}>{index != 0 ? <KeyboardArrowRightIcon /> : <></>}</div>
                    </div>
                })}

            </div>
            <ClickAwayListener onClickAway={() => { toggleNavbar(true) }}>
                <Drawer
                    anchor={"right"}
                    open={isOpen}
                    onClose={toggleNavbar}
                    PaperProps={{
                        style: {
                            height: "100%",
                            width: isMobileView ? '100%' : '30%',
                        },
                    }}
                    className="z-0"
                >
                    <div className="">
                        <ContactLogin password={password} onDoneClick={() => { toggleNavbar(false) }} />
                    </div>
                </Drawer>
            </ClickAwayListener>


            <Drawer
                anchor={"right"}
                open={isOpenDetails}
                onClose={toggleNavbarDetails}
                PaperProps={{
                    style: {
                        height: "100%",
                        width: isMobileView ? '100%' : '30%',
                    },
                }}
                className="z-0"
            >
                <div className="">
                    <ContactDetails selectedData={selectedData} onBackClick={toggleNavbarDetails} />
                </div>
            </Drawer>
        </div>
    );
};

export default ContactLog;
