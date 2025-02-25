import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {taxonomyManager} from './.yalc/sanity-plugin-taxonomy-manager' // for local development
import {taxonomyManager} from 'sanity-plugin-taxonomy-manager'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',

  projectId: 'zw90ihi2',
  // dataset: 'production',
  dataset: 'demo',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) => !['skosConcept', 'skosConceptScheme'].includes(listItem.getId())
            ),
          ]),
    }),
    taxonomyManager(
      {baseUri: 'https://example.com/',
      customConceptFields: [
        {
          name: 'sameAs',
          title: 'Same As',
          type: 'url',
          description: 'Specify a fully qualified IRI that identifies the same concept in another vocabulary',
        },
      ],
    }
    ),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
