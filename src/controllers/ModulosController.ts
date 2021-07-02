import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import Modulos from '../entities/modulo';


export default {
    async index (request: Request, response: Response) {
        const modulosRepository = getRepository(Modulos);

        const modulos = await modulosRepository.find();

        return response.json(modulos)
    },


    async create(request: Request, response: Response) {
        const {
           nomedomodulo
        } = request.body;
    
        const modulosRepository = getRepository(Modulos);
        
        const modulos = modulosRepository.create({
            nomedomodulo
        });
        console.log(modulos)
    
        await modulosRepository.save(modulos)
    
        return response.json(modulos)
    }
};