export const storyData = {
  en: [
    {
      id: 1,
      character: "Narrator",
      text: "The sun is slowly setting over the capital.\n\n" +
            "For nearly an hour, you have been walking through a maze of dimly lit streets. The neighborhood you are in, discreet during the day, becomes one of the busiest in the city when night falls. In your hand, a small piece of paper crinkles slightly and an address is written on it — the reason for your presence here.\n\n" +
            "You turn the corner onto a new, narrower street, away from the hustle and bustle. A strange sensation suddenly runs through you.\n\n" +
            "You can feel it. You are close.",
      background: "/images/bg1.jpg",
      choices: null
    },
    {
      id: 2,
      character: "Narrator",
      text: "A few more steps lead you in front of a new facade.\n\n" +
            "The building does not particularly stand out from the others that make up the street. Old, discreet, it almost blends in with the alignment of the neighboring buildings. Yet, something catches your eye. Just above the entrance, a wooden sign is hanging under a small lamp. The painted characters are still legible despite the time.\n\n" +
            "« 解決屋 Kaiketsu-ya », the Problem Solving Bureau.",
      background: "/images/bg1.jpg",
      choices: [
        { text: "Check that it is indeed the address", next: 3 },
        { text: "Enter without waiting", next: 4 }
      ]
    },
    {
      id: 3,
      character: "Narrator",
      text: "You hesitate for a moment and wait in front of the building. \n\n" +
            "The facade bears the marks of the years, but the light filtering through the fogged windows allows you to see a silhouette on the other side. Your gaze slowly scans the building, as if to judge its condition… or maybe to gather some courage.\n\n" +
            "You quickly check that it is indeed the address written on the paper you are holding. But there is no mistake.\n\n" +
            "After taking a quick look around you, you take a deep breath and approach the door.",
      background: "/images/bg1.jpg",
      choices: null
    },
    {
      id: 4,
      character: "Narrator",
      text: "The door slides slowly as you push it and a small bell rings immediately, breaking the calm of the office.\n\n" +
            "The room is modest, lit by a warm light that contrasts with the cool air of the street. Shelves filled with files and various objects occupy the walls, and the light scent of paper and old wood floats in the air.\n\n" +
            "Behind a cluttered desk, a man is nonchalantly sitting on his chair. With his feet on the table, he is calmly flipping through a newspaper. The sound of the bell seems to have barely disturbed his reading. Your gaze stops on the newspaper he holds in his hands. You immediately recognize the layout. It’s the one you work for.\n\n" +
            "After giving you a quick glance as a greeting, the man delicately folds the newspaper before placing it on one of the corners of the desk. Everything suggests that he was expecting you.",
      background: "/images/bg2.jpg",
      choices: null
    },
    {
      id: 5,
      character: "Narrator",
      text: "You introduce yourself as a journalist and explain the reason for your visit: to conduct an interview.\n\n" +
            "You work for a local newspaper and, lately, your articles have been highlighting the merchants, artisans and service providers who bring this bustling Tokyo neighborhood to life. It is in this context that you contacted the manager of this establishment… and that you now find yourself face to face with him, at the end of this evening.\n\n" +
            "After exchanging some formalities with the man, you start this interview to learn more about him and his activity.",
      background: "/images/bg2.jpg",
      choices: [
        { text: "Ask him to introduce himself", next: 6 },
        { text: "Question him about his activity", next: 7 }
      ]
    },
    {
      id: 6,
      character: "Kai",
      text: "« My name is Kai Kusanagi. I was born on August 21, 6061, in Hayama, Kanagawa Prefecture. »\n\n" +
      "<i>He pauses for a moment, as if to think about what he will say next.</i>\n\n" +
      "« I grew up in one of the convents of the capital before being sent on a mission to Europe during my adolescence. I returned to Japan at the age of majority and after completing my priesthood. »\n\n" +
      "<i>A slight silence settles in before he continues.</i>\n\n" +
      "« Since I am not affiliated with any particular church or parish, I decided to settle here and open this establishment, in order to help those in need. »",
      background: "/images/bg2.jpg",
      choices: [
        { text: "Question him about his activity", next: 7 },
        { text: "Ask him to tell his story", next: 8 }
      ]
    },
    {
      id: 7,
      character: "Kai",
      text: "« People often have problems that don't really find their place in the official records of the authorities. So I opened this place thinking it could help them. »\n\n" +
      "<i>He shrugs slightly.</i>\n\n" +
      "« As long as the request is legitimate, I do what I can to find a solution. It started with requests to find lost items, escort certain people in trouble... But over time, the requests multiplied and started to change. In a way, you could say that I am a jack of all trades. »",
      background: "/images/bg2.jpg",
      choices: [
        { text: "Ask him to tell his story", next: 8 },
        { text: "Discuss his status as a Knight", next: 9 }
      ]
    },
    {
      id: 8,
      character: "Kai",
      text: " <i>He looks at you without blinking. Then after a few seconds of contemplation, he decides to continue.</i>\n\n" +
      "« As I said earlier, I was educated in a convent. I have no real memories of my parents. I only know that they were not able to raise me as they would have liked. The other children of the convent and the adults who composed it very quickly became my only and true family. »\n\n" +
      "<i>He quickly looks up to gather his thoughts and memories.</i>\n\n" +
      "« I never had the vocation to become a man of the church, and the priests quickly realized it. Even after sending me to Europe as a missionary, they understood that I was not really a servant of the Divine. There, I saw the misery and lack of compassion for the most vulnerable. The worst part is that it was exclusively humans. This experience personally marked me and I understood that I could use my gift to try to make a difference. But my elders saw that I had this vocation to help, more particularly Father Hashimura, who still officiates in the area. And upon my return, he convinced me to open this establishment. That's who I am, what Kaiketsu-ya is and what defines me. »",
      background: "/images/bg2.jpg",
      choices: [
        { text: "Discuss the clans", next: 9 },
        { text: "Thank him for his time", next: 10 }
      ]
    },
    {
      id: 9,
      character: "Kai",
      text: " « What can I say about them that hasn't already been said? »\n\n" +
      "<i>He lets out a long sigh, trying to measure his next words.</i>\n\n" +
      "« As a human, I must admit that I am not satisfied with the way the leaders of these clans act. But that doesn't mean that every member is ill-intentioned, some act for the common good and others find themselves swept up by circumstances and power games. You don't choose where you're born, but you can choose how you live. »\n\n" +
      "<i>He pauses for a moment, as if to think about what he will say next.</i>\n\n" +
      "« The teachings I received indicated that the clans, with the exception of the Tsukishiro, were abominations of nature and that their existence was a source of corruption. And that it is the duty of an exorcist to oppose them. These writings are frozen in time, at a time when understanding of things was limited. I have learned to live in community without accepting the place that the clans give to humans. I also fight for humans to be able to live their lives without being judged and fearing members of these clans. »",
      background: "/images/bg2.jpg",
      choices: null
    },
    {
      id: 10,
      character: "Narration",
      text: "Your watch rings, indicating that the time allotted for this interview is up. \n\n" +
      "Your exchanges have been fruitful and you have been able to discuss deep topics. You know a little more about this strange character but you haven't been able to lift all the shadows. Maybe you'll have the opportunity to talk again later. \n\n" +
      "You exchange a handshake with him before taking one last look at the atmosphere of the place to try to engrave in your memory the details that might be useful to you in writing your future article. \n\n" +
      "You leave the problem-solving office and head into the streets of this small Tokyo neighborhood that never seems to sleep, zigzagging between passersby and regulars of the city's nocturnal pleasures.",
      background: "/images/bg1.jpg",
      choices: null
    }
  ],
  fr: [
    {
      id: 1,
      character: "Narration",
      text: "Le soleil se couche lentement au-dessus de la capitale.\n\n" +
            "Depuis près d’une heure, vous arpentez un dédale de rues faiblement éclairées. Le quartier dans lequelle vous vous trouvez, discret en journée, devient l’un des plus animés de la ville lorsque la nuit tombe. Dans votre main, un petit morceau de papier se froisse légèrement et une adresse y est inscrite — la raison de votre présence ici.\n\n" +
            "Vous tournez au coin d’une nouvelle rue plus étroite, à l’écart de l’agitation. Une sensation étrange vous parcourt soudain.\n\n" +
            "Vous le sentez. Vous êtes proche.",
      background: "/images/bg1.jpg",
      choices: null
    },
    {
      id: 2,
      character: "Narration",
      text: "Quelques pas de plus vous mènent devant une nouvelle façade.\n\n" + 
            "La bâtisse ne se distingue pas particulièrement des autres qui composent la rue. Ancienne, discrète, elle se fond presque dans l’alignement des bâtiments voisins. Pourtant, quelque chose attire votre regard. Juste au-dessus de l’entrée, une pancarte en bois est suspendue sous une petite lampe. Les caractères peints y sont encore lisibles malgré le temps.\n\n" +
            "« 解決屋 Kaiketsu-ya », le Bureau de Résolution de Problèmes.",
      background: "/images/bg1.jpg",
      choices: [
        { text: "Vérifier qu'il s'agit bien de l'adresse", next: 3 },
        { text: "Entrer sans attendre", next: 4 }
      ]
    },
    {
      id: 3,
      character: "Narration",
      text: "Vous hésitez un moment et attendez devant le bâtiment. \n\n" + 
            "La façade porte les marques des années, mais la lumière qui filtre à travers les vitres embuées vous fait apercevoir une silhouette de l'autre côté. Votre regard parcourt lentement la bâtisse, comme pour en juger l’état… ou peut-être pour rassembler un peu de courage.\n\n" +
            "Vous vérifiez rapidement qu'il s'agit bien de l'adresse inscrite sur le papier que vous tenez. Mais il n'y a pas d'erreur.\n\n" +
            "Après avoir jeté un rapide coup d'œil autour de vous, vous prenez une longue inspiration et approchez de la porte.",
      background: "/images/bg1.jpg",
      choices: null
    },
    {
      id: 4,
      character: "Narration",
      text: "La porte coulisse lentement lorsque vous la poussez et une petite clochette tinte aussitôt, brisant le calme du bureau.\n\n" +
            "La pièce est modeste, éclairée par une lumière chaude qui contraste avec l’air frais de la rue. Des étagères chargées de dossiers et d’objets divers occupent les murs, et l’odeur légère du papier et du bois ancien flotte dans l’air.\n\n" +
            "Derrière un bureau désencombré, un homme est installé nonchalamment sur sa chaise. Les pieds posés sur la table, il feuillette tranquillement un journal. Le bruit de la clochette semble à peine avoir troublé sa lecture. Votre regard s’arrête sur le journal qu’il tient entre ses mains. Vous reconnaissez immédiatement la mise en page. C’est celui pour lequel vous travaillez.\n\n" +
            "Après vous avoir adressé un rapide regard en guise de salutations, l'homme plie délicatement le journal avant de le déposer sur l'un des coins du meuble. Tout porte à croire qu'il vous attendait.",
      background: "/images/bg2.jpg",
      choices: null
    },
    {
      id: 5,
      character: "Narration",
      text: "Vous vous présentez comme journaliste et lui expliquez la raison de votre venue : conduire une interview.\n\n" +
      "Vous travaillez pour un journal local et, ces derniers temps, vos articles mettent en lumière les commerçants, artisans et prestataires de service qui font vivre ce quartier tokyoïte en pleine expansion. C’est dans ce cadre que vous avez pris contact avec le gérant de cette enseigne… et que vous vous retrouvez désormais face à lui, en cette fin de soirée.\n\n" +
      "Après avoir échangé quelques formalités avec l'homme, vous débutez cette entrevue pour en apprendre plus sur lui et son activité.",
      background: "/images/bg2.jpg",
      choices: [
        { text: "Lui demander de se présenter", next: 6 },
        { text: "L'interroger sur son activité", next: 7 }
      ]
    },
    {
      id: 6,
      character: "Kai",
      text: "« Je m'appelle Kai Kusanagi. Je suis né le 21 août 6061, à Hayama, dans la préfecture de Kanagawa. »\n\n" +
      "<i>Il marque une pause, comme pour réfléchir à ce qu'il va dire ensuite.</i>\n\n" +
      "« J'ai grandi dans l'un des couvents de la capitale avant d'être missionné en Europe pendant mon adolescence. Je suis rentré au Japon à ma majorité et après avoir effectué ma prêtrise. »\n\n" +
      "<i>Un léger silence s'installe avant qu'il poursuive.</i>\n\n" +
      "« Comme je ne suis affilié à aucune église ou paroisse en particulier, j'ai décidé de m'installer ici et ouvrir cet établissement, afin de venir en aide à ceux qui en ont besoin. »",
      background: "/images/bg2.jpg",
      choices: [
        { text: "L'interroger sur son activité", next: 7 },
        { text: "Lui demander de raconter son histoire", next: 8 }
      ]
    },
    {
      id: 7,
      character: "Kai",
      text: "« Les gens ont souvent des problèmes qui ne trouvent pas vraiment leur place dans les registres officiels des autorités. Alors j'ai ouvert ce lieu en pensant que cela pourrait les aider. »\n\n" +
      "<i>Il hausse légèrement les épaules.</i>\n\n" +
      "« Du moment que la demande est légitime, je fais ce que je peux pour trouver une solution. Ça a commencé avec des demandes pour trouver des objets perdus, escorter certaines personnes en difficulté... Mais avec le temps, les demandes se sont multipliées et ont commencé à changer. D'une certaine manière, on peut dire que je suis un homme à tout faire. »",
      background: "/images/bg2.jpg",
      choices: [
        { text: "Lui demander de raconter son histoire", next: 8 },
        { text: "Discuter de son statut de Chevalier", next: 9 }
      ]
    },
    {
      id: 8,
      character: "Kai",
      text: "<i>Il vous observe sans ciller. Puis après quelques secondes de contemplation, il se décide à continuer.</i>\n\n" +
      "« Comme je l'ai dit plus tôt, j'ai été éduqué dans un couvent. Je n'ai pas de réel souvenirs des mes parents. Je sais seulement qu'ils n'étaient pas en mesure de m'élever comme ils l'auraient voulu. Les autres enfants du couvent et les adultes qui le composaient sont très vite devenus ma seule et véritable famille. »\n\n" +
      "<i>Il lève rapidement les yeux pour rassembler ses pensées et souvenirs.</i>\n\n" +
      "« Je n'ai jamais eu pour vocation de devenir un homme d'église, et les prêtres s'en sont très vite rendu compte. Même après m'avoir envoyé en Europe en tant que missionnaire, ils ont compris que je n'étais pas vraiment un serviteur du Divin. Là-bas, j'y ai vu la misère et le manque de compassion pour les plus fragiles. Le pire, c'est qu'il s'agissait exclusivement d'humains. Cette expérience m'a personnellement marqué et j'ai compris que je pouvais utiliser mon don pour tenter de faire la différence. Mais aînés ont vu que j'avais cette vocation d'apporter mon aide, plus particulièrement le Père Hashimura, qui officie encore dans le coin. Et à mon retour, il m'a convaincu d'ouvrir cet établissement. Voilà qui je suis, ce qu'est Kaiketsu-ya et ce qui me définit. »",
      background: "/images/bg2.jpg",
      choices: [
        { text: "Discuter des clans", next: 9 },
        { text: "Le remercier pour son temps", next: 10 }
      ]
    },
    {
      id: 9,
      character: "Kai",
      text: "« Que dire à leur sujet qui n'a pas déjà été dit ? »\n\n" +
      "<i>Il lâche un long soupir, tentant de mesurer ses prochaines paroles.</i>\n\n" +
      "« En tant qu'humain, je dois avouer que je ne suis pas satisfait de la manière dont les dirigeants de ses clans agissent. Mais ça ne veut pas dire que chaque membre est mal intentionné, certains agissent pour le bien commun et d'autres se retrouvent emportés par les circonstances et les jeux de pouvoir. On ne choisit pas où on naît, mais on peut choisir comment on vit. »\n\n" +
      "<i>L'homme se penche au dessus du bureau, comme pour mieux articuler ses mots et être dans la confidence.</i>\n\n" +
      "« Les enseignements que j'ai reçus indiquaient que les clans, à l'exception des Tsukishiro, étaient des abominations de la nature et que leur existence était une source de corruption. Et qu'il est du devoir d'un exorciste de s'y opposer. Ces écritures sont figées dans le temps, à une époque où la compréhension des choses était limitée. J'ai appris à vivre en communauté sans tout de même accepter la place que les clans donnent aux humains. Je me bats aussi pour que les humains puissent vivre leur vie sans être jugés et craindre les membres de ces clans. »",
      background: "/images/bg1.jpg",
      choices: null
    },
    {
      id: 10,
      character: "Narration",
      text: " Votre montre sonne, indiquant que le temps accordé à cette interview est écoulé. \n\n" +
      "Vos échanges ont été fructueux et vous avez pu échanger sur des sujets profonds. Vous en connaissez un peu plus sur cet étrange personnage mais vous n'avez pas réussi à lever toutes les zones d'ombre. Peut-être aurez-vous l'occasion de discuter à nouveau plus tard. \n\n" +
      "Vous échangez une poignée de main avec lui avant de vous imprégner une dernière fois de l'atmosphère du lieu pour tenter de graver dans votre mémoire les détails qui pourraient vous être utiles dans la rédaction de votre futur article. \n\n" +
      "Vous quittez le bureau de résolution de problèmes et vous enfoncez dans les rues de ce petit quartier de Tokyo qui ne sembre jamais dormir, zigzaguant entre les passants et les habitués des plaisirs nocturnes de la ville. ",
      background: "/images/bg1.jpg",
      choices: null
    }
  ]
};