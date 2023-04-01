const express = require('express');
require("./db/conn")
const Student = require("./model/students")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.post("/students", (req, resp) => {
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(() => {
        resp.send(user);
    }).catch((e) => {
        resp.send(e);
    })
})




app.get("/students", async (req, resp) => {
    try {
        const studentsdata = await Student.find();
        res.send(studentsdata)
    } catch (e) {
        res.send(e)

    }
})
//get individual student data
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsdata = await Student.findByid(_id)
    } catch (e) {
        res.send(e)
    }
})
app.delete("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const delstd9 = await Student.findByIdAndDeleteAndDelete(req.params.id)

    } catch (e) {

    }
})
//updating std by id
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = rew.params.id;
        const updstd = await Student.findByIdAndUpdate(_id, req.body)
        res.send(updstd)

    } catch (e) {

    }
})

app.listen(port, () => {
    console.log("connection sucesful")
})