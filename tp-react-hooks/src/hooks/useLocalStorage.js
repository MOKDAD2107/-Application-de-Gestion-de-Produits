import {useEffect, useState} from "react";

export default function useLocalStorage(key,initialValue) {

    const [value, setValue] = useState(()=>{

        const stored=localStorage.getItem(key);
        return stored!==null ? JSON.parse(stored) : initialValue;

    });
useEffect(()=>{
   localStorage.setItem(key,JSON.stringify(value));
    console.log("Langue sauvegardée dans le localStorage :", value);

},[key,initialValue]);
return [value, setValue];
}