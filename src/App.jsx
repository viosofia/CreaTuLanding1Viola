import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Página de inicio */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a Mate Haus!" />}
        />

        {/* Página productos */}
        <Route
          path="/productos"
          element={<ItemListContainer greeting="Todos nuestros productos" />}
        />

        {/* Página ofertas */}
        <Route
          path="/ofertas"
          element={<ItemListContainer greeting="Ofertas especiales de Mate Haus" />}
        />

        {/* Página contacto */}
        <Route
          path="/contacto"
          element={<ItemListContainer greeting="Contáctanos para más información" />}
        />

        {/* Ruta 404 */}
        <Route
          path="*"
          element={<ItemListContainer greeting="404 - Página no encontrada" />}
        />
      </Routes>
    </>
  );
}

export default App;


