import categoriesRouter from './categoriesRoutes.js';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send({ titulo: "Ecommerce" })
  })

  app.use(
    categoriesRouter,
  )
}

export default routes