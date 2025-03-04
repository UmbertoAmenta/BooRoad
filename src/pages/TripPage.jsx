// COMPONENTS
import UsersCard from "../components/UsersCard";
import destinazioniVacanza from "../data/Trips";

export default function TripPage() {
  return (
    <div>
      <h3>Dati Viaggio</h3>
      {/* <div>
        {destinazioniVacanza.map((destinazioneVacanza) => {
          return (
            <ul>
              <li>{destinazioneVacanza.nome}</li>
              <li>{destinazioneVacanza.descrizione}</li>
            </ul>
          );
        })}
      </div> */}

      <h3>Rubrica utenti</h3>
      <ul>
        <li>
          <UsersCard />
        </li>
      </ul>
    </div>
  );
}
