import { type Request, type Response } from "express";
export declare class DonacionesService {
    protected static crearDonacion(request: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    protected static listarDonaciones(res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=donaciones.service.d.ts.map