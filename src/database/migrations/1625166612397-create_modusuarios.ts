import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createModusuarios1625166612397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'modusuarios',
            columns: [
                {
                    name: 'id',
                    type:'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: 'iddousuario',
                    type: 'integer',
                },
                {
                    name: 'iddomodelo',
                    type: 'integer',
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
            ],
            foreignKeys: [
                {
                    name: 'idusuario',
                    columnNames: ['iddousuario'],
                    referencedTableName: 'usuarios',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                {
                    name: 'idmodelo',
                    columnNames: ['iddomodelo'],
                    referencedTableName: 'modulos',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ],

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('modusuarios')
    }

}
