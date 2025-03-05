export default function UsersCard({ utente }) {
  return (
    <div>
      <ul>
        <li>{utente.nome}</li>
        <li>{utente.telefono}</li>
        <li>{utente.email}</li>
      </ul>
    </div>
  );
}
