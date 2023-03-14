import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import RecipeBook from "./RecipeBook";
function App() {
  return (
    <React.Fragment>
      <div className="container">
        <RecipeBook/>
      </div>
    </React.Fragment>
  );
}

export default App;
