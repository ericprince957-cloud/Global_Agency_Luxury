export interface Property {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
  location: string;
  state: string;
  type: 'Luxury Residential' | 'Commercial' | 'Industrial';
  status: 'For Sale' | 'For Rent' | 'Sold';
  beds: number;
  baths: number;
  sqft: number;
  parking: number;
  image: string;
  exclusive: boolean;
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "5-Bed Luxury Duplex in GRA Umuahia",
    price: 120000000,
    priceFormatted: "₦120,000,000",
    location: "GRA, Umuahia",
    state: "Abia",
    type: "Luxury Residential",
    status: "For Sale",
    beds: 5,
    baths: 6,
    sqft: 4500,
    parking: 3,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    exclusive: true,
    description: "Exquisite 5-bedroom fully detached duplex with BQ, swimming pool, and smart home features in the prestigious GRA area."
  },
  {
    id: 2,
    title: "4-Bed Terrace with Pool in Owerri",
    price: 85000000,
    priceFormatted: "₦85,000,000",
    location: "New Owerri, Imo",
    state: "Imo",
    type: "Luxury Residential",
    status: "For Sale",
    beds: 4,
    baths: 5,
    sqft: 3800,
    parking: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    exclusive: true,
    description: "Modern terrace duplex with private pool, contemporary design, and premium finishes in New Owerri."
  },
  {
    id: 3,
    title: "Commercial Plaza - Aba Central",
    price: 250000000,
    priceFormatted: "₦250,000,000",
    location: "Aba Central",
    state: "Abia",
    type: "Commercial",
    status: "For Sale",
    beds: 0,
    baths: 8,
    sqft: 12000,
    parking: 50,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    exclusive: true,
    description: "Prime 4-storey commercial plaza in the heart of Aba with high foot traffic and excellent rental yield."
  },
  {
    id: 4,
    title: "3-Bed Penthouse with City View",
    price: 65000000,
    priceFormatted: "₦65,000,000",
    location: "Aba, Abia",
    state: "Abia",
    type: "Luxury Residential",
    status: "For Sale",
    beds: 3,
    baths: 3,
    sqft: 2200,
    parking: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    exclusive: false,
    description: "Stunning penthouse apartment with panoramic city views, rooftop terrace, and luxury amenities."
  },
  {
    id: 5,
    title: "2 Hectares Industrial Land",
    price: 180000000,
    priceFormatted: "₦180,000,000",
    location: "Aba-Port Expressway",
    state: "Abia",
    type: "Industrial",
    status: "For Sale",
    beds: 0,
    baths: 0,
    sqft: 87120,
    parking: 0,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    exclusive: true,
    description: "Prime industrial land with C of O along the Aba-Port Expressway. Perfect for manufacturing or warehousing."
  },
  {
    id: 6,
    title: "6-Bed Mansion with Guest House",
    price: 350000000,
    priceFormatted: "₦350,000,000",
    location: "Eziobodo, Owerri",
    state: "Imo",
    type: "Luxury Residential",
    status: "For Sale",
    beds: 6,
    baths: 7,
    sqft: 7200,
    parking: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    exclusive: true,
    description: "Magnificent 6-bedroom mansion with separate guest house, infinity pool, home cinema, and landscaped gardens."
  },
  {
    id: 7,
    title: "Office Complex - 12 Units",
    price: 200000000,
    priceFormatted: "₦200,000,000",
    location: "Umuahia Central",
    state: "Abia",
    type: "Commercial",
    status: "For Rent",
    beds: 0,
    baths: 12,
    sqft: 8500,
    parking: 20,
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80",
    exclusive: false,
    description: "Modern 12-unit office complex with elevator, 24/7 power, and secure parking. Ideal for corporate tenants."
  },
  {
    id: 8,
    title: "4-Bed Bungalow with Garden",
    price: 55000000,
    priceFormatted: "₦55,000,000",
    location: "Umuahia South",
    state: "Abia",
    type: "Luxury Residential",
    status: "For Sale",
    beds: 4,
    baths: 4,
    sqft: 3000,
    parking: 2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    exclusive: false,
    description: "Beautiful 4-bedroom bungalow with spacious garden, modern kitchen, and serene neighborhood."
  },
  {
    id: 9,
    title: "Warehouse & Factory Space",
    price: 450000000,
    priceFormatted: "₦450,000,000",
    location: "Aba Industrial Layout",
    state: "Abia",
    type: "Industrial",
    status: "For Sale",
    beds: 0,
    baths: 4,
    sqft: 150000,
    parking: 30,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    exclusive: true,
    description: "Expansive warehouse and factory space with loading docks, office block, and staff quarters in prime industrial zone."
  }
];
