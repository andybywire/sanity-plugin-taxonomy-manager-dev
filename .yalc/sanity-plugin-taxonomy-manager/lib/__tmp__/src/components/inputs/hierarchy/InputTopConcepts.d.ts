/// <reference types="react" />
import { TopConceptTerm } from '../../../types';
type TopConceptsProps = {
    concept: TopConceptTerm;
    treeVisibility: string;
    inputComponent: Boolean;
    selectConcept: any;
};
/**
 * Top Concept Component
 * Renders a list of top concepts for a given schema.
 * TODO: consider modularizing add and remove buttons
 */
export declare const InputTopConcepts: ({ concept, treeVisibility, inputComponent, selectConcept, }: TopConceptsProps) => import("react").JSX.Element;
export {};
