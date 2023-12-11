function ListOfCities({cities}){
  return(
    <></>
  )
}
export function Cities({ cities }) {
  const hasCities = cities?.length > 0 
  return (
    hasCities
      ? <ListOfCities cities={ cities } />
      : <h2>Sin Resultados</h2>
  )
}
