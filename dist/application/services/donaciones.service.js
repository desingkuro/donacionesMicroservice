import Donacion from "../../domain/entities/donacion.entity.js";
import {} from "express";
import DonacionesDTO from "../../presentation/dto/donaciones.dto.js";
import { DonacionesRepository } from "../../domain/dao/Donaciones.repository.js";
export class DonacionesService {
    static async crearDonacion(request, res) {
        const requestDto = request.body;
        const dto = new DonacionesDTO(requestDto);
        const dao = new DonacionesRepository();
        const entity = new Donacion({
            idDonacion: dto.idDonacion,
            idTipoDonacion: dto.idTipoDonacion,
            idDonador: dto.idDonador,
            idCampania: dto.idCampania,
            fechaCreacion: dto.fechaCreacion,
            state: dto.state,
            checker: dto.checker,
        });
        try {
            const result = await dao.create(entity);
            return res.status(201).json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error?.message });
        }
    }
    static async listarDonaciones(res) {
        try {
            const dao = new DonacionesRepository();
            const donaciones = await dao.findAll();
            return res.status(200).json(donaciones);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: error?.message });
        }
    }
}
//# sourceMappingURL=donaciones.service.js.map