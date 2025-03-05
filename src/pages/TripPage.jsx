import { useState } from "react";

// DATA
import utenti from "../data/Customers";
import destinazioniVacanza from "../data/Trips";

// COMPONENTS
import SearchBar from "../components/ui/searchBar";
import UsersCard from "../components/UsersCard";

export default function TripPage() {
  const [selectedTrip, setSelectedTrip] = useState(destinazioniVacanza[0]);
  const [search, setSearch] = useState("");

  const handlerSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const utentiFiltrati = utenti.filter((utente) =>
    utente.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3>Dati Viaggio</h3>
      <div>
        <h4>{selectedTrip.nome}</h4>
        <p>{selectedTrip.descrizione}</p>
      </div>

      <SearchBar search={search} onSearchChange={handlerSearch} />

      <h3>Rubrica utenti</h3>
      <ul>
        {utentiFiltrati.length > 0 ? (
          utentiFiltrati.map((utente) => (
            <li key={utente.id}>
              <UsersCard utente={utente} />
            </li>
          ))
        ) : (
          <h3>Nessun utente trovato</h3>
        )}
      </ul>
    </div>
  );
}
