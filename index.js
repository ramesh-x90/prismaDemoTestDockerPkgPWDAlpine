import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    try {
        const user1 = prisma.user.create({
            data : {
                email :"ramesh123213@gmail.com",
                name : "Ramesh",
        
            }
        })

        const user2 = prisma.user.create({
            data : {
                email :"ramesh124343@gmail.com",
                name : "Ramesh123",
        
            }
        })
        

        const users = await prisma.$transaction([user1,user2])

        console.log(users)
    } catch (error) {
        
    }
    const user = await prisma.user.findMany()
    
    console.log(user)
    
}

main()