import { createStore } from 'vuex';

import siteModule from './modules/default/index.js';
import multilanguageModule from './modules/multilanguage/index.js';

const store = createStore({
  modules: {
    default: siteModule,
    multilang: multilanguageModule,
  }
});

export default store;