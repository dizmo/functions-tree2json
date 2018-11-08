export declare function json2tree(root: string, item: any, mapper: (key: string, value: any) => any): boolean;
export declare function tree2json(root: string, lister: (key: string) => string[], mapper: (key: string) => any): {
    [key: string]: any;
};
export default tree2json;
//# sourceMappingURL=index.d.ts.map