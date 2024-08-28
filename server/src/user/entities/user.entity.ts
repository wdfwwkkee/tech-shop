import { IsOptional } from "class-validator";
import { Cart } from "src/cart/entities/cart.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
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

  @Column({ nullable: true })
  @IsOptional()
  avatar?: string | null;

  
  @Column({ nullable: true })
  @IsOptional()
  prevAvatar?: string | null;

  @OneToOne(() => Cart, (cart) => cart.user, {
    cascade : true
  })
  @JoinColumn({ name: "cart_id" })
  cart: Cart;
  
  @CreateDateColumn()
  createdAt: Date; 

  @UpdateDateColumn()
  updatedAt: Date;
}
