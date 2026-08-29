# Dr. Mariam Badawy — Portfolio

React + Tailwind CSS + Framer Motion single-page portfolio.

## تشغيل المشروع (طريقة التشغيل)

المتطلبات: [Node.js](https://nodejs.org) نسخة 18 أو أحدث.

1. افتحي التيرمنال في مجلد المشروع
2. ثبّتي المكتبات:
   ```
   npm install
   ```
3. شغّلي المشروع محليًا:
   ```
   npm run dev
   ```
4. استني لحد ما يظهر سطر `VITE ready` وتحته `Local: http://localhost:5173/`
5. افتحي الرابط ده في المتصفح (Chrome/Edge) — أو دوسي Refresh لو فتحتيه قبل ما السيرفر يخلص يبدأ

## لو الصفحة ظهرت فاضية بيضاء

1. تأكدي إن التيرمنال فعلاً كاتب `VITE ready` — لو لسه بيحمّل، استني كمان كام ثانية
2. دوسي Refresh (Ctrl+R) في المتصفح
3. جربي تفتحي الرابط في نافذة متصفح عادية بدل نافذة المعاينة الداخلية جوه VS Code
4. لو اسم المجلد أو المسار (Path) فيه حروف عربية، انقلي المشروع لمجلد اسمه بالإنجليزي بالكامل (مثال: `C:\projects\portfolio`) وشغلي `npm install` و `npm run dev` تاني من هناك
5. لو المشكلة استمرت، امسحي مجلد `node_modules` وملف `package-lock.json` وشغلي `npm install` من جديد

## لإنتاج نسخة نهائية للنشر

```
npm run build
```

الناتج هيتحط في مجلد `dist` — ده اللي بترفعيه على أي استضافة (Vercel, Netlify, GitHub Pages...).

## التخصيص

- **الألوان**: `tailwind.config.js` (teal `#0F4C4C`, cream `#F7F3EC`, plum `#3D2645`)
- **الخطوط**: Fraunces (العناوين) + Inter (النصوص) — معرّفين في `index.html` و `tailwind.config.js`
- **المحتوى النصي (خدمات، شهادات، تايم لاين)**: `src/data.js`
- **الصور**: `public/images/`
- **الـ CV القابل للتحميل**: `public/Dr_Mariam_Badawy_CV.pdf`
