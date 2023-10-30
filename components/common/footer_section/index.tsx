import { Collapse } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import { useState } from "react";

interface FooterSectionProps {
}
const FooterSection: React.FC<FooterSectionProps> = (props) => {
    const [address, setAddress] = useState<boolean>(false)
    const [product, setProduct] = useState<boolean>(false)
    const [otherproduct, setOtherProduct] = useState<boolean>(false)

    const toggleFunction = (value: string) => {
        if (value == "address") {
            setAddress(!address)
        } else if (value == "product") {
            setProduct(!product)
        } else if (value == "otherProduct") {
            setOtherProduct(!otherproduct)
        }
    }

    return (
        <div className="bg-black text-white px-4 lg:p-0">
            <div className="container mx-auto pt-8">
                <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-4 pb-8">
                    <div className="">
                        <div className="flex justify-between items-start" onClick={() => { toggleFunction("address") }}>
                            <div className="monsterrat-semibold pb-4 text-lg md:text-2xl" >Address</div>
                            <div className="md:hidden">
                                {
                                    address ? <KeyboardControlKeyIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />
                                }
                            </div>
                        </div>
                        <Collapse in={address}>
                            <div className="monsterrat-regular text-base">Rang Clothing Company, 34/20, 5Th Crosss Street, Collage Road, Odakkadu, Tiruppur, Tamil Nadu - 641601.</div>
                        </Collapse>
                        <div className="hidden md:block">
                            <div className="monsterrat-regular text-base">Rang Clothing Company, 34/20, 5Th Crosss Street, Collage Road, Odakkadu, Tiruppur, Tamil Nadu - 641601.</div>
                        </div>

                    </div>
                    <div className="monsterrat-regular">
                        <div className="flex justify-between items-start" onClick={() => { toggleFunction("product") }}>
                            <div className="monsterrat-semibold pb-4 text-lg md:text-2xl">Special Products</div>
                            <div className="md:hidden">
                                {
                                    product ? <KeyboardControlKeyIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />
                                }
                            </div>
                        </div>
                        <Collapse in={product}>
                            <div className="pb-4 text-base">Corporate T-Shirts</div>
                            <div className="pb-4 text-base">School Uniforms</div>
                            <div className="pb-4 text-base">Sportswear</div>
                            <div className="pb-4 text-base">Security Uniforms</div>
                            <div className="pb-4 text-base">Housekeeping Uniforms</div>
                        </Collapse>
                        <div className="hidden md:block">
                            <div className="pb-4 text-base">Corporate T-Shirts</div>
                            <div className="pb-4 text-base">School Uniforms</div>
                            <div className="pb-4 text-base">Sportswear</div>
                            <div className="pb-4 text-base">Security Uniforms</div>
                            <div className="pb-4 text-base">Housekeeping Uniforms</div>
                        </div>
                    </div>
                    <div className="monsterrat-regular">
                        <div className="flex justify-between items-start" onClick={() => { toggleFunction("otherProduct") }}>
                            <div className="monsterrat-semibold pb-4 text-lg md:text-2xl">Other Products</div>
                            <div className="md:hidden">
                                {
                                    otherproduct ? <KeyboardControlKeyIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />
                                }
                            </div>
                        </div>
                        <Collapse in={otherproduct}>
                            <div className="pb-4 text-base">Corporate Uniforms</div>
                            <div className="pb-4 text-base">Supermarket Uniforms</div>
                            <div className="pb-4 text-base">Hotel Uniforms</div>
                            <div className="pb-4 text-base">Men’s And Women’s Clothings</div>
                            <div className="pb-4 text-base">Kids Clothings</div>
                        </Collapse>
                        <div className="hidden md:block">
                            <div className="pb-4 text-base">Corporate Uniforms</div>
                            <div className="pb-4 text-base">Supermarket Uniforms</div>
                            <div className="pb-4 text-base">Hotel Uniforms</div>
                            <div className="pb-4 text-base">Men’s And Women’s Clothings</div>
                            <div className="pb-4 text-base">Kids Clothings</div>
                        </div>
                    </div>
                    <div className="monsterrat-regular">
                        <div className="monsterrat-semibold pb-4 text-sm md:text-2xl text-center lg:text-start">Social Media</div>
                        <div className="flex gap-4 justify-center items-center lg:justify-start lg:items-start">
                            <img src="assets/images/svg/facebook.svg" alt="" />
                            <img src="assets/images/svg/twitter.svg" alt="" />
                            <img src="assets/images/svg/insta.svg" alt="" />
                            <img src="assets/images/svg/youtube.svg" alt="" />
                            <img src="assets/images/svg/linkedin.svg" alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="md:flex py-8 text-center justify-center items-center">
                    <img src="assets/images/svg/footer_logo.svg" alt="" className="w-54 pr-12 mx-auto mb-4 md:m-0" />
                    <div className="monsterrat-regular text-xs w-full text-center flex ">
                        <p className="mr-1">&copy;</p>
                        2023 - 2025 Rang Clothing Company. All Rights Reserved. By Kavuthamraj Designs
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
