# compose-catch 

Compose your catch handlers

```
npm i compose-catch
```

handlers.js
```js
export function forbidenHandler(error) {
    if (error.status === 403) {
        /* Do something */;
    } else {
        throw error;
    }
}

export function notFoundHandler(error) {
    if (error.status === 404) {
        /* Do something */;
    } else {
        throw error;
    }
}

export function commonHandler(error) {
    /* Do something */
}
```

```js
import composeCatch from 'compose-catch';
import { forbidenHandler, notFoundHandler, commonHandler } from './handlers';

try {
    const res = await fetch();
} catch (error) {
    return composeCatch(
        forbidenHandler,
        notFoundHandler,
        commonHandler,
    )(error);
}
```

You also can create composed handler and use it in all project

composedHandlers.js
```js
import composeCatch from 'compose-catch';
import { forbidenHandler, notFoundHandler, commonHandler } from './handlers';

export const composedHandler = composeCatch(
    forbidenHandler,
    notFoundHandler,
    commonHandler,
);
```

```js
import { composedHandler } from './composedHandlers';

try {
    const res = await fetch();
} catch (error) {
    return composedHandler(error);
}
```
