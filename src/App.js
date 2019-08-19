import React from 'react';
import Select, { createFilter } from "react-select";
import MenuList from "./MenuList"
import Company from "./Company"
import './App.css';

//Main component which loads symbols accepts user selection
class App extends React.Component {
  state = {
    selectedOption: [],
    symbol: []
  };

  handleChange = selectedOption => {

    console.log(`Option selected:`, selectedOption);
    let selectedSymbol = selectedOption.label;

    fetch('/api/tops/last?symbols=' + selectedSymbol)
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        if (data.length > 0) {
          selectedOption.price = data[0].price + ' USD';
        } else {
          selectedOption.price = "Current price not available !"
        }
        this.setState({ selectedOption });
        console.log(this.state)
      }).catch((error) => {
        console.log(error);
        this.setState({ selectedOption });
      });;
  };

  //Load all symbols form API once the component gets mounted
  componentDidMount() {
    fetch('/api/ref-data/symbols')
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          symbol: parseSymbols(data),
        });
      }).catch((error) => {
        console.log(error);

      });
  }

  render() {
    return (
      <div className="parentContainer">
        <h4>Pick your company symbol:</h4>
        <Select
          className="selectPick"
          filterOption={createFilter({ ignoreAccents: false })}
          components={{ MenuList }}
          options={this.state.symbol}
          onChange={this.handleChange}
        />
        <div className="selectedDetails">
          <Company details={this.state.selectedOption} />

        </div>

      </div>
    );
  }
}

//Helper funciton to build select dropdown
function parseSymbols(symbols) {
  return symbols.map((symbol) => {
    return { label: symbol.symbol, value: symbol.iexId, name: symbol.name };
  });
}

export default App;
