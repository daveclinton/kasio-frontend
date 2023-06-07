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
        products: [
          {
            brand: "Hp",
            name: "Desktop",
            price: 11340,
            shop: "Leak Star Solution",
            image:
              "https://skygarden.azureedge.net/media/products/1312426-abd06f1f1f1748489b7464d46b0348d8.jpg",
          },
          {
            brand: "Dell",
            name: "Desktop",
            price: 10800,
            shop: "SkyTech",
            image:
              "https://skygarden.azureedge.net/media/products/1423823-a246c1e6bcf64cc39f107a6113465ffa.jpg",
          },
        ],
      },
      {
        name: "Monitors",
        link: "/computing/laptops",
        products: [
          {
            brand: "Hp",
            name: "HP M24f FHD IPS Monitor",
            price: 30490,
            shop: "Kasio",
            image: "https://www.saruk.co.ke/images/71341680079746.png",
          },
        ],
      },
      {
        name: "Laptops",
        link: "/computing/laptops",
        products: [
          {
            brand: "Hp",
            name: "HP OMEN Gaming Laptop PC 16-k0023dx",
            price: 179400,
            shop: "Kasio",
            image: "https://www.saruk.co.ke/images/30391685188328.png",
          },
        ],
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
        products: [
          {
            brand: "Xiaomi",
            name: "Xiaomi Mi Smart Router 4C",
            price: 2999,
            shop: "Kasio Digital Solution",
            image: "https://www.saruk.co.ke/images/81601685533808.jpg",
          },
        ],
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
    subcategories: [
      {
        name: "Printers",
        link: "/computing/desktop",
        products: [
          {
            brand: "Epson",
            name: "EPSON L850 PRINTER",
            price: 2999,
            shop: "N & G Printers",
            image:
              "https://mediaserver.goepson.com/ImConvServlet/imconv/683ff78cc789ba0617dc33ca76f403d511901ea5/original?use=productpictures&hybrisId=B2C&assetDescr=WorkForcePro_C4810_384x256",
          },
        ],
      },
    ],
  },
  {
    name: "Camera & Surveillance",
    icon: GiVideoCamera,
    link: "/networking",
    image: "https://www.saruk.co.ke/images/93831682365603.jpg",
    subcategories: [
      {
        name: "Printers",
        link: "/computing/desktop",
        products: [
          {
            brand: "Nikon",
            name: "Camera Mug",
            price: 4000,
            shop: "Clinton",
            image:
              "https://skygarden.azureedge.net/media/products/4f362811d40940348668fa888113bb29.jpg",
          },
        ],
      },
    ],
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
