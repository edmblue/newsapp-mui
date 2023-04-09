import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  const [newsList, setNewsList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);

  const handleSelectedPage = (e, valor) => {
    setSelectedPage(valor);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const newsApiRequest = async () => {
    setSelectedPage(1);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    try {
      const response = await axios(url);
      const { data } = response;

      setTotalResults(data.totalResults);
      setNewsList(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const newsApiPageRequest = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${selectedPage}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    try {
      const response = await axios(url);
      const { data } = response;

      setTotalResults(data.totalResults);
      setNewsList(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApiRequest();
  }, [category]);

  useEffect(() => {
    newsApiPageRequest();
  }, [selectedPage]);

  return (
    <NewsContext.Provider
      value={{
        category,
        handleCategoryChange,
        newsList,
        totalResults,
        handleSelectedPage,
        selectedPage,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
