import NewsContext from '../context/NewsProvider';
import { useContext } from 'react';

const useNews = () => {
  return useContext(NewsContext);
};

export default useNews;
