import {
  Furniture1,
  Furniture2,
  Furniture3,
  Furniture4,
  Furniture5,
  Furniture6,
  Furniture7,
  Furniture8,
  IcLemari,
  IcMeja,
  IcMejaHias,
  IcRak,
  IcRanjang,
} from "../assets";

export interface Category {
  id: number;
  title: string;
  icon: string;
}

export interface Furniture {
  id: number;
  image: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  stock: number;
  sold_amount: number;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Lemari",
    icon: IcLemari,
  },
  {
    id: 2,
    title: "Meja",
    icon: IcMeja,
  },
  {
    id: 3,
    title: "Ranjang",
    icon: IcRanjang,
  },
  {
    id: 4,
    title: "Rak",
    icon: IcRak,
  },
  {
    id: 5,
    title: "Meja Hias",
    icon: IcMejaHias,
  },
];

export const furnitures: Furniture[] = [
  {
    id: 1,
    image: Furniture1,
    title: "Rak Buku MX4000 Brown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu cursus quis consequat sed in blandit. Sollicitudin arcu est sit ut mi. Gravida metus proin cursus tincidunt ultricies. Eu consectetur sit nulla fermentum pellentesque egestas.",
    category: {
      id: 4,
      title: "Rak",
      icon: IcRak,
    },
    price: 600000,
    stock: 10,
    sold_amount: 25,
  },
  {
    id: 2,
    image: Furniture2,
    title: "Lemari Pakaian MY5200 Brown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu cursus quis consequat sed in blandit. Sollicitudin arcu est sit ut mi. Gravida metus proin cursus tincidunt ultricies. Eu consectetur sit nulla fermentum pellentesque egestas.",
    category: {
      id: 1,
      title: "Lemari",
      icon: IcLemari,
    },
    price: 850000,
    stock: 5,
    sold_amount: 15,
  },
  {
    id: 3,
    image: Furniture3,
    title: "Meja Televisi MT3200 Brown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu cursus quis consequat sed in blandit. Sollicitudin arcu est sit ut mi. Gravida metus proin cursus tincidunt ultricies. Eu consectetur sit nulla fermentum pellentesque egestas.",
    category: {
      id: 2,
      title: "Meja",
      icon: IcMeja,
    },
    price: 950000,
    stock: 0,
    sold_amount: 12,
  },
  {
    id: 4,
    image: Furniture4,
    title: "Meja Ruang Tamu M8900 Brown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu cursus quis consequat sed in blandit. Sollicitudin arcu est sit ut mi. Gravida metus proin cursus tincidunt ultricies. Eu consectetur sit nulla fermentum pellentesque egestas.",
    category: {
      id: 2,
      title: "Meja",
      icon: IcMeja,
    },
    price: 550000,
    stock: 5,
    sold_amount: 20,
  },
  {
    id: 5,
    image: Furniture5,
    title: "Meja Kantor ME4100 White",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu cursus quis consequat sed in blandit. Sollicitudin arcu est sit ut mi. Gravida metus proin cursus tincidunt ultricies. Eu consectetur sit nulla fermentum pellentesque egestas.",
    category: {
      id: 2,
      title: "Meja",
      icon: IcMeja,
    },
    price: 1500000,
    stock: 8,
    sold_amount: 18,
  },
  {
    id: 6,
    image: Furniture6,
    title: "Meja Makan MK5600 Brown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu cursus quis consequat sed in blandit. Sollicitudin arcu est sit ut mi. Gravida metus proin cursus tincidunt ultricies. Eu consectetur sit nulla fermentum pellentesque egestas.",
    category: {
      id: 2,
      title: "Meja",
      icon: IcMeja,
    },
    price: 850000,
    stock: 6,
    sold_amount: 9,
  },
  {
    id: 7,
    image: Furniture7,
    title: "Ranjang RB2500 Elegant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu cursus quis consequat sed in blandit. Sollicitudin arcu est sit ut mi. Gravida metus proin cursus tincidunt ultricies. Eu consectetur sit nulla fermentum pellentesque egestas.",
    category: {
      id: 3,
      title: "Ranjang",
      icon: IcRanjang,
    },
    price: 2500000,
    stock: 16,
    sold_amount: 21,
  },
  {
    id: 8,
    image: Furniture8,
    title: "Ranjang RE7800 Minimalist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu cursus quis consequat sed in blandit. Sollicitudin arcu est sit ut mi. Gravida metus proin cursus tincidunt ultricies. Eu consectetur sit nulla fermentum pellentesque egestas.",
    category: {
      id: 3,
      title: "Ranjang",
      icon: IcRanjang,
    },
    price: 3000000,
    stock: 8,
    sold_amount: 18,
  },
];

export const getBestFurnitures = () => {
  const sortedFurnitures = furnitures.sort((a, b) => {
    return a.sold_amount - b.sold_amount;
  });

  const bestFurnitures = sortedFurnitures.slice(0, 4);

  return bestFurnitures;
};

export const getNewFurnitures = () => {
  if (furnitures.length <= 8) {
    return furnitures;
  } else {
    return furnitures.slice(0, 8);
  }
};

export const getFurnitureById = (id: string) => {
  return furnitures.find((f) => f.id === parseInt(id));
};
