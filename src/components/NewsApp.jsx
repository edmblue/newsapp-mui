import {
  Container,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Grid,
  Pagination,
} from '@mui/material';
import { CATEGORIAS } from '../data';
import styled from '@emotion/styled';
import NewsList from './NewsList';
import useNews from '../hooks/useNews';

const NewsPgh = styled.p`
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  color: #747171;
  font-weight: bold;
`;

const NewsApp = () => {
  const {
    category,
    handleCategoryChange,
    totalResults,
    handleSelectedPage,
    selectedPage,
  } = useNews();

  const numPages = Math.ceil(+totalResults / 20);

  return (
    <Container>
      <header>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xxs: 'column', md: 'row' }}
          marginY={'2rem'}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: '700' }}>
            NewsApp
          </Typography>
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            direction={{ xxs: 'column', md: 'row' }}
            spacing={'2rem'}
          >
            <NewsPgh>Select the News You Want to Search</NewsPgh>
            <Box sx={{ width: '10rem' }}>
              <FormControl fullWidth>
                <InputLabel id="news-id">News</InputLabel>
                <Select
                  labelId="news-id"
                  label="categories"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  {CATEGORIAS.map((item, i) => {
                    return (
                      <MenuItem key={i} value={item.value}>
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Stack>
      </header>
      <main>
        <Grid container px="2rem" py="1rem" sx={{ background: '#eeeeee' }}>
          <NewsList />
        </Grid>
      </main>
      <Stack
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
        marginY={'2rem'}
      >
        <Pagination
          count={numPages}
          color="primary"
          onChange={handleSelectedPage}
          page={selectedPage}
        />
      </Stack>
    </Container>
  );
};

export default NewsApp;
