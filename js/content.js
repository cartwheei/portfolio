/* Site content in both languages. Single source of truth for copy and data. */
window.CONTENT = {
  links: {
    mail: 'mailto:recaialperemek@gmail.com',
    mailText: 'recaialperemek@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alper-emek-362520159/',
    github: 'https://github.com/cartwheei',
    twitter: 'https://twitter.com/AlperEmek',
    facebook: 'https://www.facebook.com/alper.emekk/',
    isprs: 'https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLIV-4-W3-2020/215/2020/',
    supermap: 'https://www.linkedin.com/posts/alper-emek-362520159_gis-supermap-webgis-activity-6727545753889185792-Lct5',
    thesis: 'https://www.researchgate.net/publication/329940084_GORUNTU_SINIFLANDIRMA_ARAYUZU_PYTHON_VE_K-ORTALAMA_YONTEMI',
    acar: 'https://www.linkedin.com/in/acargorkem/'
  },

  points: [
    { id: 'ist', name: { tr: 'İstanbul', en: 'Istanbul' }, lon: 28.98, lat: 41.01, dx: -11, dy: -9, anchor: 'end' },
    { id: 'ank', name: { tr: 'Ankara', en: 'Ankara' }, lon: 32.86, lat: 39.93, dx: 11, dy: 4 },
    { id: 'ant', name: { tr: 'Antalya', en: 'Antalya' }, lon: 30.71, lat: 36.9, dx: 0, dy: 22, anchor: 'middle' },
    { id: 'rot', name: { tr: 'Rotterdam', en: 'Rotterdam' }, lon: 4.48, lat: 51.92, dx: -11, dy: 4, anchor: 'end' },
    { id: 'roc', name: { tr: 'Rochester', en: 'Rochester' }, lon: -77.61, lat: 43.16, dx: 11, dy: 4 }
  ],

  images: {
    sar: { poster: 'img/spacenet-poster.webp', gif: 'img/spacenet.gif' },
    rochester: { webp: 'img/supermap.webp', png: 'img/supermap.png' },
    thesis: { webp: 'img/bitirme2.webp', png: 'img/bitirme2.png' }
  },

  tr: {
    title: 'Alper Emek — GIS yazılım geliştirici',
    description: 'Alper Emek: full-stack web GIS geliştirici. İnteraktif haritalar, mekânsal veri tabanları, uzaktan algılama ve derin öğrenme projeleri.',
    skip: 'İçeriğe geç',
    titleRole: 'GIS yazılım geliştirici',
    nav: { projects: 'Projeler', stack: 'Yetenekler', experience: 'Deneyim', education: 'Eğitim', label: 'Bölümler' },
    langLabel: 'Dil',
    theme: { toPlate: 'Kalıp görünümü', toPaper: 'Kağıt görünümü' },
    seals: { mail: 'e-posta', linkedin: 'in', github: 'GitHub', label: 'Hızlı bağlantılar' },
    role: 'GIS yazılım geliştirici · full-stack web GIS',
    cta: 'Projelere git',
    facts: [
      ['Alan', 'İnteraktif harita, dashboard, REST API, mekânsal veri tabanı'],
      ['Yayın', 'SAR görüntülerinde U-Net ile bina tespiti — ISPRS Archives XLIV-4/W3-2020'],
      ['Ödül', 'SuperMap GIS Contest 2020 — geliştirici dalında birincilik'],
      ['Konum', 'İstanbul, Türkiye']
    ],
    globe: {
      label: 'Dönen dünya küresi. Noktalar: İstanbul, Ankara, Antalya, Rotterdam, Rochester. Bir noktaya gelince konsol o yerdeki işleri sorgular.',
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
    sec: { projects: 'Projeler', stack: 'Yetenekler', experience: 'Deneyim', education: 'Eğitim, yayın ve ödül', contact: 'İletişim' },
    projects: [
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
        alt: 'Rotterdam üzerinde SAR görüntüsü; tespit edilen bina ayak izleri kırmızı çizgilerle işaretli'
      },
      {
        id: 'rochester', img: 'rochester',
        title: 'Rochester emlak web uygulaması',
        meta: 'WebGIS · yarışma · 2020',
        bullets: [
          'SuperMap 2020 uluslararası yarışması için geliştirildi',
          'Emlak verisi üzerinde mekânsal analiz, adres eşleme ve harita servisi',
          'Geliştirici kategorisinde birincilik — Görkem Acar ile'
        ],
        tags: ['SuperMap iClient', 'Leaflet', 'WebGIS', 'Mekânsal SQL'],
        link: 'supermap', linkLabel: 'Duyuruyu gör',
        alt: 'Rochester şehir haritası; satılık emlak noktaları kırmızı, sağda adres eşleme paneli'
      },
      {
        id: 'thesis', img: 'thesis',
        title: 'Görüntü sınıflandırma arayüzü: Python ve K-Means',
        meta: 'Masaüstü GIS · lisans tezi · 2018',
        bullets: [
          'Uydu görüntüsü segmentasyonu yapan masaüstü uygulaması',
          'Python tabanlı GIS yazılımlarına araç kutusu olarak eklenebilir arayüz'
        ],
        tags: ['Python', 'K-Means', 'Masaüstü GIS'],
        link: 'thesis', linkLabel: 'Tezi aç',
        alt: 'Bitirme çalışması arayüzü; ortada Harita Mühendisliği Bölümü amblemi'
      }
    ],
    stack: [
      ['Ön yüz ve harita', ['React', 'Leaflet', 'Mapbox GL', 'OpenLayers', 'Low-code platform']],
      ['Arka uç', ['Python · Flask', 'Node.js', 'REST API', 'Servis entegrasyonu']],
      ['Veri tabanı', ['PostgreSQL · PostGIS', 'Oracle Spatial', 'MSSQL', 'Elasticsearch']],
      ['GIS ve uzaktan algılama', ['GDAL', 'GeoServer', 'QGIS', 'Görüntü işleme']]
    ],
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
      { years: '2020', title: 'SAR görüntülerinde U-Net ile bina tespiti', text: 'CNN tabanlı U-Net; sınıflandırma maskesi için ön işleme adımları. International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences, XLIV-4/W3-2020.', link: 'isprs', linkLabel: 'Makaleyi aç' },
      { years: '2020', title: 'SuperMap GIS Contest 2020 — geliştirici dalında birincilik', text: 'Emlak verisi üzerinde mekânsal analiz, harita servisi ve arayüz. Görkem Acar ile.', link: 'supermap', linkLabel: 'Duyuruyu gör' }
    ],
    contact: [
      ['E-posta', 'mail'], ['LinkedIn', 'linkedin'], ['GitHub', 'github'], ['Twitter', 'twitter'], ['Facebook', 'facebook']
    ],
    contactNote: 'Yeni bir harita, bir mekânsal veri problemi ya da birlikte yayın için yazın.',
    colophon: 'Statik HTML · d3 · Netlify',
    rows: {
      ist: [
        { a: 'Yıldız Teknik Üniversitesi', b: 'Harita Müh., lisans', c: '2013 – 18', href: '#education' },
        { a: 'Deneyim', b: '2 kayıt', c: '2021 –', href: '#experience' }
      ],
      ank: [{ a: 'Deneyim', b: '1 kayıt', c: '2021', href: '#experience' }],
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
      ]
    },
    summary: [
      { place: 'ist', b: 'eğitim · deneyim', n: 3 }, { place: 'ant', b: 'eğitim · deneyim', n: 2 }, { place: 'rot', b: 'proje · yayın', n: 2 }, { place: 'roc', b: 'proje · ödül', n: 2 }, { place: 'ank', b: 'deneyim', n: 1 }
    ],
    noscript: 'Bu sayfa küre ve konsol için JavaScript kullanır. Bağlantı: recaialperemek@gmail.com'
  },

  en: {
    title: 'Alper Emek — GIS software developer',
    description: 'Alper Emek: full-stack web GIS developer. Interactive maps, spatial databases, remote sensing and deep learning projects.',
    skip: 'Skip to content',
    titleRole: 'GIS software developer',
    nav: { projects: 'Work', stack: 'Stack', experience: 'Experience', education: 'Education', label: 'Sections' },
    langLabel: 'Language',
    theme: { toPlate: 'Plate view', toPaper: 'Paper view' },
    seals: { mail: 'e-mail', linkedin: 'in', github: 'GitHub', label: 'Quick links' },
    role: 'GIS software developer · full-stack web GIS',
    cta: 'See the work',
    facts: [
      ['Field', 'Interactive maps, dashboards, REST APIs, spatial databases'],
      ['Paper', 'Building detection on SAR imagery with U-Net — ISPRS Archives XLIV-4/W3-2020'],
      ['Award', 'SuperMap GIS Contest 2020 — first prize, developer category'],
      ['Location', 'Istanbul, Türkiye']
    ],
    globe: {
      label: 'Rotating globe. Points: Istanbul, Ankara, Antalya, Rotterdam, Rochester. Hovering a point queries the work at that place in the console.',
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
    sec: { projects: 'Work', stack: 'Stack', experience: 'Experience', education: 'Education, paper and award', contact: 'Contact' },
    projects: [
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
          'First prize, developer category — with Görkem Acar'
        ],
        tags: ['SuperMap iClient', 'Leaflet', 'WebGIS', 'Spatial SQL'],
        link: 'supermap', linkLabel: 'See the announcement',
        alt: 'Map of Rochester with properties for sale in red and an address-matching panel on the right'
      },
      {
        id: 'thesis', img: 'thesis',
        title: 'Image classification interface: Python and K-Means',
        meta: 'Desktop GIS · BSc thesis · 2018',
        bullets: [
          'Desktop application for satellite image segmentation',
          'Pluggable as a toolbox into Python-based GIS software'
        ],
        tags: ['Python', 'K-Means', 'Desktop GIS'],
        link: 'thesis', linkLabel: 'Open the thesis',
        alt: 'Thesis application window with the Geomatics Engineering department emblem'
      }
    ],
    stack: [
      ['Front-end and maps', ['React', 'Leaflet', 'Mapbox GL', 'OpenLayers', 'Low-code platform']],
      ['Back-end', ['Python · Flask', 'Node.js', 'REST API', 'Service integration']],
      ['Databases', ['PostgreSQL · PostGIS', 'Oracle Spatial', 'MSSQL', 'Elasticsearch']],
      ['GIS and remote sensing', ['GDAL', 'GeoServer', 'QGIS', 'Image processing']]
    ],
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
    pubHead: 'Paper and award',
    pub: [
      { years: '2020', title: 'Building detection on SAR imagery with U-Net', text: 'CNN-based U-Net; pre-processing pipeline for the classification mask. International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences, XLIV-4/W3-2020.', link: 'isprs', linkLabel: 'Read the paper' },
      { years: '2020', title: 'SuperMap GIS Contest 2020 — first prize, developer category', text: 'Spatial analysis on real-estate data, a map service and a front-end. With Görkem Acar.', link: 'supermap', linkLabel: 'See the announcement' }
    ],
    contact: [
      ['E-mail', 'mail'], ['LinkedIn', 'linkedin'], ['GitHub', 'github'], ['Twitter', 'twitter'], ['Facebook', 'facebook']
    ],
    contactNote: 'Write about a new map, a spatial data problem, or a paper to co-author.',
    colophon: 'Static HTML · d3 · Netlify',
    rows: {
      ist: [
        { a: 'Yıldız Technical University', b: 'BSc Geomatics Eng.', c: '2013 – 18', href: '#education' },
        { a: 'Experience', b: '2 rows', c: '2021 –', href: '#experience' }
      ],
      ank: [{ a: 'Experience', b: '1 row', c: '2021', href: '#experience' }],
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
      ]
    },
    summary: [
      { place: 'ist', b: 'education · experience', n: 3 }, { place: 'ant', b: 'education · experience', n: 2 }, { place: 'rot', b: 'project · paper', n: 2 }, { place: 'roc', b: 'project · award', n: 2 }, { place: 'ank', b: 'experience', n: 1 }
    ],
    noscript: 'This page uses JavaScript for the globe and the console. Contact: recaialperemek@gmail.com'
  }
};
