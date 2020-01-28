import { Router } from 'express';

const routes = new Router();

routes.get("/", (req, res) => {
   res.json({message: 'welcome to the api!'})
});

export default routes;