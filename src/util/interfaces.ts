export interface mainData {
  title: string;
  desc: string;
  img: string;
  url: string;
  urlText: string;
  key?: string;
  id?: number;
}
export interface messageData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
export interface shopProdItemData {
  name: string;
  price: string;
  priceAfterDiscount: string;
  image: string;
  id:number
}
export interface shopProdsData {
  type: string;
  prods: shopProdItemData[];
  colors:string[];
  prodId:number;
  YPosition:number;
}

export interface cartProdsData {
  name:string;
  type:string;
  imgUrl:string;
  price:number;
  quantity:number;
}