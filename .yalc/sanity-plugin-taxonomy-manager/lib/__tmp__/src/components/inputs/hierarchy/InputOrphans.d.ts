/// <reference types="react" />
import { ChildConceptTerm } from '../../../types';
/**
 * Orphan Concept Component
 * Renders a list of orphan concepts for a given schema.
 * TODO consider modularizing add and remove buttons
 */
type OrphanProps = {
    concept: ChildConceptTerm;
    treeVisibility: string;
    inputComponent: Boolean;
    selectConcept: any;
};
export declare const InputOrphans: ({ concept, treeVisibility, inputComponent, selectConcept, }: OrphanProps) => import("react").JSX.Element;
export {};
