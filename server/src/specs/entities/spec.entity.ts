import { Catalog } from "src/catalog/entities/catalog.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Spec {
  @PrimaryGeneratedColumn({ name: "spec_id" })
  id: number;

  @Column()
  title: string;

  @Column()
  value: string;
    
  @ManyToOne(() => Catalog, (catalog) => catalog.specs)
  @JoinColumn({name : 'catalog_id'})
  catalog:Catalog;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
