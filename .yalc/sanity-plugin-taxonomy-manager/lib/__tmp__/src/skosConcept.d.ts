/**
 * Sanity document scheme for SKOS Taxonomy Concepts
 * TODO Improve typings
 * TODO Hierarchy, Broader, & Associated: enforce disjointedness between Associated and BroaderTransitive (integrity constraint); prohibit cycles in hierarchical relations (best practice).
 *       2022-03-31: Filtering added to Related to five levels of hierarchy, document filtering present for Broader.  Consider more robust filtering and validation for future releases.
 * TODO Document level validation for the disjunction between Preferred, Alternate, and Hidden Labels
 * TODO Lexical labels: add child level validation so that offending labels are shown directly when a duplicate is entered. Then consider removing document level validation. cf. https://www.sanity.io/docs/validation#9e69d5db6f72
 * TODO Scheme initial value: Configure "default" option in Concept Scheme, for cases when there are multiple schemes; configure initialValue to default to that selection (It's currently configure to take the scheme ordered first. This isn't transparent.)
 * TODO Abstract broader and related concept filter into reusable function, and/or add in validation to cover wider scenarios.
 */
export default function skosConcept(baseUri?: string): {
    type: "document";
    name: "skosConcept";
} & Omit<import("sanity").DocumentDefinition, "preview"> & {
    preview?: import("sanity").PreviewConfig<{
        title: string;
    }, Record<"title", any>> | undefined;
};
