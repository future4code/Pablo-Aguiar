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

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
try {
    const type: string = (req.query.type as string).toUpperCase()
    if (type !== "ADMIN" && type !== "NORMAL"){
        errorCode = 422
        throw new Error("Type inválido, tente outro!")
    }
    const findUserByType = users.filter((user => user.type === type))
    if (!findUserByType) {
        errorCode = 404
        throw new Error("Type não encontrado.")
    }    
    const result = findUserByType
    res.status(200).send(result)
} catch (error) {
    res.status(errorCode).send(error.message)
}
})

//a Através do query params

//b utilizando o enum p exibir apenas os tipos validos