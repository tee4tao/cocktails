import { useState, useEffect } from "react";

export const useFetch = (url) => {
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState([]);
  let [cocktails, setCocktails] = useState([]);
  // let [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        // setIsLoading(true);
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        // let { cocktails } = data;
        // console.log(cocktails);
        let { drinks } = data;
        if (drinks) {
          setCocktails(drinks);
        } else {
          setCocktails([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return { data, isLoading, setIsLoading, cocktails, setCocktails };
};
