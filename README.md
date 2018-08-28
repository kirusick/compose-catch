# compose-catch 

Compose your catch handlers

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
        error,
        forbidenHandler,
        notFoundHandler,
        commonHandler,
    );
}
```
