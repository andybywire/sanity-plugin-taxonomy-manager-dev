/// <reference types="react" />

import {Plugin as Plugin_2} from 'sanity'

export declare function branchFilter(options: BranchOptions): BranchFilterResult

/**
 * Pluggable Function for Filtering to a Top Concept Branch within a SKOS Concept Scheme
 */
declare type BranchFilterResult = {
  filter: string
  params: {
    schemeId: string
    branchId: string
  }
}

declare type BranchOptions = {
  schemeId: string
  branchId: string
}

declare interface Options {
  baseUri?: string
}

export declare function schemeFilter(options: SchemeOptions): SchemeFilterResult

/**
 * Pluggable Function for Filtering to a Single SKOS Concept Scheme
 */
declare type SchemeFilterResult = {
  filter: string
  params: {
    schemeId: string
  }
}

declare type SchemeOptions = {
  schemeId: string
}

export declare const taxonomyManager: Plugin_2<Options | undefined>

export declare const TreeView: ({document}: {document: any}) => JSX.Element

export {}
