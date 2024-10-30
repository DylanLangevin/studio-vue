import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'studio-bougie',

  projectId: '4ep02fya',
  dataset: 'studio_bougie_dataset_1',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
