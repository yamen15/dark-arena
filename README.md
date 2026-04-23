# دليل الاستخدام

## هيكل المشروع

```
src/
├── content/
│   ├── config.ts          ← تعريف شكل بيانات المقالات (مطلوب)
│   └── posts/
│       ├── linux-guide.md     ← مقال (اسم الملف = الرابط)
│       └── vscode-extensions.md
├── layouts/
│   └── Layout.astro       ← القالب الرئيسي (هيدر + فوتر)
├── components/
│   └── PostCard.astro     ← مكون بطاقة المقال
└── pages/
    ├── index.astro        ← الصفحة الرئيسية
    └── posts/
        └── [slug].astro   ← صفحة المقال الديناميكية
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

## تشغيل المشروع

```bash
npm install
npm run dev
```

## الأوامر

| الأمر | الوصف |
|-------|-------|
| `npm run dev` | تشغيل السيرفر المحلي على localhost:4321 |
| `npm run build` | بناء الموقع للنشر |
| `npm run preview` | معاينة النسخة المبنية |
