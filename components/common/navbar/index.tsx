import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Collapse, Drawer } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";

interface NavbarProps {
  isAdmin: boolean
}
const Navbar: React.FC<NavbarProps> = (props) => {
  const { isAdmin } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>("home");
  const [isOpenProducts, setIsOpenProducts] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const onSelectedTabClick = (value: string) => {
    if (value == "home") {
      routerFunction("home")
    }
    setSelectedTab(value)
  }

  const toggleProduct = () => {
    setIsOpenProducts(!isOpenProducts);
  };

  const routerFunction = (value: string) => {
    if (value == "home") {
      router.push("/");
    } else if (value == "contact") {
      router.push("/contact");
    }
  }

  console.log("selectedTab", selectedTab);


  return (
    <div className=" bg-transparent text-black py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-center items-center px-8 lg:p-0">
        {!isAdmin ? <div className="md:hidden">
          <div
            className=""
            onClick={() => {
              toggleNavbar();
            }}
          >
            <MenuIcon />
          </div>
        </div> : <></>}
        <div className="flex-1">
          <img src="assets/images/png/rang_logo.png" alt="" className="w-32" onClick={() => { routerFunction("home") }} />
        </div>
        {!isAdmin ? <div className="md:hidden montserrat-medium px-3 py-1 text-xs rounded-md text-white bg-[#DE291B] border-b-2 border-transparent" onClick={() => { routerFunction("contact") }}>
          Contact us
        </div> : <></>}

      {!isAdmin ?  <div className=" hidden md:flex gap-7 cursor-pointer text-lg items-center">
          <div className={`border-b-2  ${selectedTab == "home" ? "montserrat-bold border-[#DE291B] opacity-100" : "montserrat-medium border-transparent opacity-60"} `} onClick={() => { onSelectedTabClick("home") }}>
            Home
          </div>
          <div className={`border-b-2 ${selectedTab == "about" ? "montserrat-bold border-[#DE291B] opacity-100" : "montserrat-medium border-transparent opacity-60"}`} onClick={() => { onSelectedTabClick("about") }}>
            About us
          </div>
          <div className={`border-b-2 ${selectedTab == "products" ? "montserrat-bold border-[#DE291B] opacity-100" : "montserrat-medium border-transparent opacity-60"}`} onClick={() => { onSelectedTabClick("products") }}>
            Products
          </div>
          <div className={`border-b-2 ${selectedTab == "faq" ? "montserrat-bold border-[#DE291B] opacity-100" : "montserrat-medium border-transparent opacity-60"}`} onClick={() => { onSelectedTabClick("faq") }}>
            FAQ’s
          </div>
          <div className="montserrat-medium px-8 py-1 rounded-md text-white bg-[#DE291B] border-b-2 border-transparent" onClick={() => { routerFunction("contact") }}>
            Contact us
          </div>
        </div> :
        <div className="text-[#DE291B] monsterrat-semibold text-lg">
          Logout
        </div>}
      </div>

      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={toggleNavbar}
        PaperProps={{
          style: {
            height: "100%",
            width: "90%",
          },
        }}
        className=""
      >
        <div className="cursor-pointer text-lg ">
          <div
            className="text-start py-2 px-4"
            onClick={() => {
              toggleNavbar();
            }}
          >
            <CloseIcon />
          </div>
          <hr />
          <div className="py-2 px-4 montserrat-semiBold text-sm hover:bg-[#FFEFF0]">
            Home
          </div>
          <hr />
          <div className="py-2 px-4 montserrat-semiBold text-sm hover:bg-[#FFEFF0]">
            About us
          </div>
          <hr />
          <div className="py-2 px-4 montserrat-semiBold text-sm hover:bg-[#FFEFF0]" onClick={() => { toggleProduct() }}>
            <div className="flex">
              <div className="flex-1">Products</div>
              <div className="">
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
          {isOpenProducts ? <hr /> : <></>}
          <Collapse in={isOpenProducts}>
            <div className="px-4">
              <div className="py-2 montserrat-semiBold text-sm">
                {`Men’s Clothings`}
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                {`Woman’s Clothings`}
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                {`Kids’s Clothings`}
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                {`Corporate T-Shirts`}
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                {`School Uniforms`}
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                {`Sportswears`}
              </div>
              <hr />
            </div>
          </Collapse>
          <hr />
          <div className="py-2 px-4 montserrat-semiBold text-sm hover:bg-[#FFEFF0]">
            {`FAQ’s`}
          </div>
          <hr />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
