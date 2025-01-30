import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './schemas';

export default defineConfig({
  name: 'default',
  title: 'IQLAS',

  projectId: '8csus0c5',
  dataset: 'iqlas-store',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
