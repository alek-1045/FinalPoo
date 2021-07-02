import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import Usuarios from '../entities/usuarios';


export default {
    async index (request: Request, response: Response) {
        const usuariosRepository = getRepository(Usuarios);

        const usuarios = await usuariosRepository.find();

        return response.json(usuarios)
    },


    async create(request: Request, response: Response) {
        const {
            filial,
            login,
            nomedousuario,
    
        } = request.body
    
        const usuariosRepository = getRepository(Usuarios);
        
        const usuarios = usuariosRepository.create({
            filial,
            login,
            nomedousuario,
        });
    
        await usuariosRepository.save(usuarios)
    
        return response.json(usuarios)
    }
};