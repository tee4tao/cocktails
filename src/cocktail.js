import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
export let Cocktail = () => {
  let { id } = useParams();
  let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  let { data, isLoading } = useFetch(url);
  let { drinks } = data;
  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <section className="cocktail-page">
      {drinks.map((item) => {
        let {
          idDrink,
          strAlcoholic,
          strCategory,
          strDrink,
          strGlass,
          strDrinkThumb,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
        } = item;
        if (idDrink === id) {
          return (
            <article className="drinks-container" key={idDrink}>
              <Link to="/">
                <button className="home-btn">back home</button>
              </Link>
              <h1 className="drink-name cocktail-name">{strDrink}</h1>
              <div className="cocktail-details">
                <img
                  src={strDrinkThumb}
                  alt={strDrink}
                  className="cocktail-img"
                />
                <div className="more-info">
                  <h4 className="item-name">
                    <span className="name title">name:</span>
                    <span className="answer">{strDrink}</span>
                  </h4>
                  <h4 className="item-category">
                    <span className="category title">category:</span>
                    <span className="answer">{strCategory}</span>
                  </h4>
                  <h4 className="item-info">
                    <span className="info title">info:</span>
                    <span className="answer">{strAlcoholic}</span>
                  </h4>
                  <h4 className="item-glass">
                    <span className="glass title">glass:</span>
                    <span className="answer">{strGlass}</span>
                  </h4>
                  <h4 className="item-instructions">
                    <span className="instructions title">instructions:</span>
                    <span className="answer">{strInstructions}</span>
                  </h4>
                  <h4 className="item-ingredients">
                    <span className="ingredients title">ingredients:</span>
                    <span className="answer">
                      {strIngredient1} {strIngredient2} {strIngredient3}
                    </span>
                  </h4>
                </div>
              </div>
            </article>
          );
        }
      })}
    </section>
  );
};
