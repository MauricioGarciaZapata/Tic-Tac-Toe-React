import { Square } from './Square.jsx'


export function Winner ({gana,reset}){
  
    if(gana == null ) return null
    const result = gana == false ? "Empate" : "Ganó";
   
    return (
        <section className="winner">
          <div className="text">
           <h2>
            {result}
            
            <header className="win">
              {gana && <Square>{gana}</Square>}
            </header>

            <footer>
              <button onClick={reset}>Empezar de nuevo</button>
            </footer>
           </h2>
          </div>
          
        </section>
      )}

