# Challenge Walmart

Proyecto para postulación activa a Walmart.

## Descripción

Proyecto construido de manera unificada ( cliente (Create React Application + Node)  y servidor(( Node + Express)) en un mismo repositorio) para simular el landing page de [MercadoLibre](https://www.mercadolibre.cl/)
## Dependencias

- Docker Compose 1.27.4
- Node >= 6  (Servidor + Cliente)
- Express (4.16.0) (Servidor)
- React ( 17.0.1) ( Cliente)
- React Scripts (4.0.2) (Cliente)
- Boostrap (4.6.0) (Cliente)

## Levantando el proyecto local

Levantamos primero el back

``` bash
cd api
npm install
npm run start:dev
```

Despues  abrimos otra terminal y asegurarndonos que estamos en la raíz del proyecto comenzamos a levantar el front.

``` bash
cd client
npm install
npm run start
```

Y finalmente  volviendo a la raíz ,levantamos una instancia para mongo

``` bash
make database-up
```

Y en su navegador favorito podemos acceder al siguiente [link](http://localhost:3000) para probar.

## Levantando el proyecto con Docker

NOTA: Antes de levantar docker-compose asegurarse que no estan tomados los puertos 3000,9000 y 27017.

En la raíz del repo,levantaremos el front, backc y la instancia de mongo con

``` bash
docker-compose up
```

Una vez arriba el contenedor de mongo, ( mientras el servidor y el cliente instalan dependencias npm), ejecutamos.
``` bash
docker exec mongodb bash -c './database/import.sh mongodb’
```
para llenar la BD con datos.

Ahora podemos acceder al contenedor en este [link](http://localhost:3000)


## CI/CD

Podemos ver desplegada la solución en : https://heuristic-volhard-4d45e4.netlify.app/
## Autor

- Ignacio Aedo(ignaciods.3108@gmail.com)


