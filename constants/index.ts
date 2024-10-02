export const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Kadın Giyim",
    href: "/kategoriler/kadin-giyim",
    description:
      "Şık ve rahat kadın giyim ürünleri, her tarza uygun seçenekler.",
  },
  {
    title: "Erkek Giyim",
    href: "/kategoriler/erkek-giyim",
    description:
      "Modern ve klasik erkek giyim parçaları, günlük ve özel günler için.",
  },
  {
    title: "Aksesuarlar",
    href: "/kategoriler/aksesuarlar",
    description:
      "Kıyafetlerinizi tamamlayacak şapka, çanta, gözlük gibi şık aksesuarlar.",
  },
  {
    title: "Ayakkabılar",
    href: "/kategoriler/ayakkabilar",
    description: "Her mevsim için uygun ve şık ayakkabı modelleri.",
  },
  {
    title: "Çocuk Giyim",
    href: "/kategoriler/cocuk-giyim",
    description:
      "Rahat ve eğlenceli çocuk giyim ürünleri, minikler için en sevimli seçenekler.",
  },
  {
    title: "İç Giyim",
    href: "/kategoriler/ic-giyim",
    description:
      "Konforlu ve şık iç giyim ürünleri, her gün rahat hissetmek için.",
  },
]

export interface SSsType{
  id:string,
  title:string,
  description:string,

}

export const sssList: SSsType[] =[

    {
    id: "item-1",
    title: "Title 1 sss",
    description:
      "Şık ve rahat kadın giyim ürünleri, her tarza uygun seçenekler.",
  },
  {
    id: "item-2",
    title: "Title 2 sss",
    description:
      "Şık ve rahat kadın giyim ürünleri, her tarza uygun seçenekler.",
  },
  {
    id: "item-3",
    title: "Title 3 sss",
    description:
      "Şık ve rahat kadın giyim ürünleri, her tarza uygun seçenekler.",
  },
]

export interface CarouselType {
  
  id:number,
  image:string,
}

export const CarouselList:CarouselType[]=[

  {
    id:1,
    image:"/slider/5.jpg"
  },
  {
    id:2,
    image:"/slider/6.jpg"
  },
  {
    id:3,
    image:"/slider/7.jpg"
  }
 
]

export interface ProductType{
  id:number,
  title:string,
  price:number,
  mrp:number,
  description:string,
  image:string,
}

export const products: ProductType[] = [
  {
    id: 1,
    title: "Product One",
    price: 100,
    mrp: 120,
    description: "Description for product one",
    image: "/products/1.jpg",
  },
  {
    id: 2,
    title: "Product Two",
    price: 150,
    mrp: 180,
    description: "Description for product two",
    image: "/products/2.jpg",
  },
  {
    id: 3,
    title: "Product Three",
    price: 200,
    mrp: 230,
    description: "Description for product three",
    image: "/products/3.jpg",
  },
  {
    id: 4,
    title: "Product Four",
    price: 250,
    mrp: 280,
    description: "Description for product four",
    image: "/products/4.jpg",
  },
  {
    id: 5,
    title: "Product Five",
    price: 300,
    mrp: 350,
    description: "Description for product five",
    image: "/products/5.jpg",
  },
  {
    id: 6,
    title: "Product Six",
    price: 350,
    mrp: 400,
    description: "Description for product six",
    image: "/products/6.jpg",
  },
  {
    id: 7,
    title: "Product Seven",
    price: 400,
    mrp: 450,
    description: "Description for product seven",
    image: "/products/7.jpg",
  },
  {
    id: 8,
    title: "Product Eight",
    price: 450,
    mrp: 500,
    description: "Description for product eight",
    image: "/products/8.jpg",
  },
  {
    id: 9,
    title: "Product Nine",
    price: 500,
    mrp: 550,
    description: "Description for product nine",
    image: "/products/9.jpg",
  },
  {
    id: 10,
    title: "Product Ten",
    price: 550,
    mrp: 600,
    description: "Description for product ten",
    image: "/products/10.jpg",
  },
  {
    id: 11,
    title: "Product Eleven",
    price: 600,
    mrp: 650,
    description: "Description for product eleven",
    image: "/products/11.jpg",
  },
];
