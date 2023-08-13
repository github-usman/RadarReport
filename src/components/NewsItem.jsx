import React, { Component } from "react";
import Card from "./Card";
import "../App.css";
// import Items from '../sampleOutput'
export default class NewsItem extends Component {


     Items = 
    [
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "David Nield",
        "title": "How to Download Maps on Your Phone to Travel Offline",
        "description": "Even in this day and age, you can’t always guarantee a strong cellular connection to a mobile network everywhere you go, especially if you’re on vacation. That can cause a problem when you’re trying to make your way from A to B using your map app of choice. T…",
        "url": "https://gizmodo.com/how-to-download-google-apple-maps-on-your-phone-offline-1850712496",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/afa5354659da81156bdc3f3fc8445940.jpg",
        "publishedAt": "2023-08-12T12:00:00Z",
        "content": "Even in this day and age, you cant always guarantee a strong cellular connection to a mobile network everywhere you go, especially if youre on vacation. That can cause a problem when youre trying to … [+3840 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Tom Hunt",
        "title": "How to use celery butt, heart and leaves in a waldorf-inspired salad - recipe | Waste not",
        "description": "They often go to waste, but celery heart and butt are sweet and tasty, while the leaves can be used like herbs. Try them all in this take on the classic retro saladThis is my plant-based, no-waste take on a classic waldorf salad. I use the sweet celery heart,…",
        "url": "https://www.theguardian.com/food/2023/aug/12/how-to-use-celery-butt-heart-and-leaves-in-a-waldorf-inspired-salad-zero-waste-cooking-recipe",
        "urlToImage": "https://i.guim.co.uk/img/media/b9306dbcd06d462b3639c6262ec7aec4f6e4adf7/351_13_3122_1873/master/3122.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d08fb3e6da1357c503c550cb37b6b7da",
        "publishedAt": "2023-08-12T05:00:09Z",
        "content": "This is my plant-based, no-waste take on a classic waldorf salad. I use the sweet celery heart, butt and leaves, which often go to waste, so save the stalks for any other dish you fancy. The mayo-sty… [+2302 chars]"
        },
        {
        "source": {
        "id": "polygon",
        "name": "Polygon"
        },
        "author": "Alice Newcome-Beill",
        "title": "Get every Quake and Doom game for less than $45 during QuakeCon",
        "description": "Make sure to check out discounts on the entire Doom and Quake franchises at Steam, in addition to Resident Evil and Jackbox bundles available through Humble.",
        "url": "https://www.polygon.com/deals/23826536/best-gaming-deals-quake-doom-steam-humble-bundle-vinyl-deal-sale",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/vfUhfJRPWpdGklz59Xgj9g3uSA8=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19811896/doom_eternal2.jpg",
        "publishedAt": "2023-08-12T14:30:00Z",
        "content": "While the majority of the Polygon staff is fixated on finding more stuff to throw in Baldurs Gate 3, weve been busy rounding up deals you should definitely check out this weekend. Some of our highlig… [+5102 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Lacort",
        "title": "Dyson Gen5 Detect, análisis: su láser convierte la limpieza doméstica en un adictivo placer",
        "description": "En la época de las aspiradoras robot, que han conquistado muchísimos hogares por su comodidad, uno puede preguntarse por qué recurrir a una aspiradora escoba, pero hay muchos motivos para decantarse por una. Por vivir en una casa de espacios reducidos con obs…",
        "url": "https://www.xataka.com/domotica-1/dyson-gen5-detect-analisis-su-laser-convierte-la-limpieza-domestica-en-un-adictivo-placer",
        "urlToImage": "https://i.blogs.es/7d2dcc/dyson-gen5-detect-22/840_560.jpeg",
        "publishedAt": "2023-08-12T14:31:17Z",
        "content": "En la época de las aspiradoras robot, que han conquistado muchísimos hogares por su comodidad, uno puede preguntarse por qué recurrir a una aspiradora escoba, pero hay muchos motivos para decantarse … [+13024 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Mark Coppock",
        "title": "I’ve reviewed all the best laptops this year — here are the only ones I recommend",
        "description": "Some great new laptops have been introduced so far in 2023, with innovative designs, incredible value, or both. Here are a handful to consider.",
        "url": "http://www.digitaltrends.com/computing/best-new-laptops-of-2023/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/02/IMG_3486-Edited-1.jpeg?resize=1200%2C630&p=1",
        "publishedAt": "2023-08-12T12:00:23Z",
        "content": "So far, 2023 has been a banner year for laptops. We’ve seen some excellent machines pass through our doors, representing some of the best laptops we’ve reviewed across a variety of form factors. Many… [+7776 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Github.io"
        },
        "author": "Jason Eckert",
        "title": "Fedora Asahi Remix first impressions",
        "description": "My personal website and blog",
        "url": "https://jasoneckert.github.io/myblog/fedora-asahi-remix/",
        "urlToImage": null,
        "publishedAt": "2023-08-12T14:24:05Z",
        "content": "It’s been a year and a half since the Asahi Linux project allowed us to run Arch Linux natively on our Apple Silicon computers. And while my overall experience has been excellent, the Asahi Linux pro… [+10756 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Joachim Kläschen, Michael Reimann",
        "title": "heise+ | Apple-Spieletests: Super Meat Boy, Bricktales, Pocket City 2, No Man’s Sky",
        "description": "Vier Games für iPhone, iPad und Mac im Test: Diesmal sind ein Plattformer, ein Lego-Spiel, eine Stadtsimulation und ein Ausflug ins Weltall dabei.",
        "url": "https://www.heise.de/tests/Apple-Spieletests-Super-Meat-Boy-Bricktales-Pocket-City-2-No-Man-s-Sky-9239686.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/8/3/7/6/7/heisem_Gaming_on_Apple_devices_like_iphone_ipad_and_mac_a9c5ed94-2b43-4a1f-9876-7ef6520aefa7-0a01097b46d4ca3e.png",
        "publishedAt": "2023-08-12T12:00:00Z",
        "content": "Inhaltsverzeichnis\r\niPad, iPhone und Mac werden als Spieleplattform immer populärer. Mac &amp; i testet in regelmäßigen Abständen neues Gamer-Futter für Apple-User. Diesmal mit dabei sind drei Titel … [+2496 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Stefan Krempl",
        "title": "KI-Projekt App Danger: Schwarze Liste für jugendgefährdende Apps",
        "description": "US-Forscher setzen auf KI, um für Kinder und Jugendliche riskante Apps zu identifizieren. Von über 180 Anwendungen raten sie so inzwischen online ab.",
        "url": "https://www.heise.de/news/KI-Projekt-App-Danger-Schwarze-Liste-fuer-jugendgefaehrdende-Apps-9242438.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/8/5/2/2/9/shutterstock_1662233533-b4f4da1e3dc6ecd5.jpg",
        "publishedAt": "2023-08-12T08:46:00Z",
        "content": "Inhaltsverzeichnis\r\nBrian Levine, ein Informatiker an der University of Massachusetts in Amherst, hatte es satt, ständig von seiner 14-jährigen Tochter um Erlaubnis für das Installieren bestimmter Sm… [+4971 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "dpa",
        "title": "Huawei trotzt US-Sanktionen mit leichtem Wachstum",
        "description": "Der chinesische Technologiekonzern Huawei sieht sich harten Sanktionen westlicher Staaten ausgesetzt. Dennoch wachsen Umsatz und Einnahmen leicht.",
        "url": "https://www.heise.de/news/Huawei-trotzt-US-Sanktionen-mit-leichtem-Wachstum-9242499.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/8/5/2/6/3/shutterstock_1396636169-28acec539fef6572.jpg",
        "publishedAt": "2023-08-12T12:45:00Z",
        "content": "Der chinesische Technologiekonzern Huawei hat seinen Umsatz trotz starker Behinderungen durch US-Sanktionen leicht ausbauen können. In der ersten Jahreshälfte 2023 verzeichnete das Unternehmen ein Um… [+2593 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Genbeta.com"
        },
        "author": "Eva Rodriguez",
        "title": "Cinco trucos para hacer de macOS un sistema operativo mucho más productivo",
        "description": "Mi ecosistema de trabajo desde hace años es el de Apple, pero cuando cambié desde Windows me costó lo mío aprender a sacarle todo el partido. Y es que aunque macOS es un sistema operativo que per se resulta intuitivo y de lo más completo, hay atajos y trucos …",
        "url": "https://www.genbeta.com/a-fondo/cinco-trucos-para-hacer-macos-sistema-operativo-mucho-productivo",
        "urlToImage": "https://i.blogs.es/9c659f/pexels-pixabay-39284/840_560.jpeg",
        "publishedAt": "2023-08-12T10:01:17Z",
        "content": "Mi ecosistema de trabajo desde hace años es el de Apple, pero cuando cambié desde Windows me costó lo mío aprender a sacarle todo el partido. Y es que aunque macOS es un sistema operativo que per se … [+5784 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Malcolm Owen)",
        "title": "Apple TV+'s 'Frog and Toad' not viewable in the U.S.",
        "description": "The Apple TV+ animated series \"Frog and Toad\" is unavailable in the United States, only a few months after the show premiered on the streaming service.'Frog and Toad' [Apple TV+]Apple released \"Frog and Toad,\" an animated kids series based on the award-winnin…",
        "url": "https://appleinsider.com/articles/23/08/12/apple-tvs-frog-and-toad-not-viewable-in-the-us",
        "urlToImage": "https://photos5.appleinsider.com/gallery/55851-113439-frogtoad-xl.jpg",
        "publishedAt": "2023-08-12T16:58:16Z",
        "content": "'Frog and Toad' [Apple TV+]\r\nThe Apple TV+ animated series \"Frog and Toad\" is unavailable in the United States, only a few months after the show premiered on the streaming service. \r\nApple released \"… [+1483 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Malcolm Owen)",
        "title": "Upgrading an Apple Silicon Mac mini SSD is possible, but a slog",
        "description": "Owners of the M1 Mac mini can upgrade the storage, but with a tricky process involving desoldering chips, it's a difficult path that most users should avoid taking in the first place.Removing the old NAND chips from a Mac mini logic board [YouTube/Luke Miani]…",
        "url": "https://appleinsider.com/articles/23/08/12/upgrading-an-apple-silicon-mac-mini-ssd-is-possible-but-a-slog",
        "urlToImage": "https://photos5.appleinsider.com/gallery/55849-113436-lukemianimacmini2-xl.jpg",
        "publishedAt": "2023-08-12T13:20:48Z",
        "content": "Removing the old NAND chips from a Mac mini logic board [YouTube/Luke Miani]\r\nOwners of the M1 Mac mini can upgrade the storage, but with a tricky process involving desoldering chips, it's a difficul… [+4539 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Malcolm Owen)",
        "title": "Judge clears way for $500M iPhone throttling settlements",
        "description": "Owners of iPhone models who were part of throttling lawsuits that ended up with a $500 settlement from Apple may soon receive their payments, after a judge denied objections against the offer.In May 2020, a proposed settlement to end a series of class action …",
        "url": "https://appleinsider.com/articles/23/08/12/judge-clears-way-for-500m-iphone-throttling-settlements",
        "urlToImage": "https://photos5.appleinsider.com/gallery/55850-113438-38965-74410-iphone-6s-xl-xl.jpg",
        "publishedAt": "2023-08-12T15:07:24Z",
        "content": "Owners of iPhone models who were part of throttling lawsuits that ended up with a $500 settlement from Apple may soon receive their payments, after a judge denied objections against the offer. \r\nIn M… [+1501 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Michael Stroup)",
        "title": "Elevate your artistic abilities at the free B&H Bild Expo at the Javits Center in New York City",
        "description": "Since 1973, B&H Photo has been committed to supporting audio and visual artistry. Join B&H Photo this year, for the very first time, as they host the BIld Expo to celebrate 50 years as a premier retailer supporting the art of creating photographs, videos, and…",
        "url": "https://appleinsider.com/articles/23/08/12/elevate-your-artistic-abilities-at-the-free-bh-bild-expo-at-the-javits-center-in-new-york-city",
        "urlToImage": "https://photos5.appleinsider.com/gallery/55847-113435-Free-Event-xl.jpg",
        "publishedAt": "2023-08-12T00:06:48Z",
        "content": "Register today for B&amp;H Photo's free Bild Expo event. \r\nSince 1973, B&amp;H Photo has been committed to supporting audio and visual artistry. Join B&amp;H Photo this year, for the very first time,… [+2830 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yanko Design"
        },
        "author": "Sarang Sheth",
        "title": "Before you buy the Apple Vision Pro, check out this Dual-lens VR camera that shoots 6K Videos in 3D",
        "description": "Before you buy the Apple Vision Pro, check out this Dual-lens VR camera that shoots 6K Videos in 3DSort of like a GoPro on steroids, the CALF 3D VR180 is a tiny handheld camera with not one but two large lenses on the...",
        "url": "https://www.yankodesign.com/2023/08/11/before-you-buy-the-apple-vision-pro-check-out-this-dual-lens-vr-camera-that-shoots-6k-videos-in-3d/",
        "urlToImage": "https://www.yankodesign.com/images/design_news/2023/08/auto-draft/calf_3d_vr108_camera_1.jpg",
        "publishedAt": "2023-08-12T00:45:19Z",
        "content": "Sort of like a GoPro on steroids, the CALF 3D VR180 is a tiny handheld camera with not one but two large lenses on the front. The purpose? To capture images and videos in stereoscopic vision, just th… [+4850 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Journal du Geek",
        "title": "Maintes fois récompensé, cet antivirus offre la meilleure solution de cybersécurité du marché",
        "description": "Si vous avez un ordinateur Apple et que vous recherchez activement un antivirus de confiance, on vous recommande vivement d'essayer la solution de Intego, une entreprise française renommée mondialement. En ce moment, sa solution de cybersécurité profite juste…",
        "url": "https://www.journaldugeek.com/bon-plan/maintes-fois-recompense-cet-antivirus-offre-la-meilleure-solution-de-cybersecurite-du-marche/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/12/ordinateur.jpg",
        "publishedAt": "2023-08-12T06:10:30Z",
        "content": "Si vous avez un ordinateur Apple et que vous recherchez activement un antivirus de confiance, on vous recommande vivement d'essayer la solution de Intego, une entreprise française renommée mondialeme… [+3673 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Olivier",
        "title": "Siri pourrait lire sur les lèvres",
        "description": "Apple a imaginé une technologie qui permettrait à Siri de lire sur les lèvres en utilisant non pas des caméras, mais des capteurs de mouvement. Une nouvelle méthode de reconnaissance de la parole qui élimine complètement les problèmes de bruit de fond !\nSiri …",
        "url": "https://www.journaldugeek.com/2023/08/12/siri-pourrait-lire-sur-les-levres/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/08/siri-lecture-labiale.jpg",
        "publishedAt": "2023-08-12T16:00:50Z",
        "content": "Apple a imaginé une technologie qui permettrait à Siri de lire sur les lèvres en utilisant non pas des caméras, mais des capteurs de mouvement. Une nouvelle méthode de reconnaissance de la parole qui… [+2827 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Thomas Estimbre",
        "title": "En Chine, le gouvernement aura un droit de regard sur les apps mobiles",
        "description": "Le gouvernement chinois serre la vis et exigera que toutes les applications fournissent des détails concernant leur activité. Une décision qui risque de compliquer la tâche des développeurs étrangers.\nEn Chine, le gouvernement aura un droit de regard sur les …",
        "url": "https://www.journaldugeek.com/2023/08/12/en-chine-le-gouvernement-aura-un-droit-de-regard-sur-les-apps-mobiles/",
        "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/07/iphone-5g-reseau.jpg",
        "publishedAt": "2023-08-12T08:00:26Z",
        "content": "Le gouvernement chinois serre la vis et exigera que toutes les applications fournissent des détails concernant leur activité. Une décision qui risque de compliquer la tâche des développeurs étrangers… [+2776 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Jesús Quesada",
        "title": "Reloj Apple Watch Series 8 VS Amazfit T-Rex Ultra: características, diferencias y precios",
        "description": "Apple está centrando sus esfuerzos en que el Apple Watch sea el mejor smartwatch enfocado en el deporte y salud, al menos, para los usuarios de iPhone. Las grandes mejoras del dispositivo están centradas en ayudar a los usuarios con sus entrenamientos y a mon…",
        "url": "https://www.applesfera.com/seleccion/reloj-apple-watch-series-8-vs-amazfit-t-rex-ultra-caracteristicas-diferencias-precios",
        "urlToImage": "https://i.blogs.es/126b3a/amazfit-t-rex-ultra-vs-apple-watch-series-8/840_560.jpeg",
        "publishedAt": "2023-08-12T17:01:18Z",
        "content": "Apple está centrando sus esfuerzos en que el Apple Watch sea el mejor smartwatch enfocado en el deporte y salud, al menos, para los usuarios de iPhone. Las grandes mejoras del dispositivo están centr… [+12455 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Fran Bouzas",
        "title": "\"Acaricio a mujeres con pechos grandes\": quien es Tony Blevins, el ejecutivo que Apple despidió de forma fulminante",
        "description": "Si eres un usuario asiduo TikTok seguro que en alguna ocasión habrás visto un vídeo de Daniel Mac. Quizás su nombre no te suene, pero todos son iguales. Busca coches lujosos por la calle y se acerca a preguntarle al conductor en qué trabaja. De ese modo, pode…",
        "url": "https://www.applesfera.com/curiosidades/acaricio-a-mujeres-pechos-grandes-quien-tony-blevins-ejecutivo-que-apple-despidio-forma-fulminante",
        "urlToImage": "https://i.blogs.es/a308ca/tony-blevins/840_560.png",
        "publishedAt": "2023-08-12T15:00:28Z",
        "content": "Si eres un usuario asiduo TikTok seguro que en alguna ocasión habrás visto un vídeo de Daniel Mac. Quizás su nombre no te suene, pero todos son iguales. Busca coches lujosos por la calle y se acerca … [+3729 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Isra Fdez",
        "title": "Las cuatro palabras mágicas que Steve Jobs le dijo a John Lasseter para liderar el mundo de la animación con Pixar",
        "description": "¿Quien es John Lasseter? Natural de Los Ángeles, California, siempre ataviado con camisas hawaianas —posee una colección de miles— y fan absoluto de la NASCAR y la automoción en general, John Alan Lasseter es uno de los más importantes directores de la histor…",
        "url": "https://www.applesfera.com/nuevo/cuatro-palabras-magicas-que-steve-jobs-le-dijo-a-john-lasseter-para-liderar-mundo-animacion-pixar",
        "urlToImage": "https://i.blogs.es/2bb335/steve-jobs-panoramico/840_560.jpeg",
        "publishedAt": "2023-08-12T11:01:17Z",
        "content": "¿Quien es John Lasseter? Natural de Los Ángeles, California, siempre ataviado con camisas hawaianas posee una colección de miles y fan absoluto de la NASCAR y la automoción en general, John Alan Lass… [+3394 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Hiba Fiaz",
        "title": "Stuck on iOS 16? Use These Apps to Get iOS 17 Features",
        "description": "You can experience iOS 17 features on your old, unsupported iPhone by leveraging the App Store.",
        "url": "https://www.makeuseof.com/apps-to-get-ios-17-features/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/06/ios-17-features-from-wwdc-2023-featured.jpg",
        "publishedAt": "2023-08-12T10:16:24Z",
        "content": "With every iOS update, Apple cuts off a handful of iPhones from its new software, and iOS 17 is no different. If your iPhone was one of the unfortunate models that didn't make the cut, you're stuck w… [+6819 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Danny Maiorca",
        "title": "The Pros and Cons of Using No-Code Websites as a Blogger",
        "description": "No-code website builders are a fantastic option for bloggers, but before diving in, it's worth exploring the key advantages and disadvantages.",
        "url": "https://www.makeuseof.com/pros-cons-using-no-code-websites-as-a-blogger/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/08/annie-spratt-gm8l2eucvre-unsplash-2.jpg",
        "publishedAt": "2023-08-12T12:30:24Z",
        "content": "Starting a blog has become much easier these days, and your biggest challenge won't be finding a place but choosing the right one. Traditional website builders often involve a lot of coding, but you … [+6514 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "Presse-citron",
        "title": "L’iPhone SE 4 arrive : tout ce qu’il faut savoir (fiche technique)",
        "description": "Ce ne sera peut-être pas le meilleur rapport qualité/prix chez Apple, mais ce sera certainement le plus abordable de ses mobiles.",
        "url": "https://www.presse-citron.net/liphone-se-4-arrive-tout-ce-quil-faut-savoir-fiche-technique/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2023/08/iPhone-14.webp",
        "publishedAt": "2023-08-12T16:00:32Z",
        "content": "<ul><li>L’iPhone SE 4 arrivera en 2025</li><li>Le design ressemblera à l’iPhone 14, semble-t-il</li><li>Un processeur amélioré est aussi en préparation</li></ul>Apple devrait dévoiler l’iPhone SE de … [+2441 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "Presse-citron",
        "title": "Comment un footballer fait trembler le monde du streaming",
        "description": "Le Pass Ligue 1 Uber Eats d'Amazon n'a qu'à bien se tenir...",
        "url": "https://www.presse-citron.net/comment-un-footballer-fait-trembler-le-monde-du-streaming/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2023/08/football-terrain-but.jpg",
        "publishedAt": "2023-08-12T14:00:59Z",
        "content": "<ul><li>Le joueur de football Lionel Messi a été recruté par une nouvelle équipe</li><li>Les matches de cette équipe sont diffusés sur Apple TV+</li><li>Par conséquent, le nombre d’abonnés au service… [+2672 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka Android"
        },
        "author": "Iván Ramírez",
        "title": "Google Play Pass es lo mejor que le ha pasado a mi móvil Android: uso aplicaciones de calidad y he dicho adiós a los anuncios",
        "description": "Reconozco que desde que Google lanzó Play Pass en España en 2020 el sistema no me interesó demasiado pues al final termino jugando a los mismos juegos de siempre, pero tras haber tenido la suerte de que me tocaran tres meses de Play Pass como recompensa de Pl…",
        "url": "https://www.xatakandroid.com/play-store/google-play-pass-mejor-que-le-ha-pasado-a-mi-movil-android-uso-aplicaciones-calidad-he-dicho-adios-a-anuncios",
        "urlToImage": "https://i.blogs.es/cebffd/gpp/840_560.jpeg",
        "publishedAt": "2023-08-12T14:01:16Z",
        "content": "Reconozco que desde que Google lanzó Play Pass en España en 2020 el sistema no me interesó demasiado pues al final termino jugando a los mismos juegos de siempre, pero tras haber tenido la suerte de … [+3876 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Authority"
        },
        "author": "Kaitlyn Cimino",
        "title": "Fitbit Sense 3: Everything we know so far and what we want to see",
        "description": "A Fitbit Sense 3 launch is likely, even if it's far off. Keep up on everything we know about the device's potential specs, rumors, and more.",
        "url": "https://www.androidauthority.com/fitbit-sense-3-3353902/",
        "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2022/09/Fitbit-Sense-2-dashboard-scaled.jpg",
        "publishedAt": "2023-08-12T04:06:09Z",
        "content": "Fitbit devices remain among the most popular wearables available, including the companys top smartwatch lineups. The health-focused Fitbit Sense line is the brands top tier with advanced sensors and … [+8139 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Authority"
        },
        "author": "Andrew Grush",
        "title": "10 tips to get the most out of your Samsung Galaxy Z Flip 5",
        "description": "Recently bought the Samsung Galaxy Z Flip 5? Be sure to check out our Glaaxy Z Flip 5 tips guide to learn more about making the most of it.",
        "url": "https://www.androidauthority.com/samsung-galaxy-z-flip-5-tips-tricks-3351540/",
        "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/07/samsung-galaxy-z-flip-5-flex-window-on-wood.jpg",
        "publishedAt": "2023-08-12T11:00:28Z",
        "content": "The Samsung Galaxy Z Flip 5 is now official, bringing a larger secondary screen, a gapless design, and several other refinements.  If you want to get the most out of your new Galaxy Z Flip 5, we have… [+9197 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Cracked.com"
        },
        "author": "Zanandi Botes",
        "title": "‘Not Afraid to Be Mean’: 15 Trivia Tidbits About ‘MADtv’",
        "description": "By Zanandi Botes Published: August 12th, 2023",
        "url": "https://www.cracked.com/article_38992_not-afraid-to-be-mean-15-trivia-tidbits-about-madtv.html",
        "urlToImage": "https://s3.crackedcdn.com/phpimages/article/6/1/9/905619.jpg",
        "publishedAt": "2023-08-12T15:00:00Z",
        "content": "Widely considered SNLs edgy L.A. cousin, the series that did an entire sketch off a single Malcolm X joke might never have been if Quincy Jones and David Salzman didnt buy Mad Magazine in 1995. The d… [+8495 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Faz.net"
        },
        "author": "FAZ.NET",
        "title": "Ukraine-Liveblog: Offenbar weiterer Angriff auf Krim-Brücke",
        "description": "51 Explosionen im ukrainischen Sumy +++ Frankreich verurteilt russischen Raketenangriff in Westukraine +++ Russisches Ministerium verbietet Mitarbeitern Nutzung von Apple-Produkten +++ alle Entwicklungen im Liveblog",
        "url": "https://www.faz.net/aktuell/politik/ukraine-liveticker-offenbar-weiterer-angriff-auf-krim-bruecke-19030454.html",
        "urlToImage": "https://media0.faz.net/ppmedia/aktuell/1437758408/1.9098868/facebook_teaser/ein-foto-zeigt-die.jpg",
        "publishedAt": "2023-08-12T10:57:14Z",
        "content": "Litauen hat die Bundesregierung mit Blick auf die zugesagte Stationierung von 4000 Bundeswehr-Soldaten an der Nato-Ostflanke zur Eile aufgefordert. \"Wir sollten uns jetzt darauf konzentrieren, einen … [+1333 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "Lloyd Coombes",
        "title": "Apple Watch Series 9 needs to steal the Ultra's best feature",
        "description": "After a year of Apple Watch Ultra, it's time for Series 9 to take its extra button for an extra use.",
        "url": "https://www.imore.com/health-fitness/apple-watch/apple-watch-series-9-needs-to-steal-this-ultra-feature",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/cy4QceJbJCbY8XTHLHcTBm-1200-80.jpg",
        "publishedAt": "2023-08-12T11:01:00Z",
        "content": "Apple’s next event is likely just a few weeks away. And while speculation will naturally be rife about the iPhone 15 lineup\r\n given that product’s popularity, I always find it exciting to think about… [+3765 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "MacRumors Staff",
        "title": "Top Stories: iPhone 15 Event Date, Apple Watch and Mac Rumors, and More",
        "description": "If rumors are to believed, we're now exactly one month away from Apple's big September event where we're expecting to see several product announcements led by the iPhone 15 lineup.\n\n\n\n\n\nIn addition to iPhone 15 rumors, this week also saw fresh claims about th…",
        "url": "https://www.macrumors.com/2023/08/12/top-stories-iphone-15-event-date-rumor/",
        "urlToImage": "https://images.macrumors.com/t/Q35Mi2T46lcNs815z6MWyNCTeXs=/1600x/article-new/2023/08/top-stories-12aug2023.jpg",
        "publishedAt": "2023-08-12T13:00:00Z",
        "content": "If rumors are to believed, we're now exactly one month away from Apple's big September event where we're expecting to see several product announcements led by the iPhone 15 lineup.\r\nIn addition to iP… [+4500 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Les Numériques"
        },
        "author": "Rick",
        "title": "Actualité : Bon plan – La montre connectée Garmin Venu Noir \"4 étoiles\" à 249,99 €",
        "description": "La montre connectée Garmin Venu Noir passe sous les 250 € chez Boulanger.com.",
        "url": "https://www.lesnumeriques.com/montre-connectee/bon-plan-la-montre-connectee-garmin-venu-noir-4-etoiles-a-249-99-n212333.html",
        "urlToImage": "https://cdn.lesnumeriques.com/optim/test/14/144679/e2199eb6-garmin-venu-un-superbe-ecran-oled-pour-une-montre-de-sport-efficace__1200_630__overflow.jpeg",
        "publishedAt": "2023-08-12T04:50:02Z",
        "content": "Modèle concernéCe contenu porte spécifiquement sur le modèle : Noir. D'autres déclinaisons existent et leurs prix sont indiqués dans les onglets du tableau ci-dessous.\r\nAvec sa Venu, Garmin propose u… [+1368 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Les Numériques"
        },
        "author": "Louis Paillat",
        "title": "Actualité : Le test des écouteurs true wireless Sony WF-1000XM5 a rejoint notre comparatif",
        "description": "Notre comparatif de 88 écouteurs true wireless accueille le test du Sony WF-1000XM5, disponible à partir de 319,99 €. Il vient en alternative de l'Apple AirPods Pro (2e génération) au prix de 239 €.",
        "url": "https://www.lesnumeriques.com/intra-ecouteur-true-wireless/le-test-des-ecouteurs-true-wireless-sony-wf-1000xm5-a-rejoint-notre-comparatif-n212336.html",
        "urlToImage": "https://cdn.lesnumeriques.com/optim/test/21/211295/d621d708-sony-wf-1000xm5-du-miel-pour-les-oreilles__1200_630__299-369-2699-1629_wtmk.jpg",
        "publishedAt": "2023-08-12T07:02:00Z",
        "content": "Comme leurs prédécesseurs, les WF-1000XM5 parviennent sans problème à se hisser parmi les meilleurs écouteurs true wireless du marché. Ils ont presque tout pour eux : une signature sonore toujours au… [+997 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Eva Rodriguez",
        "title": "Estos son los 10 trucos que uso para alargar la batería de mi Apple Watch",
        "description": "Los Apple Watch tienen muchas virtudes pero (salvo que tengas el Apple Watch Ultra), la autonomía no es una de ellas: una sensórica bastante completa, un montón de funciones y un espacio reducido para integrar una batería que ha de ser pequeña son los ingredi…",
        "url": "https://www.xatakamovil.com/apple/estos-nueve-trucos-que-uso-para-alargar-bateria-mi-apple-watch",
        "urlToImage": "https://i.blogs.es/edda2a/ahorro/840_560.jpeg",
        "publishedAt": "2023-08-12T14:01:16Z",
        "content": "Los Apple Watch tienen muchas virtudes pero (salvo que tengas el Apple Watch Ultra), la autonomía no es una de ellas: una sensórica bastante completa, un montón de funciones y un espacio reducido par… [+7007 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Eva Rodriguez",
        "title": "iOS 17 tiene muchas cosas buenas, pero un molesto cambio al que cuesta acostumbrarse: el nuevo botón de colgar llamadas",
        "description": "Aunque las novedades de las beta no son la última palabra de Apple, es decir, pueden no estar en el  iOS 17 que estará disponible para descargar e instalar después de la keynote en la que veremos los nuevos iPhone 15, queda poquísimo tiempo para que pase de b…",
        "url": "https://www.xatakamovil.com/apple/ios-17-tiene-muchas-cosas-buenas-molesto-cambio-al-que-cuesta-acostumbrarse-nuevo-boton-colgar-llamadas",
        "urlToImage": "https://i.blogs.es/17a478/mymind-whj5l9kgtl4-unsplash/840_560.jpeg",
        "publishedAt": "2023-08-12T11:01:17Z",
        "content": "Aunque las novedades de las beta no son la última palabra de Apple, es decir, pueden no estar en el  iOS 17 que estará disponible para descargar e instalar después de la keynote en la que veremos los… [+2242 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TMZ"
        },
        "author": "TMZ Staff",
        "title": "What's The Big Frigin' Difference?!",
        "description": "Like \"Thelma and Louise\" ... you are on a mission to hit the streets and be thick as thieves with acting legend Susan Sarandon. Can you find the changes in these two shots before going over the falls? The NYC native threw on her sneaks and picketed…",
        "url": "https://www.tmz.com/2023/08/12/whats-the-big-frigin-difference/",
        "urlToImage": "https://imagez.tmz.com/image/b9/16by9/2023/08/09/b92a5388458b4cacacf767e311588a32_xl.jpg",
        "publishedAt": "2023-08-12T07:35:34Z",
        "content": "The NYC native threw on her sneaks and picketed around her neighborhood -- along with countless other famous folks -- in support of the SAG-AFTRA strike. And, considering it was a hot summer day in t… [+81 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "tagesschau.de"
        },
        "author": "tagesschau.de",
        "title": "Liveblog: ++ Ukraine: Sumy erneut unter Beschuss ++",
        "description": "Russland hat nach Angaben der regionalen Militärverwaltung erneut das ukrainische Gebiet Sumy angegriffen. Über Teilen der von Russland annektierten Krim ist die Flugabwehr aktiviert worden. Alle Entwicklungen im Liveblog.",
        "url": "https://www.tagesschau.de/newsticker/liveblog-ukraine-samstag-304.html",
        "urlToImage": "https://images.tagesschau.de/image/5b073b67-29bf-4703-b6b1-71469e4c25bb/AAABhzJNE4I/AAABibBxqrQ/16x9-1280/flagge-ukraine-truemmer-101.jpg",
        "publishedAt": "2023-08-12T03:34:13Z",
        "content": "Stand: 12.08.2023 05:34 Uhr\r\nRussland hat nach Angaben der regionalen Militärverwaltung erneut das ukrainische Gebiet Sumy angegriffen. Über Teilen der von Russland annektierten Krim ist die Flugabwe… [+3001 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Caschys Blog"
        },
        "author": "Olli",
        "title": "Sony WF-1000XM5: Neue In-Ear-Kopfhörer im Test angehört",
        "description": "Sony hat am 24. Juli die nächste Iteration seiner In-Ear-Kopfhörer vorgestellt. Die Sony WF-1000XM5 haben mittlerweile auch ihren Weg in meine Ohren gefunden und ich habe mich etliche Stunden beschallen lassen. Ausgepackt sind die Kopfhörer zügig. In der Pack…",
        "url": "https://stadt-bremerhaven.de/sony-wf-1000xm5-neue-in-ear-kopfhoerer-angehoert/",
        "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/08/Sony-WF-1000XM5-Test-1.jpg",
        "publishedAt": "2023-08-12T13:30:51Z",
        "content": "Sony hat am 24. Juli die nächste Iteration seiner In-Ear-Kopfhörer vorgestellt. Die Sony WF-1000XM5 haben mittlerweile auch ihren Weg in meine Ohren gefunden und ich habe mich etliche Stunden beschal… [+7089 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Caschys Blog"
        },
        "author": "caschy",
        "title": "ADO AIR 28: E-Bike sucht Unterstützer",
        "description": "ADO hat schon einen Haufen E-Bikes auf den Straßen. Nun versucht man es mit einem neuen Modell. Da will man anscheinend erst das Interesse abklopfen, denn man startet eine Indiegogo-Kampagne, um Unterstützer zu finden. Finde ich für viele gestandene Unternehm…",
        "url": "https://stadt-bremerhaven.de/ado-air-28-e-bike-sucht-unterstuetzer/",
        "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/07/9f8b1c9a0709938417951383de2c4ee.jpg",
        "publishedAt": "2023-08-12T06:00:01Z",
        "content": "ADO hat schon einen Haufen E-Bikes auf den Straßen. Nun versucht man es mit einem neuen Modell. Da will man anscheinend erst das Interesse abklopfen, denn man startet eine Indiegogo-Kampagne, um Unte… [+1746 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "IndieWire"
        },
        "author": "Christian Zilko",
        "title": "‘Diamantino’ Is the Surreal, Anti-Nationalist Himbo Sports Cinema to Cure Your World Cup Blues",
        "description": "Gabriel Abrantes and Daniel Schmidt's gleefully weird queer romance/crime thriller from 2018 is \"The Fly\" meets \"Body Snatchers\" meets \"Titane\" meets \"Ted Lasso.\"",
        "url": "https://www.indiewire.com/features/best-of/diamantino-himbo-soccer-midnight-movie-1234892983/",
        "urlToImage": "https://www.indiewire.com/wp-content/uploads/2023/08/MCDDIAM_EC022.jpg",
        "publishedAt": "2023-08-12T03:59:00Z",
        "content": "On Friday nights, IndieWire After Dark takes a feature-length beat to honor fringe cinema in the streaming age. \r\nFirst, the spoiler-free pitch for one editor’s midnight movie pick — something weird … [+6926 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "IndieWire"
        },
        "author": "Eric Kohn",
        "title": "How YouTube Caused the Hollywood Strikes",
        "description": "Alex Winter explains why Hollywood must stop trying to imitate the ecosystem of the creator economy.",
        "url": "https://www.indiewire.com/features/commentary/alex-winter-interview-youtube-effect-1234895159/",
        "urlToImage": "https://www.indiewire.com/wp-content/uploads/2023/08/Screen-Shot-2023-08-11-at-4.05.56-PM.jpg",
        "publishedAt": "2023-08-12T14:00:00Z",
        "content": "Kohn’s Corner is a weekly column about the challenges and opportunities of sustaining American film culture.\r\nAs actors continued to strike this week, the biggest stories about performers were unrela… [+13474 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Cassim Ketfi",
        "title": "Après Netflix, l’augmentation de prix de Disney+ vous pousse-t-elle vers le piratage ?",
        "description": "Avec les augmentations de prix de Netflix et Disney+, êtes-vous tentés par le piratage de séries ou de films ?",
        "url": "https://www.frandroid.com/services/svod/1767351_apres-netflix-laugmentation-de-prix-de-disney-vous-pousse-t-elle-vers-le-piratage",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/09/disney-offre-disney-day.jpg",
        "publishedAt": "2023-08-12T16:03:26Z",
        "content": "Avec les augmentations de prix de Netflix et Disney+, êtes-vous tentés par le piratage de séries ou de films ?\r\nLe début des années 2000 a été marqué par une grande montée en popularité du piratage d… [+2275 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Manuel Castejon",
        "title": "Pixel 8 : après la photo, Google pourrait révolutionner la vidéo",
        "description": "Une vidéo promotionnelle du Pixel 8 a fuité. Celle-ci se concentre sur un point en particulier : la suppression des parasites audio dans les vidéos.",
        "url": "https://www.frandroid.com/marques/google/1767663_pixel-8-apres-la-photo-google-pourrait-revolutionner-la-video",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/08/google-pixel-8-bleu.jpg",
        "publishedAt": "2023-08-12T07:06:33Z",
        "content": "Une vidéo promotionnelle du Pixel 8 a fuité. Celle-ci se concentre sur un point en particulier : la suppression des parasites audio dans les vidéos.\r\nGoogle Pixel 8 (vidéo promotionnelle supposée) //… [+2769 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Ulrich Rozier",
        "title": "On améliore les Tesla Model 3 et Y : ajout d’un écran compatible CarPlay et Android Auto",
        "description": "J'ai exploré une audacieuse modification sur ma Tesla : l'intégration d'un écran supplémentaire. Mais est-ce que cette modification répond vraiment aux petites frustrations rencontrées avec le système Tesla ? Est-ce simple à installer ? Quels avantages et que…",
        "url": "https://www.frandroid.com/survoltes/voitures-electriques/1767689_on-ameliore-les-tesla-model-3-et-y-ajout-dun-ecran-compatible-carplay-et-android-auto",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/08/tesla-hansshow-frandroid-img-2226.jpg",
        "publishedAt": "2023-08-12T08:52:31Z",
        "content": "J'ai exploré une audacieuse modification sur ma Tesla : l'intégration d'un écran supplémentaire. Mais est-ce que cette modification répond vraiment aux petites frustrations rencontrées avec le systèm… [+11892 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Yann Lethuillier",
        "title": "Essai Lexus UX 300e (2023) : des améliorations notables, mais des défauts encore rédhibitoires",
        "description": "Le Lexus UX 300e fut le premier modèle électrique lancé par le constructeur premium japonais. Arrivé en 2020 et développé autour d’une plateforme multi énergies, ce SUV électrique était plein de compromis et peinait à séduire les clients. En 2023, Lexus a rev…",
        "url": "https://www.frandroid.com/marques/lexus/1728555_essai-lexus-ux-300e-2023-des-ameliorations-notables-mais-des-defauts-encore-redhibitoires",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/06/essai-lexus-ux-300e-20.jpg",
        "publishedAt": "2023-08-12T12:02:32Z",
        "content": "Il y a environ deux ans, nous avions pris en main le Lexus UX 300e premier du nom disons, un modèle venu comme «combler un vide» chez Lexus, à lépoque où tous les constructeurs sortaient leur premièr… [+13938 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Nicholas Rossolillo)",
        "title": "1 Apple Chip Supplier Might Hold the Key to Understanding When iPhone Sales Rebound",
        "description": "Skyworks Solutions, much like other mobile chip companies, is still hurting.",
        "url": "https://www.fool.com/investing/2023/08/12/apple-chip-supplier-hold-key-to-iphone-sales/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/743638/smartphone-city-connectivity.jpg",
        "publishedAt": "2023-08-12T11:10:00Z",
        "content": "Thanks to guidance from mobile chipmakers in recent months, it was no surprise that Apple (AAPL 0.03%) reported sluggish iPhone sales for its quarter ended June 2023. The tech titan's phone revenue d… [+4204 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Trevor Jennewine)",
        "title": "A Bull Market Is Coming: 2 Magnificent Stock-Split Stocks to Buy Now and Hold Through the Rally",
        "description": "These stock-split stocks could make shareholders richer during the next bull market.",
        "url": "https://www.fool.com/investing/2023/08/12/bull-market-coming-2-stock-split-stocks-to-buy-now/",
        "urlToImage": "https://optimize.foolcdn.com/?url=https%3A%2F%2Fg.foolcdn.com%2Fmisc-assets/jester.png&w=400&op=resize",
        "publishedAt": "2023-08-12T10:48:00Z",
        "content": "Investors get fired up about stock splits. The reason for that enthusiasm is simple: While stock splits have no direct impact on important fundamentals like earnings or valuation, they are only neces… [+5318 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Deadline"
        },
        "author": "Antonia Blyth",
        "title": "20 Questions On Deadline Podcast: Jessica Chastain Talks ‘George & Tammy’, Feminism, New Film ‘Mothers’ Instinct’ & Her Big Life Lessons",
        "description": "THIS EPISODE WAS RECORDED PRIOR TO THE ACTORS’ STRIKE. This week’s guest is Jessica Chastain. Fresh off a Tony nomination for her role in Jamie Lloyd’s Broadway revival of A Dolls’ House, Chastain is Emmy-nominated for her turn as country singer Tammy Wynette…",
        "url": "https://deadline.com/2023/08/20-questions-deadline-podcast-jessica-chastain-mothers-instinct-anne-hathaway-memory-1235460802/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2023/06/Jessica-Chastain-attends-the-Emmy-FYC-Event-of-George-Tammy-at-Hollywood-Athletic-Club-in-Hollywood-California-150523_7.jpg?w=1024",
        "publishedAt": "2023-08-12T01:17:49Z",
        "content": "THIS EPISODE WAS RECORDED PRIOR TO THE ACTORS’ STRIKE.\r\nThis week’s guest is Jessica Chastain. \r\nFresh off a Tony nomination for her role in Jamie Lloyd’s Broadway revival of A Dolls’ House, Chastain… [+961 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Creative Bloq"
        },
        "author": "joe.foley@futurenet.com (Joseph Foley)",
        "title": "Apple's subtle call screen redesign is troubling iPhone users",
        "description": "Will we be able to cope?",
        "url": "https://www.creativebloq.com/news/apple-ios17-iphone-end-call-button",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/mqpEpAVudUNgJoJwwtuPwd-1200-80.jpg",
        "publishedAt": "2023-08-12T06:00:06Z",
        "content": "In UI design, every change needs to be justified. Even the smallest tweak can throw people, especially after years of regular use. So many people are wondering why, after a decade and a half, Apple h… [+3209 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Creative Bloq"
        },
        "author": "Natalie Fear",
        "title": "Casio's twee new timepieces fit around your finger",
        "description": "It's certainly a case of fashion over function",
        "url": "https://www.creativebloq.com/news/mini-casio-watches",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/YZDTsd23fwp5KLUBQUJxq9-1200-80.jpg",
        "publishedAt": "2023-08-12T06:00:00Z",
        "content": "A miniature collection of retro watch rings has just been launched by toymaker Stasto Sand Stones in collaboration with iconic timepiece brand Casio. The Casio Watch Ring Collection will be distribut… [+1609 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "Usar el Apple Watch con un móvil Android: guía completa",
        "description": "Te vamos a explicar cómo usar el Apple Watch con smartphones Android. Y es que el Apple Watch de Apple es el reloj inteligente más vendido en todo el mundo, algo que hace que usuarios que no son muy afines a Apple lo miren con buenos ojos. Así pues, vamos a d…",
        "url": "https://www.lavanguardia.com/andro4all/android/usar-el-apple-watch-con-un-movil-android-guia-completa",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/apple-watch-android.jpg?width=1200",
        "publishedAt": "2023-08-12T13:03:40Z",
        "content": "Te vamos a explicar cómo usar el Apple Watch con smartphones Android. Y es que el Apple Watch de Apple es el reloj inteligente más vendido en todo el mundo, algo que hace que usuarios que no son muy … [+3819 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "JuanMi Guirado",
        "title": "Si quieres un reloj inteligente completo y muy premium, por menos de 300 euros este es el mejor",
        "description": "¿Buscas un reloj inteligente que esté entre los mejores y con un funcionamiento sobresaliente en cualquier situación y tarea? Aunque soy muy fan de los Amazfit GTR, tengo que dar al César lo que es del César. Y es que el Apple Watch SE de 2ª generación es par…",
        "url": "https://www.lavanguardia.com/andro4all/ofertas/si-quieres-un-reloj-inteligente-completo-y-muy-premium-por-menos-de-300-euros-este-es-el-mejor",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/apple-watch-se-2-corona.jpg?width=1200",
        "publishedAt": "2023-08-12T06:01:55Z",
        "content": "Seguiré recomendando smartwatches de Amazfit, pero el Apple Watch no tiene rival.\r\n¿Buscas un reloj inteligente que esté entre los mejores y con un funcionamiento sobresaliente en cualquier situación… [+3407 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Edgar Otero",
        "title": "Bancos compatibles con Google Pay, Apple Pay y Samsung Pay lista completa 2023",
        "description": "En los siguientes apartados, te voy a mostrar cuáles son los bancos compatibles con Google Pay, Apple Pay y Samsung Pay. Estos son los tres servicios principales que te van a permitir pagar con el móvil en España. Pero, para que esto sea posible, es necesario…",
        "url": "https://www.lavanguardia.com/andro4all/google/bancos-compatibles-con-google-pay-apple-pay-y-samsung-pay-lista-completa-ano",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2020/06/TicWatch-C2-nfc.jpg?width=1200",
        "publishedAt": "2023-08-12T07:31:04Z",
        "content": "Google Pay es una de las plataformas de pagos móviles disponibles en España.\r\nEn los siguientes apartados, te voy a mostrar cuáles son los bancos compatibles con Google Pay, Apple Pay y Samsung Pay. … [+7382 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "iOS 17: modelos compatibles, novedades y fecha de lanzamiento",
        "description": "iOS 17 se presentó el pasado mes de junio con interesantes novedades como novedades en la app de Mensajes, widgets interactivos, póster de contactos, añadidos a AirDrop, a Safari o al Spotlight. Una actualización que, sin tener grandes novedades, incorpora pe…",
        "url": "https://www.lavanguardia.com/andro4all/apple/ios-17-modelos-compatibles-novedades-fecha-de-lanzamiento",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/ios-17-portada-post-completo.jpg?width=1200",
        "publishedAt": "2023-08-12T10:03:25Z",
        "content": "Todo lo que debes saber sobre iOS 17\r\niOS 17 se presentó el pasado mes de junio con interesantes novedades como novedades en la app de Mensajes, widgets interactivos, póster de contactos, añadidos a … [+6637 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "iPhone 15: estas son las funciones que los harán especiales",
        "description": "Aunque nunca es un mal momento para comprar un nuevo iPhone si realmente lo necesitas, lo cierto es que durante el mes de agosto no es el mejor momento para realizar una compra de este tipo. Hay que tener en cuenta que los iPhone 15 y 15 Pro se presentarán el…",
        "url": "https://www.lavanguardia.com/andro4all/apple/iphone-15-estas-son-las-funciones-que-los-haran-especiales",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/funciones-iphone-15-especiales.jpg?width=1200",
        "publishedAt": "2023-08-12T14:03:22Z",
        "content": "Los iPhone 15 vendrán con novedades que los harán especiales\r\nAunque nunca es un mal momento para comprar un nuevo iPhone si realmente lo necesitas, lo cierto es que durante el mes de agosto no es el… [+3733 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Christian Collado",
        "title": "Programar desde tu dispositivo Android o iOS será mucho más fácil gracias a lo nuevo de Google",
        "description": "Google tiene una nueva iniciativa que puede marcar un antes y un después en el mundo del desarrollo de software. Su nombre es Project IDX, y se trata de un entorno de desarrollo respaldado por inteligencia artificial, que facilitará la (hasta ahora) ardua tar…",
        "url": "https://www.lavanguardia.com/andro4all/google/programar-desde-tu-dispositivo-android-o-ios-sera-mucho-mas-facil-gracias-a-lo-nuevo-de-google",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/desarrollo-de-software.jpg?width=1200",
        "publishedAt": "2023-08-12T13:30:44Z",
        "content": "Un programador frente a un editor de código\r\nGoogle tiene una nueva iniciativa que puede marcar un antes y un después en el mundo del desarrollo de software. Su nombre es Project IDX, y se trata de u… [+2362 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "JuanMi Guirado",
        "title": "Estos espectaculares auriculares Sony con cancelación de ruido son mi recomendación del día",
        "description": "¿Quieres unos buenos auriculares de una firma que lleva toda la vida creando este tipo de gadgets sin desfallecer? Sony tiene un catálogo enorme de auriculares y cascos Bluetooth, muchos de ellos entre los mejores auriculares inalámbricos del mercado cada año…",
        "url": "https://www.lavanguardia.com/andro4all/ofertas/estos-espectaculares-auriculares-sony-con-cancelacion-de-ruido-son-mi-recomendacion-del-dia",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/sony-wf-c700n-chico.jpg?width=1200",
        "publishedAt": "2023-08-12T08:15:22Z",
        "content": "Sony tiene estos WF-C700N en múltiples acabados y con 20h de batería integrada.\r\n¿Quieres unos buenos auriculares de una firma que lleva toda la vida creando este tipo de gadgets sin desfallecer? Son… [+3182 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "Los mejores consejos para ahorrar batería en el iPhone",
        "description": "Te vamos a explicar trucos para poder ahorrar batería en el iPhone. Porque sí, seamos sinceros, normalmente, los iPhone flojean en batería, aunque podemos ponerle remedio con una serie de recursos que ayudan a prolongar su autonomía a lo largo de los días, co…",
        "url": "https://www.lavanguardia.com/andro4all/apple/los-mejores-consejos-para-ahorrar-nateria-en-el-iphone",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/trucos-para-ahorrar-bateria-iphone.jpg?width=1200",
        "publishedAt": "2023-08-12T06:33:51Z",
        "content": "Los mejores trucos para ahorrar batería en el iPhone\r\nTe vamos a explicar trucos para poder ahorrar batería en el iPhone. Porque sí, seamos sinceros, normalmente, los iPhone flojean en batería, aunqu… [+5251 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Pablo Hernando Illán",
        "title": "Cómo ver todas las ligas y la Champions en la temporada 23/24",
        "description": "Vamos a mostrarte cómo ver todas las ligas de fútbol en la temporada 2023/2024. No solo te indicaremos dónde se emite La Liga española, sino que también te explicaremos cómo ver la Champions, la Premier League, la Serie A e incluso otras competiciones menores…",
        "url": "https://www.lavanguardia.com/andro4all/operadoras/como-ver-todas-las-ligas-y-la-champions-en-la-temporada-23-24",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/como-ver-todas-las-ligas-y-la-champions-en-la-temporada-23-24.jpg?width=1200",
        "publishedAt": "2023-08-12T10:30:55Z",
        "content": "¿En qué plataforma se juega cada liga?\r\nVamos a mostrarte cómo ver todas las ligas de fútbol en la temporada 2023/2024. No solo te indicaremos dónde se emite La Liga española, sino que también te exp… [+10795 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Clubic"
        },
        "author": "/auteur/369905-florent-lanne.html",
        "title": "Vous en rêviez, il l'a fait : Windows XP sera disponible sur l'Apple Vision Pro dès sa sortie",
        "description": "UTM montre une vidéo de Windows XP, lancé sur le simulateur de visionOS, le système d'exploitation du casque Apple Vision Pro.",
        "url": "https://www.clubic.com/windows-os/actualite-481027-vous-en-reviez-il-l-a-fait-windows-xp-sera-disponible-sur-l-apple-vision-pro-des-sa-sortie.html",
        "urlToImage": "https://pic.clubic.com/v1/images/2133193/raw",
        "publishedAt": "2023-08-12T14:30:00Z",
        "content": "Ce portage de Windows XP sur le futur casque d'Apple reste à prendre avec des pincettes quant à l'utilisation réelle du système. Il n'est que très peu probable de voir débarquer sur l'app store une a… [+697 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Clubic"
        },
        "author": "/auteur/407247-merouan-goumiri.html",
        "title": "Apple ouvre les vannes pour la 3e bêta publique d'iOS 17",
        "description": "Vous pouvez dès à présent vous essayer à la nouvelle version bêta d'iOS 17.",
        "url": "https://www.clubic.com/pro/entreprises/apple/actualite-481045-apple-ouvre-les-vannes-pour-la-3e-beta-publique-d-ios-17.html",
        "urlToImage": "https://pic.clubic.com/v1/images/2126128/raw",
        "publishedAt": "2023-08-12T15:30:00Z",
        "content": "Vous pouvez dès à présent vous essayer à la nouvelle version bêta d'iOS 17.\r\nPour télécharger et installer la mise à jour, il vous suffit de vous rendre dans les réglages de votre smartphone et d'acc… [+406 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Clubic"
        },
        "author": "/auteur/369905-florent-lanne.html",
        "title": "Top 5 des applications à découvrir cette semaine",
        "description": "Clubic vous présente ses cinq applications mobiles préférées de cette semaine.",
        "url": "https://www.clubic.com/application-mobile/actualite-480742-top-5-des-applications-a-decouvrir-cette-semaine.html",
        "urlToImage": "https://pic.clubic.com/v1/images/2128438/raw",
        "publishedAt": "2023-08-12T10:00:00Z",
        "content": "Clubic vous présente ses cinq applications mobiles préférées de cette semaine.\r\nAu programme cette semaine ? Écouter de la musique en streaming sans perte de qualité, se motiver à améliorer sa santé … [+5053 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.de"
        },
        "author": "Matthias \"MaTT\" Zellmer",
        "title": "Foldable War: Motorola schlägt zurück!",
        "description": "Samsung veröffentlicht sein Galaxy Z Flip 5 und Motorola kontert mit zwei Razr-40-Foldables im Clamshell-Design. Ist das das Erwachen einer neuen Macht?",
        "url": "https://www.nextpit.de/foldable-war-motorola-schlaegt-zurueck",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Motorola_Razr_40_40_Ultra_Samsung_Z_Flip_5.jpg",
        "publishedAt": "2023-08-12T16:00:00Z",
        "content": "© Damian Sobczyk / Adobe Stock / nextpit\r\n[Meinungsbeitrag] Zur Überraschung aller Beteiligten, hat uns das ehemalige Google-Unternehmen Motorola dieses Jahr gleich zwei Foldables im Clamshell-Design… [+5441 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Neatorama.com"
        },
        "author": "Miss Cellania",
        "title": "How an Apple a Day Might Keep the Doctor Away",
        "description": "The old adage \"An apple a day keeps the doctor away\" doesn't make sense anymore, because who wants to keep a doctor away? It's hard enough getting an appointment to see one as it is. The saying does make for some interesting graduation pictures at medical sch…",
        "url": "https://www.neatorama.com/2023/08/11/How-an-Apple-a-Day-Might-Keep-the-Doctor-Away/",
        "urlToImage": "https://uploads.neatorama.com/images/posts/183/123/123183/1691804702-0.jpg",
        "publishedAt": "2023-08-12T01:45:02Z",
        "content": "The old adage \"An apple a day keeps the doctor away\" doesn't make sense anymore, because who wants to keep a doctor away? It's hard enough getting an appointment to see one as it is. The saying does … [+1087 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tomshw.it"
        },
        "author": "Andrea Maiellano",
        "title": "ChatGPT sbaglia il 50% delle domande di programmazione, altro che rubare il lavoro",
        "description": "ChatGPT, durante uno studio recente, ha mostrato i suoi limiti, sbagliando oltre il 50% delle risposte e dimostrandosi poco efficiente.",
        "url": "https://www.tomshw.it/altro/chatgpt-sbaglia-il-50-delle-domande-di-programmazione-altro-che-rubare-il-lavoro/",
        "urlToImage": "https://www.tomshw.it/images/images/2023/05/chatgpt-prompt-engineer-278721.jpg",
        "publishedAt": "2023-08-12T10:00:19Z",
        "content": "News ChatGPT sbaglia il 50% delle domande di programmazione, altro che rubare il lavoro\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una co… [+3170 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Appbank.net"
        },
        "author": "岩佐",
        "title": "iPhoneとGoogle Pixelが融合したサブ画面搭載スマホの仮想CG",
        "description": "Appleの新型ヘッドセット「Vision Pro」をもとにした「iPhone Vision」の仮想CGを、3Dデザイナーのアントニオ・デ・ローザ氏が公開しています。 *Category:テクノロジー Technolog […]",
        "url": "https://www.appbank.net/2023/08/12/technology/2511536.php",
        "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/07/2023-0713-iPhone-Vision-thumb-1.jpeg",
        "publishedAt": "2023-08-12T02:48:16Z",
        "content": "AppleVision ProiPhone VisionCG3D\r\n*Category:\r\n Technology *SourceADR ,yankodesign\r\niPhone Vision\r\niPhone VisionCG\r\nM2R1Vision Pro\r\nCGGoogle Pixel\r\nLightningUSB-C\r\n159922Vision Pro\r\nAmazonAnker \r\nAppB… [+2 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Tech Desk",
        "title": "Android users may soon enjoy a feature Apple users have been enjoying for years",
        "description": "Google is apparently working on \"Call Switching\", a feature that allows users to jump between connected devices during calls.",
        "url": "https://indianexpress.com/article/technology/tech-news-technology/android-call-switching-internet-sharing-8889373/",
        "urlToImage": "https://images.indianexpress.com/2023/08/Pixel-FBBBB.jpg",
        "publishedAt": "2023-08-12T09:33:35Z",
        "content": "Apple users often talk about how seamless connectivity is across the ecosystem. Users can easily switch between their iPhone, iPad, and Mac for various tasks, such as making and receiving calls, shar… [+1953 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Googlewatchblog.de"
        },
        "author": "Jens",
        "title": "Android 13: Googles Update-Turbo war erfolgreich – das Betriebssystem ist am Zenit; unsere Zahlen im Überblick",
        "description": "Android 14 steht vor der Tür und wir zeigen euch aktuell noch einmal, wie sich die Android 13-Verbreitung innerhalb eines Jahres bei uns im Blog entwickelt hat.Android 13: Googles Update-Turbo war erfolgreich – das Betriebssystem ist am Zenit; unsere Zahlen i…",
        "url": "https://www.googlewatchblog.de/?p=208014",
        "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/android-next-generation.jpg",
        "publishedAt": "2023-08-12T07:00:23Z",
        "content": "Das Betriebssystem Android 13 ist seit ziemlich genau einem Jahr auf dem Markt und wird in Kürze vom Nachfolger Android 14 als neueste Version abgelöst wird. Das scheint ein idealer Zeitpunkt zu sein… [+3759 chars]"
        },
        {
        "source": {
        "id": "el-mundo",
        "name": "El Mundo"
        },
        "author": "EL MUNDO",
        "title": "Calviño, tras postularse a presidir el BEI: \"Cualquier otro candidato hubiese supuesto dar la batalla por perdida\"",
        "description": "Descarta que dicha candidatura vaya a interferir en sus labores como vicepresidenta primera del Gobierno, ni estando en funciones ni en caso de que se formalice un nuevo Ejecutivo de coalición Leer",
        "url": "https://www.elmundo.es/economia/macroeconomia/2023/08/12/64d7546ce9cf4a997f8b4577.html",
        "urlToImage": "https://phantom-elmundo.unidadeditorial.es/2c9eb60346a21b3b2ad2d35c08dc0e3b/crop/24x102/2984x2075/resize/1200/f/jpg/assets/multimedia/imagenes/2023/08/12/16918350038200.jpg",
        "publishedAt": "2023-08-12T10:13:38Z",
        "content": "La vicepresidenta primera del Gobierno, Nadia Calviño, ha defendido la idoneidad de presentar su candidatura para presidir el Banco Europeo de Inversiones (BEI) por delante de cualquier otra opción e… [+3535 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "„Es ist nicht immer wirksamer, wenn man doller draufhaut“",
        "description": "Blockierte Autobahnen, beschmierte Gemälde – die Aktivisten der „Letzten Generation“ strapazieren die Geduld ihrer Mitmenschen und beschäftigen die Justiz. Selbst Klimaaktivistin Luisa Neubauer glaubt inzwischen, dass solche Aktionen ihren vermeintlichen Sinn…",
        "url": "https://www.welt.de/politik/deutschland/article246872978/Luisa-Neubauer-ueber-Letzte-Generation-Es-ist-nicht-immer-wirksamer-wenn-man-doller-draufhaut.html",
        "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile245758010/6811354557-ci16x9-w1200/Digital-Messe-OMR-2023.jpg",
        "publishedAt": "2023-08-12T10:25:22Z",
        "content": "Die Umweltschützerin Luisa Neubauer hat die Form der Proteste der Gruppe Letzte Generation kritisiert. Politischer Wandel kommt nicht kategorisch schneller, indem man zu radikaleren Maßnahmen greift,… [+1078 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "Russischer Kampfjet in Region Kaliningrad abgestürzt – Insassen tot",
        "description": "Schon wieder ist ein russischer Kampfjet abgestürzt, dieses Mal bei einem Trainingsflug über Kaliningrad über unbewohntem Gebiet. Die Insassen, deren Zahl bislang noch unbekannt ist, kamen ums Leben. Mehr Informationen im Liveticker.",
        "url": "https://www.welt.de/politik/ausland/article246870564/Ukraine-News-Russischer-Kampfjet-in-Region-Kaliningrad-abgestuerzt-Insassen-tot.html",
        "urlToImage": "https://img.welt.de/img/politik/ausland/mobile246875966/4221354907-ci16x9-w1200/Brand-new-Sukhoi-Su-30SM-fighter-aircraft-joins-Russian-Navy-Balt.jpg",
        "publishedAt": "2023-08-12T13:21:00Z",
        "content": "In der russischen Ostsee-Exklave Kaliningrad ist offiziellen Angaben zufolge ein russisches Kampfflugzeug bei einem Trainingsflug abgestürzt. Die Besatzung des Flugzeugs kam ums Leben, teilte das rus… [+16614 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Martin Klemrath",
        "title": "Aus zwei Gründen rissen die USA die hawaiianischen Inseln an sich",
        "description": "Am 12. August 1898 wurde Hawaii formell von den USA annektiert und das Sternenbanner in der Hauptstadt Honolulu gehisst. Die Inselgruppe im Pazifik hatte in mehrfacher Hinsicht an Bedeutung gewonnen. Deshalb war man bereit, für den Schritt das Völkerrecht zu …",
        "url": "https://www.welt.de/geschichte/article246685658/Annexion-1898-Aus-zwei-Gruenden-rissen-die-USA-die-hawaiianischen-Inseln-an-sich.html",
        "urlToImage": "https://img.welt.de/img/geschichte/mobile246695976/6681351267-ci16x9-w1200/MCKINLEY-AT-DESK.jpg",
        "publishedAt": "2023-08-12T06:13:44Z",
        "content": "Weiter, immer weiter nach Westen! Diese Parole, die Politik und Kultur der jungen amerikanischen Republik prägte, wurde im ausgehenden 19. Jahrhundert obsolet denn der Kontinent war vollständig erobe… [+4734 chars]"
        },
        {
        "source": {
        "id": "la-repubblica",
        "name": "La Repubblica"
        },
        "author": "repubblicawww@repubblica.it (Redazione Repubblica.it)",
        "title": "iPhone 15, ecco come sarà: il nuovo smartphone di Apple arriva a settembre",
        "description": "L'evento di presentazione sarà il 12 o 13 settembre, ma già circolano molte ipotesi più o meno verosimile sul prossimo smartphone di Apple, l'iPhone 15. Ecco le più interessanti, dalla nuova fotocamera periscopica alla versione in titanio, fino alla capacità …",
        "url": "https://video.repubblica.it/tecnologia/techtest/iphone-15-come-sara-anteprima-del-nuovo-smartphone-apple/450778/451741?rss",
        "urlToImage": "https://www.repstatic.it/video/photo/2023/08/11/909335/909335-thumb-full-720-i15_def.jpg",
        "publishedAt": "2023-08-12T11:45:12Z",
        "content": "&lt;iframe class=\"rep-video-embed\" src=\"https://video.repubblica.it/embed/tecnologia/techtest/iphone-15-come-sara-anteprima-del-nuovo-smartphone-apple/450778/451741&amp;width=640&amp;height=360\" widt… [+275 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Techbang.com"
        },
        "author": "Joy",
        "title": "Today at Apple 台北影像實驗室號召 18-28歲 LGBTQ+ 影片創作者",
        "description": "Today at Apple 台北影像實驗室號召 18-28歲 LGBTQ+ 影片創作者Today at Apple 與 Women Makes Waves 台灣國際女性影展合作推出「台北影像實驗室」，號召 18-28\r\n歲 對 LGBTQ+ 議題感興趣的影像創作者，以你無與倫比的獨特，\r\n拍出充滿生命力的故事，展現無可限量的影像創作。學員將可從 9 月 24 日至 10 月 22 日為期五週的「台北影像實驗室」系列課程中，\r\n從才華洋溢的授課藝術家與 Apple 培訓師 Pro 身上獲得啟發，一起深入影片創作的…",
        "url": "https://www.techbang.com/posts/108732-today-at-apple-taipei-imaging-lab-calls-for-lgbtq-film",
        "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/108732/original/089b98814f6d23e3221140b8dc5ea335.jpg?1691667924",
        "publishedAt": "2023-08-12T03:00:00Z",
        "content": "Today at Apple  Women Makes Waves  18-28\r\n LGBTQ+ \r\n 9  24  10  22 \r\n Apple  Pro \r\n Sydney Sie\r\n Apple  Pro  iPhone  Mac \r\n 2023  8 21 23:59 \r\nhttps://docs.google.com/\r\nforms/d/e/1FAIpQLSe3X2r-\r\nXYZi… [+48 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Techbang.com"
        },
        "author": "cnBeta",
        "title": "iPhone 15 Pro模型機洩露顯示加厚設計、USB-C 介面、動作按鈕",
        "description": "iPhone 15 Pro機模圖片疑似洩露 顯示加厚設計、USB-C 介面、動作按鈕等\n蘋果將於下月推出 iPhone 15 和 iPhone 15 Pro 機型，時間可能在九月的第三週。已經聽到了許多關於這兩款裝置的細節，從內部結構到製造品質不一而足。然而從未真正見過 iPhone 15 或「Pro」機型的真容。現在，網上出現了幾張據稱是 iPhone 15 Pro 的圖片，旨在突出幾個因素。\r\n\n\niPhone 15 Pro 預計將採用 5 級鈦金屬機身，比 iPhone 14 Pro 的不鏽鋼機身更堅固、更…",
        "url": "https://www.techbang.com/posts/108612-iphone-15-pro-model-pictures-are-suspected-to-be-leaked",
        "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/108612/original/65da7db1a55f09a3124f97552234e5ff.jpg?1691390506",
        "publishedAt": "2023-08-12T01:09:00Z",
        "content": "iPhone 15 iPhone 15 Pro iPhone 15 Pro iPhone 15 Pro \r\niPhone 15 Pro 5 iPhone 14 Pro Pro 200 iPhone 15 Pro \r\nIce Universe Twitter iPhone 15 Pro iPhone 15 Pro iPhone 15 Pro \r\niPhone 15 Pro iPhone 15 Pr… [+185 chars]"
        },
        {
        "source": {
        "id": "ign",
        "name": "IGN"
        },
        "author": "Jacob Kienlen",
        "title": "The Best Apple Watch Cases and Covers for 2023",
        "description": "Protect your Apple Watch with one of these great cases.",
        "url": "https://www.ign.com/articles/best-apple-watch-cases",
        "urlToImage": "https://assets-prd.ignimgs.com/2023/08/11/apple-watch-cases-1691773079762.jpg?width=1280",
        "publishedAt": "2023-08-12T14:02:00Z",
        "content": "Much like the iPhone, an Apple Watch is very expensive and fragile. We always recommend adding a smartwatch case to it to protect it from common wear-and-tear, since theyre relatively inexpensive and… [+11697 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Corriere.it"
        },
        "author": "Michela Proietti",
        "title": "Brunello Cucinelli: «Volevo fare il monaco part-time. Ero squattrinato, ma felice. La prima donna in costume? L’ho vista a 13 anni»",
        "description": "Lo stilista e imprenditore che compirà 70 anni il prossimo 3 settembre si racconta. «se fossi vissuto lontano dalla mia Umbria tutto sarebbe stato meno affascinante. La mia sfida oggi è ripopolare i borghi: oggi le star di Hollywood mi chiedono di venire a cu…",
        "url": "https://www.corriere.it/moda/23_agosto_12/brunello-cucinelli-volevo-fare-monaco-part-time-ero-squattrinato-ma-felice-prima-donna-costume-l-ho-vista-13-anni-92ed389c-38f0-11ee-8ab6-bfc43d02bf12.shtml",
        "urlToImage": "https://images2.corriereobjects.it/methode_image/socialshare/2023/08/12/2345a8ce-38f2-11ee-8ab6-bfc43d02bf12.jpg",
        "publishedAt": "2023-08-12T09:45:59Z",
        "content": "di Michela ProiettiLo stilista e imprenditore che compirà 70 anni il prossimo 3 settembre si racconta. «se fossi vissuto lontano dalla mia Umbria tutto sarebbe stato meno affascinante. La mia sfida o… [+9482 chars]"
        },
        {
        "source": {
        "id": "techradar",
        "name": "TechRadar"
        },
        "author": "David Nield",
        "title": "Apple could be refreshing the iPhone 14 with a USB-C port",
        "description": "Code found hidden in tvOS 17 suggests that older handsets might be getting the USB-C treatment too.",
        "url": "https://www.techradar.com/phones/iphone/apple-could-be-refreshing-the-iphone-14-with-a-usb-c-port",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/3LNZht9WtLEu7C8MTd72xR-1200-80.jpg",
        "publishedAt": "2023-08-12T11:30:24Z",
        "content": "It's now almost certain that the iPhone 15 series of phones are going to come with USB-C ports attached rather than the traditional Lightning option, but a new rumor suggests that certain iPhone 14 m… [+1814 chars]"
        },
        {
        "source": {
        "id": "techradar",
        "name": "TechRadar"
        },
        "author": "marc.mclaren@futurenet.com (Marc McLaren)",
        "title": "ICYMI: the week's biggest tech news, from iPhone launch date to Disney price hikes",
        "description": "If you missed the week's biggest tech news, fear not – we've picked out all the best stories from the past seven days so you can catch up at your leisure.",
        "url": "https://www.techradar.com/tech/icymi-the-weeks-biggest-tech-news-from-iphone-launch-date-to-disney-price-hikes",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/dawK2EZgVu6aPcTSgJr6Fe-1200-80.jpg",
        "publishedAt": "2023-08-12T06:00:00Z",
        "content": "It's holiday season in some parts of the world right now, which means there's no news around. Nothing happening. Dull, dull, dull. Except THAT'S A LIE, because tech news never stops, and we can prove… [+7886 chars]"
        },
        {
        "source": {
        "id": "cbc-news",
        "name": "CBC News"
        },
        "author": "Samantha Lui",
        "title": "Why some K-pop fans are calling for more environmentally friendly practices in the industry",
        "description": "For K-Pop fans, physical albums and merch made by the bands they love are often collector’s items. They're also used by K-pop agencies to boost an artist's success. But there is an environmental cost.",
        "url": "https://www.cbc.ca/radio/day6/k-pop-environmental-practices-1.6930864",
        "urlToImage": "https://i.cbc.ca/1.6931326.1691591367!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/hybe-kpop-4-planet.jpg",
        "publishedAt": "2023-08-12T08:00:00Z",
        "content": "Inside a Toronto bubble tea café, Ash Ledoux flips through a photo album with a group of friends.\r\nThe pictures inside are not of family or happy memories from her native France. Rather, they're excl… [+6687 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Gordon Kelly, Senior Contributor, \n Gordon Kelly, Senior Contributor\n https://www.forbes.com/sites/gordonkelly/",
        "title": "New Apple Leak Reveals iPhone 15 Release Surprise",
        "description": "A missing piece of the iPhone 15 puzzle has leaked, and it's a potentially massive upgrade...",
        "url": "https://www.forbes.com/sites/gordonkelly/2023/08/12/apple-iphone-15-pro-max-a17-chip-performance-speed-new-iphone-release-details/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64c9067d722c95206049763b/0x0.jpg?format=jpg&crop=967,543,x0,y0,safe&width=1200",
        "publishedAt": "2023-08-12T16:13:06Z",
        "content": "Apple iPhone 15 Pro Max render based on multiple leaks\r\nTechnizo Concept\r\nApples iPhone 15 and iPhone 15 Pro design changes continue to leak, but one detail had been missing: specifics about the next… [+3005 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Ewan Spence, Senior Contributor, \n Ewan Spence, Senior Contributor\n https://www.forbes.com/sites/ewanspence/",
        "title": "Forget The New MacBook Pro, Apple Has Something Much Better",
        "description": "Now is not the time to consider Apple's MacBook Pro.",
        "url": "https://www.forbes.com/sites/ewanspence/2023/08/12/apple-macbook-pro-m3-max-macbook-air-m3-details-specs-leak/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/648494c39310479072750fc7/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-08-12T17:15:58Z",
        "content": "With Apples announcement that the Mac platform has finally left Intel behind, many consumers will look again at the platform to ask if now is the time to upgrade their MacBook. The current MacBook Ai… [+2829 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Gordon Kelly, Senior Contributor, \n Gordon Kelly, Senior Contributor\n https://www.forbes.com/sites/gordonkelly/",
        "title": "Apple Leaks Detail All-New iPhone 15, iPhone 15 Pro Design Changes",
        "description": "Multiple leaks have exposed Apple's biggest upgrades for its new iPhone 15 range...",
        "url": "https://www.forbes.com/sites/gordonkelly/2023/08/12/apple-iphone-15-pro-max-design-display-iphone-14-usbc-upgrade/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6415bea1b950736eb076a1f0/0x0.jpg?format=jpg&crop=2749,1544,x567,y147,safe&width=1200",
        "publishedAt": "2023-08-12T16:10:37Z",
        "content": "iPhone 15 Pro Max scale render showing its ultra-thin bezels\r\n@Hanstsaiz\r\nNew leaks for Apples iPhone 15 series have revealed multiple updates, including photos of their new USB-C ports, bezels and a… [+3311 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Rob Reischel, Contributor, \n Rob Reischel, Contributor\n https://www.forbes.com/sites/robreischel/",
        "title": "The Good, Bad And Ugly From The Green Bay Packers’ Win Over Cincinnati",
        "description": "Quarterbacks Jordan Love and Sean Clifford had solid nights as the Green Bay Packers defeated the Cincinnati Bengals, 36-19, in their preseason opener Friday.",
        "url": "https://www.forbes.com/sites/robreischel/2023/08/11/the-good-bad-and-ugly-from-the-green-bay-packers-win-over-cincinnati/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64d6ed65f6240dd2d70f2e72/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-08-12T02:27:58Z",
        "content": "Green Bay Packers quarterback Jordan Love had an impressive preseason opener Friday night.\r\nCopyright 2023 The Associated Press. All rights reserved\r\nThe last time you saw the Green Bay Packers, they… [+6272 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hdblog.it"
        },
        "author": "HDblog.it",
        "title": "La mia casa smart: controllo remoto e recensione tapparelle connesse BTicino",
        "description": "La recensione del kit di tapparelle smart BTicino Living, ecco come funzionano.",
        "url": "https://www.hdblog.it/domotica/recensioni/n572319/recensione-bticino-tapparelle-smart-kit-living-now/",
        "urlToImage": "https://hd2.tudocdn.net/1111261?w=1920",
        "publishedAt": "2023-08-12T09:00:00Z",
        "content": "Continua il mio viaggio nella creazione della “casa smart” con un capitolo rimasto in sospeso da un po’ a causa di alcuni ritardi di consegne… a quanto pare le placchette per i tasti sembravano intro… [+10548 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Techinsider.ru"
        },
        "author": "Редакция сайта",
        "title": "Ретроспектива: как выглядел прототип телефона Apple 1993 года",
        "description": "На видео показали полностью функциональный прототип телефона компании Apple, представленного в 1993 году. Устройство так и не было выпущено в качестве серийной модели.",
        "url": "https://www.techinsider.ru/gadgets/474472-prototip-telefona-apple-1993-goda-pokazali-na-video/",
        "urlToImage": "https://images.techinsider.ru/upload/img_cache/1fd/1fdd10c6207d4ae15c7e8354f884b787_ce_1624x852x0x115_cropped_1200x628.png",
        "publishedAt": "2023-08-12T15:50:00Z",
        "content": "(Sonny Dickson)   Apple 1993 . W.A.L.T (Wizzy Active Lifestyle Telephone)     MacWorld  , ,  1993 . ,   , ,    ."
        },
        {
        "source": {
        "id": null,
        "name": "Antyweb.pl"
        },
        "author": "Błażej Wojciechowski",
        "title": "Twój przewodnik po Apple CarPlay: Jak włączyć usługę i korzystać z niej w aucie",
        "description": "Podróżuj sprawniej i bezpieczniej z Apple CarPlay. Dowiedz się, jak połączyć iPhone'a z samochodem. Odkryj zaawansowane funkcje CarPlay.\n \n The post Twój przewodnik po Apple CarPlay: Jak włączyć usługę i korzystać z niej w aucie appeared first on AntyWeb.",
        "url": "https://antyweb.pl/jak-wlaczyc-apple-carplay",
        "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2022/06/4lgwiu93zz/car-play.jpg",
        "publishedAt": "2023-08-12T09:00:22Z",
        "content": "W dobie coraz bardziej zaawansowanych technologii interaktywne systemy obsugi samochodów staj si przedueniem naszych smartfonów. Wród wielu rozwiza, które umoliwiaj wygodne korzystanie z tych zaawans… [+4594 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Antyweb.pl"
        },
        "author": "Kamil Świtalski",
        "title": "Apple żegna jedną ze swoich klasycznych aplikacji. Pamiętacie o niej w ogóle?",
        "description": "Krajobraz aplikacji mobilnych znacznie ewoluował przez ostatnich kilkanaście lat. O pozycjach które stosunkowo nie tak dawno były na szczycie — dzisiaj już nikt nie pamięta. Ale tempo w temacie jest szalone — i dla niektórych po dziś dzień niewyobrażalnym jes…",
        "url": "https://antyweb.pl/apple-zegna-jedna-ze-swoich-klasycznych-aplikacji-pamietacie-o-niej-w-ogole",
        "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/05/vntmmf3rju/apple.jpg",
        "publishedAt": "2023-08-12T10:39:01Z",
        "content": "Krajobraz aplikacji mobilnych znacznie ewoluowa przez ostatnich kilkanacie lat. O pozycjach które stosunkowo nie tak dawno byy na szczycie dzisiaj ju nikt nie pamita. Ale tempo w temacie jest szalone… [+1413 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Antyweb.pl"
        },
        "author": "Błażej Wojciechowski",
        "title": "WhatsApp wprowadzi nowe zabezpieczenie konta. To będzie najskuteczniejsza ochrona!",
        "description": "WhatsApp wprowadza nowy sposób zabezpieczania konta. To dobrze znane już niektórym z was rozwiązanie — chodzi o klucz dostępu (ang. passkey)! Tak, tę rewolucyjną metodę, która okrzyknięta została prawdziwym końcem haseł i zabezpieczeniom solidniejszym niż kie…",
        "url": "https://antyweb.pl/whatsapp-wprowadzi-nowe-zabezpieczenie-konta-to-bedzie-najskuteczniejsza-ochrona",
        "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2022/03/lj5gedtmwz/whats-app.jpg",
        "publishedAt": "2023-08-12T08:30:36Z",
        "content": "Jeli korzystasz z WhatsApp, ju teraz moesz chroni swoje konto rónymi metodami, takimi jak zwyke haso i dwuskadnikowe uwierzytelnianie. Nadchodzca nowo w postaci klucza dostpu, ma natomiast zadba o je… [+1376 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphoneitalia.com"
        },
        "author": "Giuseppe La Terza",
        "title": "Strange Planet è disponibile su Apple TV+",
        "description": "Sulla piattaforma Apple TV+ è disponibile la nuova serie TV animata Strange Planet.\nLink all'articolo originale: Strange Planet è disponibile su Apple TV+",
        "url": "https://www.iphoneitalia.com/812521/strange-planet-disponibile-apple-tv",
        "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2023/08/strange-planet.jpg",
        "publishedAt": "2023-08-12T07:22:42Z",
        "content": "Strange Planet, la nuova serie TV animata proveniente dalla mente di Nathan W. Pyle, è ora in streaming su Apple TV+.\r\nRaccontata attraverso le storie di innocenti alieni blu, Strange Planet riflette… [+1154 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphoneitalia.com"
        },
        "author": "Giuseppe La Terza",
        "title": "Gli utenti di iPhone 14 Pro lamentano significativi cali nella salute della batteria",
        "description": "Molti utenti segnalano un calo drastico della salute della batteria su iPhone 14 Pro.\nLink all'articolo originale: Gli utenti di iPhone 14 Pro lamentano significativi cali nella salute della batteria",
        "url": "https://www.iphoneitalia.com/812527/utenti-iphone-14-pro-lamentano-cali-salute-batteria",
        "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2022/09/iphone-14-pro-3.17-770x481.png",
        "publishedAt": "2023-08-12T11:46:21Z",
        "content": "Diversi utenti di iPhone 14 Pro si sono rivolti a Twitter, Reddit e altri canali per condividere screenshot della capacità di batteria in deterioramento, meno di un anno dopo il lancio ufficiale dell… [+2563 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Olhardigital.com.br"
        },
        "author": "Matheus Chaves",
        "title": "Dica: 10 plugins que vão mudar como você usa o ChatGPT",
        "description": "Você sabia que há diversos novos plugins para o ChatGPT? As ferramentas visam ampliar funcionalidades desse chatbot. Veja quais!\nO post Dica: 10 plugins que vão mudar como você usa o ChatGPT apareceu primeiro em Olhar Digital.",
        "url": "https://olhardigital.com.br/2023/08/12/dicas-e-tutoriais/dica-10-plugins-que-vao-mudar-como-voce-usa-o-chatgpt/",
        "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2023/06/ChatGPT-trabalho.jpg",
        "publishedAt": "2023-08-12T12:20:00Z",
        "content": "LanÃ§ado em novembro de 2022, o ChatGPT surgiu como uma tecnologia que consegue gerar textos escritos de forma natural e coerente. Mas, com o passar dos meses, essa inteligÃªncia artificial passou a … [+4118 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "theringer.com",
        "title": "Apple TV+ Is on a Scripted-Series Hot Streak. Are People Paying Attention?",
        "description": "Historically, I haven’t been an Apple person. When Apple attempted to persuade me to get a Mac, I got a Dell instead. When iPods proliferated, I owned an iRiver. And when iPhones changed the world, I went with an Android. (Sorry about those green text bubbles…",
        "url": "https://biztoc.com/x/18183a40516678ee",
        "urlToImage": "https://c.biztoc.com/p/18183a40516678ee/og.webp",
        "publishedAt": "2023-08-12T04:52:13Z",
        "content": "Historically, I havent been an Apple person. When Apple attempted to persuade me to get a Mac, I got a Dell instead. When iPods proliferated, I owned an iRiver. And when iPhones changed the world, I … [+281 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (P.W), P.W",
        "title": "ChatGPT trả lời sai quá nửa câu hỏi về lập trình, nhưng từ ngữ quá tự tin nên có người nghĩ là đúng",
        "description": "Các nhà khoa học ở đại học Purdue, Mỹ vừa thực hiện một nghiên cứu, đưa ra 517 câu hỏi về lập trình trên Stack Overflow để ChatGPT đưa ra câu trả lời. Sau đó những câu trả lời này được đưa ra cho các tình nguyện viên tham gia nghiên cứu…",
        "url": "https://tinhte.vn/thread/chatgpt-tra-loi-sai-qua-nua-cau-hoi-ve-lap-trinh-nhung-tu-ngu-qua-tu-tin-nen-co-nguoi-nghi-la-dung.3703531/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/08/7226524_Cover-AI.jpg",
        "publishedAt": "2023-08-12T10:12:36Z",
        "content": "Các nhà khoa hc i hc Purdue, M va thc hin mt nghiên cu, a ra 517 câu hi v lp trình trên Stack Overflow ChatGPT a ra câu tr li. Sau ó nhng câu tr li này c a ra cho các tình nguyn viên tham gia nghiên … [+2054 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (cloud5trike), cloud5trike",
        "title": "[REVIEW] - HP Elitebook 845 G10",
        "description": "HP Elitebook 845 G10 Review\n#review #Elitebook #Laptop\n \n \nGiới thiệu\n \n \nElitebook 845 G10\nHP EliteBook 800 là một dòng máy tính xách tay doanh nghiệp cao cấp được sản xuất bởi HP. Dòng máy tính này được thiết kế để đáp ứng nhu cầu của những người…",
        "url": "https://tinhte.vn/thread/review-hp-elitebook-845-g10.3702740/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/08/6774655_Elitebook845g10-1.jpg",
        "publishedAt": "2023-08-12T04:36:16Z",
        "content": "Kt cu khung máy (mt C)Np áy (Mt E)i vi màn hình, vin hai bên ca Elitebook 845 G10 khá mng vi dày ~7mm, cnh trên có dày ~12mm. gia cnh trên cha các cm Camera IR, cm bin ánh sáng, 2 mic, èn báo camera,… [+8678 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Browneyedbaker.com"
        },
        "author": "Michelle",
        "title": "The Weekend Dish: 8/12/2023",
        "description": "The Weekend Dish: 8/12/2023\nHello and Happy Saturday! I hope you had a wonderful week and are enjoying a wonderful mid-August weekend. Do you have any plans? Anything you’re excited to make/eat? I’d love to hear all about it! Let’s get to our weekly recap… On…",
        "url": "https://www.browneyedbaker.com/the-weekend-dish-8-12-2023/",
        "urlToImage": "https://www.browneyedbaker.com/wp-content/uploads/2016/11/weekend-dish-thumbnail.png",
        "publishedAt": "2023-08-12T04:01:00Z",
        "content": "Hello and Happy Saturday!\r\nI hope you had a wonderful week and are enjoying a wonderful mid-August weekend. Do you have any plans? Anything you’re excited to make/eat? I’d love to hear all about it!\r… [+1841 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "redmondpie.com"
        },
        "author": "Oliver Haslam",
        "title": "Get This Massive Anker Power Strip With 12 AC Outlets, 2 USB-A And 1 USB-C Port For Just $22.99",
        "description": "Charge more things from a single AC outlet with this insane Anker surge protector and power strip, all while saving some money.\nThe post Get This Massive Anker Power Strip With 12 AC Outlets, 2 USB-A And 1 USB-C Port For Just $22.99 first appeared on Redmond …",
        "url": "https://www.redmondpie.com/get-this-massive-anker-power-strip-with-12-ac-outlets-2-usb-a-and-1-usb-c-port-for-just-22.99/",
        "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2023/08/USB-C-power-strip.jpg",
        "publishedAt": "2023-08-12T14:55:26Z",
        "content": "Charge more things from a single AC outlet with this insane Anker surge protector and power strip, all while saving some money.\r\nThe Anker 2100J power strip would normally sell for around $36, but if… [+1407 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "redmondpie.com"
        },
        "author": "Oliver Haslam",
        "title": "The New Google Pixel Tablet With Charging Speaker Dock Is $60 Off Already",
        "description": "The Google Pixel Tablet has only been on sale for a little while, but it's already available with a notable discount. Order today and you'll save $60.\nThe post The New Google Pixel Tablet With Charging Speaker Dock Is $60 Off Already first appeared on Redmond…",
        "url": "https://www.redmondpie.com/the-new-google-pixel-tablet-with-charging-speaker-dock-is-60-off-already/",
        "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2023/08/Pixel-tablet-with-dock-deal-1.jpg",
        "publishedAt": "2023-08-12T14:29:26Z",
        "content": "The Google Pixel Tablet has only been on sale for a little while, but it’s already available with a notable discount. Order today and you’ll save $60.\r\nThat means that this deal will get you a new Pi… [+1376 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "redmondpie.com"
        },
        "author": "Oliver Haslam",
        "title": "This Could Be The Upcoming PS5 Slim From Sony",
        "description": "A new leak shows what could be the upcoming PS5 from Sony. Here are all the details on this.\nThe post This Could Be The Upcoming PS5 Slim From Sony first appeared on Redmond Pie.",
        "url": "https://www.redmondpie.com/this-could-be-the-upcoming-ps5-slim-from-sony/",
        "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2020/11/ps5-02-1200.jpg",
        "publishedAt": "2023-08-12T15:59:42Z",
        "content": "We’ve been hearing rumors of all kinds of things in relation to a new PS5 Slim games console arriving possibly as soon as September, but the biggest leak yet might have just happened.\r\nThe claims hav… [+1456 chars]"
        }
    ];
  constructor() {
    super();
    console.log("from constructor");
    this.state = {
      items: this.Items,
      
    };
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=cbc463b1e5a44221b5db19033bd9e37f";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({items:parsedData.articles})
}

  render() {
    return (
      <div className="news_card my-3 container">
        
          {this.state.items.map((item) => {
            return (
              <div key={item.url}>
                <Card
                  title={item.title}
                  description={item.description}
                  imageUrl={item.urlToImage}
                  readMore = {item.url}
                />
              </div>
            );
          })}
        
      </div>
    );
  }
}
