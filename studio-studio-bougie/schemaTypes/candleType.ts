import { defineField, defineType } from 'sanity';

export const candleType = defineType({
  name: 'candle',
  title: 'Candle',
  type: 'document',
  fields: [
    defineField({
      name: 'candleId',
      title: 'Candle ID',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'imageUrl',
      type: 'url',  // Changez le type de 'image' à 'url'
      validation: (rule) => rule.uri({ allowRelative: true }), 
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'object',
      fields: [
        { name: 'width', title: 'Width (cm)', type: 'number' },
        { name: 'height', title: 'Height (cm)', type: 'number' },
      ],
    }),
    defineField({
      name: 'weight',
      title: 'Weight (g)',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'scentPrice',
      title: 'Scent Price (€)',
      type: 'number',
    }),
    defineField({
      name: 'colorPrice',
      title: 'Color Price (€)',
      type: 'number',
    }),
    defineField({
      name: 'price',
      title: 'Price (€)',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required().min(10).max(500),
    }),
  ],
});
