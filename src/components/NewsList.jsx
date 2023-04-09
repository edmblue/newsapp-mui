import useNews from '../hooks/useNews';
import { Grid } from '@mui/material';
import NewsItem from './NewsItem';

const NewsList = () => {
  const { newsList } = useNews();

  return (
    <Grid container spacing={3}>
      {newsList.map((news, i) => {
        return <NewsItem key={i} news={news} />;
      })}
    </Grid>
  );
};

export default NewsList;
