import pool from "../../config/connection/dbConnection.js";
import { GenericRepository } from "../repositories/generic.repository.js";
import { sql_accesos } from "../repositories/sql_accesos.js";
import { DonacionesSQLStructure } from "./donaciones.dao.js";
export class DonacionesRepository extends GenericRepository {
    constructor() {
        super(new DonacionesSQLStructure());
    }
    async findAll() {
        return await pool.task(async (consult) => {
            const result = await consult.query(sql_accesos.getAll);
            return result;
        });
    }
}
//# sourceMappingURL=Donaciones.repository.js.map