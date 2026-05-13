import type { Project } from '@/types/project';
import type { Formation } from '@/types/formation';

export const projects: Project[] = [
  {
    title: 'Portfolio Personnel',
    description: 'Développement d\'un site web personnel avec Next.js et Tailwind CSS pour présenter mes projets, compétences et expériences professionnelles.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: 'https://www.guillaume-delferiere.be',
    repo: 'https://github.com/GuillaumeDelferiere/guillaume-portofolio',
    year: '2025',
    image: '/projets/Portfolio.png'
  },
  {
    title: 'Bookworm',
    description: 'Développement d\'une application mobile de gestion de bibliothèque personnelle avec React Native dans le cadre d\'une summer school internationnale (Belgique, Danemark, Canada) à Toronto.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Supabase'],
    repo: 'https://github.com/Simon-Fontaine/rnss25-group-7-simon-guillaume-rehat-mostafa',
    year: '2025',
    image: '/projets/Bookworm.jpeg'
  },
  {
    title: 'Tablify',
    description: 'Développement d\'une application web permettant la réservation et la gestion de tables dans les restaurants avec une dimension sociale : les utilisateurs peuvent partager leurs tables avec des inconnus pour favoriser les rencontres.',
    tags: ['Next.js', 'TailwindCSS', 'Express.js', 'Node.js', 'PostgreSQL'],
    link: '',
    repo: 'https://github.com/Tablify-Developement/Tablify-Web/tree/production',
    year: '2024',
    image: '/projets/Tablify.png'
  },
  {
    title: 'Blog Personnel',
    description: 'Développement d\'un site statique avec Hugo de blog personnel et déploiement sur Netlify pour partager des résumés de contenus culturels.',
    tags: ['Hugo', 'Netlify', 'Markdown'],
    link: 'https://bilan-mensuel-guillaume.netlify.app/',
    repo: 'https://github.com/GuillaumeDelferiere/Bilan-Mensuel',
    year: '2025',
    image: '/projets/Bilan-Mensuel.png'
  }, 
  {
    title: 'Serresurmesure.be',
    description: "Développement d'un site pour la vente de serre sur mesure de l'entreprise Atelier Heymans à l'aide de l'outil Wordpress et déploiement via OVH.",
    tags: ['Wordpress', 'OVH', 'Astra', 'Elementor'],
    link: 'https://www.serresurmesure.be/',
    repo: '',
    year: '2026',
    image: '/projets/serresurmesure.webp'
  }, 
  {
    title: 'Studio Heymans',
    description: "Développement et déploiement d'un site vitrine pour la promotion d'événement pour le studio d'enregistrement de l'entreprise Atelier Heymans via l'outil Hostinger.",
    tags: ['Hostinger', 'Design', 'UI'],
    link: 'https://echovif-builder-endrlibq21xcalox.hostingersite.com',
    repo: '',
    year: '2026',
    image: '/projets/studioHeymans.webp'
  },
  
];

export const formations: Formation[] = [
  {
    title: "Stage",
    school: "Atelier Heymans",
    date: "Février - Mai 2026",
    description: "Stage de 3 mois dans l'entreprise Atelier Heymans dans le cadre de mon bachelier en Technologies de l'Informatique. Développement de plusieurs sites web pour l'activité économique de l'entreprise Atelier Heymans."
  },
  {
    title: 'Bachelier en Technologies de l\'Informatique',
    school: 'Ephec Louvain-La-Neuve',
    date: '2022 - 2026 (en cours)',
    description: 'Formation axée sur le développement web, les bases de données, les réseaux et la sécurité informatique avec une approche pratique.',
  },
  {
    title: 'Summer School - Application Mobile React Native',
    school: 'Seneca Polytechnic, Toronto',
    date: 'Été 2025',
    description: 'Programme intensif sur le développement d\'applications mobiles multiplateformes utilisant React Native.',
  },
  {
    title: 'Bachelier en Ingénieur de Gestion',
    school: 'Université Catholique de Louvain',
    date: '2021 - 2022',
    description: '',
  },
  {
    title: 'Certificat d\'Enseignement Secondaire Supérieur (CESS)',
    school: 'Institut de l\'Enfant-Jésus, Nivelles',
    date: '2014 - 2020',
    description: 'Option Latin jusqu\'en 4e année et Mathématiques/Sciences fortes en 5e et 6e année. Immersion anglaise durant toute la scolarité.',
  }
];

export const professionalProject = {
  title: "Développeur web fullstack & Designer",
  description: "Mon ambition est de concevoir et développer des applications web complètes, en accordant une importance toute particulière à l'interface (UI) et à l'expérience utilisateur (UX).",
  strengths: [
    { name: "Développement Frontend et Design", details: "Attrait pour la création d'interfaces fluides (Next.js, Tailwind)." },
    { name: "Communication", details: "Essentiel pour comprendre les besoins et collaborer en équipe." }
  ],
  weaknesses: [
    { name: "Développement Backend", details: "Besoin de consolider la gestion des API, des bases de données et de la sécurité." }
  ]
};

export const ephecActivities = [
  { 
    theme: "Thème 1 : Créativité, design et développement web",
    activity: "Conception et développement du site anniversaire", 
    hours: 10,
    link: "https://anniversaire-site.vercel.app/",
    repo: "https://github.com/GuillaumeDelferiere/anniversaire-site",
    analysis: {
      cadre: "Dans le cadre d'un projet personnel, j'ai pris l'initiative de concevoir et développer un site web de A à Z pour l'anniversaire de ma copine. L'objectif principal était de créer une expérience numérique unique, esthétique et personnalisée.",
      faits: "Au cours de ce projet, l'aspect qui m'a demandé le plus de temps a été la phase de design. J'ai dû concevoir une interface utilisateur attrayante, penser à l'harmonie des couleurs et à la fluidité des animations.",
      perspective: "Cette activité consolide mon point fort en Frontend. Elle prouve ma capacité à traduire un besoin émotionnel en interface fonctionnelle, ce qui est indispensable pour mon profil hybride de développeur-designer."
    }
  },
  { 
    theme: "Thème 2 : Déploiement, jamstack et génération de sites statiques",
    activity: "Développement et mise en ligne d'un blog personnel avec Hugo et Netlify", 
    hours: 10,
    link: "https://bilan-mensuel-guillaume.netlify.app/",
    repo: "https://github.com/GuillaumeDelferiere/Bilan-Mensuel",
    analysis: {
      cadre: "Afin de me créer un espace personnel dédié au partage avec mes amis de résumés de contenus culturels, j'ai décidé de mettre en place un blog. Avant de me lancer dans le code, mes recherches documentaires m'ont fortement conseillé de me tourner vers les générateurs de sites statiques, et plus particulièrement vers l'outil Hugo. J'ai donc décidé de suivre cette recommandation et de l'associer à Netlify pour l'hébergement, expérimentant ainsi l'architecture Jamstack.",
      faits: "Ce projet m'a confronté à deux difficultés majeures. La première a été la courbe d'apprentissage d'un tout nouvel outil : Hugo, qui possède sa propre logique et fonctionne avec des fichiers Markdown. J'ai dû sortir de ma zone de confort. La seconde difficulté a résidé dans la configuration du déploiement. J'ai dû apprendre à lier mon dépôt GitHub à Netlify pour mettre en place une intégration et un déploiement continus (CI/CD), me permettant de comprendre comment automatiser une mise en production.",
      perspective: "En tant que futur développeur Fullstack, je ne dois pas seulement savoir coder une interface, je dois aussi savoir choisir les bons outils et livrer mon application efficacement aux utilisateurs. Savoir lire une documentation, comparer des technologies et s'adapter rapidement à un nouveau framework sont des compétences d'architecte logiciel que je souhaite cultiver. De plus, la maîtrise d'outils de déploiement continu comme Netlify complète parfaitement mon profil."
    }
  },
  { 
    theme: "Thème 3 : Élargissement des compétences frontend vers le mobile",
    activity: "Réalisation complète d'une application en React native via Expo Go", 
    hours: 10,
    link: "",
    repo: "https://github.com/GuillaumeDelferiere/tuto-expo",
    analysis: {
      cadre: "Suite à ma participation à la Summer School internationale à Toronto axée sur la création d'une application mobile, j'ai ressenti le besoin de prendre du recul pour approfondir et consolider les technologies que nous avions utilisées. J'ai donc décidé de suivre le tutoriel complet et détaillé sur React Native et Expo afin d'ancrer plus profondéments mes connaissances à mon rythme et en totale économie.",
      faits: "La révision de la synthaxe et l'architecture des composants a été très intéressante afin de parfaire mes connaissaces. L'un des aspects les plus intéressant reste l'apprentissage avec Expo Go. J'ai trouvé cela très chouette et très stimulant de pouvoir tester, recharger et visualiser l'application en temps réel directement sur mon propre téléphone.",
      perspective: "Cette activité s'inscrit parfaitement dans mon projet professionnel. En tant que futur développeur Fullstack axé sur le design et l'interface, je ne peux pas me limiter au web traditionnel. En élargissant mon expertise du Frontend vers le développement mobile via React Native, je deviens capable de déployer des interfaces esthétiques et fluides sur toutes les plateformes. Cette polyvalence technique est très recherchée sur le marché du travail."
    }
  },
  { 
    theme: "Thème 4 : Logique de programmation et Backend",
    activity: "Tutorat d'apprentissage du langage Python pour une personne débutante", 
    hours: 5,
    link: "",
    repo: "https://github.com/GuillaumeDelferiere/tutorat_python",
    analysis: {
      cadre: "J'ai pris l'initiative d'accompagner une de mes connaissances qui débutait une formation en informatique et rencontrait des difficultés avec le langage Python. Pendant plusieurs sessions totalisant environ 5 heures, je l'ai aidée à résoudre une série d'exercices pratiques. Ce cadre de tutorat m'a obligé à structurer ma pensée différemment de lorsque je code seul.",
      faits: "Les exercices que nous avons traités balayaient les fondamentaux du développement : d'abord la manipulation de structures de données (fonctions, listes, dictionnaires), puis la Programmation Orientée Objet (POO). J'ai dû lui expliquer comment modéliser des concepts via le code, par exemple en créant des classes avec de l'héritage. Cet enseignement m'a permis de m'approprier pleinement la logique algorithmique.",
      perspective: "Cette activité répond très directement à mon besoin de développement identifié dans mon projet professionnel : le renforcement de mes compétences en Backend. La logique pure, la structuration des données et la POO sont les fondations de tout développement côté serveur. En aidant quelqu'un à construire ces fondations en Python, j'ai indirectement mais solidement renforcé les miennes, tout en utilisant mon point fort en communication."
    }
  },
  { 
    theme: "Thème 5 : Pédagogie et communication institutionnelle",
    activity: "Tutorat de cours de mathématiques encadré par l'EPHEC", 
    hours: 7.5,
    link: "",
    repo: "",
    proof: "/preuves/AttestationTutorat.pdf",
    analysis: {
      cadre: "Au cours de l'année académique 2025-2026, je me suis porté volontaire pour assumer une fonction de tuteur bénévole au sein de l'EPHEC. L'objectif était de venir en aide aux étudiants de première année de bachelier nécessitant un soutien dans leur apprentissage. J'ai eu l'opportunité d'accompagner une étudiante, spécifiquement sur le cours de mathématiques, pour un total de 7,5 heures de prestations officielles.",
      faits: "Durant ces sessions, la maîtrise des mathématiques n'était finalement qu'une petite partie du défi. J'ai rapidement compris que l'enjeu principal était pédagogique : le plus difficile a été d'identifier et de mettre en place la bonne méthode de travail, spécifiquement adaptée au profil de l'élève. J'ai dû faire preuve d'écoute et de patience pour réexpliquer de manière simple et intuitive des concepts abstraits qui pouvaient lui paraître très compliqués au premier abord.",
      perspective: "Cette expérience s'aligne parfaitement avec mon point fort identifié dans mon projet professionnel : la communication. Dans ma future carrière de Développeur Web Fullstack, je serai constamment amené à interagir avec des profils non-techniques (clients, designers, chefs de projet). Savoir vulgariser un concept technique ou logique complexe pour le rendre intelligible à tous est une compétence importante."
    }
  },
  { 
    theme: "Thème 6 : Compréhension matérielle et culture générale IT",
    activity: "Apprentissage en autodidacte du montage et de l'assemblage d'un PC sur mesure", 
    hours: 10,
    link: "",
    repo: "",
    proof:"/preuves/commande_pc.pdf",
    analysis: {
      cadre: "En marge de mes études de développement, j'ai voulu comprendre concrètement comment fonctionnait l'outil que j'utilise tous les jours. J'ai donc décidé de monter mon propre ordinateur fixe pièce par pièce. Pour réaliser ce projet, j'ai adopté une démarche totalement autodidacte, en m'appuyant principalement sur des tutoriels vidéo spécialisés et des forums pour m'assurer de la compatibilité des différents composants.",
      faits: "Durant cette activité, j'ai appris à identifier, manipuler et connecter les éléments centraux d'un ordinateur (carte mère, processeur, mémoire vive, etc.). J'ai dû faire preuve de minutie lors de l'assemblage physique et j'ai acquis une compréhension claire du rôle de chaque composant. Surtout, cette expérience m'a appris à chercher l'information technique par moi-même et à suivre des procédures strictes pour éviter d'endommager le matériel.",
      perspective: "Bien que mon projet professionnel soit de devenir Développeur Web Fullstack (un métier purement logiciel), je considère cette expérience matérielle comme une brique importante de ma culture générale IT. Comprendre la machine physique sur laquelle s'exécute le code permet d'avoir une vision plus complète de l'informatique. De plus, la capacité à se former en totale autonomie est une compétence transversale essentielle dans mon futur métier."
    }
  },
  { 
    theme: "Thème 7 : Leadership et gestion d'équipe (Soft Skills)",
    activity: "Rôle de chef d'animation dans un mouvement de jeunesse (Scoutisme)", 
    hours: 10,
    link: "",
    repo: "",
    proof: "/preuves/IMG_6094.pdf",
    analysis: {
      cadre: "En dehors de mon cursus scolaire, je suis engagé depuis plusieurs années en tant que chef scout. Pour intégrer cette expérience de longue durée dans ce portfolio, j'ai décidé d'isoler une période de 10 heures consacrée à la préparation et à la gestion d'une activité majeure pour mon groupe. Ce cadre associatif est un terrain d'apprentissage exceptionnel pour développer des compétences humaines (soft skills).",
      faits: "Durant l'organisation et l'animation de ces activités, j'ai appris à gérer la dynamique d'un groupe, à déléguer des tâches entre co-animateurs et à résoudre des conflits de manière diplomatique. Le plus grand défi a été de maintenir l'attention des jeunes tout en assurant leur sécurité. J'ai dû faire preuve d'adaptabilité face aux imprévus (météo, logistique) et j'ai appris à prendre des décisions rapides et efficaces.",
      perspective: "Dans le monde professionnel, le développement logiciel est avant tout un travail d'équipe (méthodologie Agile, Scrum). Savoir écouter, s'exprimer clairement, prendre des initiatives et collaborer avec d'autres développeurs ou des clients sont des compétences transversales que j'ai pu acquérir sur le terrain scout et qui renforcent considérablement mon point fort en communication pour ma future carrière."
    }
  },
  { 
    theme: "Thème 8 : Découverte du monde professionnel IT",
    activity: "Visite de l'entreprise belge Odoo", 
    hours: 4,
    link: "",
    repo: "https://github.com/GuillaumeDelferiere/odoo_demo",
    analysis: {
      cadre: "Pour mieux appréhender la réalité du monde du travail qui m'attend après mon bachelier à l'EPHEC, j'ai participé à une visite de l'entreprise Odoo, l'un des plus grands succès technologiques belges. Cette visite de 4 heures m'a plongé au cœur d'une entreprise éditrice d'un logiciel de gestion (ERP) open source utilisé mondialement, m'offrant une opportunité unique de comprendre comment s'organise une grande société informatique.",
      faits: "Lors de cette visite, j'ai pu observer de près l'environnement de travail des développeurs et les méthodologies employées. J'ai découvert comment les différentes équipes (développement, design, support) interagissent entre elles pour faire évoluer un produit complexe. Techniquement, cela m'a permis de mieux comprendre les défis liés à la gestion d'une base de code massive et l'importance cruciale de l'expérience utilisateur (UX).",
      perspective: "Voir des professionnels travailler sur un produit complet m'a fait réaliser l'importance d'avoir un profil Fullstack. Bien que mon attrait principal soit le Frontend, j'ai compris chez Odoo que la fluidité d'une interface dépend entièrement de la robustesse de son architecture Backend. Cette visite a renforcé ma motivation à consolider mes compétences côté serveur (mon point faible actuel)."
    }
  },
  { 
    theme: "Thème 9 : Introduction à la cybersécurité",
    activity: "Participation à une conférence sur la cybersécurité organisée par l'EPHEC", 
    hours: 1.5,
    link: "",
    repo: "",
    proof:"/preuves/intro_cyber.pdf",
    analysis: {
      cadre: "Conscient que la sécurité informatique est un enjeu majeur dans le développement d'applications, j'ai assisté à une conférence dédiée à la cybersécurité, organisée au sein même de l'EPHEC. Pendant une heure et demie, un expert du domaine a présenté les menaces actuelles pesant sur les infrastructures informatiques et les applications web, ainsi que les bonnes pratiques à adopter.",
      faits: "J'ai appris à identifier les vulnérabilités les plus courantes qui ciblent les applications web (comme les failles d'injection ou le vol de sessions). Le conférencier a expliqué de manière concrète comment les attaquants exploitent les faiblesses du code, notamment du côté serveur, pour s'introduire dans les systèmes. J'ai compris que la sécurité doit être pensée dès la conception de l'architecture (Security by Design).",
      perspective: "Cette conférence cible précisément mon principal axe d'amélioration : le développement Backend et la gestion des données sensibles. Concevoir un site web magnifique n'a aucune valeur s'il est vulnérable. Cette initiation m'a fait prendre conscience des responsabilités d'un développeur Fullstack et m'a donné des pistes concrètes pour mieux sécuriser mes futurs développements côté serveur."
    }
  }
  // { theme:"Créativité et Développement", activity: "Conception et développement d'un site anniversaire", hours: 10 },
  // { theme:"Déploiement et Génération de sites statiques", activity: "Développement et mise en ligne d'un blog personnel", hours: 10 },
  // { theme:"Élargissement compétences Frontend Mobile", activity: "Réalisation complète du tutoriel expo", hours: 10 },
  // { theme:"Logique de programmation et Backend", activity: "Tutorat d'une connaissance en Python", hours: 5},
  // { theme:"Pédagogie et communication", activity: "Tutorat d'une élève de l'Ephec pour son cours de Math", hours: 7.5},
  // { theme:"Compréhension de l'architecture matérielle", activity: "Montage, Démontage et entretien hardware d'un PC", hours: 10},
  // { theme:"Activité extra-scolaire", activity: "Chef scout", hours: 10}, 
  // { theme:"Introduction au monde professionnel", activity:"Visite de l'entreprise Odoo Louvain-La-Neuve", hours: 4},
  // { theme: "Introduction à la cybersécurité", activity: "Conférence sur la cybersécurité organisée par l'Ephec", hours: 1.5}
  // Ajoutez vos activités ici
];