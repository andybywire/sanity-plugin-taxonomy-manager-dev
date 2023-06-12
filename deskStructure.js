// import {TreeView} from 'sanity-plugin-taxonomy-manager' 
import {TreeView} from './.yalc/sanity-plugin-taxonomy-manager'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Concept Schemes')
        .schemaType('skosConceptScheme')
        .child(
          S.documentTypeList('skosConceptScheme')
            .title('Concept Schemes')
            .child(id =>
              S.document()
                .schemaType('skosConceptScheme')
                .documentId(id)
                .views([
                  S.view.component(TreeView).title('Tree View'),
                  S.view.form()
                ]) 
            )
      ),
      S.documentTypeListItem("skosConcept").title("Concepts"),
      S.divider(),
      // Be sure to remove Taxonomy Manager types from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !['skosConcept', 'skosConceptScheme'].includes(listItem.getId())
      ),
    ])