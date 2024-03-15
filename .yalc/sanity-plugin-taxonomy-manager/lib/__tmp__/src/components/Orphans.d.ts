/// <reference types="react" />
import { ChildConceptTerm } from '../types';
type OrphanProps = {
    concept: ChildConceptTerm;
    treeVisibility: string;
    inputComponent: Boolean;
    selectConcept: any;
};
/**
 * Orphan Concept Component
 * Renders a list of orphan concepts for a given schema.
 * TODO: consider modularizing add and remove buttons
 */
export declare const Orphans: ({ concept, treeVisibility, inputComponent, selectConcept }: OrphanProps) => import("react").JSX.Element;
export {};
