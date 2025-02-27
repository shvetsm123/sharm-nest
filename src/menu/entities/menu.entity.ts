import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn, DeleteDateColumn,
    Entity, Generated,
    JoinColumn,
    ManyToOne,
    OneToMany, OneToOne,
    PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent,
    UpdateDateColumn
} from "typeorm";
import {Category} from "../../categories/entities/category.entity";

@Entity()
@Tree("nested-set")
export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @Column({unique: true})
    name: string;

    @Column({unique: true})
    url: string;

    @Column()
    icons: string;

    @TreeChildren()
    children: Menu[];

    @TreeParent()
    parent: Menu

    @OneToOne(() => Category, category => category.menu)
    @JoinColumn()
    category: Category;

}
