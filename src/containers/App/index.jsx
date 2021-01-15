import { QueryClientProvider } from 'react-query';
import Root from '../Root';
import queryClient from '../../data/queryClient';

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}

export default App;