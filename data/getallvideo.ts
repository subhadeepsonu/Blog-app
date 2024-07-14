"use server"
import prisma from "@/db"
export default async function GetAllVideos(){
    try {
        const response = prisma.video.findMany({
            orderBy:{
                createdat:"desc"
            },
            where:{
                publish:true
            },include:{
                user:{
                    select:{
                        name:true,
                        imgurl:true,
                        id:true
                    }
                },
                _count:{
                    select:{
                        views:{
                            
                        }
                    }
                }
            }
        })
        return response
    } catch (error) {
        throw new Error(`${error}`)
    }
}