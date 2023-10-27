import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Collapse, Drawer } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = (props) => {
  const {} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProduct = () => {
    setIsOpenProducts(!isOpenProducts);
  };

  return (
    <div className=" bg-transparent text-black py-4">
      <div className="container mx-auto flex justify-center items-center px-8 md:p-0">
        <div className="md:hidden">
          <div
            className=""
            onClick={() => {
              toggleNavbar();
            }}
          >
            <MenuIcon />
          </div>
        </div>
        <div className="flex-1">
          <img src="assets/images/svg/rang_logo.svg" alt="" className="w-28" />
        </div>
        <div className="md:hidden montserrat-medium px-3 py-1 text-xs rounded-md text-white bg-[#DE291B] border-b-2 border-transparent">
          Contact us
        </div>

        <div className=" hidden md:flex gap-6 cursor-pointer text-base items-center">
          <div className="montserrat-medium opacity-60 hover:opacity-100 border-b-2 border-transparent hover:border-[#DE291B]">
            Home
          </div>
          <div className="montserrat-medium opacity-60 hover:opacity-100 border-b-2 border-transparent hover:border-[#DE291B]">
            About us
          </div>
          <div className="montserrat-medium opacity-60 hover:opacity-100 border-b-2 border-transparent hover:border-[#DE291B]">
            Products
          </div>
          <div className="montserrat-medium opacity-60 hover:opacity-100 border-b-2 border-transparent hover:border-[#DE291B]">
            FAQ’s
          </div>
          <div className="montserrat-medium px-6 py-1 rounded-md text-white bg-[#DE291B] border-b-2 border-transparent">
            Contact us
          </div>
        </div>
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
          <div className="py-2 px-4 montserrat-semiBold text-sm hover:bg-[#FFEFF0]" onClick={()=>{toggleProduct()}}>
            <div className="flex">
              <div className="flex-1">Products</div>
              <div className="">
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
          {isOpenProducts ? <hr /> :<></>}
          <Collapse in={isOpenProducts}>
            <div className="px-4">
              <div className="py-2 montserrat-semiBold text-sm">
                Men’s Clothings
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                Woman’s Clothings
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                Kids’s Clothings
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                Corporate T-Shirts
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                School Uniforms
              </div>
              <hr />
              <div className="py-2 montserrat-semiBold text-sm">
                Sportswears
              </div>
              <hr />
            </div>
          </Collapse>
          <hr />
          <div className="py-2 px-4 montserrat-semiBold text-sm hover:bg-[#FFEFF0]">
            FAQ’s
          </div>
          <hr />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
