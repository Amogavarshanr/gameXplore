import { useState } from "react";
import { useEffect } from "react";
import ApiClient from "../services/Api-Client";
import { CanceledError } from "axios";

export interface Platform{
  id:number
  name:string
  slug:string
}
export interface games {
    id: number;
    name: string;
    background_image:string;
    metacritic:number,
    parent_platforms:{platform:Platform}[]
  }
  interface GamesResponse {
    count: number;
    results: games[];
  }
  


const useGames=()=>{
    const [Games, setGames] = useState<games[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const cotroller=new AbortController();
      ApiClient.get<GamesResponse>("/games",{signal:cotroller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) =>{
        if (err instanceof CanceledError) return;
        setError(err.message)});
       return ()=>cotroller.abort() 
    }, []);
    return{Games,error};
}
export default useGames