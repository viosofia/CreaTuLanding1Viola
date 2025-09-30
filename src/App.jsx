import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Inicio muestra todos los productos */}
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Mate Haus" />} />
        
        {/* Filtrado por categoría */}
        <Route path="/category/:category" element={<ItemListContainer greeting="Productos filtrados" />} />
        
        {/* Detalle de producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


