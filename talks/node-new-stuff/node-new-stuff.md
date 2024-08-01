# Node new stuff

0. styleText
1. watch mode
2. test
3. glob
4. typescript ( tsx / strip types )
5. import.meta.dirname / import.meta.filename
6. SQLite built-in
7. SEA - Single executable applications (No Electron needed)
8. Corepack
9. parseArgs
10. parseEnv
11. WebSocket ( no socket.io needed )

## styleText
https://www.npmjs.com/package/chalk


## import meta

```ts
    // then 
    import * as url from 'url';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    // now
    import.meta.filename
    import.meta.dirname
```

## Why to use new stuff ?

### it is already built-in

###  Source code
node's version is stupidly simple
chalk is quite a bit complicated

### Less deps to maintain

### Less shit to choose from
