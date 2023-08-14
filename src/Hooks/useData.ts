import { AxiosRequestConfig, CanceledError } from "axios"
import { useState, useEffect } from "react"
import ApiClient from "../services/Api-Client"

interface  Response<T>{
    count:number
    results:T[]
}

const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
        
        const [data,setData]=useState<T[]>([])
        const [error,setError]=useState("")
        const[isLoading,setLoading]=useState(false)
        useEffect(()=>{
            const cotroller=new AbortController();
            setLoading(true)
            ApiClient.get<Response<T>>(endpoint,{signal:cotroller.signal,...requestConfig}).then((res)=>{setData(res.data.results)
                setLoading(false)
    
            }).catch((err)=>{
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
                return ()=>cotroller.abort() 
            })
        },deps?[...deps]:[])
        return{data,error,isLoading}
    }
    export default useData
