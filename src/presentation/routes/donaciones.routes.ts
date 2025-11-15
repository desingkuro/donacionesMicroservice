import { Router } from 'express';
import donacionesController from '../controllers/donaciones.controller.js';
import { donacionesCreateValidator } from '../validators/donacion.validator.js';


class RouterDonaciones {
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configurarRutas();
    }

    private configurarRutas() {
        this.rutaApi.post('/', donacionesCreateValidator,donacionesController.create);
        this.rutaApi.get('/', donacionesController.list);
        //this.rutaApi.get('/donaciones/:id', donacionesController.get);
        //this.rutaApi.put('/donaciones/:id', donacionesController.update);
        //this.rutaApi.delete('/donaciones/:id', donacionesController.delete);
    }

}

const routerDonaciones = new RouterDonaciones()
export default routerDonaciones.rutaApi;
