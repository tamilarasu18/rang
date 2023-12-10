import { client } from "../../../model/product_category_model";
import TitleSection from "../../common/title_Section";


interface ClientSectionProps { }
const ClientSection: React.FC<ClientSectionProps> = (props) => {
 
    return (
        <div className=" px-4 lg:px-4 ">
            <div className="custom-container py-8">
                <TitleSection title={"Our clients"} color={"black"} />
                <div className="montserrat-medium text-lg md:text-2xl py-6">
                    We manufacture clothing for various brands <span className="monsterrat-bold text-[#DE291B] text-xl lg:text-3xl">across continents.</span> <br />  We export <span className="monsterrat-bold text-[#DE291B] text-xl lg:text-3xl">all clothing categories.</span>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4">
                    {client.map((each) => {
                        return <img key={each.id} src={each.src} alt="" className="object-fill w-full h-full"  />
                    })}
                </div>
            </div>
        </div>
    );
};

export default ClientSection;
