const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

let user = models.User;
let registro = models.Registro;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*" );
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE" );
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization" );
    app.use(cors());
    next();
});

// CREATE DE USUÁRIO E REGISTROS

app.post('/createUser', async (req,res) => {
    const create = await user.create(
        req.body
    ).then(function(){
        //res.send('Usuário criado com sucesso!');
        return res.json({
            error: false,
            message: "Usuário criado com sucesso!"
        })
    }).catch(function(erro){
        //res.send('Erro: Usuário não cadastrado com sucesso!')
        return res.status(400).json({
            error: true,
            message: "Erro: Usuário não cadastrado com sucesso!"
        })
    })
});

app.post('/createRegistro', async (req,res) => {
    const create = await registro.create(
        req.body
    ).then(function(){
        //res.send('Registro cadastrado com sucesso!');
        return res.json({
            error: false,
            message: "Registro cadastrado com sucesso!"
        })
    }).catch(function(erro){
        //res.send('Erro: Não foi possivel cadastrar o registro!')
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possivel cadastrar o registro!"
        })
    })
});

// LISTAR OS REGISTROS DO USUÁRIO

app.get('/listar/:id', async (req,res) => {
    let read = await registro.findAll({
        where: {
          userId: req.params.id
        },
        order: [['id', 'DESC']]
      })
    return res.json(read);
});

// ALTERAR OS REGISTROS DO USUÁRIO E OS DADOS DO USUÁRIO

app.put('/editarUser', async (req, res) => {
    await user.update(req.body, {
        where: { id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Dados editados com sucesso!"
        });
     }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "ERRO: Não foi possivel alterar os dados!"
        });
    })
});

app.put('/editarRegistro', async (req, res) => {
    await registro.update(req.body, {
        where: { id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Dados do Registro editados com sucesso!"
        });
     }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "ERRO: Não foi possivel alterar os dados do registro!"
        });
    })
});


// DELETAR OS REGISTROS DO USUÁRIO E OS DADOS DO USUÁRIO

app.delete('/deleteUser/:id', async (req, res) => {
    await user.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro de Usuário apagado com sucesso!"
        });
     }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "ERRO: Não foi possivel apagar o cadastro do usuário!"
        });
    })
});


app.delete('/deleteRegistro/:id', async (req, res) => {
    await registro.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Registro apagado com sucesso!"
        });
     }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "ERRO: Não foi possivel apagar o registro!"
        });
    })
});



// CONFIGURAÇÃO DA PORTA DE CONEXÃO
let port = process.env.PORT ||  3000;
app.listen(port,(req,res) => {
    console.log('Servidor Rodando!');
});

