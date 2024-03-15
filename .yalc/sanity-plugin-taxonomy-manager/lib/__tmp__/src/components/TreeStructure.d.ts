/// <reference types="react" />
import { DocumentConcepts } from '../types';
/**
 * Tree View
 * - Fetches the complete tree of concepts in a concept scheme, stemming
 *   from Top Concepts or Orphans
 * - Displays the tree in a nested list.
 */
export declare const TreeStructure: ({ concepts, inputComponent, selectConcept, }: {
    concepts: DocumentConcepts;
    inputComponent: Boolean;
    selectConcept: any;
}) => import("react").JSX.Element;
