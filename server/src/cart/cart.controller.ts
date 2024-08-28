import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.cartService.findAll(req.user);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartService.remove(+id);
  }
}
