import { AsyncComponent } from 'Utils/component';

const Main = AsyncComponent(() => import('Pages/main'));
const Home = AsyncComponent(() => import('Pages/Home'));
const Test = AsyncComponent(() => import('Pages/test/'));

const routes = [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/hello',
        component: Test
      }
    ]
  }
];

export default routes;