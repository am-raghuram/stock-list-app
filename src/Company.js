import React from 'react';

//Company details stateless component - Renders the companyName and stockPrice based on user selection
const Company = props => {
    console.log(props);
    console.log(typeof props.details.price != "undefined");
    const {name, price} = props.details;
    return (
      <div>
        <h3>{name}</h3>
        {typeof price != "undefined" ? <h4>Current Stock Price:<span  className= {price !== "Current price not available !" ? "priceAvailable" : "priceUnavailable" }> {price}</span></h4> : ""}
      </div>
    );
  }
  
  export default Company;