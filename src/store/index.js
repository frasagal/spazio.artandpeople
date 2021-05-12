import { createStore } from 'vuex';

import siteModule from './modules/default/index.js';

const store = createStore({
  modules: {
    default: siteModule,
  }
});

export default store;