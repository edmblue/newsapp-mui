import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@mui/material';

const NewsItem = ({ news }) => {
  const { title, urlToImage, source, url } = news;

  const sourceName = source.name;

  return (
    <>
      {urlToImage !== null && (
        <Grid item md={4} lg={3} xs={12}>
          <Card>
            <Link href={url} target="_blank">
              <CardMedia
                component="img"
                alt={`Image from ${title}`}
                image={urlToImage}
                height={'120px'}
              ></CardMedia>
            </Link>
            <CardContent sx={{ height: '4rem' }}>
              <Typography
                variant="caption"
                component="p"
                sx={{ color: 'tomato' }}
              >
                {sourceName}
              </Typography>
              <Typography
                variant="button"
                component="h2"
                sx={{ fontWeight: 'bold', fontSize: '0.6rem' }}
              >
                {title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};
export default NewsItem;
