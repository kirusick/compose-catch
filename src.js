export default (...handlers) => (err) => {
  let res = err;

  handlers.some(handler => {
    try {
      res = handler(res);
      return true;
    } catch (e) {
      res = e;
      return false;
    }
  })

  return res;
}