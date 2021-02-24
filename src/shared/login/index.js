const EMAIL = 'email';

export const login = (email) => {
   localStorage.setItem(EMAIL, email);
};

export const logout = () => {
   localStorage.removeItem(EMAIL);
};

export const isLogin = () => {
   if (localStorage.getItem(EMAIL)) {
      return true;
   }

   return false;
};
