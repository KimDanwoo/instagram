import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-05-24',
  token: process.env.SANITY_SECRET_TOKEN,
})
