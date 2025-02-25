export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Be sure to remove Taxonomy Manager types from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !['skosConcept', 'skosConceptScheme'].includes(listItem.getId())
      ),
    ])