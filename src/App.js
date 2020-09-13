import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const appID = 'e9a73a50';
  const appKey = '075b07b117d1d7b7426e3025d9ed4052';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`);
      const data = await response.json();
      setRecipes(data.hits);
      //console.log(data.hits);
    }
    getRecipes();
  }, [query]);

  /*const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`);
    const data = await response.json();
    setRecipes(data.hits);
  }*/

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" value={search} className="search-bar" onChange={updateSearch} />
        <button className="search-btn">search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (<Recipe
          title={recipe.recipe.label}
          key={recipe.recipe.label} //key prop should be unique. make it unique later.
          imgsrc={recipe.recipe.image}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
