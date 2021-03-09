export default {
   groupsFetch: () => {
      return fetch(
         'https://my-json-server.typicode.com/aguirregonzaloa/groupapifake/groups',
      )
         .then((response) => response.json())
         .then((data) => data);
   },
};
