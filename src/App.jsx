import NewsApp from './components/NewsApp';
import { NewsProvider } from './context/NewsProvider';

function App() {
  return (
    <NewsProvider>
      <NewsApp />
    </NewsProvider>
  );
}

export default App;
