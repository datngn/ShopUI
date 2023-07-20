import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
const App = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
};

export default App;
