import {defineCollection, z} from "astro:content"

export const collections = { 
  books: defineCollection({
    type: "content",
    
    schema: z.object({
      title: z.string(),
      author: z.string(),
      img: z.string(),
      readtime: z.number(),
      description: z.string(),
      buy: z.object({
        spain: z.string().url(),
        usa: z.string().url()
      })
    })
  }) 
}