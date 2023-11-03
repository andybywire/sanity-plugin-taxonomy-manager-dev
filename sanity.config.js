import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {structure} from './deskStructure' 
import {taxonomyManager} from './.yalc/sanity-plugin-taxonomy-manager'
// import {taxonomyManager} from 'sanity-plugin-taxonomy-manager'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',

  projectId: 'zw90ihi2',
  // dataset: 'production',
  dataset: 'demo',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) => !['skosConcept', 'skosConceptScheme'].includes(listItem.getId())
            ),
          ]),
    }),
    // deskTool({
    //   structure,
    // }),
    taxonomyManager({baseUri: 'https://example.com/'}),
    // taxonomyManager(),
    visionTool(),
  ],
  tools: [
    // taxonomyManager({baseUri: 'https://example.com/'}),
  ],

  schema: {
    types: schemaTypes,
  },
})
