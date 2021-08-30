import express from "express"

(async () => {
    const app = express();

    app.get("/:name",(req,res) => {
        res.send(req.params.name)
    })

    app.get("/",(_req,res) => {
        res.send("Welcome to Docker for Node")
    })
    
    app.listen(4040,() => {
        console.log("Server has started");
        
    })
})()