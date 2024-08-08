import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("category")
  getProfile() {
    const category = {
      Iphone: {
        name: "iphone",
        img: "iphone.png",
        specs: [
          {
            title: "Встроенная память",
            spec: ["512 ГБ", "128 ГБ", "256 ГБ", "64 ГБ", "32 ГБ"],
          },
          {
            title: "Оперативная память",
            spec: ["1 ГБ", "1.5 ГБ", "2 ГБ"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
          {
            title: "Количество ядер",
            spec: ["4", "6", "8"],
          },
        ],
      },
      Headphones: {
        name: "headphones",
        img: "airpods.png",
        specs: [
          {
            title: "Цвет",
            spec: ["Black", "White"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
        ],
      },
      Laptop: {
        name: "laptop",
        img: "macbook.png",
        specs: [
          {
            title: "Встроенная память",
            spec: ["512 ГБ", "128 ГБ", "256 ГБ", "64 ГБ", "32 ГБ"],
          },
          {
            title: "Оперативная память",
            spec: ["1 ГБ", "1.5 ГБ", "2 ГБ"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
          {
            title: "Количество ядер",
            spec: ["4", "6", "8"],
          },
        ],
      },
      TV: {
        name: "tv",
        img: "tv.png",
        specs: [
          {
            title: "Цвет",
            spec: ["Black", "White"],
          },
          {
            title: "Бренд",
            spec: ["Apple", "Honor", "Samsung"],
          },
        ],
      },
    };
    return category;
  }
}
