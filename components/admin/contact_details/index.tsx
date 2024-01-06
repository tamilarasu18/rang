import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

interface ContactDetailsProps {
    selectedData: any;
    onBackClick: Function;
}
const ContactDetails: React.FC<ContactDetailsProps> = (props) => {
    const { selectedData, onBackClick } = props;

    const getMonthAbbreviation = (month: number): string => {
        const monthsAbbreviations = [
            'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];

        return monthsAbbreviations[month];
    };

    function convertDate(date: string) {
        const originalDate = new Date(date);

        const day = originalDate.getDate().toString().padStart(2, '0');
        const month = getMonthAbbreviation(originalDate.getMonth());
        const year = originalDate.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }

    function convertTime(time: string) {
        const originalTime = '4:23:23 PM';

        const timeComponents = originalTime.match(/(\d+):(\d+):(\d+) (AM|PM)/);
        if (timeComponents) {
        const [, hours, minutes, seconds, period] = timeComponents;
        const formattedTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${period}`;
        return formattedTime;
        }
    }


    return (
        <div className="">
            <div className="flex p-6 items-start">
                <div className="" onClick={() => { onBackClick() }}>
                    <ArrowBackIosIcon fontSize='large' />
                </div>
                <div className="">
                    <div className="monsterrat-bold  text-3xl pb-2">{selectedData.name}</div>
                    <div className="monsterrat-regular text-xs">{convertDate(selectedData?.dateTime.split(',')[0])} | {convertTime(selectedData?.dateTime.split(',')[1])}</div>
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
                    Type
                </div>
                <div className="monsterrat-regular text-sm">
                    {selectedData.type}
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
                    {selectedData.city}, {selectedData.country}
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
