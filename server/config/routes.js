const tasks = require('../controllers/tasks');

module.exports = function(app) {
    app.get("/tasks", tasks.index)

    app.get("/:id", tasks.retrieve)

    app.post("/create", tasks.create)

    app.put("/update/:id", tasks.update)

    app.get("/remove/:id", tasks.remove)

};