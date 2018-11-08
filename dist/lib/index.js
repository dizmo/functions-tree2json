"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
function json2tree(root, item, mapper) {
    if (root.endsWith("/")) {
        root = root.slice(0, -1);
    }
    if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
        for (var key in item) {
            if (item.hasOwnProperty(key)) {
                if (!json2tree(root + "/" + key, item[key], mapper)) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return mapper(root, item) !== false;
    }
}
exports.json2tree = json2tree;
function tree2json(root, lister, mapper) {
    if (root.endsWith("/")) {
        root = root.slice(0, -1);
    }
    var nodes = lister(root);
    if (nodes && nodes.forEach) {
        var tree = {};
        nodes.forEach(function (node) {
            tree[node] = tree2json(node, lister, mapper);
        });
        return tree;
    } else {
        return mapper(root);
    }
}
exports.tree2json = tree2json;
exports.default = tree2json;
//# sourceMappingURL=index.js.map