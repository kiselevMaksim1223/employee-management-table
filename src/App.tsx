import './App.css';
import Layout from './components/Layout/Layout.tsx';
import { ThemeProvider } from './providers/theme/ThemeProvider.tsx';
import { UsersContextProvider } from './providers/users/UsersProvider.tsx';

function App() {
  return (
    <ThemeProvider>
      <UsersContextProvider>
        <Layout />
      </UsersContextProvider>
    </ThemeProvider>
  );
}

export default App;
