/**
 * Sanity document scheme for SKOS Concept Schemes
 * TODO Add administrative metadata: dc:title, dc:author ... date, last revised, etc.
 * TODO Add support for sorting array lists alphabetically (custom component?)
 * TODO Consider adding informational lists to this view (via custom input component): number of terms, list of terms, links.
 */
export default function skosConceptScheme(baseUri?: string): {
    type: "document";
    name: "skosConceptScheme";
} & Omit<import("sanity").DocumentDefinition, "preview"> & {
    preview?: import("sanity").PreviewConfig<{
        title: string;
    }, Record<"title", any>> | undefined;
};
