---
sidebar_position: 1
---

#  Başlarken 
Bir [Next.js](https://nextjs.org) projesidir. Önce [Resmi *Next.js* dökümantasyonunu](https://nextjs.org/docs/) okumanız tavsiye edilir. Halihazırda aşinalığa sahipseniz dosya hiyerarşisini anlayabileceksiniz. `@redux/toolkit`ile birlikte `primereact` ui kütüphanesi kullanmaktadır. Üylelik *JWT* ile sağlanmakta `refreshToken` da dahil edilmektedir.  

:::caution

Tüm kukla veriler array ve json objeleri `mock.tsx` içerisinden tutulmaktadır.

:::

### Başlarken

### Nelere ihtiyacınzı var?

- [Node.js](https://nodejs.org/en/download/) kurulu olması gerekiyor.
  - Vscode kolay kullanım açısından tavsiye edilir.

## Deployment

Yerelde canlıya almak için `npm install` veya `yarn` komutları sonrasında

```bash
npm run dev 
```

```bash
yarn dev 
```
komutları ile canlıya alabilirsiniz. MongoDB Atlas kullanılmaktadır `next.config.js` içerisinden bir veritabanına bağlayabilirsiniz. Ayrıca serverless bir yapı ile *lambda* dahil edildiğinden aynı dosya içerisinden **prod=false** değişikliğini yapmanız gerekecektir. `.gitignore` dosyası içerisinden çıkarıldığından her commit sonrası tekrar etmeyi gerektirmiyor. 


```bash
git clone https://github.com/bilinova/yg-next
```
