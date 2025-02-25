import Link from "next/link";
import { motion } from "framer-motion";
interface MenuItem {
  id: number;
  title: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Restaurant",
    path: "/restaurant",
  },
  {
    id: 3,
    title: "Resort",
    path: "/resort",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
];

const MenuList = () => {
  return (
    <nav>
      <ul className="flex gap-6">
        {menuItems &&
          menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="relative group px-6 py-3"
            >
              <span className="relative z-10 text-white text-lg font-medium transition-colors duration-300 group-hover:text-blue-400">
                {item.title}
              </span>

              {/* Hover Effect Background */}
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="navbar-hover"
              />
            </Link>
          ))}
      </ul>
    </nav>
  );
};

export default MenuList;
