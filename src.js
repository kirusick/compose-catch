export default function composeHandlers(err, ...handlers) {
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