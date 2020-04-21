import React from "react";
import "./styles.css";
import { Header } from "./components/header.component";
import { GamesList } from "./components/games-list.component";
const years = ["2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000"]

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      gamesList: [],
      isLoading: true,
      apiData:[]
    };
  }

   filterList = (event) => {
     let gamesList = this.state.apiData;
     let updatedGamelist = gamesList.filter((item) => {
       return item.title.toString().toLowerCase().includes(event.target.value.toLowerCase())
     });
     this.setState({
       gamesList: updatedGamelist
     });

     if (!event.target.value) {
         this.setState({
           gamesList: this.state.apiData
         });
     }
   }
   updateYear = (event) => {
      let gamesList = this.state.apiData;
      let updatedGamelist = gamesList.filter((item) => {
        return item.release_year == (event.target.value)
      });

      this.setState({
        gamesList: updatedGamelist
      });

      if (!event.target.value) {
        this.setState({
          gamesList: this.state.apiData
        });
      }
   }
    updateYear = (event) => {
      let gamesList = this.state.apiData;
      let updatedGamelist = gamesList.filter((item) => {
        return item.release_year == (event.target.value)
      });

      this.setState({
        gamesList: updatedGamelist
      });

      if (!event.target.value) {
        this.setState({
          gamesList: this.state.apiData
        });
      }
   }
    
   scoreSort = (event) => {
      let gamesList = this.state.apiData;
       let updatedGamelist;
      if (event.target.value === '0') {
        updatedGamelist = gamesList.sort((a, b) => a.score - b.score)
      }

      if (event.target.value === '1') {
        updatedGamelist = gamesList.sort((a, b) => a - b).reverse();
      }
     

      this.setState({
        gamesList: updatedGamelist
      });

      if (!event.target.value) {
        this.setState({
          gamesList: this.state.apiData
        });
      }
   }

  fetchGames() {
    fetch(`http://starlord.hackerearth.com/gamesext`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          gamesList: data,
          isLoading: false,
          apiData:data
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
         <div className="form-group">
          <input type="text" className="search-game" placeholder="Search" onChange={this.filterList}/>
          <div>
            <span>Sort by Year: </span> 
            <select onChange={this.updateYear}>
                  <option value="" selected>select</option>
              {
                years.map(year => (
                <option value={year}>{year}</option>
                ))
              }
          </select>
          </div>
            <div>
            <span>Sort by score: </span> 
            <select onChange={this.scoreSort}>
                  <option value="" selected>select</option>
                  <option value="0">Accending</option>
                  <option value="1">Decending</option>
          </select>
          </div>
        </div>
        <GamesList gameList={this.state.gamesList} />
      </div>
    );
  }
}
export default App;
