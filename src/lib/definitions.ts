/* typescript definitions */

export interface Item {
  id: number; // Auto unique ID (assuming it's a number)
  name: string;
  description: string;
  price: number; // Number or double for price
  size: number | string; // Assuming size is a number
  images: string[]; // Array of image filenames (assuming strings)
  storeId: number; // ID of the store (assuming it's a number)
  storeName: string; // Name of the store
  category: number; // ID of the category (assuming it's a number)
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
