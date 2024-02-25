if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}

import '../css/main.css';

console.log('hello');
