import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { UserContextProvider } from './contexts/userContext';
import { router } from './views/Routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
          <RouterProvider router={router}/>
          </UserContextProvider>
        </QueryClientProvider>
    </div>
  );
}

export default App;
