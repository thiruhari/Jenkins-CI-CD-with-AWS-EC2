import express from "express"
const app = express()


app.get("/", (req, res) => {
    res.status(200)
    res.end("<div><p>Hello Jenkins_CI-CD !<p></div>");
})

//Starting server at 8000
app.listen(8000, ()=>{
    console.log("Server has started.")

})
