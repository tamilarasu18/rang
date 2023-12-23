import { useEffect, useState } from "react";
import { baby_blankets, baby_gift_packs, body_suit, brandAcceriesProductList, brands, corporate, crop_top, customized_foam_bag, dtf, events, gym_wears, hoodies, hoodiesMens, joggersMens, jump_suit, kids, leggings, lycra_top, mensProductList, mittens, newbornProductList, parties, poloTees, poly_bag, printed_tag, rompers, roundNeckTees, school, shortsMens, sleep_suit, sportsWearProductList, sports_jersey, sweatshirts, tags, threeByFourMens, tights, trackPantsMens, tranfered_stricker, tshirts, uniform_flag, womensProductList } from "../../../model/product_category_model";
import CheckIcon from '@mui/icons-material/Check';
import ProductCard from "../../common/product_card";
import { useRouter } from "next/router";


interface ProductDetailsContentSectionProps { }
const ProductDetailsContentSection: React.FC<ProductDetailsContentSectionProps> = (props) => {
    const router = useRouter();
    const [selectedProducts, setSelectedProducts] = useState<Array<any>>([]);
    const [productList, setProductList] = useState<Array<any>>([]);
    const [selectedImage, setSelectedImage] = useState<any>();

    useEffect(() => {
        if (router.route != null && router.query.type != null) {
            if (router.query.type == "mens") {
                if (router.query.subType == "round_neck_tees") {
                    setSelectedProducts(roundNeckTees);
                    setSelectedImage(roundNeckTees[0])
                    setProductList(mensProductList.slice(1, 5));
                } else if (router.query.subType == "polo_tees") {
                    setSelectedProducts(poloTees);
                    setSelectedImage(poloTees[0])
                    setProductList([...mensProductList.slice(0, 1), ...mensProductList.slice(2, 5)]);
                } else if (router.query.subType == "sweatshirts") {
                    setSelectedProducts(sweatshirts);
                    setSelectedImage(sweatshirts[0])
                    setProductList([...mensProductList.slice(0, 2), ...mensProductList.slice(3, 5)]);
                } else if (router.query.subType == "hoodies") {
                    setSelectedProducts(hoodiesMens);
                    setSelectedImage(hoodiesMens[0])
                    setProductList([...mensProductList.slice(0, 3), ...mensProductList.slice(4, 5)]);
                } else if (router.query.subType == "track_pants") {
                    setSelectedProducts(trackPantsMens);
                    setSelectedImage(trackPantsMens[0])
                    setProductList(mensProductList.slice(0, 4));
                } else if (router.query.subType == "joggers") {
                    setSelectedProducts(joggersMens);
                    setSelectedImage(joggersMens[0])
                    setProductList(mensProductList.slice(0, 4));
                } else if (router.query.subType == "shorts") {
                    setSelectedProducts(shortsMens);
                    setSelectedImage(shortsMens[0])
                    setProductList(mensProductList.slice(0, 4));
                } else if (router.query.subType == "three_by_four") {
                    setSelectedProducts(threeByFourMens);
                    setSelectedImage(threeByFourMens[0])
                    setProductList(mensProductList.slice(0, 4));
                }
            } else if (router.query.type == "womens") {
                if (router.query.subType == "lycra_top") {
                    setSelectedProducts(lycra_top);
                    setSelectedImage(lycra_top[0])
                    setProductList(womensProductList.slice(1, 5));
                } else if (router.query.subType == "crop_top") {
                    setSelectedProducts(crop_top);
                    setSelectedImage(crop_top[0])
                    setProductList([...womensProductList.slice(0, 1), ...womensProductList.slice(2, 5)]);
                } else if (router.query.subType == "leggings") {
                    setSelectedProducts(leggings);
                    setSelectedImage(leggings[0])
                    setProductList([...womensProductList.slice(0, 2), ...womensProductList.slice(3, 5)]);
                } else if (router.query.subType == "hoodies") {
                    setSelectedProducts(hoodies);
                    setSelectedImage(hoodies[0])
                    setProductList([...womensProductList.slice(0, 3), ...womensProductList.slice(4, 5)]);
                } else if (router.query.subType == "tshirts") {
                    setSelectedProducts(tshirts);
                    setSelectedImage(tshirts[0])
                    setProductList(womensProductList.slice(0, 4));
                }
            } else if (router.query.type == "newborn") {
                if (router.query.subType == "rompers") {
                    setSelectedProducts(rompers);
                    setSelectedImage(rompers[0])
                    setProductList(newbornProductList.slice(1, 5));
                } else if (router.query.subType == "body_suit") {
                    setSelectedProducts(body_suit);
                    setSelectedImage(body_suit[0])
                    setProductList([...newbornProductList.slice(0, 1), ...newbornProductList.slice(2, 5)]);
                } else if (router.query.subType == "jump_suit") {
                    setSelectedProducts(jump_suit);
                    setSelectedImage(jump_suit[0])
                    setProductList([...newbornProductList.slice(0, 2), ...newbornProductList.slice(3, 5)]);
                } else if (router.query.subType == "sleep_suit") {
                    setSelectedProducts(sleep_suit);
                    setSelectedImage(sleep_suit[0])
                    setProductList([...newbornProductList.slice(0, 3), ...newbornProductList.slice(4, 5)]);
                } else if (router.query.subType == "mittens") {
                    setSelectedProducts(mittens);
                    setSelectedImage(mittens[0])
                    setProductList(newbornProductList.slice(0, 4));
                } else if (router.query.subType == "baby_blankets") {
                    setSelectedProducts(baby_blankets);
                    setSelectedImage(baby_blankets[0])
                    setProductList(newbornProductList.slice(0, 4));
                } else if (router.query.subType == "baby_gift_packs") {
                    setSelectedProducts(baby_gift_packs);
                    setSelectedImage(baby_gift_packs[0])
                    setProductList(newbornProductList.slice(0, 4));
                }
            } else if (router.query.type == "brand_accessories") {
                if (router.query.subType == "tags") {
                    setSelectedProducts(tags);
                    setSelectedImage(tags[0])
                    setProductList(brandAcceriesProductList.slice(1, 5));
                } else if (router.query.subType == "poly_bag") {
                    setSelectedProducts(poly_bag);
                    setSelectedImage(poly_bag[0])
                    setProductList([...brandAcceriesProductList.slice(0, 1), ...brandAcceriesProductList.slice(2, 5)]);
                } else if (router.query.subType == "printed_tag") {
                    setSelectedProducts(printed_tag);
                    setSelectedImage(printed_tag[0])
                    setProductList([...brandAcceriesProductList.slice(0, 2), ...brandAcceriesProductList.slice(3, 5)]);
                } else if (router.query.subType == "tranfered_stricker") {
                    setSelectedProducts(tranfered_stricker);
                    setSelectedImage(tranfered_stricker[0])
                    setProductList([...brandAcceriesProductList.slice(0, 3), ...brandAcceriesProductList.slice(4, 5)]);
                } else if (router.query.subType == "dtf") {
                    setSelectedProducts(dtf);
                    setSelectedImage(dtf[0])
                    setProductList(brandAcceriesProductList.slice(0, 4));
                } else if (router.query.subType == "customized_foam_bag") {
                    setSelectedProducts(customized_foam_bag);
                    setSelectedImage(customized_foam_bag[0])
                    setProductList(brandAcceriesProductList.slice(0, 4));
                } else if (router.query.subType == "uniform_flag") {
                    setSelectedProducts(uniform_flag);
                    setSelectedImage(uniform_flag[0])
                    setProductList(brandAcceriesProductList.slice(0, 4));
                } else if (router.query.subType == "brands") {
                    setSelectedProducts(brands);
                    setSelectedImage(brands[0])
                    setProductList(brandAcceriesProductList.slice(0, 4));
                }
            } else if (router.query.type == "sportswear") {
                if (router.query.subType == "sports_jersey") {
                    setSelectedProducts(sports_jersey);
                    setSelectedImage(sports_jersey[0])
                    setProductList(sportsWearProductList.slice(1, 5));
                } else if (router.query.subType == "gym_wears") {
                    setSelectedProducts(gym_wears);
                    setSelectedImage(gym_wears[0])
                    setProductList([...sportsWearProductList.slice(0, 1), ...sportsWearProductList.slice(2, 5)]);
                } else if (router.query.subType == "tights") {
                    setSelectedProducts(tights);
                    setSelectedImage(tights[0])
                    setProductList([...sportsWearProductList.slice(0, 2), ...sportsWearProductList.slice(3, 5)]);
                }
            } else if (router.query.type == "parties") {
                setSelectedProducts(parties);
                setSelectedImage(parties[0])
            } else if (router.query.type == "events") {
                setSelectedProducts(events);
                setSelectedImage(events[0])
            } else if (router.query.type == "corporate") {
                setSelectedProducts(corporate);
                setSelectedImage(corporate[0])
            } else if (router.query.type == "kids") {
                setSelectedProducts(kids);
                setSelectedImage(kids[0])
            }else if (router.query.type == "school") {
                setSelectedProducts(school);
                setSelectedImage(school[0])
            }
        }


    }, [router.query.subType])

    const onClickSelectedImage = (value: any) => {
        setSelectedImage(value);
    }

    return (
        <div className="my-12">
            <div className="custom-container">
                <div className="flex">
                    <div className="">
                        {selectedImage && selectedImage.src && <div className="flex">
                            <div className="">
                                {selectedProducts.map((each, index) => {
                                    return <div onClick={() => { onClickSelectedImage(each) }} key={index} className={`flex flex-row lg:flex-col w-20 h-24  mb-4 items-center justify-center rounded-md ${each.id == selectedImage.id ? "border-2 border-red-500" : ""}`}>
                                        <img className="object-fill w-full h-full" src={each.src} alt="" />
                                    </div>
                                })}
                            </div>
                            <img className="object-fill w-[80%] mx-10" src={selectedImage.src} alt="" />
                        </div>}
                    </div>

                    <div className="flex-1 text-black monsterrat-regular text-base">
                        <div className="monsterrat-bold text-3xl mb-2">Round-Neck Tees</div>
                        <div className="mb-1"><span className="monsterrat-semibold text-lg">Category:</span> Men’s clothings</div>
                        <div className="mb-6"><span className="monsterrat-semibold text-lg">Tags:</span> Printed, Embroidered, Printed</div>
                        <div className="mb-6">Embroidered, Printed, KSBNCkndszjb hvdvzdhvbkffg Jxdnvzkjvbndvn vkjzvnk kb n kn kn xxxv kjdxz vjzxv x Jmnzxcvjkzndkjvdnzkjnjk dk gkd jkgfgfhfgjhfgjnfhx nz nvbckjdznvjkdzbnv xflbnklfxmvlkjbnfxlkv bnlxfkb v jkxc kvbfjb lxfkjnblj LJgnSDKnfdnbfx blxdjknbvzc dd Vxkjvnkdxcbkxdnbjxfbnzdgvzdgbx hjhcbasbbbdcdc Dv zdvnbkjsdvnbsdkjbvkjdsbvsvdssdnnnjjccvddfdfg</div>
                        <div className="mb-2"><CheckIcon sx={{ marginRight: "12px" }} /> Custom GSM</div>
                        <div className="mb-2"><CheckIcon sx={{ marginRight: "12px" }} /> Custom fabric construction</div>
                        <div className="mb-4"><CheckIcon sx={{ marginRight: "12px" }} /> Custom embroidery design, size & pattern</div>
                        <div className="monsterrat-bold mb-4">Fabric Varieties:</div>
                        <ul className="ml-4 list-disc">
                            <li className="mb-2">{"100% Cotton"}</li>
                            <li className="mb-2">{"Poly Cotton (60/40)"}</li>
                            <li className="mb-2">{"Spun Poly"}</li>
                            <li className="mb-2">{"Viscose"}</li>
                            <li className="mb-2">{"Lycra Viscose"}</li>
                            <li className="mb-2">{"Lycra Cotton"}</li>
                            <li className="mb-2">{"Organic Cotton"}</li>
                            <li className="mb-2">{"Viscose"}</li>
                            <li className="mb-2">{"Special Treatment Process"}</li>
                            <li className="mb-2">{"Acrylic Fabric"}</li>
                            <li className="mb-2">{"Special Dyed Fabric"}</li>
                            <li className="mb-2">{"All Kind Of Printed Fabrics"}</li>
                        </ul>
                    </div>
                </div>

            </div>
            {productList && productList.length &&<div className="">
                <ProductCard title={"Related Products"} productList={productList} />
            </div>}
        </div>
    );
};

export default ProductDetailsContentSection;
