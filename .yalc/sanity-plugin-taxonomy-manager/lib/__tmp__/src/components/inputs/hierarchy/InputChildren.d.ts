/// <reference types="react" />
import { ChildConceptTerm } from '../../../types';
/**
 * Child Concept Component
 * Renders a list of child concepts for a given concept.
 * TODO: consider modularizing add and remove buttons
 * TODO: Add dialogue explaining max depth
 * TODO: Improve accessibility of hidden children and max depth disclosures
 * TODO: Handle childConcept and level definition checks more elegantly
 */
export declare const InputChildren: ({ concept, selectConcept, inputComponent, }: {
    concept: ChildConceptTerm;
    selectConcept: any;
    inputComponent: Boolean;
}) => import("react").JSX.Element;
