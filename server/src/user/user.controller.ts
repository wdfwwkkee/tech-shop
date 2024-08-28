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
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ChangeUserName } from "./dto/change-username.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ChangePassword } from "./dto/change-password.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import * as multer from "multer";
import * as path from "path";
import { existsSync, mkdirSync } from "fs";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("change-password")
  changePassword(@Body() data: ChangePassword) {
    return this.userService.changePassword(data);
  }

  @Patch(":id")
  updateUsername(
    @Param("id") id: string,
    @Body() changeUserNameDto: ChangeUserName
  ) {
    return this.userService.updateUserName(+id, changeUserNameDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(":id/uploadAvatar")
  @UseInterceptors(
    FileInterceptor("avatar", {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = path.resolve(
            __dirname,
            "..",
            "..",
            "..",
            "client",
            "public",
            "avatars"
          );
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    })
  )
  async uploadAvatar(
    @Param("id") id: number,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!file) {
      throw new BadRequestException("No file uploaded");
    }
    return this.userService.uploadAvatar(+id, file);
  }
}
