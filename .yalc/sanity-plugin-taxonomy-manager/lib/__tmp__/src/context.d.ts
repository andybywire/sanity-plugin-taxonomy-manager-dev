/// <reference types="react" />
type TreeContextType = {
    globalVisibility?: {
        treeId: string;
        treeVisibility: string;
    };
    editControls?: boolean;
};
export declare const SchemeContext: import("react").Context<null>;
export declare const TreeContext: import("react").Context<TreeContextType>;
export {};
