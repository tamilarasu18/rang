import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import { useRouter } from "next/router";

interface NavbarProps {
  isAdmin: boolean
}
const Navbar: React.FC<NavbarProps> = (props) => {
  const { isAdmin } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>();

  useEffect(() => {
    if (router.route != null && router.route != '/') {
      if (router.route.split('/')[1] == "category" || router.route.split('/')[1] == "product_details" ) {
        setSelectedTab("products")
      } else {
        setSelectedTab(router.route.split('/')[1]);
      }
    } else {
      setSelectedTab("home");
    }
  }, [router])

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const onSelectedTabClick = (value: string) => {
    if (value == "home") {
      routerFunction("home")
    } else if (value == "products") {
      routerFunction("products")
    } else if (value == "about") {
      routerFunction("about")
    }
    setSelectedTab(value)
  }

  const routerFunction = (value: string) => {
    if (value == "home") {
      router.push("/");
    } else if (value == "contact") {
      router.push("/contact");
    } else if (value == "products") {
      router.push("/products");
    } else if (value == "about") {
      router.push("/about");
    }
  }

  return (
    <div className="custom-container bg-transparent text-black py-4 shadow-md z-50">
      <div className=" flex justify-center items-center px-4 lg:p-0">
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
        <div className="flex-1 pl-4 md:p-0">
          <img src="assets/images/webp/rang_logo.webp" alt="" className="object-fill w-32 h-14" onClick={() => { routerFunction("home") }} />
        </div>
        {!isAdmin ? <div className="md:hidden montserrat-medium px-3 py-1 text-base rounded-md text-white bg-[#DE291B] border-b-2 border-transparent" onClick={() => { routerFunction("contact") }}>
          Contact us
        </div> : <></>}

        {!isAdmin ? <div className=" hidden md:flex gap-9 cursor-pointer text-lg items-center">
          <div className={`border-b-2  ${selectedTab == "home" ? "monsterrat-bold border-[#DE291B] opacity-100" : "montserrat-medium border-transparent opacity-60"} `} onClick={() => { onSelectedTabClick("home") }}>
            Home
          </div>
          <div className={`border-b-2 ${selectedTab == "about" ? "monsterrat-bold border-[#DE291B] opacity-100" : "montserrat-medium border-transparent opacity-60"}`} onClick={() => { onSelectedTabClick("about") }}>
            About us
          </div>
          <div className={`border-b-2 ${selectedTab == "products" ? "monsterrat-bold border-[#DE291B] opacity-100" : "montserrat-medium border-transparent opacity-60"}`} onClick={() => { onSelectedTabClick("products") }}>
            Products
          </div>
          <div className="montserrat-medium ml-4 px-8 py-1 rounded-md text-white bg-[#DE291B] border-b-2 border-transparent" onClick={() => { routerFunction("contact") }}>
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
            width: "80%",
          },
        }}
        className=""
      >
        <div className="cursor-pointer text-lg ">
          <div
            className="text-start py-4 px-6"
            onClick={() => {
              toggleNavbar();
            }}
          >
            <CloseIcon />
          </div>
          <hr />
          <div className="py-4 px-6 monsterrat-semibold text-sm hover:bg-[#FFEFF0]" onClick={() => { onSelectedTabClick("home") }}>
            Home
          </div>
          <hr />
          <div className="py-4 px-6 monsterrat-semibold text-sm hover:bg-[#FFEFF0]" onClick={() => { onSelectedTabClick("about") }}>
            About us
          </div>
          <hr />
          <div className="py-4 px-6 monsterrat-semibold text-sm hover:bg-[#FFEFF0]" onClick={() => { onSelectedTabClick("products") }}>
            Products
          </div>
          <hr />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
