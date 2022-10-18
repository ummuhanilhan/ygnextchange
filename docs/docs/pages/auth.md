---
sidebar_position: 1
---

# Üyelik
signin/login & signup/register veya  forgotten, reset sayfalarından ibarettir. Giriş yapıldığında access token ile birlikte refresh token kaydedilir. 

`_app.ts` kısmında sorgulama yapılır `PrivateLayout` içerisinden skeleton loader'a havalae edilir. `api.js` içerisinden **axios interceptors** aracılığı ile dönen değere göre `refreshToken` sorgular süresi dolmusşa kendiliğinden yeniler yenileyemediği taktirde oturumdan atarak modal çıkartır veya giriş sayfasına yönlendirir. Oturumdan çıkardığında sadece şifre girmek yeterli olacaktır.  

İşlemler redux tarafında tutulur persist-storage kullanılmamıştır her istekte  `me()` ile `/auth/me` endpointine gidip kişinin bilgilerini çekmesi gerekmektedir. Hata verdiği takdirde yenileyemiyorsa `localStorage` içerisinde tutulan veriler silinir. React üzerinde server side rendering olmadığı için Next.js ile daha farklı yollar kullanmak gerekmektedir.

- PrivateLayout
- DefaultLayout
- SignLayout

Role, yetki ve izinlere göre değişmektedir. `SignLayout` gibi farklı biçimler tüm sayfalarda yer almaz **Layouts** döküman sayfasından okuyabilirsiniz. Sidebar da `PrivateLayout` `Main.tsx` adlı container içerisinden çağrılmaktadır.  Yine **Containers** dökümanına bakabilirsiniz. Daha sonra tablara ve oradan frame yani çerçeveler ayrılır tüm içerikler bunların içerisinde listelenir. Katmanlar halinde layout hepsini katlar container bölümlendirmeleri içerir tab mevcutsa sayfaları böler ve son olarak çeşitli çerçeveler sadece yazı veya ikonlarla birlikte daha anlaşılır kılar. Tabi kimisinde dropdown özelliği de mevcuttur açılıp kapanabilir *hidden* ile saklandığından açıp kapama değişmesini engeller yeniden render etmeden kaldığı yerden görülebilir olur. Tüm dropdownlar bu şekildedir. Daha sonra [**CASL**](https://casl.js.org/v4/en/package/casl-react) kütüphanesi role tabanlı değişimler için eklenebilir.
