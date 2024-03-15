/**
 * Concept Removal Hook
 * Used for removing concepts and top concepts from the Concept Scheme
 * hierarchy view.
 * TODO: properly type document (as an extension of SanityDocument)
 */
export declare function useRemoveConcept(document: any): (conceptId: string, conceptType: string, prefLabel?: string) => void;
