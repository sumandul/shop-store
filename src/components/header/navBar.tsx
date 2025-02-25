import { Button, useDisclosure } from "@heroui/react";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import ModalPopUP from "../common/sidebar/modal/page";
import LoginButton from "../LoginButton/page";

export default function Navbar() {
  // Image animation variants

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <ModalPopUP isOpen={isOpen} onOpenChange={onOpenChange}>
        <LoginButton />
        {/* <Image src="/cover.jpg" /> */}
      </ModalPopUP>
      <div className="  container mx-auto">
        <nav className="flex items-center justify-between px-6 py-4 bg-white ">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center gap-2">
            <Image src={"/logo.png"} width={150} height={150} alt="logo" />
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-red-500 rounded-full px-4 py-2 w-96">
            <input
              type="text"
              placeholder='Try "Nike Air Jordan"'
              className="w-full outline-none"
            />
            <Search className="text-red-500" size={20} />
          </div>

          {/* Icons and Profile */}
          <div className="flex items-center gap-6">
            {/* Cart Icon */}
            <div className="relative cursor-pointer">
              <ShoppingCart size={24} className="text-black" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                2
              </span>
            </div>
            {/* User Profile */}
            <Button className="max-w-fit bg-red-100" onPress={onOpen}>
              <UserRound className=" text-red-500" /> SignIn
            </Button>
            {/* <div className="flex items-center gap-2 cursor-pointer">
           <img src="/cover.jpg" alt="User" className="w-8 h-8 rounded-full" />
         </div> */}
          </div>
        </nav>
      </div>
    </>
  );
}
