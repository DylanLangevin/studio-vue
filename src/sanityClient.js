import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: '4ep02fya',
    dataset: 'studio_bougie_dataset_1',
    apiVersion: '2023-10-29',
    useCdn: false,
    token: import.meta.env.VITE_SANITY_TOKEN
})


