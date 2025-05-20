import { Router, Request, Response } from "express";
import useController from "./controllers/user"

const routes = Router()

//rota de teste,hello world

routes.get("/", (req: Request, res: Response) : any => {
    return res.send('rota de teste')
})
//rota que retorna um json, uma lista nomeada "items"

routes.get("/funcionarios", (req: Request, res: Response): any =>{
    return res.json({
        item: [
            {
                id: "1",
                nome: "André",
                cargo:"Professor",
                idade: 37,
                custoPorHora: 100,
                temLicenca: false
            },
            {
                id: "2",
                nome: "Matheus",
                cargo:"estudante",
                idade: 17,
                custoPorHora: 10.0,
                temLicenca: true,
            },
            {
                id: "3",
                nome: "Igor",
                cargo:"estudante",
                idade: 22,
                custoPorHora: 32.70,
                temLicenca: true,
            },
        ]
    })
})
routes.get("/fotos", (req: Request, res: Response): any => {
    return res.json({
        item: [
            {
                id: "1",
                foto: "https://wx.mlcdn.com.br/ponzi/production/portaldalu/47524.jpg",
                nome: "Paisagem"
            },
            {
                id: "2",
                foto: "https://dus6dayednven.cloudfront.net/app/uploads/2022/05/1-DSC00855-Editar_baja.jpg",
                nome: "dog"
            },
            {
                id: "3",
                foto: "https://dus6dayednven.cloudfront.net/app/uploads/2020/12/JEAN-PAUL-DE-LA-HARPE.jpg",
                nome: "lua"
            }
        ]
    })
})

routes.post("/users", (req: Request, res: Response) : any => useController.create(req,res))

export default routes;