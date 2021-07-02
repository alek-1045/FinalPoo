import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsuarios1625088826584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'usuarios',
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
                    name: 'filial',
                    type: 'varchar',
                },

                {
                    name: 'login',
                    type: 'varchar',
                },
                {
                    name: 'nomedousuario',
                    type: 'varchar',
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
