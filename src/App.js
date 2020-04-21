import React from "react";
import "./styles.css";
import { Header } from "./components/header.component";
import { GamesList } from "./components/games-list.component";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      gamesList: [],
      isLoading: true
    };
  }

  fetchGames() {
    fetch(`http://starlord.hackerearth.com/gamesext`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          gamesList: data,
          isLoading: false
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchGames();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GamesList gameList={this.state.gamesList} />
        <h2>Start editing to see some magic happes</h2>
      </div>
    );
  }
}
export default App;
