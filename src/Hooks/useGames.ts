
import { GameQuery } from "../App";
import useData from "./useData";


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



const useGames=(gamequery:GameQuery)=>useData<games>('/games',{params:{genres:gamequery.genre?.id,platforms:gamequery.platform?.id}},[gamequery])
    
export default useGames