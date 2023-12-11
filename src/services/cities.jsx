export const searchCities = async ({search}) =>{
    if(search==='') return
    console.log(`${process.env.URL_WEATHER}`)
    try{
        const response = await fetch(`${process.env.URL_WEATHER}`)
        const json = await response.json()
        console.log(json)
    }catch(e){
        throw new Error("Error al buscar la ciudad")
    }
}