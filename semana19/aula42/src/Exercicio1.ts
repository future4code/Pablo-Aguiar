//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

//exercicio 1
//a
//usaria o metodo http GET, p buscar os parametros

//b
//indicaria a entidade como /user

app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400        
    try {
        const allUsers = users.map(userList => ({
            id: userList.id,
            name: userList.name,
            email: userList.email,
            type: userList.type,
            age: userList.age
        }))
        if (allUsers.length === 0 || !allUsers) {
            errorCode = 404
            throw new Error("Resultado não encontrado")
        }
        const result = allUsers;
        res.status(200).send(result)
    } catch (error){
        res.status(errorCode)
    }
})

