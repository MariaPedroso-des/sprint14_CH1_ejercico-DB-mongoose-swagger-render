module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"title to register",
                        example:"This is a task"
                    },
                    completed:{
                        type:'boolean',
                        description:"status of the task",
                        example:"false"
                    },
                },
            },
            TaskInput: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  description: "Title task to register",
                  example: "Create an task",
                },
                completed: {
                  type: "boolean",
                  description: "Status of the task",
                  example: "false",
                },
              },
            },
            _id: {
              type: "objectId",
              description: "An id of a task",
              example: "6201064b0028de7866e2b2c4"
            },
        },
    },
};
