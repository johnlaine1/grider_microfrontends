import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const root = document.querySelector('#__dev-root__');

  if (root) {
    mount(root);
  }
}

export { mount };
