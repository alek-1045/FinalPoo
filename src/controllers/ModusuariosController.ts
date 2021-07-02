import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import Modulos from '../entities/modulo';
import Modusuarios from '../entities/modusuario';
import Usuarios from '../entities/usuarios';
import modusuarioServi from '../service/modusuarioServi';

export default {

    async index (request: Request, response: Response) {
        const modusuariosRepository = getRepository(Modusuarios);

        const modusuarios = await modusuariosRepository.find();

        return response.json(modusuarios)
    },

    async show (request: Request, response: Response) {
        const { id } = request.params;

        const modusuariosRepository = getRepository(Modusuarios);

        const modusuarios = await modusuariosRepository.findOne(id);
        
        const usuariosRepository = getRepository(Usuarios)

        const usuario = await usuariosRepository.findOne(modusuarios?.iddousuario)

        const modulosRepository = getRepository(Modulos)

        const modulo = await modulosRepository.findOne(modusuarios?.iddomodelo)

        const data = {
            modusuarios: modusuarios?.id,
            id_usuario: modusuarios?.iddousuario,
            id_modulo: modusuarios?.iddomodelo,
            nome_usuario: usuario?.nomedousuario,
            login: usuario?.login,
            filial: usuario?.filial,
            nome_modulo: modulo?.nomedomodulo,
        }

        return response.json(data)
    },

    async update(request: Request, response: Response) {
        const { id } = request.params;

        const { iddousuario, iddomodelo } = request.body;

        const modusuariosRepository = getRepository(Modusuarios);

        const modusuarios = await modusuariosRepository.findOne(id);

        if (!modusuarios) {
            throw new Error('o ID não existe');
        }

        await modusuariosRepository.update(id, {
            iddousuario,
            iddomodelo
        });
        return response.json({ mensagem: 'atualizado' });
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const modusuariosRepository = getRepository(Modusuarios);

        const modusuarios = await modusuariosRepository.findOne(id)

        if (!modusuarios) {
            return response.json({ mensagem: 'o ID não foi encontrado' });
        }
        else{
            await modusuariosRepository.delete(id);

            return response.json({ mensagem: 'removido' });
        }

        // await despesasRepository.delete(id);

        // return response.json({ mensagem: 'removido' });
    },

    async create(request: Request, response:Response){
        const {
            iddousuario,
            iddomodelo,
        } = request.body;

        const modusuariosRepository = getRepository(Modusuarios);

        const modusuarios = modusuariosRepository.create({
            iddousuario,
            iddomodelo,
        })

        await modusuariosRepository.save(modusuarios)
        
        return response.json(modusuarios)
    },
    
}
