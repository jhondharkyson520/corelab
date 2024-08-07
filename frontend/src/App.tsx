import Header from "./components/Header";
import CreateNotes from "./pages/createNotes";
import FavoritesNotes from "./pages/favorites";
import OthersNotes from "./pages/others";


function App() {

  return (
    <>
      <Header/>
      <CreateNotes/>
      <FavoritesNotes/>
      <OthersNotes/>
    </>
  )
}

export default App;
