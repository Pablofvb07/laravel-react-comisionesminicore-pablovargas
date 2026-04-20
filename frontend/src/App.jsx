import { useEffect, useState, useCallback } from "react";
import { obtenerComisiones } from "./api/comisionService";
import "./styles/dashboard.css";

function App() {
  const [filters, setFilters] = useState({
    inicio: "",
    fin: ""
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Cargar datos desde API
  const loadComisiones = useCallback(async () => {
    try {
      setLoading(true);

      const response = await obtenerComisiones(
        filters.inicio,
        filters.fin
      );

      setData(response || []);
    } catch (error) {
      console.error("Error al cargar comisiones:", error);
    } finally {
      setLoading(false);
    }
  }, [filters.inicio, filters.fin]);

  // 🔹 Carga inicial
  useEffect(() => {
    loadComisiones();
  }, [loadComisiones]);

  // 🔹 Manejo de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 🔹 KPI total comisiones
  const totalComisiones = data.reduce(
    (acc, item) => acc + Number(item.comision || 0),
    0
  );

  return (
    <main className="dashboard">

      {/* HEADER */}
      <header className="dashboard__header">
        <h1>💰 Dashboard de Comisiones</h1>
        <p>Visualización de ventas y rendimiento por vendedor</p>
      </header>

      {/* FILTROS */}
      <section className="dashboard__filters">
        <h2>🔎 Filtros</h2>

        <div className="filters__group">
          <input
            type="date"
            name="inicio"
            value={filters.inicio}
            onChange={handleChange}
          />

          <input
            type="date"
            name="fin"
            value={filters.fin}
            onChange={handleChange}
          />

          <button onClick={loadComisiones}>
            Aplicar filtro
          </button>
        </div>
      </section>

      {/* KPIs */}
      <section className="dashboard__kpis">

        <article className="kpi-card">
          <h3>Vendedores</h3>
          <p>{data.length}</p>
        </article>

        <article className="kpi-card">
          <h3>Total comisiones</h3>
          <p>${totalComisiones.toFixed(2)}</p>
        </article>

      </section>

      {/* TABLA */}
      <section className="dashboard__table">

        <h2>📊 Resultados</h2>

        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Vendedor</th>
                <th>Total Ventas</th>
                <th>% Comisión</th>
                <th>Comisión</th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.vendedor}</td>
                    <td>${item.total}</td>
                    <td>{item.porcentaje}%</td>
                    <td>${item.comision}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No hay datos disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        )}

      </section>

    </main>
  );
}

export default App;