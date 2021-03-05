// Nombre que se va a llamar el LocalStore
const USER = 'user';

//Guardar el Usuario LocalStorage en navegdor convirtiendo a string
export const saveLocalStorage = (user) => {
   const userString = JSON.stringify(user);
   localStorage.setItem(USER, userString);
};

//Elimina el LocalStorage del navegador
export const deleteLocalStorage = () => {
   localStorage.removeItem(USER);
};

//retorna el valor de localstorage del navegador como objeto
export const sendLocalStorage = () => {
   const user = JSON.parse(localStorage.getItem(USER));
   return user;
};

//Consulta si hay guardado un LocalStorage en el navegador
export const isLocalStorage = () => {
   if (localStorage.getItem(USER)) {
      return true;
   }

   return false;
};
