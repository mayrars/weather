import { useCallback, useState, useRef } from "react";
import { searchCities } from "../services/cities";

export function useCities({search}){
    console.log(search)
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getCities = useCallback(async({search})=>{
        if(search===previousSearch.current) return
        try{
            console.log("entroß")
            setLoading(true)
            setError(null)
            const newCities = await searchCities({search})
            console.log(newCities)
            setCities(newCities)
        }catch(e){
            console.log(e)
            setError(e.message)
        }finally{
            console.log("entro2")
            setLoading(false)
        }
    },[])

    return { cities, getCities, loading, error }
}