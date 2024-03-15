/// <reference types="react" />
/**
 *  Input Hierarchy Component
 * - Provides a frame for global controls and tree structure
 * - Fetches the complete tree of concepts in a concept scheme.
 * - Displays the tree in a nested list.
 * TODO: type document, likely via extended SanityDocument type.
 */
export declare const InputHierarchy: ({ branchId, selectConcept, inputComponent, }: {
    branchId: string;
    selectConcept?: any;
    inputComponent?: Boolean | undefined;
}) => import("react").JSX.Element;
export default InputHierarchy;
