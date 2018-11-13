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
export declare const tree2array: (path: string | null, value: (path: string | null) => any, nodes: (path: string | null) => string[], separator?: string) => {
    [index: number]: any;
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
export declare const tree2object: (path: string | null, value: (path: string | null) => any, nodes: (path: string | null) => string[], separator?: string, value_key?: string) => {
    [key: string]: any;
};
export default tree2array;
//# sourceMappingURL=index.d.ts.map