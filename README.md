[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-tree2json.svg)](https://npmjs.org/package/@dizmo/functions-tree2json)
[![Build Status](https://travis-ci.org/dizmo/functions-tree2json.svg?branch=master)](https://travis-ci.org/dizmo/functions-tree2json)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-tree2json/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-tree2json?branch=master)

# @dizmo/functions-tree2json

Provides two functions `tree2array` and `tree2object`, where:

* `tree2array`: maps a hierarchical tree recursively to an array via the `get` (returning the value for a node) and `see` (returning the sub-nodes for a node) callback functions, until the tree is completely mapped (or `see` returning an empty list `[]` for the node).

The array is a recursive description of a tree, where the *value* of a given node is at index `0` of the array followed *optionally* by other arrays, each containing the *name* followed by a *sub-tree* for any given sub-nodes. Each sub-tree is again yet another array according to the same recursive description.

* `tree2object`: maps a hierarchical tree recursively to a JSON-like object via te `get` (returning the value for a node) and `see` (returning the sub-nodes for a node) callback functions, until the tree is completely mapped (or `see` returning an empty list `[]` for the node).

The object conforms to the same rules like any regular JSON or JavaScript object, with the addition that the values of nodes can be directly represented using an underscore `_` for the key value.

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

#### with UMD support (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD support (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
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

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2019 [dizmo AG](http://dizmo.com/), Switzerland
