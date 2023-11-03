import {defineField, defineType} from 'sanity'
import {schemeFilter, branchFilter, HierarchyInput} from '../.yalc/sanity-plugin-taxonomy-manager'
// import {ConceptInput} from '../conceptInput'


export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the post',
      type: 'string',
    }),
    defineField({
      name: 'Habitat',
      title: 'Habitat',
      description: 'Input component with branch filter (scheme and branch ids)',
      type: 'reference',
      to: {type: 'skosConcept'},
      options: {
        filter: () => branchFilter({schemeId: 'cf76c1', branchId: '1e5e6c'}),
        disableNew: true,
      },
      components: {field: HierarchyInput},
    }),
    defineField({
      name: 'subject',
      title: 'Medical Equipment',
      description: 'Input component with scheme filter (no branch) and no top concepts',
      type: 'reference',
      to: {type: 'skosConcept'},
      options: {
        filter: () => schemeFilter({schemeId: '69d9c8'}),
        disableNew: true,
      },
      components: {field: HierarchyInput},
    }),
    defineField({
      name: 'deviceType',
      title: 'Product Type',
      description: 'Input component with scheme filter (no branch) and top concept hierarchy',
      type: 'reference',
      to: {type: 'skosConcept'},
      options: {
        filter: () => schemeFilter({schemeId: '7b1ebd'}),
        disableNew: true,
      },
      components: {field: HierarchyInput},
    }),
    defineField({
      name: 'foliageColor',
      title: 'Foliage Color',
      type: 'reference',
      to: {type: 'skosConcept'},
      options: {
        filter: () => branchFilter({schemeId: 'cf76c1', branchId: 'e3be82'}),
        disableNew: true,
      },
    }),
    defineField({
      name: 'topic',
      title: 'Topics',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'skosConcept'}],
          options: {
            filter: () => schemeFilter({schemeId: '04ab34'}),
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: 'gradeLevel',
      title: 'Grade Level',
      type: 'reference',
      to: {type: 'skosConcept'},
      options: {
        filter: () => branchFilter({schemeId: 'f3deba', branchId: '9af1d3'}),
        disableNew: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
