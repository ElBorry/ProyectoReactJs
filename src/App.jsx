import NavBar from "./components/FolderNavBar/NavBarIn";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="Hola Mundo!" />
    </div>
  );
}

export default App;
