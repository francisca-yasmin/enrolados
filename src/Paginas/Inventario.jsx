import { useEffect, useState } from "react";

export function Inventario() {
  const [figurinhas, setFigurinhas] = useState([]);

  useEffect(() => {
    const armazenado = JSON.parse(localStorage.getItem("inventario")) || [];
    setFigurinhas(armazenado);
  }, []);

  const limparInventario = () => {
    if (!window.confirm("Deseja realmente limpar o inventário?")) return;
    localStorage.removeItem("inventario");
    setFigurinhas([]);
  };

  return (
    <main
      className="conteiner"
      role="main"
      aria-label="Página de inventário de figurinhas"
    >
      <section
        className="inventario"
        aria-labelledby="titulo-inventario"
      >
        <h2 id="titulo-inventario">Inventário</h2>

        <button
          className="limpar-inventario"
          onClick={limparInventario}
          aria-label="Limpar todo o inventário de figurinhas"
        >
          Limpar Inventário
        </button>

        {figurinhas.length === 0 ? (
          <p
            className="vazio"
            role="status"
            aria-live="polite"
          >
            Nenhuma figurinha coletada ainda!
          </p>
        ) : (
          <div
            className="grid"
            role="list"
            aria-label="Lista de figurinhas coletadas"
          >
            {figurinhas.map((f) => (
              <div
                key={f.id}
                className="figurinha"
                role="listitem"
                tabIndex="0"
                aria-label={`Figurinha de ${f.nome}`}
              >
                <img
                  src={f.imagem}
                  alt={`Figurinha de ${f.nome}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
