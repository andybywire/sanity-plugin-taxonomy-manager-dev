/// <reference types="react" />
import { ChildConceptTerm } from '../types';
/**
 * Child Concepts
 * This component renders a list of child concepts for a given concept.
 * - provides the <ul> wrapper for each level of nesting
 */
export declare const ChildConcepts: ({ concepts, inputComponent, selectConcept, }: {
    concepts: ChildConceptTerm[];
    selectConcept: any;
    inputComponent: Boolean;
}) => import("react").JSX.Element;
