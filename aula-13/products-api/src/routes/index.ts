import { Request, Response, Router } from 'express';
import { name, version } from '../../package.json';
import productRoutes from './products';

const routes = Router();

routes.get('/', async (req: Request, res: Response) => res.json({
    name,
    version
}));

routes.use('/products', productRoutes);

export default routes;