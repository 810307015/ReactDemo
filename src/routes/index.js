import { AsyncComponent } from 'Utils/component';

const Main = AsyncComponent(() => import('Pages/main'));
const Home = AsyncComponent(() => import('Pages/Home'));
const HelloWorld = AsyncComponent(() => import('Components/test/HelloWorld'));

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
        component: HelloWorld
      }
    ]
  }
];

export default routes;