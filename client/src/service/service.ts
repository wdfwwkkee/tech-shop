import axios from "axios";
import { Category } from "../types/Category";
import { firstLetterToUppercase } from "../utils/firstLetterToUppercase";

export const AppService = {

  async getAllItems() {
    const data = await axios.get("http://localhost:3002/api/catalog");
    return data.data;
  },

  async getItemById(id: string) {
    const data = await axios.get(`http://localhost:3002/api/catalog/${id}`);
    return data.data;
  },
  async getItemsByCategory(category?: string) {
    const data = await axios.post("http://localhost:3002/api/catalog/tag", {
      tag: firstLetterToUppercase(category),
    });

    return data.data;
  },
  async getCategory() {
    const data = await axios.get("http://localhost:3002/api/category");
    const category: Category[] = Object.values<Category>(data.data).map(
      (item) => ({
        img: item.img,
        name: item.name,
      })
    );
    return category;
  },
  async getSpecs(category?: string) {
    const resp = await axios.post("http://localhost:3002/api/catalog/getSpec", {
      category: category,
    });
    return resp.data;
  },
  async getCategoryOnlyNames() {
    const data = await axios.get("http://localhost:3002/api/catalog/get-category");
    const category = Object.values<Category>(data.data).map(
      (item) => item.name
    );
    return category;
  },
  async changeUsername(id : number, username : string) {
    const responce = await axios.patch(`http://localhost:3002/api/user/${+id}`, {username : username})
    return responce;
  }
};
