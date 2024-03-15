type SchemeOptions = {
    schemeId: string;
};
type SchemeFilterResult = {
    filter: string;
    params: SchemeOptions;
};
/**
 * Document Scheme Filter
 *
 * Pluggable Function for Filtering to a Single SKOS Concept Scheme
 * @param schemeId - The unique six character concept identifier for the Concept Scheme to which you wish to filter.
 * @returns A reference type filter for Concepts and Top Concepts in the selected Concept Scheme
 */
export declare function schemeFilter(options: SchemeOptions): SchemeFilterResult;
export {};
