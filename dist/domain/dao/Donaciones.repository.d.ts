import type Donacion from "../entities/donacion.entity.js";
import { GenericRepository } from "../repositories/generic.repository.js";
export declare class DonacionesRepository extends GenericRepository<Donacion> {
    constructor();
    findAll(): Promise<Donacion[]>;
}
//# sourceMappingURL=Donaciones.repository.d.ts.map