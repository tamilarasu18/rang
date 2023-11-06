import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

interface ContactDetailsProps {
    selectedData: any;
    onBackClick: Function;
}
const ContactDetails: React.FC<ContactDetailsProps> = (props) => {
    const { selectedData,onBackClick } = props;
    return (
        <div className="">
            <div className="flex p-6 items-start">
                <div className="" onClick={()=>{onBackClick()}}>
                <ArrowBackIosIcon fontSize='large' />
                </div>
                <div className="">
                    <div className="monsterrat-bold  text-3xl pb-2">{selectedData.name}</div>
                    <div className="monsterrat-regular text-xs">20 JAN 2023 | 09:30 PM</div>
                </div>
            </div>
            <div className="bg-[#F1F3F5] monsterrat-bold py-2 pl-6">
                Details
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="">
                        <div className="monsterrat-medium text-lg pb-2">
                            Mobile No
                        </div>
                        <div className="monsterrat-regular text-sm">
                            {selectedData.mobile}
                        </div>
                    </div>
                    <div className="">
                        <LocalPhoneIcon sx={{ backgroundColor: "#39B54A", borderRadius: "50%", color: "white", width: "40px", height: "40px", padding: "8px" }} />
                    </div>
                </div>
            </div>
            <div className="bg-black w-full h-[1px] opacity-50"></div>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="">
                        <div className="monsterrat-medium text-lg pb-2">
                            Email ID
                        </div>
                        <div className="monsterrat-regular text-sm">
                            {selectedData.email}
                        </div>
                    </div>
                    <div className="">
                        <EmailIcon sx={{ backgroundColor: "#39B54A", borderRadius: "50%", color: "white", width: "40px", height: "40px", padding: "8px" }} />
                    </div>
                </div>
            </div>
            <div className="bg-black w-full h-[1px] opacity-50"></div>
            <div className="p-6">
                <div className="monsterrat-medium text-lg pb-2">
                    Categorie
                </div>
                <div className="monsterrat-regular text-sm">
                    {selectedData.catergorie}
                </div>
            </div>
            <div className="bg-black w-full h-[1px] opacity-50"></div>
            <div className="p-6">
                <div className="monsterrat-medium text-lg pb-2">
                    City & Country
                </div>
                <div className="monsterrat-regular text-sm">
                    {selectedData.location}
                </div>
            </div>
            <div className="bg-black w-full h-[1px] opacity-50"></div>
            <div className="p-6">
                <div className="monsterrat-medium text-lg pb-2">
                    Message
                </div>
                <div className="monsterrat-regular text-sm">
                    {selectedData.message}
                </div>
            </div>
            <div className="bg-black w-full h-[1px] opacity-50"></div>
        </div>
    );
};

export default ContactDetails;
