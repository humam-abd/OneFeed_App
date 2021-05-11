import { Header } from "../components/Header";
import "../styles/App.css";
import "../styles/Utilities.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header title={"News App"} />
      </div>
    </div>
  );
}

export default App;

//http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//api_key: b8068511fac1726456ad46e22477ba19

//https://newsapi.org/v2/everything?q=tesla&from=2021-04-11&sortBy=publishedAt&apiKey={API key}&language=en
//newsapi_key : d71dd9ea713d45b6a910ec88bd26081a
