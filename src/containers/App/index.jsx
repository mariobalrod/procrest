import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Root from '../Root';
import queryClient from '../../data/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;