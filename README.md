# دليل الاستخدام

## هيكل المشروع

```
src/
│
├── components/
│   └── PostCard.astro      ← مكون بطاقة المقال
│
├── content/
│   └── posts/
│       ├── linux-guide.md     ← مقال (اسم الملف = الرابط)
│       └── vscode-extensions.md
├── layouts/
│   └── Layout.astro       ← القالب الرئيسي (هيدر + فوتر)
│
├──   pages/
│    ├── index.astro        ← الصفحة الرئيسية
│    └── posts/
│        └── [slug].astro   ← صفحة المقال الديناميكية
│
└──   content.config.ts          ← تعريف شكل بيانات المقالات (مطلوب)          
```

## كيفية إضافة مقال جديد

أنشئ ملف جديد في `src/content/posts/` مثلاً `my-new-post.md`:

```md
---
title: "عنوان المقال"
pubDate: 2024-03-20
tags: ["وسم1", "وسم2"]
image: "/img/my-image.png"
readTime: "5 دقائق"
views: 0
description: "وصف قصير للمقال"
---

## محتوى المقال هنا

اكتب محتواك بصيغة Markdown...
```

الرابط سيكون تلقائياً: `/posts/my-new-post`


## الأوامر

| الأمر | الوصف |
|-------|-------|
| `npm run dev` | تشغيل السيرفر المحلي على localhost:4321 |
| `npm run build` | بناء الموقع للنشر |
| `npm run preview` | معاينة النسخة المبنية |
