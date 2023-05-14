/*Iniciação com import do express, logo em seguida locamos em server e damos entrada ao server */
const express= require("express");
const server = express();
server.use(express.json())
//ALocação dos valores
const cursos= ['fullstack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

//retorna um curso
server.get('/cursos/:index', (req, res) =>{
    const {index} = req.params;

    return res.json(cursos[index]);
});
//Retornar todos os cursos 
server.get('/cursos', (req, res) =>{
    return res.json(cursos);
});

//criar um novo curso
server.post('/cursos', (req, res) => {
    const {name} =req.body;
    cursos.push(name);

    return res.json(cursos);

});

//Atualizar curso
server.put('/cursos/:index', (req, res) => {
    const {index} = req.params;
    const {name}  = req.params;
    cursos[index] = name;

    return res.json(cursos);
});

//Deletar um curso

server.delete('/curso//:index', (req, res) => {
    const {index} = req.params;

    cursos.splice(index, 1);
    return res.json({message: "O curso foi deletado!!"});
});


server.listen(3000);