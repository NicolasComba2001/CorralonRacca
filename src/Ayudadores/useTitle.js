import { useEffect, useRef } from "react";

export default function useTitle({title, description}){
    const prevTitle = useRef(document.title);
    const descripcion = useRef(
        document.querySelector('meta[name="description"]').getAttribute('content')
    )

    useEffect(()=>{
        const previousTitle = prevTitle.current;
        if(title){
            document.title = `${title} - Corralon Racca (San Francisco)`;
        }

        return ()=> document.title = previousTitle;
    },[title])

    useEffect(()=>{
        const metaDesc = document.querySelector('meta[name="description"]');
        const previousDescription = descripcion.current;
        if(description){
            metaDesc.setAttribute('content', description);
        }

        return ()=> metaDesc.setAttribute('content', previousDescription);
    },[description])
   
}