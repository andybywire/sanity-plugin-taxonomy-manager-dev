/// <reference types="react" />

import {JSX as JSX_2} from 'react'
import {ObjectFieldProps} from 'sanity'
import {Plugin as Plugin_2} from 'sanity'

/**
 * Document Branch Filter
 *
 * A pluggable Function for Filtering to a Top Concept Branch within a SKOS Concept Scheme
 * @param schemeId - The unique six character concept identifier for the Concept Scheme to which you wish to filter.
 * @param branchId - The unique six character concept identifier of a branch. Child concepts will be returned.
 * @returns A reference type filter for the child concepts of the designated branch in the selected Concept Scheme
 */
export declare function branchFilter(options: BranchOptions): BranchFilterResult

declare type BranchFilterResult = {
  filter: string
  params: BranchOptions
}

declare type BranchOptions = {
  schemeId: string
  branchId: string
}

/**
 * Hierarchy View Input Component for Reference Fields
 * TODO check for scheme or branch filters — it only works if they're used; alternatively
 * provide optional parameters if a custom filter is used?
 */
export declare function HierarchyInput(props: ObjectFieldProps): JSX_2.Element

declare interface Options {
  baseUri?: string
}

/**
 * Document Scheme Filter
 *
 * Pluggable Function for Filtering to a Single SKOS Concept Scheme
 * @param schemeId - The unique six character concept identifier for the Concept Scheme to which you wish to filter.
 * @returns A reference type filter for Concepts and Top Concepts in the selected Concept Scheme
 */
export declare function schemeFilter(options: SchemeOptions): SchemeFilterResult

declare type SchemeFilterResult = {
  filter: string
  params: SchemeOptions
}

declare type SchemeOptions = {
  schemeId: string
}

/**
 * Defines a Sanity plugin for managing taxonomies.
 * baseURI should follow an IANA http/s scheme and should terminate with either a / or #.
 * @returns A Sanity plugin object.
 */
export declare const taxonomyManager: Plugin_2<Options | undefined>

/**
 * Tree View Component Wrapper
 * This is the view component for the hierarchy tree. It is the
 * top level of concept scheme views and is passed into Desk
 * structure to render the primary view for taxonomy documents.
 * TODO: Extend SanityDocument type to include display properties.
 *       What is the type of the document object returned by the Desk
 *       structure?
 */
export declare const TreeView: ({
  document,
  branchId,
  selectConcept,
  inputComponent,
}: {
  document: any
  branchId: string
  selectConcept: any
  inputComponent?: boolean | undefined
}) => JSX_2.Element

export {}
