const guardRoute = (to, from, next) => {
  let isAuthenticated = false;
  if (localStorage.getItem('token')) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next();
  } else {
    next('/');
  }
};

export default guardRoute;
