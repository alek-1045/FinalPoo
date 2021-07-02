import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('usuarios')

export default class  Usuarios {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    filial: string;

    @Column()
    login: string;

    @Column()
    nomedousuario: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}