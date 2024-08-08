import { JwtService } from "@nestjs/jwt";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";
import { getUserById } from "./dto/get-user-by-id.dto";

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
    return await this.userRepository.findOne({
      where: { email: email },
    });
  }
  async findAll() {
    const data = await this.userRepository.find();
    return data;
  }
}
