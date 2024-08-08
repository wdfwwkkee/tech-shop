import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  // @Post('/getById')
  // findOne(@Body() data: ) {
  //   return this.userService.findOne(1);
  // }

  
  
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
