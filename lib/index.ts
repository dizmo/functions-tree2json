export const tree2array = function t2a(
    path: string | null,
    value: (path: string | null) => any,
    nodes: (path: string | null) => string[],
    sep = "/",
): {
    [index: number]: any,
} {
    if (path !== null && path.startsWith(sep)) {
        path = path.slice(1);
    }
    if (path !== null && path.endsWith(sep)) {
        path = path.slice(0, -1);
    }
    const my_nodes: string[] = nodes(path);
    if (my_nodes && my_nodes.length > 0) {
        const my_array: {[index: number]: any} = [
            value(path),
        ];
        my_nodes.forEach((n, i) => {
            my_array[i + 1] = [n, t2a(`${path || ""}${sep}${n}`, value, nodes)];
        });
        return my_array;
    } else {
        return [value(path)];
    }
};

export const tree2object = function t2o(
    path: string | null,
    value: (path: string | null) => any,
    nodes: (path: string | null) => string[],
    sep = "/", value_key = "_",
): {
    [key: string]: any,
} {
    if (path !== null && path.startsWith(sep)) {
        path = path.slice(1);
    }
    if (path !== null && path.endsWith(sep)) {
        path = path.slice(0, -1);
    }
    const my_value: any = value(path);
    const my_nodes: string[] = nodes(path);
    if (my_nodes && my_nodes.length > 0) {
        const my_object: { [k: string]: any} = {};
        if (my_value !== undefined) {
            my_object[value_key] = my_value;
        }
        my_nodes.forEach((node) => {
            my_object[node] = t2o(`${path || ""}${sep}${node}`, value, nodes);
        });
        return my_object;
    } else {
        return my_value;
    }
};

export default tree2array;
