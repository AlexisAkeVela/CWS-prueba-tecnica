# CWS prueba técnica

## Información general del proyecto

Para la prueba técnica de CWS, fue solicitado la creación de un servicio web para la gestión de notas empleando cuatro tecnologías: React como interfaz gráfica, Laravel como administrador de los datos, MySQL como medio de almacenamiento de estos y Axios para la comunicación entre la interfaz gráfica y el administrador de datos.

El proyecto debía de permitir la creación, edición y eliminación de notas.
Para la creación del proyecto fue empleado un tiempo estimado de 1hr con 30 minutos.

Se emplearon dos marcos de trabajo distintos para la realización de dicho proyecto, estos se encuentran en este mismo repositorio.

**API**
Es un proyecto de Laravel en la versión 12.3.0. El API es responsable de toda la lógica y gestión de datos (recepción, procesamiento, almacenamiento y servicio), asi mismo está se encarga de realizar la conexión con la base de datos.

**Front**
Este es un proyecto de Vite en su versión 6.2.0, configurado con React versión 19.0.0 en formato de JavaScript, cuyo propósito es consumir los datos del API y permitir al usuario interactuar con dicha información. El proyecto hace uso de Axios como medio de comunicación entre este proyecto y la API.

## Guía de instalación rápida

### Tecnologías

Para poder ejecutar el proyecto es necesario tener instaladas las siguientes tecnologías

- PHP 8.2^
- Node 20^
- MySQL 5.7.40
- Composer v2.8.6^

### Instalación

Una vez clonado todo el proyecto en su carpeta de preferencia, es necesario descargar las dependencias de los proyectos, asi como realizar la configuración correspondiente, las dependencias se descargan de forma individual para cada marco de trabajo, para lo anterior es necesario ejecutar en una terminal los siguientes comandos tomando como referencia la carpeta raíz donde se encuentra alojado el repositorio:

- Instalar las dependencias del API

```bash
$ cd .\API\
$ composer install
```

- Instalar las dependencias del Front

```bash
$ cd .\Front\
$ npm install
```

### Configuración

Para poder ejecutar el proyecto es necesario realizar algunas configuraciones:

- Configurar las variables de entorno del API
  - Crea un documento **.env** en la carpeta [raíz del proyecto](/API)
  - Copia la información del documento llamado [.env.example](/API/.env.example) y pegalo en **.env**
  - Ajustar las variables a las requeridas según tus necesidades
- Realizar las migraciones correspondientes, esto se encarga de crear la tabla en MySQL en donde se almacena la información, para ello es necesario ejecutar los siguientes comandos tomando como referencia la carpeta API:

```bash
$ php artisan migrate
```

#### Nota

Por defecto el Front está configurado para funcionar con el **API** ubicado en el puerto **8000**, en caso de que se tenga otra configuración es necesario cambiar el puerto en los siguientes archivos:

- [Notes.jsx](/Front/src/components/pages/Notes.jsx)
- [NotesForm.jsx](/Front/src/components/templates/NotesForm.jsx)
- [Tables.jsx](/Front/src/components/templates/Tables.jsx)

### Ejecución

Para poder ejecutar de forma completa el proyecto, es necesario el uso de dos terminales, una para ejecutar el **API** y otro para **Front**, tomando como referencia la carpeta raíz, los comandos son los siguientes:

- Ejecución de API

```bash
$ cd .\API\
$ php artisan serve
```

- Ejecución de Front

```bash
$ cd .\Front\
$ npm run dev
```

Una vez ejecutados ambos comandos, el proyecto ya se encontrará en ejecución por lo que deberá de dirigirse a su ruta http://localhost:5173/notes donde **5173** es el puerto por defecto de Vite.
