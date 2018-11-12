"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tree2array = function t2a(path, value, nodes) {
    var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";

    if (path !== null && path.startsWith(sep)) {
        path = path.slice(1);
    }
    if (path !== null && path.endsWith(sep)) {
        path = path.slice(0, -1);
    }
    var my_nodes = nodes(path);
    if (my_nodes && my_nodes.length > 0) {
        var my_array = [value(path)];
        my_nodes.forEach(function (n, i) {
            my_array[i + 1] = [n, t2a("" + (path || "") + sep + n, value, nodes)];
        });
        return my_array;
    } else {
        return [value(path)];
    }
};
exports.tree2object = function t2o(path, value, nodes) {
    var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";
    var value_key = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "_";

    if (path !== null && path.startsWith(sep)) {
        path = path.slice(1);
    }
    if (path !== null && path.endsWith(sep)) {
        path = path.slice(0, -1);
    }
    var my_value = value(path);
    var my_nodes = nodes(path);
    if (my_nodes && my_nodes.length > 0) {
        var my_object = {};
        if (my_value !== undefined) {
            my_object[value_key] = my_value;
        }
        my_nodes.forEach(function (node) {
            my_object[node] = t2o("" + (path || "") + sep + node, value, nodes);
        });
        return my_object;
    } else {
        return my_value;
    }
};
exports.default = exports.tree2array;
//# sourceMappingURL=index.js.map