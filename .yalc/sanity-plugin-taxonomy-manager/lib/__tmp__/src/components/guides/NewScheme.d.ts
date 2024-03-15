/// <reference types="react" />
import { SanityDocument } from 'sanity';
/**
 * New Concept Scheme Guide
 * - Prompts adding title and description to new concept scheme.
 * - Data must be saved to newly created Concept Scheme documents before
 *  add top concept / add concept buttons will work.
 * TODO: Consider adding more instructions, a .gif, or video to this guide.
 */
export declare const NewScheme: ({ document }: {
    document: SanityDocument;
}) => import("react").JSX.Element;
