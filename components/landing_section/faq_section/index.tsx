import Collapse from "@mui/material/Collapse";
import TitleSection from "../../common/title_Section";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


interface FaqSectionProps { }
const FaqSection: React.FC<FaqSectionProps> = (props) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const faqData = [
        { id: 0, question: "How is the quality of the products?", answer: "We Have Successfully Been Serving The Market For Two Decades Without Any Complaints From Any Of Our Clients. Well, We Do Not Consider That As Our Quality Statement. Rsm Uniforms Assures You Fine Quality Products As We Process Our Products With At Most Concern And Care" },
        { id: 1, question: "How is the quality of the products?", answer: "We Have Successfully Been Serving The Market For Two Decades Without Any Complaints From Any Of Our Clients. Well, We Do Not Consider That As Our Quality Statement. Rsm Uniforms Assures You Fine Quality Products As We Process Our Products With At Most Concern And Care" },
        { id: 2, question: "How is the quality of the products?", answer: "We Have Successfully Been Serving The Market For Two Decades Without Any Complaints From Any Of Our Clients. Well, We Do Not Consider That As Our Quality Statement. Rsm Uniforms Assures You Fine Quality Products As We Process Our Products With At Most Concern And Care" },
        { id: 3, question: "How is the quality of the products?", answer: "We Have Successfully Been Serving The Market For Two Decades Without Any Complaints From Any Of Our Clients. Well, We Do Not Consider That As Our Quality Statement. Rsm Uniforms Assures You Fine Quality Products As We Process Our Products With At Most Concern And Care" },
    ]

    // function
    const setCollapseValue = (value: number) => {
        setSelectedIndex(value)
    }

    return (
        <div className="bg-[#2E2E2E] py-8">
            <div className="container mx-auto">
                <div className="px-4 lg:p-0">
                    <div className="pb-6">
                        <TitleSection title={"FAQ"} color={"white"} />
                    </div>
                    <div className="text-white flex flex-wrap border-b-2">
                        {faqData.map((each, index) => {
                            return <div key={each.id} className="py-4 border-t-2" onClick={() => {
                                setCollapseValue(index)
                            }}>
                                <div className="pb-2 flex">
                                    <div className="montserrat-medium text-lg flex-1">
                                        {each.question}
                                    </div>
                                    {index == selectedIndex ? <RemoveIcon /> : <AddIcon />}
                                </div>
                                <Collapse in={index == selectedIndex} key={each.id}>
                                    <div className="monsterrat-regular text-sm bg-gray-400 p-4">
                                        {each.answer}
                                    </div>
                                </Collapse>

                            </div>

                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
