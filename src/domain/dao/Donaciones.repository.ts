import pool from "../../config/connection/dbConnection.js";
import type Donacion from "../entities/donacion.entity.js";
import { GenericRepository } from "../repositories/generic.repository.js";
import { sql_accesos } from "../repositories/sql_accesos.js";
import { DonacionesSQLStructure } from "./donaciones.dao.js";

export class DonacionesRepository extends GenericRepository<Donacion> {
    constructor() {
        super(new DonacionesSQLStructure());
    }
    async findAll(): Promise<Donacion[]> {
        return  await pool.task(async(consult:any)=>{
            const result = await consult.query(sql_accesos.getAll)
            return result
        })
    }
}
