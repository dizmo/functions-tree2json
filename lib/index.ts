export function json2tree(
    root: string, item: any, mapper: (key: string, value: any) => any,
): boolean {
    if (root.endsWith("/")) {
        root = root.slice(0, -1);
    }
    if (typeof(item) === "object" && item !== null) {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                if (!json2tree(`${root}/${key}`, item[key], mapper)) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return mapper(root, item) !== false;
    }
}

export function tree2json(
    root: string, lister: (key: string) => string[], mapper: (key: string) => any,
): {
    [key: string]: any,
} {
    if (root.endsWith("/")) {
        root = root.slice(0, -1);
    }
    const nodes = lister(root);
    if (nodes && nodes.forEach) {
        const tree: {[key: string]: any} = {};
        nodes.forEach((node: string) => {
            tree[node] = tree2json(node, lister, mapper);
        });
        return tree;
    } else {
        return mapper(root);
    }
}

export default tree2json;
