import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('modulos')
export default class  Modulos {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nomedomodulo: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}