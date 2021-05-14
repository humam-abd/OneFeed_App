import { Header } from "../components/Header";
import { NewsContainer } from "../components/NewsContainer";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header title={"One Feed"} />
      <NewsContainer />
    </div>
  );
}

export default App;
