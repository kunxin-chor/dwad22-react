import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import RecipeBook from "./RecipeBook";

function App() {
  return (
   <React.Fragment>
    <div className="container">
      <h1>RecipeBook</h1>
      <RecipeBook/>
    </div>
    </React.Fragment>
  );
}

export default App;
