import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchDrinks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktils = drinks.map((item) => {
          const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktils);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [fetchDrinks, searchTerm]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
