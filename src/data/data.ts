import { url } from "inspector";
import tanTascıPic from "./images/tantasci.jpg";
import teomanPic from "./images/teoman.jpg";
import bulentOrtacPic from "./images/bülentortacligil.jpg";
import manowarPic from "./images/manowar.jpg";
import yaprakPic from "./images/yaprak.jpg";
import buikaPic from "./images/buika.jpg";
import yıldızTilbePic from "./images/yildiz.jpg";
import ibrahimSelimPic from "./images/ibrahimSelim.jpg";
import gsPic from "./images/gs.jpg";
import sapkaliKizPic from "./images/sapkaKiz.jpg";
import dayjs from "dayjs";

export type Events = {
  id: number;
  artist: string;
  category: string;
  type: string;
  city: string;
  place: string;
  selectTicket?: string;
  tickets: {
    firstCategory: number;
    secondCategory: number;
    thirdCategory: number;
  };
  ticketsPrices: {
    firstCategory: number;
    secondCategory: number;
    thirdCategory: number;
  };
  date: {
    date: any;
    dateDatejs: any;
    openGate: any;
    eventTime: any;
  };
  descriptionOne: any;
  descriptionTwo: any;
  map: any;
  image: any;
};

export const InfoEvents: Events[] = [
  {
    id: 1,
    artist: "Tan Taşcı",
    category: "Muzik",
    type: "POP-ROCK",
    city: "İstanbul",
    place: "Harbiye Cemil Topuz Açık Hava Tiyatrosu",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 2000,
      secondCategory: 1000,
      thirdCategory: 500,
    },
    date: {
      date: dayjs().format("DD-MM-YYYY"),
      dateDatejs: dayjs(),
      openGate: "20:30",
      eventTime: "21:00",
    },
    descriptionOne: `Tan Taşçı, Bayhan Prodüksiyon organizasyonu  ile Harbiye Cemil Topuzlu Açıkhava Sahnesi'nde. istanbul Harbiye Açıkhava Konserleri'nin biletleri Passo'da.`,
    descriptionTwo: `  - Protokol 1. sıra koltukları için +905324687086 numaralı telefonu arayabilirsiniz.

                    - Katılımcılar/İzleyiciler Covid-19 kapsamında alınan kurallara uymalıdır.

                    - Etkinlik gişesi etkinlikten 2 saat önce açılır.

                    - 6 yaş altı konsere alınmamaktadır. 6 ve 6 yaş üstü her yaştan katılımcı bilete tabidir.`,
    map: `https://www.google.com/maps/place/41%C2%B002'46.7%22N+28%C2%B059'24.4%22E/@41.0463,28.9879113,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x312ec9745d6c0cd5!8m2!3d41.0463!4d28.9901`,
    image: tanTascıPic,
  },
  {
    id: 2,
    artist: "Teoman",
    category: "Muzik",
    type: "POP-ROCK",
    city: "İstanbul",
    place: "Harbiye Cemil Topuz Açık Hava Tiyatrosu",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 3000,
      secondCategory: 2000,
      thirdCategory: 1500,
    },
    date: {
      date: dayjs().add(1, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(1, "day"),
      openGate: "21:30",
      eventTime: "22:00",
    },
    descriptionOne: `Teoman, Bayhan Prodüksiyon organizasyonu ile 7 Ekim Cuma akşamı istanbul Harbiye Açıkhava sahnesine konuk oluyor. Teoman konser biletiniz Passo'da.`,
    descriptionTwo: `  - Protokol 1. sıra koltukları için +905324687086 numaralı telefonu arayabilirsiniz.

                       - Katılımcılar/İzleyiciler Covid-19 kapsamında alınan kurallara uymalıdır.

                       - Etkinlik gişesi etkinlikten 2 saat önce açılır.

                       - 6 yaş altı konsere alınmamaktadır. 6 ve 6 yaş üstü her yaştan katılımcı bilete tabidir.`,
    map: `https://www.google.com/maps/place/41%C2%B002'46.7%22N+28%C2%B059'24.4%22E/@41.0463,28.9879113,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x312ec9745d6c0cd5!8m2!3d41.0463!4d28.9901`,
    image: teomanPic,
  },
  {
    id: 3,
    artist: "Manowar",
    category: "Muzik",
    type: "POP-ROCK",
    city: "İzmir",
    place: "Küçük Çiftlik Park",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 5000,
      secondCategory: 3000,
      thirdCategory: 1500,
    },
    date: {
      date: dayjs().add(10, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(12, "day"),
      openGate: "21:30",
      eventTime: "22:00",
    },
    descriptionOne: `Metal tarihinin en büyük gruplarından Manowar, hafızalara kazınacak muhteşem bir konser için üç yıl aradan sonra yeniden izmir/Türkiye’ye geliyor!`,
    descriptionTwo: `  - Katılımcılar/İzleyiciler Covid-19 kapsamında alınan kurallara uymalıdır.

                       - Belirtilen saat kapı açılış saatidir.
    
                       - Festival alanına girecek herkes yaş sınırı olmadan bilete tabiidir.
    
                       - Etkinlikte 18 yaş altı bilet sahiplerine, bilet sahibi ebeveynlerinin refakat etmesi`,
    map: `https://www.google.com/maps/place/41%C2%B002'33.2%22N+28%C2%B059'35.8%22E/@41.042544,28.9910933,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x5bcf971ef3c21469!8m2!3d41.042544!4d28.993282`,
    image: manowarPic,
  },

  {
    id: 4,
    artist: "Bülent Ortaçgil",
    category: "Muzik",
    type: "Klasik Müzik",
    city: "İzmir",
    place: "İzmir Kültür Park Açıkhava Tiyatrosu",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 2000,

      secondCategory: 1000,
      thirdCategory: 500,
    },
    date: {
      date: dayjs().add(5, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(15, "day"),
      openGate: "21:30",
      eventTime: "22:00",
    },
    descriptionOne: `Bülent Ortaçgil sanat hayatının 50. yılını sürpriz konuklarıyla kutluyor….

                    50 yıldır dillerden düşmeyen şarkılarıyla Ortaçgil ve dostları İzmir Kültürpark Açıkhava Tiyatrosu sahnesinde…`,
    descriptionTwo: `  - Etkinlik girişinde bilet kontrolü yapılacaktır, biletinizi telefondan göstermeniz gerekmektedir.

                       - Organizasyon firması, bilet fiyatlarını değiştirme hakkını saklı tutar.

                       - Organizasyon firması etkinlik için uygun görmediği kişileri, etkinlik mekanına almama hakkına sahiptir.

                       - Etkinlik alanı içine video, fotoğraf makinesi vb. dijital kayıt aletleri alınmayacaktır.

                       - Gösteri esnasında kayıt yapılması ve canlı yayın yapılması yasaktır.`,
    map: `https://www.google.com/maps/place/38%C2%B024'17.3%22N+27%C2%B007'45.8%22E/@38.404793,27.1271943,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x45a6c31c61469b73!8m2!3d38.404793!4d27.129383`,
    image: bulentOrtacPic,
  },
  {
    id: 5,
    artist: "Yaprak   ÇAMLICA",
    category: "Muzik",
    type: "Klasik Müzik",
    city: "Ankara",
    place: "İf Performans Hall Ankara",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 1000,

      secondCategory: 700,
      thirdCategory: 300,
    },
    date: {
      date: dayjs().add(20, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(17, "day"),
      openGate: "21:30",
      eventTime: "22:00",
    },
    descriptionOne: `Yaprak Çamlıca , 23 Ağustos akşamı IF Perfomace Hall Ankara'da.Sonrasında Magat 23.30 Herkes Katılım Sağlayabilir. (Kadın erkek dengesinin gözetilmeyeceği anlamında, 18 yaşını doldurmamış misafirler alınmayacak)`,
    descriptionTwo: `  - Etkinlik girişinde bilet kontrolü yapılacaktır, biletinizi telefondan göstermeniz gerekmektedir.

                       - Organizasyon firması, bilet fiyatlarını değiştirme hakkını saklı tutar.

                       - Organizasyon firması etkinlik için uygun görmediği kişileri, etkinlik mekanına almama hakkına sahiptir.

                       - Etkinlik alanı içine video, fotoğraf makinesi vb. dijital kayıt aletleri alınmayacaktır.

                       - Gösteri esnasında kayıt yapılması ve canlı yayın yapılması yasaktır.`,
    map: `https://www.google.com/maps/place/38%C2%B024'17.3%22N+27%C2%B007'45.8%22E/@38.404793,27.1271943,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x45a6c31c61469b73!8m2!3d38.404793!4d27.129383`,
    image: yaprakPic,
  },
  {
    id: 6,
    artist: "Buika",
    category: "Muzik",
    type: "POP-ROCK",
    city: "İstanbul",
    place: "Maximum UNIQ Açıkhava",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 2000,
      secondCategory: 1000,
      thirdCategory: 500,
    },
    date: {
      date: dayjs().add(25, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(25, "day"),
      openGate: "19:30",
      eventTime: "19:00",
    },
    descriptionOne: `﻿Ekvator Ginesi asıllı İspanyol şarkıcı Buika, flamenko, soul ve cazı harmanladığı müziği ile yepyeni bir tarz yarattı ve müzikseverlerin kalbini çaldı. Birkaç kez Latin Grammy ödüllerine aday gösterilen sanatçı, 2010 Latin Grammy Ödülleri'nde “En İyi Geleneksel Tropik Albüm” ödülünün sahibi oldu. Sanatçı ayrıca 2010 yılında “50 Harika Ses”ten biri olarak seçildi. İspanyol müziğinin büyülü sesi, bu kez istanbul'da bir yaz akşamında Maximum Uniq Açıkhava’da yankılanacak...`,
    descriptionTwo: `  ﻿- Bistrolar numarasız paylaşımlı oturma düzenine sahiptir.

                      - Aynı bistroyu başka bir izleyiciyle paylaşmak olasıdır.

                      - Kapı Açılış saati: 18:00

                      - 6 yaş altı etkinliğe alınmamaktadır. 6 yaş ve üstü bilete tabidir.

                      - Konser alanına dışardan yiyecek ve içecek alınmayacaktır.

                      - Organizasyon şirketinin programda ve bilet fiyatlarında değişiklik yapma hakkı saklıdır.

                      - Organizasyon firması, diğer misafirleri rahatsız eden/edecek nitelikte, uygun görmediği kişileri etkinlik için bilet istanbul bedelini iade etmek koşuluyla, etkinlik mekanına kişiyi almama hakkına sahiptir.

                      - Etkinlik mekanına kamera, fotoğraf makinası, ses cihazı vb. alınmayacaktır.

                      - Satın alınan biletlerde iptal, iade ve değişiklik yapılmamaktadır.

                      - Etkinliğe evcil hayvan getirilmesi yasaktır.`,
    map: `https://www.google.com/maps/place/41%C2%B006'31.7%22N+29%C2%B000'21.3%22E/@41.1087911,29.0037301,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x3daca265e66ca87f!8m2!3d41.1087911!4d29.0059188`,
    image: buikaPic,
  },
  {
    id: 7,
    artist: "Yıldız Tilbe",
    category: "Muzik",
    type: "POP-ROCK",
    city: "İzmir",
    place: "İzmir Kültürpark Açıkhava Tiyatrosu",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 2000,
      secondCategory: 1000,
      thirdCategory: 500,
    },
    date: {
      date: dayjs().add(35, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(35, "day"),
      openGate: "18:30",
      eventTime: "19:00",
    },
    descriptionOne: `Yıldız Tilbe, kendi hitlerinin yanı sıra yorumladığı türküler ve sanat müziği şarkılarından oluşan geniş repertuvarıyla 26 Ekim 2022 Çarşamba akşamı İzmir Kültürpark Açıkhava sahnesinde müzikseverler ile buluşacak.

                    Yıldız Tilbe konserinin biletleri Passo’da satışta...`,
    descriptionTwo: `  - 6 yaş ve üzeri bilete tabidir. 6 yaş altı içeri alınmaz.

                        - Etkinlik başlamadan 15 dk. önce salondaki yerinizi almanız önemle rica olunur. Etkinlik başladıktan sonra salona seyirci alınmamaktadır.

                        - Organizasyon şirketi, giriş için uygun görmediği kişileri bilet bedelini iade etmek koşuluyla etkinlik mekanına almama hakkına sahiptir.

                        - Organizasyon firması bilet fiyatlarında değişiklik yapma hakkını saklı tutar.

                        - Satılan biletlerde iptal, iade ve değişiklik yapılmaz.

                        - Kayıp ve çalıntı biletler için işlem yapılmaz.

                        - Pdf bilet uygulaması vardır.

                        - Telefonunuza pdf biletinizi indirin veya pdf biletinizi yazdırmayı unutmayınız.

                        - Konser esnasında kayıt ve/veya canlı yayın yapılması yasaktır.`,
    map: `https://www.google.com/maps/place/38%C2%B024'17.3%22N+27%C2%B007'45.8%22E/@38.404793,27.1271943,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x45a6c31c61469b73!8m2!3d38.404793!4d27.129383`,
    image: yıldızTilbePic,
  },
  {
    id: 8,
    artist: "İbrahim Selim ile Bu Gece",
    category: "Sahne",
    type: "Stand-Up",
    city: "İstanbul",
    place: "Zorlu PSM",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 2000,
      secondCategory: 1000,
      thirdCategory: 500,
    },
    date: {
      date: dayjs().add(30, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(29, "day"),
      openGate: "18:30",
      eventTime: "19:00",
    },
    descriptionOne: `‘‘İbrahim Selim ile Bu Gece”  %100 Studio sahnesinde!

                      İbrahim Selim’in renkli sunumu, birbirinden değerli konukları ve dinamik seyircisiyle dosta kahkaha, düşmana elem vermeye geliyor. “İbrahim Selim ile Bu Gece” her Pazartesi ,istanbul %100 Studio sahnesinde seyircileriyle buluşacak!

                      Her hafta sürpriz bir konuğun katılacağı programda müzikten, stand-up’a, mizahtan güncel konulara; kültürün her alanına doyacağız. Programlarımız tamamen organik ve glütensiz olup gönül rahatlığıyla tüketilebilir!`,
    descriptionTwo: `  - 6 yaş ve üzeri bilete tabidir. 6 yaş altı içeri alınmaz.

                        - Etkinlik başlamadan 15 dk. önce salondaki yerinizi almanız önemle rica olunur. Etkinlik başladıktan sonra salona seyirci alınmamaktadır.

                        - Organizasyon şirketi, giriş için uygun görmediği kişileri bilet bedelini iade etmek koşuluyla etkinlik mekanına almama hakkına sahiptir.

                        - Organizasyon firması bilet fiyatlarında değişiklik yapma hakkını saklı tutar.

                        - Satılan biletlerde iptal, iade ve değişiklik yapılmaz.

                        - Kayıp ve çalıntı biletler için işlem yapılmaz.

                        - Pdf bilet uygulaması vardır.

                        - Telefonunuza pdf biletinizi indirin veya pdf biletinizi yazdırmayı unutmayınız.

                        - Konser esnasında kayıt ve/veya canlı yayın yapılması yasaktır.`,
    map: `https://www.google.com/maps/place/41%C2%B004'01.9%22N+29%C2%B001'03.0%22E/@41.0672,29.0153113,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x8d9809a5233ccb75!8m2!3d41.0672!4d29.0175`,
    image: ibrahimSelimPic,
  },
  {
    id: 9,
    artist: "Galatasaray Kombine",
    category: "Spor",
    type: "Kombine",
    city: "İstanbul",
    place: "Ali Samiyen Spor Kompleksi",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 2000,
      secondCategory: 1000,
      thirdCategory: 500,
    },
    date: {
      date: dayjs().add(40, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(40, "day"),
      openGate: "18:30",
      eventTime: "19:00",
    },
    descriptionOne: `Galatasaray'ın Süper Lig 2022-2023 Sezonu için kombine genel satışı 18 Temmuz 2022 saat 10.00 itibarıyla başlıyor. `,
    descriptionTwo: `   - Kombine satış tarihleri :

                        - Yenileme Dönemi.

                        - 22 Haziran (saat 11.00) - 4 Temmuz (saat 23.59).

                        - Kombine ofisi çalışma saatleri.

                        - Hafta içi : 09.00-18.00.

                        - Hafta sonu: 10.00-17.00.

                        - Yer Değişikliği Dönemi.

                        - 6-7-8-13-14 Temmuz.

                        - (8 Temmuz arife günü 09.00-12.00 arası yer değişikliği yapılacaktır)

                        - Kombine ofisi çalışma saatleri.

                        - 09.00-17.00.

                        - 18 Temmuz Genel Satış Dönem.`,
    map: `https://www.google.com/maps/place/41%C2%B006'13.2%22N+28%C2%B059'28.8%22E/@41.103676,28.9891343,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4c7fe9f8d70bbaad!8m2!3d41.103676!4d28.991323`,
    image: gsPic,
  },
  {
    id: 10,
    artist: "Şapkalı Kız Resim WorkShop",
    category: "Diğer",
    type: "WorkShop",
    city: "İstanbul",
    place: "Anka WorkShop",
    tickets: {
      firstCategory: 10,
      secondCategory: 10,
      thirdCategory: 10,
    },
    ticketsPrices: {
      firstCategory: 2000,
      secondCategory: 1000,
      thirdCategory: 500,
    },
    date: {
      date: dayjs().add(69, "day").format("DD-MM-YYYY"),
      dateDatejs: dayjs().add(60, "day"),
      openGate: "16:30",
      eventTime: "17:00",
    },
    descriptionOne: `Etkinliklerinde hiçbir tecrübe gerektirmeyen atölyede, uzman eğitmenler eşliğinde kendi sanat eserinizi yapıp, etkinlik sonunda yanınızda götürebiliyorsunuz. Üstelik tüm malzemeler, ikramlar ve müzikler Anka workshop tarafından karşılanmaktadır. `,
    descriptionTwo: ` - Organizatör firma bilet fiyatlarında değişiklik yapma hakkını saklı tutar

                      - Organizatör firma etkinlik saat ve tarihinde değişiklik yapma hakkını saklı tutar.`,
    map: `https://www.google.com/maps/place/41%C2%B006'13.2%22N+28%C2%B059'28.8%22E/@41.103676,28.9891343,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4c7fe9f8d70bbaad!8m2!3d41.103676!4d28.991323`,
    image: sapkaliKizPic,
  },
];
