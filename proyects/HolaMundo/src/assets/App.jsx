import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const format = (user) => `@${user}`;
  const array = [
    {
      nombre: "JuliAmm",
      usernombre: "julianaGomez",
      siguiendo: false,
    },
    {
      nombre: "SantiM",
      usernombre: "SantiagoZapata",
      siguiendo: true,
    },
    {
      nombre: "Ana01",
      usernombre: "MuñozAna",
      siguiendo: false,
    },
    {
      nombre: "Alejocuza",
      usernombre: "CuervoAlejandro",
      siguiendo: true,
    },
  ];
  return (
    <section className="App">
      {array.map(({ nombre, usernombre, siguiendo }) => {
        return (
          <TwitterFollowCard
            key={usernombre}
            name={nombre}
            arroba={format}
            userName={usernombre}
            inicialIsFollowing={siguiendo}
          ></TwitterFollowCard>
        );
      })}
    </section>
  );
}
