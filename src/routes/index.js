import { AsyncComponent } from 'Utils/component';

const Main = AsyncComponent(() => import('Pages/main'));
const Home = AsyncComponent(() => import('Pages/Home'));
const Test = AsyncComponent(() => import('Pages/test'));
const Subscribe = AsyncComponent(() => import('Pages/subscribe'));

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
      },
      {
        path: '/subscribe',
        component: Subscribe
      }
    ]
  }
];

export default routes;