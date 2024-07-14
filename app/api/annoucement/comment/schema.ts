import z from "zod"
export const annoucementCommentSchema = z.object({
    comment:z.string().min(1,{message:"Minimum 1 letters"}),
    userid:z.string(),
    announcementid:z.number()
})