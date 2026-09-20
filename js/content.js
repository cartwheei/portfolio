/* Site content in both languages. Single source of truth for copy and data. */
window.CONTENT = {
  links: {
    mail: 'mailto:recaialperemek@gmail.com',
    mailText: 'recaialperemek@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alperemek/',
    github: 'https://github.com/cartwheei',
    twitter: 'https://twitter.com/AlperEmek',
    facebook: 'https://www.facebook.com/alper.emekk/',
    isprs: 'https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLIV-4-W3-2020/215/2020/',
    supermap: 'https://www.linkedin.com/posts/alper-emek-362520159_gis-supermap-webgis-activity-6727545753889185792-Lct5',
    thesis: 'https://doi.org/10.15659/uzalcbs2018.6125',
    hkmo: 'https://www.linkedin.com/posts/alperemek_tmmob-hkmo-gis-activity-7266160928012840960-K_Db',
    giscontest: 'http://www.giscontest.com/en/list-39.aspx',
    pressAkdeniz: 'https://www.akdeniz.edu.tr/tr/haber/akdeniz_universitesi_ogrencilerine_cinden_yazilim_odulu-2178',
    pressHurriyet: 'https://www.hurriyet.com.tr/teknoloji/akdeniz-universitesi-ogrencilerine-cinden-yazilim-odulu-41685713'
  },

  points: [
    { id: 'ist', name: { tr: 'İstanbul', en: 'Istanbul' }, lon: 28.98, lat: 41.01, dx: -11, dy: -9, anchor: 'end' },
    { id: 'esk', name: { tr: 'Eskişehir', en: 'Eskişehir' }, lon: 30.52, lat: 39.78, dx: -11, dy: 4, anchor: 'end' },
    { id: 'ank', name: { tr: 'Ankara', en: 'Ankara' }, lon: 32.86, lat: 39.93, dx: 11, dy: 4 },
    { id: 'ant', name: { tr: 'Antalya', en: 'Antalya' }, lon: 30.71, lat: 36.9, dx: 0, dy: 22, anchor: 'middle' },
    { id: 'rot', name: { tr: 'Rotterdam', en: 'Rotterdam' }, lon: 4.48, lat: 51.92, dx: -11, dy: 4, anchor: 'end' },
    { id: 'roc', name: { tr: 'Rochester', en: 'Rochester' }, lon: -77.61, lat: 43.16, dx: 11, dy: 4 },
    { id: 'wuh', name: { tr: 'Vuhan', en: 'Wuhan' }, lon: 114.31, lat: 30.59, dx: 11, dy: 4 }
  ],

  images: {
    sar: { poster: 'img/spacenet-poster.webp', gif: 'img/spacenet.gif' },
    rochester: { webp: 'img/supermap.webp', png: 'img/supermap.png' },
    thesis: { webp: 'img/bitirme2.webp', png: 'img/bitirme2.png' },
    sensor4d: { webp: 'img/sensor4d.webp', png: 'img/sensor4d.png' }
  },

  tr: {
    title: 'Alper Emek — GIS yazılım geliştirici',
    description: 'Alper Emek: full-stack web GIS geliştirici. İnteraktif haritalar, mekânsal veri tabanları, uzaktan algılama ve derin öğrenme projeleri.',
    skip: 'İçeriğe geç',
    titleRole: 'GIS yazılım geliştirici',
    nav: { projects: 'Projeler', now: 'Şu an', experience: 'Deneyim', education: 'Eğitim', label: 'Bölümler' },
    langLabel: 'Dil',
    toTop: 'Başa dön',
    pressLabel: 'Basında',
    seals: { mail: 'e-posta', linkedin: 'in', github: 'GitHub', label: 'Hızlı bağlantılar' },
    role: 'GIS yazılım geliştirici · geospatial intelligence',
    cta: 'Projelere git',
    facts: [
      ['Proje', { count: 300, suffix: '+', text: ' kurumsal proje' }],
      ['Yayın', 'SAR görüntülerinde U-Net ile bina tespiti — ISPRS Archives XLIV-4/W3-2020'],
      ['Ödül', 'SuperMap GIS Contest 2020 — geliştirici dalında birincilik'],
      ['Konum', 'İstanbul, Türkiye']
    ],
    globe: {
      label: 'Dönen dünya küresi. Noktalar: İstanbul, Eskişehir, Ankara, Antalya, Rotterdam, Rochester, Vuhan. Bir noktaya gelince konsol o yerdeki işleri sorgular.',
      layer: 'places.geom',
      hint: 'sürükle · bir yere dokun',
      placesLabel: 'Yerler',
      all: 'Tümü',
      proj: 'ortografik'
    },
    console: {
      prompt: 'psql · gis=#',
      result: 'Sonuç',
      rows: 'satır',
      hint: 'Küredeki bir noktaya gel ya da bir yer seç.',
      typing: 'yazıyor…',
      history: 'Son komutlar'
    },
    sec: { projects: 'Projeler', now: 'Şu an', experience: 'Deneyim', education: 'Eğitim, yayın ve ödül', contact: 'İletişim' },
    projects: [
      {
        id: 'sensor4d', img: 'sensor4d',
        title: '4D web uygulaması ile sensör verilerinin görüntülenmesi',
        meta: '3B web · sensör verisi · 2024',
        bullets: [
          'Elasticsearch’teki sensör verilerini (sıcaklık, ışık, nem, CO₂, hareket) 3B bina modeli üzerinde, zaman ekseniyle görselleştiren web uygulaması',
          'three.js ile sıfırdan modellenen, odaları veri setindeki “room” kimlikleriyle eşleşen 4 katlı, 49 odalı ofis binası',
          'Tarihe göre sorgu, canlı mod, zaman çizelgesi ve tematik lejant dahil bütün tematik gösterimler Elasticsearch API’si üzerinden çalışır',
          'TMMOB 8. Coğrafi Bilgi Sistemleri Kongresi’nde (Ankara, 2024) sözlü olarak sunuldu'
        ],
        tags: ['three.js', 'Elasticsearch', 'WebGL'],
        link: 'hkmo', linkLabel: 'Gönderiyi gör',
        alt: '4D web uygulaması: dört katlı ofis binasının 3B modeli, CO₂ değerine göre yeşil tonlarda boyanmış odalar, solda tematik seçimi, altta zaman çizelgesi'
      },
      {
        id: 'sar', img: 'sar',
        title: 'SAR görüntülerinden U-Net ile bina tespiti',
        meta: 'Uzaktan algılama · derin öğrenme · 2020',
        bullets: [
          'SpaceNet 6 SAR verisi üzerinde sınıflandırma maskesi için ön işleme adımları',
          'CNN tabanlı U-Net modeli ile bina ayak izi tespiti',
          'Keras, NumPy, scikit-image, GeoPandas, rasterio',
          'ISPRS Archives XLIV-4/W3-2020’de yayımlandı'
        ],
        tags: ['Python', 'Keras', 'rasterio', 'GeoPandas'],
        link: 'isprs', linkLabel: 'Makaleyi aç',
        alt: 'Rotterdam üzerinde SAR görüntüsü, tespit edilen bina ayak izleri kırmızı çizgilerle işaretli'
      },
      {
        id: 'rochester', img: 'rochester',
        title: 'Rochester emlak web uygulaması',
        meta: 'WebGIS · yarışma · 2020',
        bullets: [
          'SuperMap 2020 uluslararası yarışması için geliştirildi',
          'Emlak verisi üzerinde mekânsal analiz, adres eşleme ve harita servisi',
          'Uluslararası yarışmada geliştirici kategorisinde birincilik kazanıldı'
        ],
        tags: ['SuperMap iClient', 'Leaflet', 'WebGIS', 'Mekânsal SQL'],
        links: [{ link: 'supermap', label: 'Duyuruyu gör' }, { link: 'giscontest', label: 'Yarışma sonuçları' }],
        press: [['Hürriyet', 'pressHurriyet'], ['Akdeniz Üniversitesi', 'pressAkdeniz']],
        alt: 'Rochester şehir haritası, satılık emlak noktaları kırmızı, sağda adres eşleme paneli'
      },
      {
        id: 'thesis', img: 'thesis',
        title: 'Görüntü sınıflandırma arayüzü: Python ve K-Means',
        meta: 'Masaüstü GIS · lisans tezi · UZAL-CBS 2018',
        bullets: [
          'Uydu görüntüsü segmentasyonu yapan masaüstü uygulaması',
          'Python tabanlı GIS yazılımlarına araç kutusu olarak eklenebilir arayüz',
          'VII. Uzaktan Algılama ve CBS Sempozyumu’nda (UZAL-CBS 2018, Eskişehir) bildiri olarak yayımlandı'
        ],
        tags: ['Python', 'K-Means', 'Masaüstü GIS'],
        link: 'thesis', linkLabel: 'Bildiriyi aç',
        alt: 'Bitirme çalışması arayüzü, ortada Harita Mühendisliği Bölümü amblemi'
      }
    ],
    now: {
      intro: 'Kurumsal CBS platformu üzerinde özel çözümler geliştiren ekibi yönetiyorum. 300’ü aşkın projenin başarısı ekibimin sorumluluğunda.',
      focus: {
        title: 'Agentic geospatial intelligence',
        text: 'Şu anda yapay zeka ajanlarının mekânsal veri, harita servisleri ve kurumsal CBS iş akışlarıyla iş yapmasına, yani ajantik yapay zekaya odaklanıyorum.'
      },
      items: [
        { title: 'Mekânsal sorunlar, custom çözümler', text: 'Kurumların mekânsal veri problemlerine platform üzerinde geliştirdiğimiz özel çözümler onlarca kurumda canlı çalışıyor.' },
        { title: 'Web GIS ürünleri', text: 'İnteraktif harita, dashboard, REST API ve mekânsal veri tabanını tasarımdan teslime kadar geliştiriyoruz.' },
        { title: 'İzleme ve entegrasyon', text: 'Merkezi izleme ve bildirimlerin yanı sıra belge yönetimi, ERP ve CRM entegrasyonları kuruyoruz.' }
      ]
    },
    th: { period: 'Dönem', org: 'Kurum', role: 'Rol', place: 'Yer' },
    exp: [
      { period: '06/2022 –', org: 'Netcad Yazılım A.Ş.', role: 'Teknoloji Çözümleri Yöneticisi & GIS Yazılım Geliştirici', place: 'İstanbul' },
      { period: '06/2021 – 06/2022', org: 'Netcad Yazılım A.Ş.', role: 'Teknoloji Çözümleri Uzmanı & GIS Yazılım Geliştirici', place: 'İstanbul' },
      { period: '02/2021 – 06/2021', org: 'Geotech Maps Ltd.', role: 'GIS Uzmanı', place: 'Ankara' },
      { period: '09/2018 – 05/2020', org: 'Enge Harita Mühendislik Ltd.', role: 'Kurucu Ortak', place: 'Antalya' }
    ],
    eduHead: 'Eğitim',
    edu: [
      { years: '2019 – 2022', school: 'Akdeniz Üniversitesi', text: 'Yüksek lisans — GIS ve Uzaktan Algılama. ARGE, yazılım geliştirme ve uluslararası yayın.' },
      { years: '2013 – 2018', school: 'Yıldız Teknik Üniversitesi', text: 'Lisans — Harita Mühendisliği.' }
    ],
    pubHead: 'Yayın ve ödül',
    pub: [
      { years: '2024', title: '4D Web Uygulaması ile Sensör Verilerinin Görüntülenmesi', text: 'Sensör verilerinin mekânsal ve zamansal görselleştirilmesi. TMMOB HKMO 8. CBS Kongresi’nde (Ankara) sözlü bildiri olarak sunuldu.', link: 'hkmo', linkLabel: 'Gönderiyi gör' },
      { years: '2020', title: 'SAR görüntülerinde U-Net ile bina tespiti', text: 'CNN tabanlı U-Net ve sınıflandırma maskesi için ön işleme adımları. International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences, XLIV-4/W3-2020.', link: 'isprs', linkLabel: 'Makaleyi aç' },
      { years: '2020', title: 'SuperMap GIS Contest 2020 — geliştirici dalında birincilik', text: 'Emlak verisi üzerinde mekânsal analiz, harita servisi ve arayüz.', link: 'giscontest', linkLabel: 'Yarışma sonuçları', press: [['Hürriyet', 'pressHurriyet'], ['Akdeniz Üniversitesi', 'pressAkdeniz']] }
    ],
    contact: [
      ['E-posta', 'mail'], ['LinkedIn', 'linkedin'], ['GitHub', 'github'], ['Twitter', 'twitter'], ['Facebook', 'facebook']
    ],
    contactNote: 'Yeni bir harita, bir mekânsal veri problemi ya da birlikte yayın için yazın.',
    rows: {
      ist: [
        { a: 'Yıldız Teknik Üniversitesi', b: 'Harita Müh., lisans', c: '2013 – 18', href: '#education' },
        { a: 'Deneyim', b: '2 kayıt', c: '2021 –', href: '#experience' }
      ],
      esk: [{ a: 'UZAL-CBS 2018', b: 'görüntü sınıflandırma bildirisi', c: '2018', href: '#proj-thesis' }],
      ank: [
        { a: 'HKMO 8. CBS Kongresi', b: '4D web · sensör verisi bildirisi', c: '2024', href: '#education' },
        { a: 'Deneyim', b: '1 kayıt', c: '2021', href: '#experience' }
      ],
      ant: [
        { a: 'Akdeniz Üniversitesi', b: 'GIS ve UA, yüksek lisans', c: '2019 – 22', href: '#education' },
        { a: 'Deneyim', b: '1 kayıt', c: '2018 – 20', href: '#experience' }
      ],
      rot: [
        { a: 'SpaceNet 6 SAR', b: 'U-Net bina tespiti', c: '2020', href: '#proj-sar' },
        { a: 'ISPRS Archives', b: 'XLIV-4/W3-2020', c: '2020', href: '#education' }
      ],
      roc: [
        { a: 'SuperMap Contest', b: 'geliştirici dalında 1.', c: '2020', href: '#proj-rochester' },
        { a: 'Emlak WebGIS', b: 'analiz · servis · arayüz', c: '2020', href: '#proj-rochester' }
      ],
      wuh: [{ a: 'SuperMap GIS Contest', b: 'birincilik ödülü', c: '2020', href: '#education' }]
    },
    summary: [
      { place: 'ist', b: 'eğitim · deneyim', n: 3 }, { place: 'ant', b: 'eğitim · deneyim', n: 2 }, { place: 'ank', b: 'deneyim · bildiri', n: 2 }, { place: 'rot', b: 'proje · yayın', n: 2 }, { place: 'roc', b: 'proje · ödül', n: 2 }, { place: 'esk', b: 'bildiri', n: 1 }, { place: 'wuh', b: 'ödül', n: 1 }
    ],
    noscript: 'Bu sayfa küre ve konsol için JavaScript kullanır. Bağlantı: recaialperemek@gmail.com'
  },

  en: {
    title: 'Alper Emek — GIS software developer',
    description: 'Alper Emek: full-stack web GIS developer. Interactive maps, spatial databases, remote sensing and deep learning projects.',
    skip: 'Skip to content',
    titleRole: 'GIS software developer',
    nav: { projects: 'Work', now: 'Now', experience: 'Experience', education: 'Education', label: 'Sections' },
    langLabel: 'Language',
    toTop: 'Back to top',
    pressLabel: 'In the press',
    seals: { mail: 'e-mail', linkedin: 'in', github: 'GitHub', label: 'Quick links' },
    role: 'GIS software developer · geospatial intelligence',
    cta: 'See the work',
    facts: [
      ['Projects', { count: 300, suffix: '+', text: ' enterprise projects' }],
      ['Paper', 'Building detection on SAR imagery with U-Net — ISPRS Archives XLIV-4/W3-2020'],
      ['Award', 'SuperMap GIS Contest 2020 — first prize, developer category'],
      ['Location', 'Istanbul, Türkiye']
    ],
    globe: {
      label: 'Rotating globe. Points: Istanbul, Eskişehir, Ankara, Antalya, Rotterdam, Rochester, Wuhan. Hovering a point queries the work at that place in the console.',
      layer: 'places.geom',
      hint: 'drag · tap a place',
      placesLabel: 'Places',
      all: 'All',
      proj: 'orthographic'
    },
    console: {
      prompt: 'psql · gis=#',
      result: 'Result',
      rows: 'rows',
      hint: 'Hover a point on the globe or pick a place.',
      typing: 'typing…',
      history: 'Recent commands'
    },
    sec: { projects: 'Work', now: 'Now', experience: 'Experience', education: 'Education, papers and award', contact: 'Contact' },
    projects: [
      {
        id: 'sensor4d', img: 'sensor4d',
        title: 'Visualising sensor data in a 4D web application',
        meta: '3D web · sensor data · 2024',
        bullets: [
          'Web application that visualises Elasticsearch sensor data (temperature, light, humidity, CO₂, motion) on a 3D building model along a time axis',
          'A 4-storey, 49-room office building modelled from scratch in three.js, with rooms matched to the dataset through their “room” IDs',
          'Every thematic view runs through the Elasticsearch API, with query by date or live mode, a timeline slider and a thematic legend',
          'Presented orally at the TMMOB 8th Geographic Information Systems Congress (Ankara, 2024)'
        ],
        tags: ['three.js', 'Elasticsearch', 'WebGL'],
        link: 'hkmo', linkLabel: 'See the post',
        alt: '4D web application: 3D model of a four-storey office building, rooms shaded green by CO₂ level, thematic selector on the left, timeline at the bottom'
      },
      {
        id: 'sar', img: 'sar',
        title: 'Building detection from SAR imagery with U-Net',
        meta: 'Remote sensing · deep learning · 2020',
        bullets: [
          'Pre-processing pipeline for the classification mask on SpaceNet 6 SAR data',
          'CNN-based U-Net model for building footprints',
          'Keras, NumPy, scikit-image, GeoPandas, rasterio',
          'Published in ISPRS Archives XLIV-4/W3-2020'
        ],
        tags: ['Python', 'Keras', 'rasterio', 'GeoPandas'],
        link: 'isprs', linkLabel: 'Read the paper',
        alt: 'SAR image over Rotterdam with detected building footprints outlined in red'
      },
      {
        id: 'rochester', img: 'rochester',
        title: 'Rochester real-estate web application',
        meta: 'WebGIS · contest · 2020',
        bullets: [
          'Built for the SuperMap 2020 international contest',
          'Spatial analysis on real-estate data, address matching and a map service',
          'First prize in the developer category of the international contest'
        ],
        tags: ['SuperMap iClient', 'Leaflet', 'WebGIS', 'Spatial SQL'],
        links: [{ link: 'supermap', label: 'See the announcement' }, { link: 'giscontest', label: 'Contest results' }],
        press: [['Hürriyet', 'pressHurriyet'], ['Akdeniz University', 'pressAkdeniz']],
        alt: 'Map of Rochester with properties for sale in red and an address-matching panel on the right'
      },
      {
        id: 'thesis', img: 'thesis',
        title: 'Image classification interface: Python and K-Means',
        meta: 'Desktop GIS · BSc thesis · UZAL-CBS 2018',
        bullets: [
          'Desktop application for satellite image segmentation',
          'Pluggable as a toolbox into Python-based GIS software',
          'Published as a paper at the VII. Remote Sensing and GIS Symposium (UZAL-CBS 2018, Eskişehir)'
        ],
        tags: ['Python', 'K-Means', 'Desktop GIS'],
        link: 'thesis', linkLabel: 'Read the paper',
        alt: 'Thesis application window with the Geomatics Engineering department emblem'
      }
    ],
    now: {
      intro: 'I lead the team building custom solutions on an enterprise GIS platform. The success of more than 300 projects is my team’s responsibility.',
      focus: {
        title: 'Agentic geospatial intelligence',
        text: 'Right now I focus on agentic AI — agents that do real work with spatial data, map services and enterprise GIS workflows.'
      },
      items: [
        { title: 'Spatial problems, custom solutions', text: 'The custom solutions we build on the platform for institutions’ spatial data problems run live in dozens of institutions.' },
        { title: 'Web GIS products', text: 'We build interactive maps, dashboards, REST APIs and spatial databases, from design to delivery.' },
        { title: 'Monitoring and integration', text: 'Alongside central monitoring and notifications, we set up document management, ERP and CRM integrations.' }
      ]
    },
    th: { period: 'Period', org: 'Organisation', role: 'Role', place: 'Place' },
    exp: [
      { period: '06/2022 –', org: 'Netcad Yazılım A.Ş.', role: 'Technology Solutions Manager & GIS Software Developer', place: 'Istanbul' },
      { period: '06/2021 – 06/2022', org: 'Netcad Yazılım A.Ş.', role: 'Technology Solutions Specialist & GIS Software Developer', place: 'Istanbul' },
      { period: '02/2021 – 06/2021', org: 'Geotech Maps Ltd.', role: 'GIS Specialist', place: 'Ankara' },
      { period: '09/2018 – 05/2020', org: 'Enge Harita Mühendislik Ltd.', role: 'Co-founder', place: 'Antalya' }
    ],
    eduHead: 'Education',
    edu: [
      { years: '2019 – 2022', school: 'Akdeniz University', text: 'MSc — GIS and Remote Sensing. R&D, software development and an international publication.' },
      { years: '2013 – 2018', school: 'Yıldız Technical University', text: 'BSc — Geomatics Engineering.' }
    ],
    pubHead: 'Papers and award',
    pub: [
      { years: '2024', title: '4D Web Application for Visualizing Sensor Data', text: 'Spatial and temporal visualisation of sensor data. Presented as an oral paper at the 8th GIS Congress of TMMOB HKMO in Ankara.', link: 'hkmo', linkLabel: 'See the post' },
      { years: '2020', title: 'Building detection on SAR imagery with U-Net', text: 'CNN-based U-Net with a pre-processing pipeline for the classification mask. International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences, XLIV-4/W3-2020.', link: 'isprs', linkLabel: 'Read the paper' },
      { years: '2020', title: 'SuperMap GIS Contest 2020 — first prize, developer category', text: 'Spatial analysis on real-estate data, a map service and a front-end.', link: 'giscontest', linkLabel: 'Contest results', press: [['Hürriyet', 'pressHurriyet'], ['Akdeniz University', 'pressAkdeniz']] }
    ],
    contact: [
      ['E-mail', 'mail'], ['LinkedIn', 'linkedin'], ['GitHub', 'github'], ['Twitter', 'twitter'], ['Facebook', 'facebook']
    ],
    contactNote: 'Write about a new map, a spatial data problem, or a paper to co-author.',
    rows: {
      ist: [
        { a: 'Yıldız Technical University', b: 'BSc Geomatics Eng.', c: '2013 – 18', href: '#education' },
        { a: 'Experience', b: '2 rows', c: '2021 –', href: '#experience' }
      ],
      esk: [{ a: 'UZAL-CBS 2018', b: 'image classification paper', c: '2018', href: '#proj-thesis' }],
      ank: [
        { a: 'HKMO 8th GIS Congress', b: '4D web · sensor data paper', c: '2024', href: '#education' },
        { a: 'Experience', b: '1 row', c: '2021', href: '#experience' }
      ],
      ant: [
        { a: 'Akdeniz University', b: 'MSc GIS & RS', c: '2019 – 22', href: '#education' },
        { a: 'Experience', b: '1 row', c: '2018 – 20', href: '#experience' }
      ],
      rot: [
        { a: 'SpaceNet 6 SAR', b: 'U-Net building detection', c: '2020', href: '#proj-sar' },
        { a: 'ISPRS Archives', b: 'XLIV-4/W3-2020', c: '2020', href: '#education' }
      ],
      roc: [
        { a: 'SuperMap Contest', b: '1st, developer category', c: '2020', href: '#proj-rochester' },
        { a: 'Real-estate WebGIS', b: 'analysis · service · UI', c: '2020', href: '#proj-rochester' }
      ],
      wuh: [{ a: 'SuperMap GIS Contest', b: 'first prize', c: '2020', href: '#education' }]
    },
    summary: [
      { place: 'ist', b: 'education · experience', n: 3 }, { place: 'ant', b: 'education · experience', n: 2 }, { place: 'ank', b: 'experience · paper', n: 2 }, { place: 'rot', b: 'project · paper', n: 2 }, { place: 'roc', b: 'project · award', n: 2 }, { place: 'esk', b: 'paper', n: 1 }, { place: 'wuh', b: 'award', n: 1 }
    ],
    noscript: 'This page uses JavaScript for the globe and the console. Contact: recaialperemek@gmail.com'
  }
};
