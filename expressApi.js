import { addDepto } from "./src/controllers/departamentos-controller.js";
import { getNoticias, setNoticias } from "./src/controllers/noticias-controller.js";

export function addRestDirections(app) {

  //GET noticias
  app.get("/noticias", async (request, response) => {
    try {
      const datos = await getNoticias();
      response.json(datos);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      response.status(500).json({ error: 'Error al obtener los datos' });
    }
  });

  //GET depto
  app.get("/depto", async (request, response) => {
    addDepto();
    response.status(200).send("ok");
  })

  return app;
}