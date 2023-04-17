import { v4 as uuid } from "uuid"

let inventory = [
  {
    categories: ["new arrivals"],
    name: "Timber Gray Sofa 2.0",
    price: "1000",
    image: "/products/couch1.png",
    description:
      "Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.",
    brand: "Jason Bourne",
    currentInventory: 4,
  },
  {
    categories: ["printers", "computers"],
    name: "Carmel Brown Sofa",
    price: "1000",
    image: "/products/couch5.png",
    description:
      "Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.",
    brand: "Jason Bourne",
    currentInventory: 2,
  },
  {
    categories: ["new arrivals", "printers"],
    name: "Canon Pixma MG2540s",
    price: "14,800",
    image:
      "https://o.remove.bg/downloads/024b36bd-f550-428e-9029-5880276ec0b7/PIXMA_MG2540S_Default_tcm13-1435333-removebg-preview.png",
    description:
      "Using the optional high-capacity Canon XL ink cartridges, you can save as much as 30% on the cost per page compared to their standard equivalents. Get more pages per cartridge and go longer between cartridge replacements; the Canon PIXMA MG2540S won’t cost the earth to run.",
    brand: "Jason Bourne",
    currentInventory: 8,
  },
  {
    categories: ["new arrivals", "printers"],
    name: "Thetis Gray Love Seat",
    price: "900",
    image: "/products/couch7.png",
    description:
      "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.",
    brand: "Jason Bourne",
    currentInventory: 10,
  },
  {
    categories: ["on offer", "printers"],
    name: "Sven Tan Matte",
    price: "1200",
    image: "/products/couch8.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 7,
  },
  {
    categories: ["on offer", "printers"],
    name: "Otis Malt Sofa",
    price: "500",
    image: "/products/couch9.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["on offer", "printers"],
    name: "Ceni Brown 3 Seater",
    price: "650",
    image: "/products/couch10.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 9,
  },
  {
    categories: ["printers", "computers"],
    name: "Jameson Jack Lounger",
    price: "1230",
    image: "/products/couch11.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    brand: "Jason Bourne",
    currentInventory: 24,
  },

  {
    categories: ["printers"],
    name: "Galaxy Blue Sofa",
    price: "800",
    image: "/products/couch2.png",
    description:
      "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
    brand: "Jason Bourne",
    currentInventory: 43,
  },
  {
    categories: ["new arrivals", "printers"],
    name: "Markus Green Love Seat",
    price: "900",
    image: "/products/couch3.png",
    description:
      "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.",
    brand: "Jason Bourne",
    currentInventory: 2,
  },
  {
    categories: ["on offer", "printers"],
    name: "Dabit Matte Black",
    price: "1200",
    image: "/products/couch4.png",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    currentInventory: 14,
  },

  {
    categories: ["on offer", "accesories"],
    name: "Qwen Wireless Mouse Rechargeable Slient Mouse 2.4GHz",
    price: "599",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/702874/1.jpg?0621",
    description:
      "Generic Bluetooth 5.2/3.0 And 2.4G Three Modes Wireless RGB Mouse With USB Rechargeable For PC,Laptop,Macbook,Tablet, Mobile Phone",
    brand: "Jason Bourne",
    currentInventory: 12,
  },
  {
    categories: ["on offer", "accesories"],
    name: "XIAOMI Mi 4C Wireless Router 2.4GHz 300Mbps",
    price: "1,799",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/144423/1.jpg?8223",
    description:
      "1. Brand: Xiaomi 2. Router Connectivity Type: Ethernet, Wireless 3. Transmission Rate: 300Mbps 4. Speed of Ethernet Port: 10/100Mbps 5. Network Protocols: IEEE 802.11b/g/n,IEEE 802.3/3u6. Wireless Standard: Wireless AC 7. Wireless Security: WPA-PSK,WPA2-PSK 8. Processor: MT76228DA9. RAM: 64MB DDR210. WiFi Distance: 10m 11. LAN Ports: 2 ports 12. Max. LAN Data Rate: 300Mbps13. DC Port: 5.5 x 2.1 14. Gain dBi: 5dBi 15. Quantity of Antenna: 4 16. Working Voltage: 12V / 1A 17. Language: Chinese 18. Firewall Settings: Support19. Product weight: 0.4400 kg 20. Product size: 24.00 x 16.00 x 3.00 cm / 9.45 x 6.3 x 1.18 inches ",
    brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["on offer", "accesories"],
    name: "Generic Professional RJ45 RJ11 RJ12 LAN Network Crimping Tool, UTP LAN Cable Tester and Portable Cable Wire Stripper",
    price: "1,980",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/575332/1.jpg?0629",
    description:
      "Get this Networking tools package which comes with a professional Crimping tool, LAN Cable Tester and a Cable Stripper. Talk of killing three birds with one stone. This package is designed for IT gurus who are in need of the right tools at a reasonable price. This Professional tool crimps, strips and cuts cable for 8,6 and 4 position modular plugs. It is extremely easy to use and works with any ethernet or telephone cable (RJ45,RJ12 and RJ11). It is compact and designed with rubberized comfortable nonslip hand-grips. The mouth of the press-pliers is made of steel, which is hard and durable ensuring the device serves for quite a long time. Order your package today and meet your various network needs.",
    brand: "Jason Bourne",
    currentInventory: 33,
  },
  {
    categories: ["on offer", "accesories"],
    name: "Msi GEFORCE NVIDIA GT730 2GB GRAPHICS CARD - MSI",
    price: "8,000",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/052328/1.jpg?8248",
    description:
      "A great upgrade for your integrated graphics, the GeForce GT 730 accelerates the overall PC performance, including multimedia and gaming. The GeForce GT 730 packs powerful CUDA cores and abundant amounts of memory that deliver a performance punch in all the latest 3D games and applications. An array of NVIDIA innovations, such as GeForce Experience, NVIDIA Adaptive Vertical Sync and the NVIDIA FXAA Anti-aliasing Mode offers more than one way to elevate your gaming experience, bringing your user experience for work and play to a new level like never before. This MSI N730-4GD3V2 card features all solid capacitors that allows for into better power delivery, higher efficiency and greatly extended lifespan. For easy overclocking, the fully featured Afterburner overclocking utility puts you into the driver's seat to finely tweak the parameters to extract maximum graphics performance.",
    brand: "Jason Bourne",
    currentInventory: 23,
  },
  {
    categories: ["on offer", "accesories"],
    name: "HP 17A - CF217A LaserJet Toner Cartridge,Black",
    price: "2,500",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/177155/1.jpg?4146",
    description:
      "Continue to count on consistent quality with Original HP Toner cartridges with JetIntelligence. Produce sharp text, bold blacks, and crisp graphics with precision black toner. Original HP Imaging Cartridges with JetIntelligence help your HP printer consume less energy and create less waste. Help reduce your impact.³",
    brand: "Jason Bourne",
    currentInventory: 13,
  },
  {
    categories: ["on offer", "accesories"],
    name: "Generic TK-1120 Black Toner Cartridge",
    price: "1,499",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/459634/1.jpg?0043",
    description:
      "TK-1120 black toner cartridge Get this Toner Cartridge that produces high-quality everyday documents with crisp, black text while saving on printing costs. Take advantage of premium  quality for a lower cost. With TK-1120 will allow you print up to 2 times the pages for the same cost.• Get a great value for everyday business printing. HP cartridges help you print professional quality reports, letters and invoices with ease.",
    brand: "Jason Bourne",
    currentInventory: 15,
  },

  {
    categories: ["on offer", "accesories"],
    name: "Clarion Printer Refill Ink - Set Of 4 Epson Ink",
    price: "980",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/959233/1.jpg?6647",
    description:
      "Get these full set of four pack clarion inks for use in your Epson printer-Lseries,etc.The four colours include;Black,Cyan,Magenta and Yellow. These clarion inks are perfectly made to ensure that the Epson print heads last for as long as possible to ensure your continued smooth operations using your printer.Epson printers are the most commercially viable and economic printers, especially when you use these cost friendly economical inks that will give high quality prints and also ensure easy and clot free maintenance of your print head.They are conveniently put in 100ml bottles for each colour. This is enough ink to print over 1000 pages for each color type.Order for this products from Jumia Kenya and have them delivered right at your doorstep. ",
    brand: "Jason Bourne",
    currentInventory: 44,
  },
  {
    categories: ["on offer", "accesories"],
    name: "HP CARTRIDGE 650 BLACK",
    price: "1,999",
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/934631/1.jpg?9970",
    description:
      "hp 650 Ink Cartridge Print consistent, professional documents you can depend on, using Original cartridge with hp thermal Ink Jet technology . Avoid costly reprints and help ensure flawless performance and quality you expect.",
    brand: "Jason Bourne",
    currentInventory: 17,
  },
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
