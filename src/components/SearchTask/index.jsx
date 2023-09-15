import { InputBar } from "../InputBar"

function SearchTask({ search, setSearch }) {
    return(
        <div>
            <InputBar type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar tarefa"/>
        </div>
    )
}

export default SearchTask