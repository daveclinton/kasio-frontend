import { TbCloudComputing } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { BsPrinterFill, BsFillUsbDriveFill } from "react-icons/bs";
import { GiVideoCamera } from "react-icons/gi";
import { RiFridgeFill } from "react-icons/ri";
import { GoTelescope } from "react-icons/go";
import { AiOutlinePoweroff } from "react-icons/ai";

export const categories = [
  {
    name: "Computing",
    icon: RiComputerLine,
    link: "/computing",
    subcategories: [
      {
        name: "Desktops",
        link: "/computing/desktop",
      },
      {
        name: "Monitors",
        link: "/computing/laptops",
      },
      {
        name: "Laptops",
        link: "/computing/laptops",
      },
      {
        name: "Servers",
        link: "/computing/laptops",
      },
      {
        name: "Computer Accesories",
        link: "/computing/laptops",
      },
      {
        name: "Point of Scale",
        link: "/computing/laptops",
      },
      {
        name: "Software",
        link: "/computing/laptops",
      },
      {
        name: "Projectors",
        link: "/computing/laptops",
      },
      {
        name: "Projector Screens",
        link: "/computing/laptops",
      },
      {
        name: "Laptop Batteries",
        link: "/computing/laptops",
      },
      {
        name: "Laptop Charger / Adapter",
        link: "/computing/laptops",
      },
    ],
  },
  {
    name: "Networking",
    icon: TbCloudComputing,
    link: "/networking",
    subcategories: [
      {
        name: "Routers",
        link: "/computing/desktop",
      },
      {
        name: "Switches",
        link: "/computing/desktop",
      },
      {
        name: "Access Points",
        link: "/computing/desktop",
      },
      {
        name: "Repeaters",
        link: "/computing/desktop",
      },
      {
        name: "Rack Cabinets",
        link: "/computing/desktop",
      },
      {
        name: "Networking Accesories",
        link: "/computing/desktop",
      },
      {
        name: "Networking Peripherals",
        link: "/computing/desktop",
      },
    ],
  },
  {
    name: "Printers & Office",
    icon: BsPrinterFill,
    link: "/networking",
  },
  {
    name: "Camera & Surveillance",
    icon: GiVideoCamera,
    link: "/networking",
  },
  {
    name: "Home Appliances",
    icon: RiFridgeFill,
    link: "/networking",
  },
  {
    name: "Storage",
    icon: BsFillUsbDriveFill,
    link: "/networking",
  },
  {
    name: "Power",
    icon: AiOutlinePoweroff,
    link: "/networking",
  },
  {
    name: "Telecom",
    icon: GoTelescope,
    link: "/networking",
  },
];
