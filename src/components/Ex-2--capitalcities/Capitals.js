import { Component } from "react";
import "./style.css";

class Capitals extends Component {
  state = {
    countries: [
      { countryName: "Iran", capitalCity: "Tehran", id: "1" },
      { countryName: "Canada", capitalCity: "Ottawa", id: "2" },
      { countryName: "France", capitalCity: "Paris", id: "3" },
      { countryName: "Astria", capitalCity: "Vienna", id: "4" },
      { countryName: "Germany", capitalCity: "Berlin", id: "5" },
      { countryName: "Greece", capitalCity: "Athen", id: "6" },
      { countryName: "Italy", capitalCity: "Rome", id: "7" },
      { countryName: "Japan", capitalCity: "Tokyo", id: "8" },
      { countryName: "Argentina", capitalCity: "Buenos Aires	", id: "9" },
      { countryName: "Finland", capitalCity: "Helsinki", id: "10" },
    ],
  };
  render() {
    return (
      <div className="container">
        {this.state.countries.map((country) => {
          const { countryName, capitalCity, id } = country;
          return (
            <div className="card" key={id}>
              <p className="text">Country :</p>
              <h2 className="card-title"> {countryName}</h2>
              <p className="text">Capital :</p>
              <p className="card-text ">{capitalCity}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Capitals;
