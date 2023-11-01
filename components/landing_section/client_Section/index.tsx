import TitleSection from "../../common/title_Section";


interface ClientSectionProps { }
const ClientSection: React.FC<ClientSectionProps> = (props) => {
    const client =[
        {id: 1,src: "assets/images/png/nb_client.png"},
        {id: 2,src: "assets/images/png/carrefour_client.png"},
        {id: 3,src: "assets/images/png/carrefour_client.png"},
        {id: 4,src: "assets/images/png/carrefour_client.png"},
        {id: 5,src: "assets/images/png/carrefour_client.png"},
        {id: 6,src: "assets/images/png/carrefour_client.png"},
        {id: 7,src: "assets/images/png/carrefour_client.png"},
        {id: 8,src: "assets/images/png/carrefour_client.png"},
    ]
    return (
        <div className="container mx-auto px-4 lg:p-0">
            <div className="py-8">
                <TitleSection title={"Our clients"} color={"black"} />
                <div className="montserrat-medium text-lg md:text-2xl py-6">
                    We manufacture clothing for various brands <span className="montserrat-bold text-[#DE291B] text-xl lg:text-3xl">across continents.</span> <br />  We export <span className="montserrat-bold text-[#DE291B] text-xl lg:text-3xl">all clothing categories.</span>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4">
                    {client.map((each)=>{
                        return <img key={each.id} src={each.src} alt="" className="shadow-lg rounded-md " style={{ boxShadow: "0px 0px 10px rgb(156,163,175,0.4)" }} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default ClientSection;
