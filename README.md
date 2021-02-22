# Challenge Walmart

Proyecto para postulación activa a Walmart.

## Descripción

Proyecto construido de manera unificada ( cliente (Create React Application + Node)  y servidor(( Node + Express)) en un mismo repositorio) para simular el landing page de [MercadoLibre](https://www.mercadolibre.cl/)
## Dependencias

- Docker
- Node >= 6  (Servidor + Cliente)
- Express (4.17.1) (Servidor)
- React ( 17.0.1) ( Cliente)
- React Scripts (4.0.2) (Cliente)
- Boostrap (4.6.0) (Cliente)

## Levantando el proyecto local

Primero vamos a generar los minificados del cliente(front),accediendo a la carpeta client e instalando dependencias de node para la la interfaz de usuario.

``` bash
cd client
npm install
```

Despues volveremos a la raíz del proyecto e instalaremos las dependencias del servidor para poder levantar el proyecto.

``` bash
cd ..
npm install
```

Y finalmente levantaremos el desafío con el comando:

``` bash
npm run start
```

Y en su navegador favorito podemos acceder al siguiente [link](http://localhost:5000) para probar.

PD: El proyecto se apertura bajo el puerto 5000
## Levantando el proyecto con Docker

En la raíz del repo,levantaremos el front, backc y la instancia de mongo con

``` bash
docker-compose up
```
Y luego haremos el fill de collecctions a mongo con
``` bash
docker exec mongodb bash -c './database/import.sh’
```
## Autor

- Ignacio Aedo(ignaciods.3108@gmail.com)
