/// <reference types="react" />
/**
 * Tree View Component Wrapper
 * This is the view component for the hierarchy tree. It is the
 * top level of concept scheme views and is passed into Desk
 * structure to render the primary view for taxonomy documents.
 * TODO: Extend SanityDocument type to include display properties.
 *       What is the type of the document object returned by the Desk
 *       structure?
 */
export declare const TreeView: ({ document, branchId, selectConcept, inputComponent, }: {
    document: any;
    branchId: string;
    selectConcept: any;
    inputComponent?: boolean | undefined;
}) => import("react").JSX.Element;
export default TreeView;
