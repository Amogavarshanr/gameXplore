
import useData from "./useData"
 export interface Genere{
    id:number
    name:string
}


const useGeneres=()=>useData<Genere>("/genres")

export default useGeneres