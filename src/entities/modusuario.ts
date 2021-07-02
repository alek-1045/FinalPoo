import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import Modulos from "./modulo";
import Usuarios from "./usuarios";

@Entity('modusuarios')
export default class Modusuarios {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    iddousuario: number;

    @Column()
    iddomodelo: number;

    @ManyToOne(() => Modulos)
    @JoinColumn({name: 'iddomodelo'})
    modulos: Modulos;

    @ManyToOne(() => Usuarios)
    @JoinColumn({name: 'iddousuario'})
    usuarios: Usuarios;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}