/**
 * Base Universal Resource Identifier object for Sanity Taxonomy Manager
 * Used for Concept and Concept Scheme URI fields
 */
declare const _default: ({
    type: "url";
    name: "baseIri";
} & Omit<import("sanity").UrlDefinition, "preview"> & import("sanity").FieldDefinitionBase & import("sanity").WidenValidation & import("sanity").WidenInitialValue)[];
export default _default;
