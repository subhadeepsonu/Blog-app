"use client"
import { AddBookMark, RemoveBookMark } from "@/actions/annoucements/bookmark";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
export default function AnnouncementBookmark(props:{
    userid:string,
    announcementid:number,
    bookmarks:[any]
}){
    const MutateAddBookmark = useMutation({
        mutationFn:()=>AddBookMark(props.userid,props.announcementid)
    })
    const MutateRemoveBookmark  =  useMutation({
        mutationFn:()=>RemoveBookMark(props.userid,props.announcementid)
    })
    const [bookmark,setBookmark] = useState<boolean>(false)
    useEffect(()=>{
        {props.bookmarks.forEach((bookmark)=>{
            if(bookmark.userid=props.userid){
                setBookmark(true)
            }
        })}
    },[props.bookmarks,props.userid,props.announcementid])
    return <div>
        {(bookmark)?<FaBookmark onClick={()=>{
            setBookmark(false)
            MutateRemoveBookmark.mutate()
        }}  className="hover:cursor-pointer "/>:<FaRegBookmark onClick={()=>{
            setBookmark(true)
            MutateAddBookmark.mutate()
        }} className="hover:cursor-pointer" />}
    </div>
}