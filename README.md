"# compose-catch" 

Compose your catch handlers

`js
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
`