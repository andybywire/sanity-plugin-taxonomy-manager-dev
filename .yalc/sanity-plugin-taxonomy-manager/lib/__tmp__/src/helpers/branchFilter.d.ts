type BranchOptions = {
    schemeId: string;
    branchId: string;
};
type BranchFilterResult = {
    filter: string;
    params: BranchOptions;
};
/**
 * Document Branch Filter
 *
 * A pluggable Function for Filtering to a Top Concept Branch within a SKOS Concept Scheme
 * @param schemeId - The unique six character concept identifier for the Concept Scheme to which you wish to filter.
 * @param branchId - The unique six character concept identifier of a branch. Child concepts will be returned.
 * @returns A reference type filter for the child concepts of the designated branch in the selected Concept Scheme
 */
export declare function branchFilter(options: BranchOptions): BranchFilterResult;
export {};
