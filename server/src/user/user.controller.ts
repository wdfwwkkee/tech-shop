import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Patch,
  Param,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ChangeUserName } from "./dto/change-username.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ChangePassword } from "./dto/change-password.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('change-password')
  changePassword(@Body() data : ChangePassword) {
    return this.userService.changePassword(data);
  }

  // @Post('/getById')
  // findOne(@Body() data: ) {
  //   return this.userService.findOne(1);
  // }


  @Patch(':id')
  updateUsername(@Param('id') id: string, @Body() changeUserNameDto: ChangeUserName) {
    return this.userService.updateUserName(+id, changeUserNameDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
