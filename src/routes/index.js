import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import ProductList from '../pages/ProductList';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/cart', component: Cart },
  { path: '/product', component: Product },
  { path: '/product-list', component: ProductList },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
