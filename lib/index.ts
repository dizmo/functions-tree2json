/**
 * For a given path traverses a tree-like structure in-order, and returns an
 * array containing the sub-tree of the corresponding node.
 *
 * The node value is reported as the first element of the array, after which
 * the subnodes are listed as second and consecutive elements. Further, each
 * of the values of the subnodes are packed in their own arrays as well.
 *
 * @param path path of a node to traverse, where `null` implies root
 * @param value value function returning the value of a node
 * @param nodes nodes function returning the subnodes of a node
 * @param separator separator string between path elements
 *
 * @returns an array representation of sub-tree
 */
export const tree2array = function t2a(
    path: string | null,
    value: (path: string | null) => any,
    nodes: (path: string | null) => string[],
    separator = "/",
): {
    [index: number]: any,
} {
    if (path !== null && path.startsWith(separator)) {
        path = path.slice(1);
    }
    if (path !== null && path.endsWith(separator)) {
        path = path.slice(0, -1);
    }
    const my_nodes: string[] = nodes(path);
    if (my_nodes && my_nodes.length > 0) {
        const my_array: {[index: number]: any} = [
            value(path),
        ];
        my_nodes.forEach((node, i) => {
            my_array[i + 1] = [node, t2a(
                `${path || ""}${separator}${node}`, value, nodes,
                separator = separator,
            )];
        });
        return my_array;
    } else {
        return [value(path)];
    }
};

/**
 * For a given path traverses a tree-like structure in-order, and returns an
 * object containing the sub-tree of the corresponding node. Also, if exists
 * the node value is reported by default as the "underscore" item within the
 * object.
 *
 * @param path path of a node to traverse, where `null` implies root
 * @param value value function returning the value of a node
 * @param nodes nodes function returning the subnodes of a node
 *
 * @param separator separator string between path elements
 * @param value_key default value key for node values
 *
 * @returns an array representation of sub-tree
 */
export const tree2object = function t2o(
    path: string | null,
    value: (path: string | null) => any,
    nodes: (path: string | null) => string[],
    separator = "/", value_key = "_",
): {
    [key: string]: any,
} {
    if (path !== null && path.startsWith(separator)) {
        path = path.slice(1);
    }
    if (path !== null && path.endsWith(separator)) {
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
            my_object[node] = t2o(
                `${path || ""}${separator}${node}`, value, nodes,
                separator = separator, value_key = value_key,
            );
        });
        return my_object;
    } else {
        return my_value;
    }
};

export default tree2array;
