/**
 * Tree Builder
 * Recursive function to build out successive branches of the hierarchy up to five levels deep.
 * TODO: Detect when a 6th level is present and print a message in the UI.
 */
/**
 * Trunk Builder
 * Fetch the top concepts and their child concepts and orphans and
 * their child concepts. coalesce() returns the first non-null value
 * in the list of arguments, so either the draft or the published concept.
 * TODO: Display draft terms, similarly to with branchBuilder()
 * To get orphans:
 * - filter to concepts in this scheme only
 * - filter out concepts that reference a topConcept in this scheme as
 *   a broader term
 * - filter out concepts that reference other concepts in this scheme
 *   as a broader term
 */
export declare const trunkBuilder: () => string;
/**
 * Input Builder
 * Accept a branchId parameter, and filter to topConcepts and Orphans
 * in that branch only. Then call branchBuilder recursively — it will
 * only build terms in the scheme referenced by that concept.
 * - branchBuilder() and inputBuilder() are called in Hierarchy.tsx
 * TODO vet functionality of orphans
 */
export declare const inputBuilder: () => string;
