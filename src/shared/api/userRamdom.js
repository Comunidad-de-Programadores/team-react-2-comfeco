export default {
   getUser: () => {
      return fetch('https://randomuser.me/api/')
         .then((response) => response.json())
         .then((data) => data.results);
   },
};
