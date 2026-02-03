//Documentación API(swagger) de mis endpoints.

// ¡Swagger DESCRIBE, Express EJECUTA!

//Dice qué endpoints existen, qué método HTTP uso(GET, POST, PUT, DELETE)
//Qué parámetros recibe y qué devuelve cada uno. También qué estructura tienen los datos.
//Por eso cada clave ('/' o '/create') es una ruta relativa a donde tengo montado el router. 

//Tags: organizan visualmente swagger.

//OperationId: es el identificador único del endpoint. No tiene porqué coincidir con el controller pero tiene que ser único.

//Parameters (en Express es "router.get('/')" en swagger es" '/': {get:{...} }" ): describe los datos que van en URL(path), query, headers. Ejemplo(/tasks/id/65abc123)

//RequestBody: describe el JSON que envío en POST/PUT. Documenta la forma del body.

//Schema: { $ref: "#/.../.../..."}: apunta a modelos reutilizables. Están en otro archivo. Ejemplo: docs/components.js

module.exports = {
  paths: {
    "/": {
      get: {
        tags: {
          Tasks: "Get a task",
        },
        description: "Get Task",
        operationId: "getTask",
        parameters: [],
        responses: {
          200: {
            description: "Task obtained successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
    "/create": {
      post: {
        tags: {
          Tasks: "Create a task",
        },
        description: "Create Task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskInput",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/markAsCompleted/{_id}": {
      put: {
        tags: {
          Tasks: "Update a task as completed",
        },
        description: "Update Task as completed",
        operationId: "markAsCompleted",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of Taks to be updated as completed",
          },
        ],
        responses: {
          200: { description: "Task updated successfully" },
          404: { description: "Task not found" },
          500: { description: "Server error" },
        },
      },
    },
    "/id/{_id}": {
      put: {
        tags: {
          Tasks: "Update a task",
        },
        description: "Update Task",
        operationId: "updateTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of Taks to be updated",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TaskInput" },
            },
          },
        },
        responses: {
          200: { description: "Task updated successfully" },
          404: { description: "Task not found" },
          500: { description: "Server error" },
        },
      },
      
      delete: {
        tags: {
          Tasks: "Deleted a task",
        },
        description: "Delete Task",
        operationId: "deleteTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            require: true,
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of Task to be deleted",
          },
        ],
        responses: {
          200: { description: "Task deleted successfully" },
          404: { description: "Task not found" },
          500: { description: "Server error" },
        },
      },
    },
  },
}