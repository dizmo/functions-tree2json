export class TreeMock {
    public static value(path: string | null) {
        switch (path) {
            case null:
                return undefined;
            case "a":
                return "α";
            case "b":
                return "β";
            case "b/i":
                return 0;
            case "b/j":
                return 1;
            case "b/k":
                return 2;
            case "c":
                return "γ";
            case "c/x":
                return "ξ";
            case "c/x/y":
                return "υ";
            case "c/x/y/z":
                return "ζ";
            default:
                return undefined;
        }
    }
    public static nodes(path: string | null): string[] {
        switch (path) {
            case null:
                return ["a", "b", "c"];
            case "a":
                return [];
            case "b":
                return ["i", "j", "k"];
            case "c":
                return ["x"];
            case "c/x":
                return ["y"];
            case "c/x/y":
                return ["z"];
            case "c/x/y/z":
                return null as any;
            default:
                return undefined as any;
        }
    }
}

export default TreeMock;
