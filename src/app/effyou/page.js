'use client'
import YouTube from "react-youtube"
import './page.css'
//<YouTube videoid="LBT4GyL3B8w"></YouTube>
export default function Page(){
 return(
    <div className="bg-image">
        <iframe width="560"
         height="315" 
         src="https://www.youtube.com/embed/LBT4GyL3B8w?si=nfBQD6QJym7L1SUV" 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen></iframe>
    </div>
 )
}