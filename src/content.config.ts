// src/content.config.ts  ← الاسم الصحيح في Astro 5
// في Astro 5 تغيّر مكان الملف من src/content/config.ts إلى src/content.config.ts
 
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
 
const posts = defineCollection({
  // ✅ Astro 5: نستخدم loader بدلاً من type: 'content'
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().default('./img/template.png'),
    readTime: z.string().default('5 دقائق'),
    views: z.number().default(0),
  }),
});
 
export const collections = { posts };
 