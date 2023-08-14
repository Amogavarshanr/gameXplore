
import useData from "./useData";
import { Genere } from "./useGeneres";

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



const useGames=(selectedGenre:Genere|null,selectplatform:Platform|null)=>useData<games>('/games',{params:{genres:selectedGenre?.id,platforms:selectplatform?.id}},[selectedGenre?.id,selectplatform?.id])
    
export default useGames