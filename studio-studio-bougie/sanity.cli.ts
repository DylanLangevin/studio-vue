import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '4ep02fya',
    dataset: 'studio_bougie_dataset_1'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
