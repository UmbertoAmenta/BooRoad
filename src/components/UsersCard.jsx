import utenti from "../data/Customers";

export default function UsersCard() {
  return (
    <div>
      {utenti.map((utente) => {
        return (
          <ul key={utente.id}>
            <li>{utente.nome}</li>
            <li>{utente.telefono}</li>
            <li>{utente.email}</li>
          </ul>
        );
      })}
    </div>
  );
}
