import './App.css'
import searchIcon from './assets/search.svg'
import { useCities } from './hooks/useCities'
import { useSearch } from './hooks/useSearch'
import { Cities } from './components/Cities'

function App() {
  const {search, setSearch, error} = useSearch()
  const {cities, loading, getCities} = useCities({search})
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    getCities({cities})
  }
  
  const handleChange = (event)=>{
    const newSearch = event.target.value;
    setSearch(newSearch)
  }

  return (
    <>
      <div className="container text-center">
        <form action="form" onSubmit={handleSubmit}>
          <div className="row align-items-start">
            <label htmlFor="exampleFormControlInput1" className="form-label">Buscador</label>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <input style={{border: '1px solid transparent', borderColor: error ? 'red' : 'grey'}} type="search" onChange={handleChange} className="form-control" id="search" placeholder='México, Monterrey...'/>
            </div>
            <div className="col-auto">
              <button className='btn btn-default'><img src={searchIcon} width={30} height={30} alt="Imágen lupa" /></button>
            </div>
          </div>
        </form>
        <main>
          {
            loading ? <p>Cargando...</p> : <Cities cities={cities} />
          }
        </main>
      </div>
    </>
  )
}

export default App
