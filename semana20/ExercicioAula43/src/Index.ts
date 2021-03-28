import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './Users'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/allUsers', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get('/user', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const type: string = req.query.type as string
        if (!type) {
            errorCode = 422
            throw new Error("Tipo inválido!")
        }

        const matchedUsers = users.filter(user => user.type.toLowerCase() === type.toLowerCase())
        if (matchedUsers.length === 0) {
            errorCode = 404
            throw new Error("Nenhum usuário do tipo encontrado!")
        }
        res.status(200).send(matchedUsers)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get('/user/:name', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const name: string = req.params.name as string

        const matchedUser = users.find(user => user.name.toLowerCase() === name.toLowerCase())
        if (!matchedUser) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado!")
        }
        res.status(200).send(matchedUser)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/user', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const requestBody = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }
        if (!requestBody.name || !requestBody.email || !requestBody.type || !requestBody.age) {
            errorCode = 422
            throw new Error("Faltou algum campo!")
        }
        users.push(requestBody)
        res.status(200).send("Usuário adicionado!")
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})