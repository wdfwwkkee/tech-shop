import { IsOptional } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  id: number;

  @Column()
  email: string;


  @Column({ nullable: true })
  @IsOptional()
  username?: string | null; 

  @Column()
  password: string;
  
  @CreateDateColumn()
  createdAt: Date; 

  @UpdateDateColumn()
  updatedAt: Date;
}
