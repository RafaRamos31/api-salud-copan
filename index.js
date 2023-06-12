import express from "express"

let app = express();

app.get("/noticias", (request, response) => {
  response.status(200).send([
    {
      "id-noticia": "2342g3hj23g4jh2g",
      "id-departamento": "1",
      "fecha-publicacion": "01/02/2023 3:45 pm",
      "contenido": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "tipo-multimedia": "video",
      "enlace-recurso": "https://www.youtube.com/watch?v=KS0bSlp-i4I",
    }, 
    {
      "id-noticia": "2342g3hj23g4jh2g",
      "id-departamento": "2",
      "fecha-publicacion": "01/02/2023 3:45 pm",
      "contenido": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "tipo-multimedia": "documento",
      "enlace-recurso": "https://drive.google.com/file/d/1ok221_5RcCir5cIuzaRDrVykizNkFG1X/view?usp=sharing",
    }, 
    {
      "id-noticia": "2342g3hj23g4jh2g",
      "id-departamento": "3",
      "fecha-publicacion": "01/02/2023 3:45 pm",
      "contenido": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }, 
    {
      "id-noticia": "2342g3hj23g4jh2g",
      "id-departamento": "4",
      "fecha-publicacion": "01/02/2023 3:45 pm",
      "contenido": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "tipo-multimedia": "foto",
      "enlace-recurso": "https://imgcom.masterd.es/49/blog/2023/02/42534.jpeg"
    }, 
    {
      "id-noticia": "2342g3hj23g4jh2g",
      "id-departamento": "5",
      "fecha-publicacion": "01/02/2023 3:45 pm",
      "contenido" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "tipo-multimedia": "galeria",
      "enlace-recurso": [
        "https://imgcom.masterd.es/49/blog/2023/02/42534.jpeg",
        "https://www.unir.net/wp-content/uploads/2017/06/NOTEC.jpg",
        "https://img2.rtve.es/imagenes/golpe-bit-nutricion-ciencia-25-05-21/1621939388655.jpg"
      ]
    }, 
  ]);
})

app.listen({port: 4000});