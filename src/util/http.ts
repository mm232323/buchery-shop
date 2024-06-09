import { cartProdsData, shopProdsData } from "./interfaces";
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
export async function fetchMeals() {
  const response = await fetch(`https://butchery-shop-api.onrender.commain/barbecue`);
  if (!response.ok) throw new Error("failed to fetch meals data");
  const resData: { name: string; price: string; imgUrl: string; id: number }[] =
    await response.json();
  return resData;
}
export async function fetchLocations() {
  const response = await fetch(`https://butchery-shop-api.onrender.commain/locations`);
  if (!response.ok) throw new Error("failed to fetch locations data");
  const resData: {
    name: string;
    phone: string;
    WK: string;
    address: string;
    imgUrl: string;
    id: number;
  }[] = await response.json();
  return resData;
}

export async function fetchShopProducts() {
  const response = await fetch(`https://butchery-shop-api.onrender.commain/shop`);
  if (!response.ok) throw new Error("failed to fetch shop products data");
  const resData: shopProdsData[] = await response.json();
  return resData;
}

export async function fetchCartData() {
  const response = await fetch(`https://butchery-shop-api.onrender.commain/shop/cart`);
  if (!response.ok) throw new Error("failed to fetch cart data");
  const resData: { totalProducts: number; products: cartProdsData[] } =
    await response.json();
  return resData;
}

export async function postCartData(cartProd: cartProdsData) {
  const response = await fetch(`https://butchery-shop-api.onrender.commain/shop/add-to-cart`, {
    method: "POST",
    body: JSON.stringify(cartProd),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("error occured when sending data");
  return response;
}

export async function updateQty(updatingProps:{cartItem:cartProdsData,Url:string}) {
  const response = await fetch(
    `https://butchery-shop-api.onrender.commain/shop/cart/${updatingProps.Url}-qty`,
    {
      method: "POST",
      body: JSON.stringify(updatingProps.cartItem),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok)
    throw new Error("an error occured when increase qty cart item");
  const n = await response.json();
  return n;
}