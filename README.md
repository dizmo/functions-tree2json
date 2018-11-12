[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-tree2json.svg)](https://npmjs.org/package/@dizmo/functions-tree2json)
[![Build Status](https://travis-ci.org/dizmo/functions-tree2json.svg?branch=master)](https://travis-ci.org/dizmo/functions-tree2json)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-tree2json/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-tree2json?branch=master)

# @dizmo/functions-tree2json
Library module.

## Usage
### Install
```sh
npm install @dizmo/functions-tree2json --save
```
### Require
```javascript
let lib = require('@dizmo/functions-tree2json');
```
### Examples
```typescript
import { tree2array } from '@dizmo/functions-tree2json';
import { tree2object } from '@dizmo/functions-tree2json';
```
```typescript
declare const db: {
    // db should return value for given path (or root)
    get: (path: string | null) => any;
    // db should return nodes for given path (or root)
    see: (path: string | null) => string[];
};
const root_array
    = tree2array(null, db.get, db.see);
const node_array
    = tree2array('path/to/node', db.get, db.see);
const root_object
    = tree2object(null, db.get, db.see);
const node_object
    = tree2object('path/to/node', db.get, db.see);
```
## Development
### Build
```sh
npm run build
```
#### without linting:
```sh
npm run -- build --no-lint
```
### Lint
```sh
npm run lint
```
#### with auto-fixing (for JavaScript and TypeScript):
```sh
npm run -- lint --fix
```
### Test
```sh
npm run test
```
#### without (re-)building:
```sh
npm run -- test --no-build
```
### Cover
```sh
npm run cover
```
#### without (re-)building:
```sh
npm run -- cover --no-build
```

## Copyright

 © 2018 [Hasan Karahan](https://github.com/hsk81)
