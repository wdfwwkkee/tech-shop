import { Spec } from "src/specs/entities/spec.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn({ name: "item_id" })
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column()
  tag: string;

  @Column()
  price: number;
  
  
  @OneToMany(() => Spec, (spec) => spec.catalog, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "spec_id" })
  specs: Spec[];


  @Column()
  availability: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
