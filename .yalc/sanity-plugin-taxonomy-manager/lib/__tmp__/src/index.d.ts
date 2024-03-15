import TreeView from './components/TreeView';
import { schemeFilter, branchFilter, HierarchyInput } from './helpers';
interface Options {
    baseUri?: string;
}
/**
 * Defines a Sanity plugin for managing taxonomies.
 * baseURI should follow an IANA http/s scheme and should terminate with either a / or #.
 * @param options - Optional configuration options for the plugin.
 * @param options.baseUri - The base URI to use for SKOS concepts and concept schemes.
 * @returns A Sanity plugin object.
 */
declare const taxonomyManager: import("sanity").Plugin<Options | undefined>;
export { taxonomyManager, TreeView, schemeFilter, branchFilter, HierarchyInput };
