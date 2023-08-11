
import useData from "./useData"
 export interface Genere{
    id:number
    name:string
    image_background:string

}


const useGeneres=()=>useData<Genere>("/genres")

export default useGeneres