import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "./useFetch";
export let Home = () => {
  let [searchTerm, setSearchTerm] = useState("");
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  let { isLoading, cocktails } = useFetch(url);
  let refContainer = useRef("");
  // useEffect(() => {
  //   refContainer.current.focus();
  // }, []); // Was trying to use this to focus on my input but it's not working

  if (isLoading) {
    return <div className="loader"></div>;
  }

  let searchDrink = () => {
    let filterTimeout = setTimeout(() => {
      setSearchTerm(refContainer.current.value);
    }, 1500);
  };
  let handleSubmit = (e) => {
    e.preventDefault(); // this prevent the page from reloading anytime we click enter while typing in the input
  };
  return (
    <section className="home-page">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="search">search your favorite cocktail</label>
        <input
          type="text"
          id="search"
          ref={refContainer}
          onChange={searchDrink}
          placeholder={"search"}
        />
      </form>
      {cocktails.length >= 1 && (
        <>
          <h1 className="home-heading">cocktails</h1>
          <section className="container">
            {cocktails.map((item) => {
              let { idDrink, strAlcoholic, strDrink, strGlass, strDrinkThumb } =
                item;
              if (cocktails) {
                return (
                  <article key={idDrink} className="drinks-details">
                    <img
                      src={strDrinkThumb}
                      alt={strDrink}
                      className="drink-img"
                    />
                    <div className="drink-info">
                      <h1 className="drink-name">{strDrink}</h1>
                      <h3 className="drink-glass">{strGlass}</h3>
                      <p className="drink-type">{strAlcoholic}</p>
                      <Link to={`cocktail/${idDrink}`}>
                        <button className="details-btn">details</button>
                      </Link>
                    </div>
                  </article>
                );
              }
            })}
          </section>
        </>
      )}

      {cocktails.length < 1 && (
        <h1 className="no-cocktails">
          No Cocktails Matched Your Search Criteria
        </h1>
      )}
    </section>
  );
};
let Form = () => {};
