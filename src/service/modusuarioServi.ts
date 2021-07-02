import { getRepository } from "typeorm";
import Usuarios from '../entities/usuarios';
import Modusuarios from '../entities/modusuario';
import Modulos from '../entities/modulo';

export default {
    async render (modusuarios: Modusuarios) {
        const usuariosRepository = getRepository(Usuarios)
        const modulosRepository = getRepository(Modulos)

        const usuarios = await usuariosRepository.findOneOrFail(modusuarios?.iddousuario)
        const modulos = await modulosRepository.findOneOrFail(modusuarios?.iddomodelo)

        return {
            id: modusuarios?.id,
            iddousuario: modusuarios?.iddousuario, 
            iddomodelo: modusuarios?.iddomodelo,
            nomedousuario: usuarios?.nomedousuario,
            filial: usuarios?.filial,
            nomedomodulo: modulos?.nomedomodulo    
        }
    },

}




