import { Catalog } from "src/catalog/entities/catalog.entity";
import { User } from "src/user/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn({ name: "cart_id" })
  id: number;

  @Column()
  name: string;
  @OneToOne(() => User, (user) => user.cart)
  user: User;

  @Column({ type: 'jsonb', default: [] })
  catalogIds: number[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToMany(() => Catalog, (catalog) => catalog.carts)
  @JoinTable({
    name: "cart_catalog", // Имя промежуточной таблицы
    joinColumn: { name: "cart_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "catalog_id", referencedColumnName: "id" },
  })
  catalogs: Catalog[];
}
