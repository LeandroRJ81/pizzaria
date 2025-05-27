import prismaClient from "../../prisma";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password}: UserRequest) {
        
        //Verifica se ele enviou o email
        if(!email){
            throw new Error("Email incorreto")
        }

        //Verifica se esse email já existe
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error("Usuário já cadastrado")
        }

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: password,
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
        })

        return user;
    }
}

export { CreateUserService }