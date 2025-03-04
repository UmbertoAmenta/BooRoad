import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input type="text" placeholder="Cerca" />
    </div>
  );
}
