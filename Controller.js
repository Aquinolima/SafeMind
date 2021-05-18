const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

let user = models.User;
let registro = models.Registro;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});


//LOGIN
app.post('/createUser', async (req, res) => {
    const create = await user.create(
        req.body
    ).then(function () {
        return res.json({
            error: false,
            message: "Usuário criado com sucesso!"
        })
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Usuário não cadastrado com sucesso!"
        });
    });
});

//MOSTRAR USUARIO

/* app.get('/mostrarUser', function (req, res) {
    user.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    }).then(function (logUser) {
        res.json({
            logUser
        });
    });
}); */



app.post('/mostrarUser', async (req, res) => {
    let response = await user.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    });
    console.log(response);
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});

app.get('/mostrarRegUser', async (req, res) => {
    let response = await user.findAll({
        where: {
            email: req.body.email,
            password: req.body.password
        }, order: [
            ['id', 'DESC']
        ]

    });
    console.log(response);
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});

/* app.get('/listReg', async (req, res) => {
    let response = await user.findAll({
        where: {
            userId: req.body.userId
        },
        order: [
            ['id', 'DESC']
        ]
    });
    console.log(response);
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
}); */




/*  app.post('/mostrarUser', async (req, res) => {
    await user.findOne({
         where: {
             email: req.body.email,
             password: req.body.password
         }
     }).then(logUser => {
         res.json({
             error: false,
             logUser
         })
     }).catch(function (error) {
         return res.status(400).json({
             error: true,
             message: "ERRO: Erro no Login!"
         })
     });
 });
  */





/* app.post('/mostrarUser', async (req, res) => {
    await user.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    }).then(logUser => {
        res.json({
            error: false,
            logUser
        })
    }).catch(function (error) {
        return res.status(400).json({
            error: true,
            message: "ERRO: Erro no Login!"
        })
    });
}); */



//LISTAR USUARIOS


app.get('/listUsers', function (req, res) {
    user.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function (users) {
        res.json({
            users
        });
    });
});


// CREATE DE USUÁRIO E REGISTROS

app.post('/createUser', async (req, res) => {
    const create = await user.findOne(
        req.body
    ).then(function () {
        return res.json({
            error: false,
            message: "Usuário criado com sucesso!"
        })
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Usuário não cadastrado com sucesso!"
        });
    });
});

app.post('/createRegistro', async (req, res) => {
    let userId='';
    await registro.create({
        userId: req.body.userId,
        sentimento: req.body.sentimento,
        emocoes: req.body.emocoes,
        situacao: req.body.situacao,
        pensamentos: req.body.pensamentos,
        reacao: req.body.reacao,
        data: req.body.data
    }).then(()=>{
        userId=response.id;
        
    });

    
});

/* app.post('/createRegistro', async (req, res) => {
    const create = await registro.create(
        req.body
    ).then(function () {
        return res.json({
            error: false,
            message: "Registro cadastrado com sucesso!"
        })
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi possivel cadastrar o registro!"
        })
    })
}); */

// LISTAR OS REGISTROS 

app.get('/', function (req, res) {
    registro.findAll({
       
        order: [
            ['id', 'DESC']
        ]
    }).then(function (registros) {
        res.json({
            registros
        });
    });
});

/* app.get('/', function (req, res) {
    registro.findAll({
        where: {
            userId: req.body.userId
        },
        order: [
            ['id', 'DESC']
        ]
    }).then(function (registros) {
        res.json({
            registros
        });
    });
});
 */

// MOSTRAR O REGISTRO SELECIONADO 
app.get('/mostrar/:id', async (req, res) => {
    await registro.findByPk(req.params.id)
        .then(registro => {
            return res.json({
                error: false,
                registro
            })
        }).catch(function (error) {
            return res.status(400).json({
                error: true,
                message: "ERRO: Erro ao carregar o registro!"
            })
        });
});

// ALTERAR OS REGISTROS DO USUÁRIO E OS DADOS DO USUÁRIO

app.put('/editarUser', async (req, res) => {
    await user.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(function () {
        return res.json({
            error: false,
            message: "Dados editados com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "ERRO: Não foi possivel alterar os dados!"
        });
    })
});

app.put('/editarRegistro', async (req, res) => {
    await registro.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(function () {
        return res.json({
            error: false,
            message: "Dados do Registro editados com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "ERRO: Não foi possivel alterar os dados do registro!"
        });
    })
});


// DELETAR OS REGISTROS DO USUÁRIO E OS DADOS DO USUÁRIO

app.delete('/deleteUser/:id', async (req, res) => {
    await user.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        return res.json({
            error: false,
            message: "Cadastro de Usuário apagado com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "ERRO: Não foi possivel apagar o cadastro do usuário!"
        });
    })
});


app.delete('/deleteRegistro/:id', async (req, res) => {
    await registro.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        return res.json({
            error: false,
            message: "Registro apagado com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "ERRO: Não foi possivel apagar o registro!"
        });
    })
});



// CONFIGURAÇÃO DA PORTA DE CONEXÃO
let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando!');
});