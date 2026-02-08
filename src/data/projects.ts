export interface Project {
    id: string;
    title: { ru: string; en: string };
    client: { ru: string; en: string };
    year: number;
    tags: string[];
    description: { ru: string; en: string };
    contribution?: { ru: string[]; en: string[] }; // Optional field for contribution bullet points
    role: { ru: string[]; en: string[] };
    task: { ru: string; en: string };
    processImages: string[];
    videoUrl: string;
    software: { ru: string[]; en: string[] };
    thumbnail: string;
    channelInfo?: {
        name: string;
        subscribers: { ru: string; en: string };
        url: string;
        profilePicture?: string;
        youtubeHandle?: string;
    };
}

export const projects: Project[] = [
    {
        id: "Spraga",
        title: { ru: "Реклама для напитка Spraga", en: "Spraga Drink Advertisement" },
        client: { ru: "Spraga", en: "Spraga" },
        year: 2024,
        tags: ["3D", "Motion", "Commercial"],
        description: {
            ru: "3D рекламный ролик для напитка Spraga. Видео показывает свежесть комбучи и разнообразные вкусы.\n\nРолик был создан в течение одного месяца в рамках командного проекта. Мои обязанности включали 3D-анимацию и 2D моушн-дизайн, а также финальный композитинг и монтаж.",
            en: "The commercial was produced over the span of one month as part of a team project. My responsibilities included both 3D animation and 2D motion design, as well as final compositing and editing."
        },
        contribution: {
            ru: [
                "3с–7с сегмент — создал всю ключевую анимацию для сцены.",
                "7с–24с сегмент — разработал все сцены с нуля: раскадровка, 3D-анимация, освещение, рендеринг и композитинг.",
                "Переходы — спроектировал и анимировал каждый переход.",
                "Финальная сборка — выполнил полный монтаж конечного видеоролика."
            ],
            en: [
                "3s–7s segment — created all key animation for the scene.",
                "7s–24s segment — developed all scenes from scratch: layout, 3D animation, lighting, rendering, and compositing.",
                "Transitions — designed and animated every transition.",
                "Final assembly — handled the full edit, including sequencing, compositing and timing."
            ]
        },
        role: {
            ru: ["3D анимация", "2D анимация", "Композитинг", "Монтаж"],
            en: ["3D Animation", "2D Animation", "Compositing", "Editing"]
        },
        task: {
            ru: "Создать рекламный ролик для напитка Spraga, показывающий свежесть напитка и его вкус.",
            en: "Creating an advertisement video for Spraga drink, showing the freshness of the drink and its various flavors."
        },
        processImages: [],
        videoUrl: "https://vimeo.com/1138602695",
        software: {
            ru: ["Cinema 4D", "Blender", "Liquigen", "Redshift", "After Effects", "Substance Painter"],
            en: ["Cinema 4D", "Blender", "Liquigen", "Redshift", "After Effects", "Substance Painter"]
        },
        thumbnail: "/images/Spraga.png"
    },
    {
        id: "Petya",
        title: { ru: "Petya English - моушн-дизайн, инфографика", en: "Petya English - motion design, infographics" },
        client: { ru: "Petya English", en: "Petya English" },
        year: 2025,
        tags: ["Motion", "3D", "Infographic"],
        description: {
            ru: "Моушн-дизайн и инфографика для влогов на крупнейшем русскоязычном тревел-канале.",
            en: "Motion design and infographics for Petya English, the biggest Russian-speaking travel vlog channel."
        },
        role: {
            ru: ["Моушн-дизайн", "Монтаж"],
            en: ["Motion Design", "Editing"]
        },
        task: {
            ru: "Создать современную и понятную инфографику и моушн-дизайн для широкой аудитории YouTube тревел-блога.",
            en: "Create modern and approachable infographics and motion design for a wide audience of a travel-focused YouTube channel."
        },
        channelInfo: {
            name: "Petya English",
            subscribers: { ru: "7,34 млн подписчиков", en: "7.34M subscribers" },
            url: "https://www.youtube.com/@petya_english",
            profilePicture: "/images/Petya.jpg",
            youtubeHandle: "@petya_english"
        },
        processImages: [],
        videoUrl: "https://vimeo.com/videos/1162168471",
        software: {
            ru: ["After Effects", "Cinema 4D", "Redshift"],
            en: ["After Effects", "Cinema 4D", "Redshift"]
        },
        thumbnail: "/images/Petyapreview.jpg"
    },
    {
        id: "Monetochka",
        title: { ru: "Monetochka - Fairy Tale Tour", en: "Monetochka - Fairy Tale Tour" },
        client: { ru: "Monetochka", en: "Monetochka" },
        year: 2025,
        tags: ["Visual", "3D", "Compositing"],
        description: {
            ru: "Отвечал за все стадии производства. По задумке, Монеточка сбежала с праздника и попала в это лиминальное пространство, по пути разбросав цветы и шарики.",
            en: "Handled all aspects of the production. According to the concept, Monetochka ran away from the party and scattered flowers and balloons on the floor in the liminal space."
        },
        role: {
            ru: ["Анимация", "Рендеринг", "Кеинг", "Композитинг", "Дизайн окружения"],
            en: ["Animation", "Rendering", "Keying", "Compositing", "Environment Design"]
        },
        task: {
            ru: "Сделать концептуальный фон для концерта, который передаёт эстетику и атмосферу песен исполнительницы.",
            en: "Create a concept background for the concert that conveys the aesthetics and atmosphere of the singer's songs."
        },
        contribution: {
            ru: [
                "Кеинг с зеленого фона",
                "Дизайн 3д окружения в Blender",
                "Анимация движения камеры и света",
                "Симуляция шариков и воды",
                "Композитинг внутри 3д сцены используя сгенерированные ИИ PBR карты персонажа",
                "Рендеринг",
                "Цветокоррекция"
            ],
            en: [
                "Keying from a green screen",
                "3D environment design in Blender",
                "Animation of camera and light movement",
                "Balloon and water simulation",
                "Compositing inside the 3d scene using AI generated PBR maps of the character",
                "Rendering",
                "Color grading"

            ]
        },
        processImages: [],
        videoUrl: "https://vimeo.com/1145867594",
        software: {
            ru: ["After Effects", "Blender", "Cinema 4D"],
            en: ["After Effects", "Blender", "Cinema 4D"]
        },
        thumbnail: "/images/Monetochka.jpg"
    },
    {
        id: "Winline",
        title: { ru: "Winline - Аэробомания, заставка", en: "Winline - Aerobomania, intro" },
        client: { ru: "Winline", en: "Winline" },
        year: 2024,
        tags: ["Intro", "2D", "Motion"],
        description: {
            ru: "Я полностью разработал визуальную часть интро для «Аэробомании» — от концепции стиля до дизайна, анимации и композитинга. Целью было воссоздать эстетику позднесоветских телепередач по аэробике: выразительная типографика, «VHS»-фактура и оптимистичная, наивная энергия Перестройки.",
            en: "I developed the full visual side of the Aerobomania intro — from concept and styleframes to design, animation and compositing. The goal was to recreate the look of late-Soviet TV aerobics: bold typography, VHS-like textures and optimistic, naive energy."
        },
        role: {
            ru: ["Моушн-дизайн", "Монтаж"],
            en: ["Motion Design", "Editing"]
        },
        task: {
            ru: "Создать ретро-интро для шоу «Аэробомания» — совместного проекта Winline и VK Видео, передающее атмосферу советской аэробики конца 80-х и эпохи перестройки.",
            en: "Create a retro-style show intro for Aerobomania — a joint Winline × VK Video project. Capturing the late-80s Soviet aerobics vibe and atmosphere of perestroika."
        },
        processImages: [],
        videoUrl: "https://vimeo.com/videos/1141496326",
        software: {
            ru: ["After Effects", "Photoshop"],
            en: ["After Effects", "Photoshop"]
        },
        thumbnail: "/images/Winline.jpg"
    },
    // {
    //     id: "LORD",
    //     title: { ru: "LORD", en: "LORD" },
    //     client: { ru: "LORD", en: "LORD" },
    //     year: 2023,
    //     tags: ["Intro", "2D", "Motion"],
    //     description: {
    //         ru: "Заставка для совместного проекта Winline и VK видео - Аэробомания",
    //         en: "Intro for joint project of Winline and VK video - Aerobomania"
    //     },
    //     role: {
    //         ru: ["Моушн-дизайн", "Монтаж"],
    //         en: ["Motion Design", "Editing"]
    //     },
    //     task: {
    //         ru: "Создать заставку для совместного проекта Winline и VK видео - Аэробомания",
    //         en: "Create intro for joint project of Winline and VK video - Aerobomania"
    //     },
    //     processImages: [],
    //     videoUrl: "https://vimeo.com/1138602695",
    //     software: {
    //         ru: ["After Effects", "Photoshop"],
    //         en: ["After Effects", "Photoshop"]
    //     },
    //     thumbnail: "/images/Winline.png"
    // },
    // {
    //     id: "ThreeCats",
    //     title: { ru: "Three Cats", en: "Three Cats" },
    //     client: { ru: "Three Cats", en: "Three Cats" },
    //     year: 2023,
    //     tags: ["Intro", "2D", "Motion"],
    //     description: {
    //         ru: "Заставка для совместного проекта Winline и VK видео - Аэробомания",
    //         en: "Intro for joint project of Winline and VK video - Aerobomania"
    //     },
    //     role: {
    //         ru: ["Моушн-дизайн", "Монтаж"],
    //         en: ["Motion Design", "Editing"]
    //     },
    //     task: {
    //         ru: "Создать заставку для совместного проекта Winline и VK видео - Аэробомания",
    //         en: "Create intro for joint project of Winline and VK video - Aerobomania"
    //     },
    //     processImages: [],
    //     videoUrl: "https://vimeo.com/1138602695",
    //     software: {
    //         ru: ["After Effects", "Photoshop"],
    //         en: ["After Effects", "Photoshop"]
    //     },
    //     thumbnail: "/images/Winline.png"
    // },
];

