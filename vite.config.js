import { resolve } from 'path';

export default {
  // config options
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        application_form: resolve(__dirname, 'application_form/index.html'),
      },
    },
  },
};
