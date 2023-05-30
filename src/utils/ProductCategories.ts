import { TbCloudComputing } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { BsPrinterFill, BsFillUsbDriveFill } from "react-icons/bs";
import { GiVideoCamera } from "react-icons/gi";
import { AiOutlinePoweroff } from "react-icons/ai";

export const categories = [
  {
    name: "Computing",
    icon: RiComputerLine,
    link: "/computing",
    image: "https://www.saruk.co.ke/images/91251684851291.jpg",
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
        image: "",
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
    image: "https://www.saruk.co.ke/images/34351651839915.jpg",
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
    image: "https://www.saruk.co.ke/images/99031679423545.png",
  },
  {
    name: "Camera & Surveillance",
    icon: GiVideoCamera,
    link: "/networking",
    image: "https://www.saruk.co.ke/images/93831682365603.jpg",
  },
  {
    name: "Storage",
    icon: BsFillUsbDriveFill,
    link: "/networking",
    image:
      "https://skygarden.azureedge.net/images-thumbnails/products/1364794-45b0d3f576a044f5bdc41129bcf05045.jpg",
  },
  {
    name: "Power",
    icon: AiOutlinePoweroff,
    link: "/networking",
    image:
      "https://skygarden.azureedge.net/media/products/1337024-5b3080aa016d45c392434514de7fd07d.jpg",
  },
];
