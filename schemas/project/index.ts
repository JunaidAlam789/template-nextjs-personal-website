import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import { stringInfo } from './infoblocks/stringInfo'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your project.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and project subheader.',
      title: 'Overview',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    {
      title: 'Info block',
      name: 'infoBlock',
      type: 'array',
      of: [stringInfo],
    },
    defineField({
      name: 'description',
      description: 'Project description.',
      title: 'Project Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
