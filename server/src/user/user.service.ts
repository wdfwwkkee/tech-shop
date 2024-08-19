import { JwtService } from "@nestjs/jwt";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";
import { getUserById } from "./dto/get-user-by-id.dto";
import { ChangeUserName } from "./dto/change-username.dto";
import { ChangePassword } from "./dto/change-password.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async create(createData: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createData.email,
      },
    });
    if (existUser) throw new BadRequestException("This user already exist");
    const user = await this.userRepository.save({
      email: createData.email,
      password: await argon2.hash(createData.password),
    });

    const token = this.jwtService.sign({ email: createData.email });

    return { user, token };
  }

  async findOne(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    if (!user) throw new BadRequestException("Email or password are incorrect");
    return user;
  }
  async updateUserName(id: number, changeUserNameDto: ChangeUserName) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) throw new BadRequestException("Error");
    return await this.userRepository.update(id, changeUserNameDto);
  }
  async findAll() {
    const data = await this.userRepository.find();
    return data;
  }
  async changePassword(changePasswordDto: ChangePassword) {
    const user = await this.userRepository.findOne({
      where: { id: changePasswordDto.id },
    });
    const passwordMatch = await argon2.verify(
      user.password,
      changePasswordDto.currentPassword
    );

    if (!passwordMatch) throw new BadRequestException("Your current password is not match");

    const hashNewPassword = await argon2.hash(changePasswordDto.newPassword);
    return await this.userRepository.update(changePasswordDto.id, {
      password: hashNewPassword,
    });
  }
}
