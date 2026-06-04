import { AppDataSource } from "../config/data-source";
import { Institution } from "../entities/institution.entity";
import { Formation } from "../entities/formation.entity";

type FormationSeed = {
  titre: string;
  description: string;
  domaine?: string;
  niveauRequis?: string;
  fraisInscription?: number;
  duree?: string;
  langue?: string;
};

type InstitutionSeed = {
  nom: string;
  type: "public" | "private";
  ville: string;
  siteWeb?: string;
  adresse?: string;
  description: string;
  parentUniversity?: string;
  formations: FormationSeed[];
};

const publicInstitutions: InstitutionSeed[] = [
  {
    nom: "Université Zitouna",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://www.uz.rnu.tn",
    description: "Université publique spécialisée dans les sciences islamiques, civilisation, théologie et domaines connexes.",
    formations: [
      { titre: "Sciences islamiques et civilisation", description: "Formations publiques spécialisées en sciences religieuses et humaines." }
    ]
  },
  {
    nom: "Université Virtuelle de Tunis",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://www.uvt.rnu.tn",
    description: "Université publique virtuelle dédiée à l'enseignement à distance et aux ressources numériques.",
    formations: [
      { titre: "Formation à distance", description: "Programmes et ressources numériques pour l'enseignement supérieur." }
    ]
  }
];

const publicEstablishments: InstitutionSeed[] = [
  {
    nom: "Faculté des Sciences de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://fsm.rnu.tn",
    description: "Établissement public rattaché à l'Université de Monastir, spécialisé en sciences fondamentales, informatique, mathématiques, physique, chimie et biologie.",
    formations: [
      { titre: "Licence en informatique", domaine: "Informatique", description: "Algorithmique, programmation, bases de données, systèmes, réseaux et mathématiques appliquées.", niveauRequis: "Baccalauréat scientifique, technique ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en sciences biologiques", domaine: "Sciences", description: "Biologie cellulaire, biochimie, microbiologie, génétique et travaux pratiques en laboratoire.", niveauRequis: "Baccalauréat sciences expérimentales ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Nationale d'Ingénieurs de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://enim.rnu.tn",
    description: "École publique d'ingénieurs de l'Université de Monastir, connue pour les spécialités industrielles, mécaniques, énergétiques, électriques et textiles.",
    formations: [
      { titre: "Cycle ingénieur en génie mécanique", domaine: "Ingénierie", description: "Conception mécanique, fabrication, matériaux, productique, simulation et projets industriels.", niveauRequis: "Concours national d'entrée aux écoles d'ingénieurs ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Cycle ingénieur en génie textile", domaine: "Ingénierie textile", description: "Procédés textiles, qualité, matériaux, innovation textile et gestion de production.", niveauRequis: "Cycle préparatoire ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Préparatoire aux Études d'Ingénieurs de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://ipeim.rnu.tn",
    description: "Institut public préparant les étudiants aux concours nationaux d'accès aux écoles d'ingénieurs.",
    formations: [
      { titre: "Cycle préparatoire Mathématiques-Physique", domaine: "Préparatoire ingénieur", description: "Mathématiques avancées, physique, algorithmique, sciences de l'ingénieur et préparation aux concours.", niveauRequis: "Baccalauréat mathématiques, sciences expérimentales ou technique", fraisInscription: 0, duree: "2 ans", langue: "Français" },
      { titre: "Cycle préparatoire Physique-Chimie", domaine: "Préparatoire ingénieur", description: "Physique, chimie, mathématiques, informatique et méthodes scientifiques.", niveauRequis: "Baccalauréat scientifique ou équivalent", fraisInscription: 0, duree: "2 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté de Médecine de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://fmm.rnu.tn",
    description: "Faculté publique de santé rattachée à l'Université de Monastir, dédiée à la formation médicale et clinique.",
    formations: [
      { titre: "Doctorat en médecine", domaine: "Médecine", description: "Sciences fondamentales, sémiologie, stages hospitaliers, pratique clinique et formation médicale progressive.", niveauRequis: "Baccalauréat sciences expérimentales avec excellent dossier", fraisInscription: 0, duree: "6 ans et plus", langue: "Français" }
    ]
  },
  {
    nom: "Faculté de Médecine Dentaire de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://fmdm.rnu.tn",
    description: "Faculté publique spécialisée en médecine dentaire, chirurgie dentaire, soins bucco-dentaires et formation clinique.",
    formations: [
      { titre: "Doctorat en médecine dentaire", domaine: "Médecine dentaire", description: "Anatomie, physiologie, odontologie, prothèse, chirurgie dentaire, stages cliniques et prévention bucco-dentaire.", niveauRequis: "Baccalauréat sciences expérimentales avec excellent dossier", fraisInscription: 0, duree: "6 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté de Pharmacie de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://fphm.rnu.tn",
    description: "Faculté publique spécialisée en pharmacie, biologie, médicament, chimie pharmaceutique et sciences de la santé.",
    formations: [
      { titre: "Doctorat en pharmacie", domaine: "Pharmacie", description: "Chimie thérapeutique, pharmacologie, biologie, toxicologie, stages officinaux et hospitaliers.", niveauRequis: "Baccalauréat sciences expérimentales avec excellent dossier", fraisInscription: 0, duree: "6 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur d'Informatique et de Mathématiques de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://isimm.rnu.tn",
    description: "Institut public spécialisé en informatique, mathématiques appliquées, systèmes d'information, data et technologies numériques.",
    formations: [
      { titre: "Licence en sciences informatiques", domaine: "Informatique", description: "Programmation, algorithmique, bases de données, réseaux, génie logiciel et projets web/mobile.", niveauRequis: "Baccalauréat scientifique, technique ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Master en data science", domaine: "Data / IA", description: "Statistiques, apprentissage automatique, fouille de données, visualisation et applications décisionnelles.", niveauRequis: "Licence informatique, mathématiques ou équivalent", fraisInscription: 0, duree: "2 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur de Biotechnologie de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://isbm.rnu.tn",
    description: "Institut public de l'Université de Monastir orienté biotechnologie, biologie appliquée, santé et industrie.",
    formations: [
      { titre: "Licence en biotechnologie", domaine: "Biotechnologie", description: "Biologie moléculaire, microbiologie, biochimie, culture cellulaire, qualité et applications industrielles.", niveauRequis: "Baccalauréat sciences expérimentales ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Master en biotechnologie médicale", domaine: "Santé / Biotechnologie", description: "Techniques biomédicales, diagnostic, génomique, immunologie et applications cliniques.", niveauRequis: "Licence en biologie, biotechnologie ou équivalent", fraisInscription: 0, duree: "2 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur des Métiers de la Mode de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://ismm.rnu.tn",
    description: "Institut public spécialisé en mode, textile, design, création, production et management du secteur textile.",
    formations: [
      { titre: "Licence en design mode", domaine: "Architecture / Design", description: "Création textile, stylisme, dessin, matériaux, prototypage, collection et culture de la mode.", niveauRequis: "Baccalauréat ou équivalent avec intérêt pour le design", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en management textile", domaine: "Business", description: "Gestion de production textile, qualité, marketing, logistique et administration des affaires textile.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur des Sciences Appliquées et de Technologie de Mahdia",
    type: "public",
    ville: "Mahdia",
    siteWeb: "https://issatma.rnu.tn",
    description: "Établissement public de l'Université de Monastir situé à Mahdia, orienté technologies, informatique et sciences appliquées.",
    formations: [
      { titre: "Licence en systèmes embarqués", domaine: "Ingénierie", description: "Électronique, programmation embarquée, automatisme, capteurs, IoT et projets techniques.", niveauRequis: "Baccalauréat scientifique ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en informatique industrielle", domaine: "Informatique", description: "Programmation, réseaux industriels, bases de données, automatisation et applications techniques.", niveauRequis: "Baccalauréat technique, informatique ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté des Sciences de Tunis",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://fst.rnu.tn",
    description: "Faculté publique de l'Université de Tunis El Manar, spécialisée en sciences fondamentales, informatique, mathématiques, physique, chimie et biologie.",
    formations: [
      { titre: "Licence en informatique", domaine: "Informatique", description: "Programmation, algorithmique, systèmes, réseaux, bases de données et mathématiques pour l'informatique.", niveauRequis: "Baccalauréat scientifique ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en mathématiques", domaine: "Sciences", description: "Analyse, algèbre, probabilités, statistiques, modélisation et raisonnement scientifique.", niveauRequis: "Baccalauréat mathématiques ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Nationale d'Ingénieurs de Tunis",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://enit.rnu.tn",
    description: "Grande école publique d'ingénieurs de l'Université de Tunis El Manar, orientée génie civil, industriel, informatique, électrique, mécanique et télécommunications.",
    formations: [
      { titre: "Cycle ingénieur en génie informatique", domaine: "Informatique", description: "Génie logiciel, systèmes, réseaux, bases de données, architecture, sécurité et projets d'ingénierie.", niveauRequis: "Concours national d'entrée aux écoles d'ingénieurs", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Cycle ingénieur en génie civil", domaine: "Ingénierie", description: "Structures, béton armé, géotechnique, hydraulique, construction et gestion de projets.", niveauRequis: "Cycle préparatoire ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté de Médecine de Tunis",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://fmt.rnu.tn",
    description: "Faculté publique de médecine rattachée à l'Université de Tunis El Manar, dédiée à la formation médicale et hospitalo-universitaire.",
    formations: [
      { titre: "Doctorat en médecine", domaine: "Médecine", description: "Sciences médicales, sémiologie, stages hospitaliers, pratique clinique, recherche et spécialisation.", niveauRequis: "Baccalauréat sciences expérimentales avec excellent dossier", fraisInscription: 0, duree: "6 ans et plus", langue: "Français" }
    ]
  },
  {
    nom: "Institut Préparatoire aux Études d'Ingénieurs d'El Manar",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://ipeiem.rnu.tn",
    description: "Institut public préparatoire de l'Université de Tunis El Manar pour l'accès aux écoles d'ingénieurs.",
    formations: [
      { titre: "Cycle préparatoire Mathématiques-Physique", domaine: "Préparatoire ingénieur", description: "Mathématiques, physique, informatique, sciences de l'ingénieur et préparation intensive aux concours.", niveauRequis: "Baccalauréat scientifique ou technique", fraisInscription: 0, duree: "2 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur des Sciences Biologiques Appliquées de Tunis",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://issbat.rnu.tn",
    description: "Institut public spécialisé en biologie appliquée, biotechnologie, environnement et sciences du vivant.",
    formations: [
      { titre: "Licence en biologie appliquée", domaine: "Sciences", description: "Biologie cellulaire, biochimie, microbiologie, environnement, analyse et travaux pratiques.", niveauRequis: "Baccalauréat sciences expérimentales ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur de Gestion de Tunis",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://isg.rnu.tn",
    description: "Institut public spécialisé en gestion, finance, comptabilité, marketing, management et informatique de gestion.",
    formations: [
      { titre: "Licence en sciences de gestion", domaine: "Business", description: "Management, marketing, finance, comptabilité, économie et outils d'aide à la décision.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en informatique de gestion", domaine: "Informatique / Business", description: "Développement, systèmes d'information, bases de données, gestion et analyse décisionnelle.", niveauRequis: "Baccalauréat informatique, économie ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut National des Sciences Appliquées et de Technologie",
    type: "public",
    ville: "Ariana",
    siteWeb: "https://insat.rnu.tn",
    description: "Institut public de l'Université de Carthage, reconnu pour l'ingénierie, l'informatique, les réseaux, l'instrumentation et la biologie industrielle.",
    formations: [
      { titre: "Cycle ingénieur en réseaux informatiques et télécommunications", domaine: "Informatique", description: "Réseaux, télécommunications, sécurité, systèmes distribués, cloud et projets techniques.", niveauRequis: "Admission selon concours ou classement universitaire", fraisInscription: 0, duree: "5 ans", langue: "Français" },
      { titre: "Cycle ingénieur en informatique industrielle et automatique", domaine: "Ingénierie", description: "Automatique, contrôle, systèmes embarqués, instrumentation, informatique industrielle et robotique.", niveauRequis: "Baccalauréat scientifique ou cycle préparatoire", fraisInscription: 0, duree: "5 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Nationale d'Ingénieurs de Carthage",
    type: "public",
    ville: "Ariana",
    siteWeb: "https://enicarthage.rnu.tn",
    description: "École publique d'ingénieurs de l'Université de Carthage, orientée systèmes industriels, informatique, mécatronique et génie électrique.",
    formations: [
      { titre: "Cycle ingénieur en mécatronique", domaine: "Ingénierie", description: "Mécanique, électronique, automatique, robotique, systèmes embarqués et conception industrielle.", niveauRequis: "Concours national ou admission équivalente", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Cycle ingénieur en systèmes informatiques", domaine: "Informatique", description: "Architecture logicielle, systèmes, réseaux, données, sécurité et applications industrielles.", niveauRequis: "Cycle préparatoire ou licence scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Nationale d'Architecture et d'Urbanisme",
    type: "public",
    ville: "Sidi Bou Said",
    siteWeb: "https://enau.rnu.tn",
    description: "École publique de l'Université de Carthage spécialisée en architecture, urbanisme, conception, patrimoine et aménagement.",
    formations: [
      { titre: "Diplôme national d'architecte", domaine: "Architecture / Design", description: "Conception architecturale, urbanisme, histoire de l'architecture, construction, dessin, atelier et projet final.", niveauRequis: "Baccalauréat ou équivalent selon orientation/admission", fraisInscription: 0, duree: "5 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut National Agronomique de Tunisie",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://inat.rnu.tn",
    description: "Établissement public de l'Université de Carthage spécialisé en agronomie, agroalimentaire, environnement et sciences agricoles.",
    formations: [
      { titre: "Cycle ingénieur agronome", domaine: "Agronomie", description: "Sciences du sol, production végétale, agroéconomie, environnement, irrigation et agroalimentaire.", niveauRequis: "Cycle préparatoire biologie-géologie ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut des Hautes Études Commerciales de Carthage",
    type: "public",
    ville: "Carthage",
    siteWeb: "https://ihec.rnu.tn",
    description: "Établissement public de référence en commerce, gestion, finance, marketing, comptabilité et management.",
    formations: [
      { titre: "Licence en management", domaine: "Business", description: "Gestion, marketing, stratégie, comptabilité, finance, économie et communication professionnelle.", niveauRequis: "Baccalauréat économie, mathématiques ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Master en finance", domaine: "Finance", description: "Marchés financiers, analyse financière, gestion des risques, audit et finance d'entreprise.", niveauRequis: "Licence en gestion, économie ou finance", fraisInscription: 0, duree: "2 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Supérieure des Communications de Tunis",
    type: "public",
    ville: "Ariana",
    siteWeb: "https://supcom.tn",
    description: "École publique spécialisée en télécommunications, réseaux, systèmes numériques, cybersécurité et technologies de communication.",
    formations: [
      { titre: "Cycle ingénieur en télécommunications", domaine: "Télécommunications", description: "Réseaux, systèmes mobiles, sécurité, cloud, IoT, traitement du signal et projets numériques.", niveauRequis: "Concours national d'entrée aux écoles d'ingénieurs", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Préparatoire aux Études Scientifiques et Techniques",
    type: "public",
    ville: "La Marsa",
    siteWeb: "https://ipest.rnu.tn",
    description: "Institut préparatoire public d'excellence rattaché à l'Université de Carthage, orienté sciences fondamentales et concours d'ingénieurs.",
    formations: [
      { titre: "Cycle préparatoire scientifique", domaine: "Préparatoire ingénieur", description: "Mathématiques, physique, chimie, informatique, méthodes scientifiques et préparation aux concours.", niveauRequis: "Baccalauréat scientifique avec très bon dossier", fraisInscription: 0, duree: "2 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté des Sciences de Bizerte",
    type: "public",
    ville: "Bizerte",
    siteWeb: "https://fsb.rnu.tn",
    description: "Faculté publique de l'Université de Carthage, spécialisée en sciences, biologie, chimie, physique, géologie et informatique.",
    formations: [
      { titre: "Licence en sciences de la vie", domaine: "Sciences", description: "Biologie, microbiologie, génétique, biochimie, écologie et travaux pratiques.", niveauRequis: "Baccalauréat sciences expérimentales", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en informatique", domaine: "Informatique", description: "Programmation, bases de données, systèmes, algorithmique et développement d'applications.", niveauRequis: "Baccalauréat scientifique ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Nationale des Sciences de l'Informatique",
    type: "public",
    ville: "Manouba",
    siteWeb: "https://ensi.rnu.tn",
    description: "École publique d'ingénieurs rattachée à l'Université de La Manouba, spécialisée en informatique, logiciel, data, réseaux et systèmes.",
    formations: [
      { titre: "Cycle ingénieur en informatique", domaine: "Informatique", description: "Génie logiciel, algorithmique, systèmes, bases de données, réseaux, intelligence artificielle et projets avancés.", niveauRequis: "Concours national d'entrée aux écoles d'ingénieurs", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Cycle ingénieur en data science", domaine: "Data / IA", description: "Machine learning, statistiques, big data, optimisation, fouille de données et intelligence artificielle.", niveauRequis: "Cycle préparatoire ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur des Arts Multimédia de La Manouba",
    type: "public",
    ville: "Manouba",
    siteWeb: "https://isamm.rnu.tn",
    description: "Institut public spécialisé en multimédia, audiovisuel, design numérique, animation, développement web et création interactive.",
    formations: [
      { titre: "Licence en multimédia", domaine: "Architecture / Design", description: "Design interactif, audiovisuel, infographie, développement web, animation et production numérique.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en développement web et mobile", domaine: "Informatique", description: "Programmation web, mobile, bases de données, UX/UI, intégration et projets numériques.", niveauRequis: "Baccalauréat informatique, scientifique ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut de Presse et des Sciences de l'Information",
    type: "public",
    ville: "Manouba",
    siteWeb: "https://ipsi.rnu.tn",
    description: "Institut public de l'Université de La Manouba spécialisé en journalisme, communication, information et médias.",
    formations: [
      { titre: "Licence en journalisme", domaine: "Communication", description: "Écriture journalistique, médias numériques, investigation, communication, radio, télévision et presse en ligne.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Supérieure d'Économie Numérique",
    type: "public",
    ville: "Manouba",
    siteWeb: "https://esen.tn",
    description: "École publique orientée économie numérique, e-business, systèmes d'information, marketing digital et transformation digitale.",
    formations: [
      { titre: "Licence en business computing", domaine: "Informatique / Business", description: "Systèmes d'information, programmation, gestion, e-business, bases de données et analyse numérique.", niveauRequis: "Baccalauréat économie, informatique ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Master en digital business", domaine: "Business", description: "Stratégie digitale, marketing numérique, e-commerce, analytics et innovation digitale.", niveauRequis: "Licence en gestion, informatique ou économie", fraisInscription: 0, duree: "2 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté de Médecine Ibn El Jazzar de Sousse",
    type: "public",
    ville: "Sousse",
    siteWeb: "https://fmso.rnu.tn",
    description: "Faculté publique de médecine rattachée à l'Université de Sousse, dédiée à la formation médicale et clinique.",
    formations: [
      { titre: "Doctorat en médecine", domaine: "Médecine", description: "Sciences fondamentales, formation clinique, stages hospitaliers, spécialisation et pratique médicale.", niveauRequis: "Baccalauréat sciences expérimentales avec excellent dossier", fraisInscription: 0, duree: "6 ans et plus", langue: "Français" }
    ]
  },
  {
    nom: "Faculté des Sciences Économiques et de Gestion de Sousse",
    type: "public",
    ville: "Sousse",
    siteWeb: "https://fsegs.rnu.tn",
    description: "Faculté publique spécialisée en économie, gestion, finance, comptabilité, marketing et méthodes quantitatives.",
    formations: [
      { titre: "Licence en finance", domaine: "Finance", description: "Comptabilité, analyse financière, marchés, fiscalité, économie et gestion des risques.", niveauRequis: "Baccalauréat économie, mathématiques ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en management", domaine: "Business", description: "Gestion, marketing, stratégie, ressources humaines, entrepreneuriat et outils numériques.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Supérieure des Sciences et de la Technologie de Hammam Sousse",
    type: "public",
    ville: "Sousse",
    siteWeb: "https://essths.rnu.tn",
    description: "École publique de l'Université de Sousse orientée sciences appliquées, technologie, informatique, électronique et mécanique.",
    formations: [
      { titre: "Licence en génie électrique", domaine: "Ingénierie", description: "Électronique, électrotechnique, automatique, instrumentation et systèmes industriels.", niveauRequis: "Baccalauréat technique ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en informatique industrielle", domaine: "Informatique", description: "Programmation, systèmes embarqués, réseaux industriels, automatisme et bases de données.", niveauRequis: "Baccalauréat technique, informatique ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur d'Informatique et des Techniques de Communication de Hammam Sousse",
    type: "public",
    ville: "Sousse",
    siteWeb: "https://isitcom.rnu.tn",
    description: "Institut public spécialisé en informatique, télécommunications, réseaux, systèmes embarqués et technologies numériques.",
    formations: [
      { titre: "Licence en réseaux et télécommunications", domaine: "Télécommunications", description: "Réseaux IP, sécurité, systèmes mobiles, télécommunications, cloud et administration réseau.", niveauRequis: "Baccalauréat informatique, technique ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en informatique", domaine: "Informatique", description: "Programmation, développement logiciel, bases de données, web, mobile et systèmes.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Nationale d'Ingénieurs de Sfax",
    type: "public",
    ville: "Sfax",
    siteWeb: "https://enis.rnu.tn",
    description: "Grande école publique d'ingénieurs de l'Université de Sfax, orientée informatique, génie industriel, mécanique, électrique, civil et procédés.",
    formations: [
      { titre: "Cycle ingénieur en génie informatique", domaine: "Informatique", description: "Génie logiciel, systèmes, réseaux, architecture, sécurité, data et projets techniques.", niveauRequis: "Concours national d'entrée aux écoles d'ingénieurs", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Cycle ingénieur en génie industriel", domaine: "Ingénierie", description: "Gestion industrielle, production, qualité, optimisation, logistique et systèmes manufacturiers.", niveauRequis: "Cycle préparatoire ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté des Sciences de Sfax",
    type: "public",
    ville: "Sfax",
    siteWeb: "https://fss.rnu.tn",
    description: "Faculté publique de l'Université de Sfax spécialisée en sciences fondamentales, informatique, mathématiques, physique, chimie et biologie.",
    formations: [
      { titre: "Licence en informatique", domaine: "Informatique", description: "Programmation, algorithmique, bases de données, systèmes, réseaux et projets logiciels.", niveauRequis: "Baccalauréat scientifique ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en chimie", domaine: "Sciences", description: "Chimie générale, organique, analytique, matériaux, environnement et travaux pratiques.", niveauRequis: "Baccalauréat scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté de Médecine de Sfax",
    type: "public",
    ville: "Sfax",
    siteWeb: "https://fms.rnu.tn",
    description: "Faculté publique de médecine de l'Université de Sfax, spécialisée en formation médicale, recherche et stages hospitaliers.",
    formations: [
      { titre: "Doctorat en médecine", domaine: "Médecine", description: "Sciences médicales, stages hospitaliers, formation clinique, sémiologie, recherche et spécialités médicales.", niveauRequis: "Baccalauréat sciences expérimentales avec excellent dossier", fraisInscription: 0, duree: "6 ans et plus", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
    type: "public",
    ville: "Sfax",
    siteWeb: "https://isims.rnu.tn",
    description: "Institut public de l'Université de Sfax orienté informatique, multimédia, systèmes d'information, développement et technologies numériques.",
    formations: [
      { titre: "Licence en génie logiciel", domaine: "Informatique", description: "Développement web/mobile, bases de données, architecture logicielle, méthodes agiles et projets logiciels.", niveauRequis: "Baccalauréat informatique, scientifique ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en multimédia", domaine: "Architecture / Design", description: "Infographie, design interactif, audiovisuel, intégration web, animation et contenus numériques.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Préparatoire aux Études d'Ingénieurs de Sfax",
    type: "public",
    ville: "Sfax",
    siteWeb: "https://ipeis.rnu.tn",
    description: "Institut public préparant les étudiants de Sfax aux concours nationaux des écoles d'ingénieurs.",
    formations: [
      { titre: "Cycle préparatoire Mathématiques-Physique", domaine: "Préparatoire ingénieur", description: "Mathématiques, physique, informatique, sciences de l'ingénieur et préparation aux concours.", niveauRequis: "Baccalauréat scientifique ou technique", fraisInscription: 0, duree: "2 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Nationale d'Ingénieurs de Gabès",
    type: "public",
    ville: "Gabès",
    siteWeb: "https://enig.rnu.tn",
    description: "École publique d'ingénieurs de l'Université de Gabès, orientée génie chimique, procédés, énergie, mécanique et électrique.",
    formations: [
      { titre: "Cycle ingénieur en génie chimique-procédés", domaine: "Ingénierie", description: "Procédés industriels, chimie appliquée, énergie, environnement, contrôle qualité et projets industriels.", niveauRequis: "Concours national ou admission équivalente", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Cycle ingénieur en génie électrique", domaine: "Ingénierie", description: "Électrotechnique, électronique de puissance, automatique, systèmes industriels et énergie.", niveauRequis: "Cycle préparatoire ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté des Sciences de Gabès",
    type: "public",
    ville: "Gabès",
    siteWeb: "https://fsg.rnu.tn",
    description: "Faculté publique de l'Université de Gabès spécialisée en sciences fondamentales, informatique, chimie, physique et biologie.",
    formations: [
      { titre: "Licence en informatique", domaine: "Informatique", description: "Programmation, algorithmique, bases de données, réseaux, systèmes et développement logiciel.", niveauRequis: "Baccalauréat scientifique ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en sciences chimiques", domaine: "Sciences", description: "Chimie générale, analytique, organique, matériaux, environnement et travaux pratiques.", niveauRequis: "Baccalauréat scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur d'Informatique et de Multimédia de Gabès",
    type: "public",
    ville: "Gabès",
    siteWeb: "https://isimg.rnu.tn",
    description: "Institut public spécialisé en informatique, multimédia, systèmes d'information et technologies numériques dans le sud tunisien.",
    formations: [
      { titre: "Licence en informatique et multimédia", domaine: "Informatique", description: "Développement web, programmation, bases de données, infographie, multimédia et applications numériques.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté des Sciences de Gafsa",
    type: "public",
    ville: "Gafsa",
    siteWeb: "https://fsgf.rnu.tn",
    description: "Faculté publique de l'Université de Gafsa, spécialisée en sciences, informatique, mathématiques, physique, chimie et biologie.",
    formations: [
      { titre: "Licence en informatique", domaine: "Informatique", description: "Algorithmique, programmation, bases de données, systèmes, réseaux et projets logiciels.", niveauRequis: "Baccalauréat scientifique ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en sciences de la terre", domaine: "Sciences", description: "Géologie, ressources naturelles, environnement, cartographie et travaux de terrain.", niveauRequis: "Baccalauréat scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur des Sciences Appliquées et de Technologie de Gafsa",
    type: "public",
    ville: "Gafsa",
    siteWeb: "https://issatgf.rnu.tn",
    description: "Institut public orienté sciences appliquées, informatique, technologie, électronique et domaines industriels.",
    formations: [
      { titre: "Licence en informatique industrielle", domaine: "Informatique", description: "Programmation, automatisme, réseaux industriels, systèmes embarqués et bases de données.", niveauRequis: "Baccalauréat technique, informatique ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en génie électrique", domaine: "Ingénierie", description: "Électricité, électronique, automatique, machines électriques et instrumentation.", niveauRequis: "Baccalauréat technique ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté des Lettres et des Sciences Humaines de Kairouan",
    type: "public",
    ville: "Kairouan",
    siteWeb: "https://flshk.rnu.tn",
    description: "Faculté publique de l'Université de Kairouan, orientée lettres, langues, sciences humaines, civilisation et recherche.",
    formations: [
      { titre: "Licence en langues appliquées", domaine: "Langues", description: "Français, anglais, communication, traduction, civilisation et compétences linguistiques appliquées.", niveauRequis: "Baccalauréat lettres, économie ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en sciences humaines", domaine: "Sciences humaines", description: "Histoire, géographie, sociologie, philosophie, méthodes de recherche et culture générale.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur d'Informatique et de Gestion de Kairouan",
    type: "public",
    ville: "Kairouan",
    siteWeb: "https://isigk.rnu.tn",
    description: "Institut public de l'Université de Kairouan spécialisé en informatique, systèmes d'information, gestion et technologies numériques.",
    formations: [
      { titre: "Licence en informatique de gestion", domaine: "Informatique / Business", description: "Systèmes d'information, programmation, gestion, bases de données, comptabilité et décisionnel.", niveauRequis: "Baccalauréat informatique, économie ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en sciences de gestion", domaine: "Business", description: "Management, marketing, finance, comptabilité, économie et entrepreneuriat.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur des Sciences Appliquées et de Technologie de Kairouan",
    type: "public",
    ville: "Kairouan",
    siteWeb: "https://issatkr.rnu.tn",
    description: "Institut public orienté sciences appliquées, technologie, électronique, informatique industrielle et systèmes techniques.",
    formations: [
      { titre: "Licence en systèmes embarqués", domaine: "Ingénierie", description: "Électronique, programmation embarquée, automatique, capteurs, IoT et projets appliqués.", niveauRequis: "Baccalauréat technique ou scientifique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Faculté des Sciences Juridiques, Économiques et de Gestion de Jendouba",
    type: "public",
    ville: "Jendouba",
    siteWeb: "https://fsjegj.rnu.tn",
    description: "Faculté publique de l'Université de Jendouba, spécialisée en droit, économie, gestion, finance et sciences sociales appliquées.",
    formations: [
      { titre: "Licence en droit public", domaine: "Droit", description: "Droit constitutionnel, administratif, international, méthodologie juridique et institutions publiques.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" },
      { titre: "Licence en gestion", domaine: "Business", description: "Management, comptabilité, finance, marketing, économie et entrepreneuriat.", niveauRequis: "Baccalauréat économie, lettres ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "École Supérieure d'Agriculture du Kef",
    type: "public",
    ville: "Le Kef",
    siteWeb: "https://esak.rnu.tn",
    description: "École publique de l'Université de Jendouba spécialisée en agriculture, ressources naturelles, production animale et végétale.",
    formations: [
      { titre: "Licence en sciences agronomiques", domaine: "Agronomie", description: "Production végétale, production animale, gestion des ressources, environnement et techniques agricoles.", niveauRequis: "Baccalauréat sciences expérimentales ou technique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur des Études Appliquées en Humanités du Kef",
    type: "public",
    ville: "Le Kef",
    siteWeb: "https://iseahk.rnu.tn",
    description: "Institut public orienté langues, sciences humaines, communication, patrimoine et études appliquées.",
    formations: [
      { titre: "Licence en anglais appliqué", domaine: "Langues", description: "Anglais, communication, traduction, culture, expression professionnelle et compétences interculturelles.", niveauRequis: "Baccalauréat ou équivalent", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  },
  {
    nom: "Institut Supérieur des Arts et Métiers de Siliana",
    type: "public",
    ville: "Siliana",
    siteWeb: "https://isams.rnu.tn",
    description: "Institut public de l'Université de Jendouba orienté arts appliqués, design, métiers créatifs et production artistique.",
    formations: [
      { titre: "Licence en design produit", domaine: "Architecture / Design", description: "Conception, dessin, matériaux, prototypage, design industriel et culture artistique.", niveauRequis: "Baccalauréat ou équivalent avec intérêt artistique", fraisInscription: 0, duree: "3 ans", langue: "Français" }
    ]
  }
];

const privateInstitutions: InstitutionSeed[] = [
  {
    nom: "ESPRIT",
    type: "private",
    ville: "Ariana",
    adresse: "Pôle El Ghazala",
    siteWeb: "https://esprit.tn",
    description: "École privée d'ingénierie connue pour l'informatique, les télécommunications, l'électromécanique et le génie civil.",
    formations: [
      { titre: "Prépa", description: "MP, MPI" },
      { titre: "Licence", description: "Business Computing, sciences de gestion, mathématiques appliquées" },
      { titre: "Ingénieur", description: "Informatique, télécoms, électromécanique, génie civil" },
      { titre: "Master", description: "Management digital, marketing digital, business analytics, MBA, finance digitale" }
    ]
  },
  {
    nom: "ESPRIM",
    type: "private",
    ville: "Monastir",
    description: "Établissement privé proposant des cycles préparatoires et des formations d'ingénieurs.",
    formations: [
      { titre: "Prépa", description: "Techno, MP, PC" },
      { titre: "Ingénieur", description: "Informatique, électrique, génie industriel, génie mécatronique" }
    ]
  },
  {
    nom: "Polytechnique Monastir",
    type: "private",
    ville: "Monastir",
    adresse: "Av Taieb M'hiri, Monastir 5000",
    siteWeb: "https://polytechmonastir.com",
    description: "École privée orientée TIC, génie logiciel, génie électrique et génie informatique.",
    formations: [
      { titre: "Prépa", description: "Cycle préparatoire intégré TIC et PSI" },
      { titre: "Licence", description: "Génie logiciel" },
      { titre: "Ingénieur", description: "Génie électrique, génie informatique" }
    ]
  },
  {
    nom: "Polytechnique Sousse",
    type: "private",
    ville: "Sousse",
    adresse: "Route Ceinture Sahloul, Kalaa Sghira 4021",
    siteWeb: "https://polytecsousse.tn",
    description: "École privée pluridisciplinaire en ingénierie, informatique, génie civil, biotechnologie et architecture.",
    formations: [
      { titre: "Prépa", description: "TIC, intégrée, MP, PC, techno" },
      { titre: "Licence", description: "Génie logiciel, systèmes d'information, business intelligence" },
      { titre: "Ingénieur", description: "Data science, IA, IoT, cybersécurité, génie civil, électrique et électromécanique" },
      { titre: "Architecture", description: "Architecture" }
    ]
  },
  {
    nom: "Université Centrale",
    type: "private",
    ville: "Tunis",
    adresse: "16 Rue Ibn Tafrajine",
    siteWeb: "https://universitecentrale.net",
    description: "Université privée pluridisciplinaire couvrant santé, ingénierie, business, droit, langues, audiovisuel, design et architecture.",
    formations: [
      { titre: "Licence", description: "Santé, génie civil, génie logiciel, big data, gestion, finance, droit, audiovisuel et design" },
      { titre: "Master", description: "IA, cybersécurité, cloud, santé, marketing digital, CCA, logistique, finance, droit et architecture" },
      { titre: "Ingénieur", description: "Génie civil, biologique, énergétique, chimique, télécom, électrique, industriel, logiciel et IA" },
      { titre: "Architecture", description: "Architecture" }
    ]
  },
  {
    nom: "Université Libre de Tunis",
    type: "private",
    ville: "Tunis",
    adresse: "32 bis Avenue Kheireddine Pacha",
    siteWeb: "https://ult-tunisie.com",
    description: "Université privée avec des parcours en ingénierie, droit, gestion, architecture et formations certifiantes.",
    formations: [
      { titre: "Prépa", description: "MPSI, PC, MP, BG, cycle préparatoire ESIGELEC-BU" },
      { titre: "Licence", description: "Génie civil, énergétique, biotechnologie, génie mécanique, informatique de gestion et gestion" },
      { titre: "Ingénieur", description: "Mécatronique, génie industriel, mécanique, civil, biologique, chimique, informatique, topographie et télécoms" },
      { titre: "Master", description: "Énergies renouvelables, marketing digital, CCA, ingénierie financière, droit des affaires" }
    ]
  },
  {
    nom: "EPI Sousse",
    type: "private",
    ville: "Sousse",
    adresse: "Route de Ceinture",
    siteWeb: "https://episousse.com.tn",
    description: "École privée à Sousse orientée ingénierie, informatique, management et spécialités industrielles.",
    formations: [
      { titre: "Prépa", description: "TIC et ICCS" },
      { titre: "Licence", description: "Informatique de gestion, génie logiciel, IoT, big data, comptabilité, marketing, finance, management" },
      { titre: "Ingénieur", description: "Logiciel, cybersécurité, IA, IoT, cloud, réseaux, génie civil, électrique, électromécanique, industriel et mécanique" },
      { titre: "Master", description: "E-management, marketing digital, CCA, entrepreneuriat, ingénierie financière" }
    ]
  },
  {
    nom: "Université SESAME",
    type: "private",
    ville: "Ariana",
    adresse: "Pôle El Ghazala",
    siteWeb: "https://universitesesame.com",
    description: "Université privée spécialisée en informatique, multimédia, management et transformation digitale.",
    formations: [
      { titre: "Prépa", description: "Cycle intégré TIC" },
      { titre: "Licence", description: "Informatique et multimédia, management" },
      { titre: "Ingénieur", description: "Génie informatique" },
      { titre: "Master", description: "Supply chain, marketing digital, data analytics, ERP management" }
    ]
  },
  {
    nom: "IPSAS",
    type: "private",
    ville: "Sfax",
    adresse: "Avenue 5 Août",
    siteWeb: "https://ipsas-ens.net",
    description: "Institut privé à Sfax proposant informatique, génie civil, industriel, pétrolier, environnement et architecture.",
    formations: [
      { titre: "Prépa", description: "Techno, MP, PC" },
      { titre: "Licence", description: "Informatique de gestion, génie mécanique" },
      { titre: "Ingénieur", description: "Génie pétrolier, informatique, civil et industriel" },
      { titre: "Master", description: "Génie de l'environnement, sécurité et qualité, MBA digital innovation" },
      { titre: "Architecture", description: "Architecture" }
    ]
  },
  {
    nom: "IIT - Institut International de Technologie",
    type: "private",
    ville: "Sfax",
    adresse: "Route de Mahrès",
    siteWeb: "https://iit.tn",
    description: "Institut privé technologique à Sfax proposant génie civil, mécanique, informatique, industriel, procédés et architecture.",
    formations: [
      { titre: "Prépa", description: "MP" },
      { titre: "Licence", description: "Génie industriel, management des systèmes industriels, génie logiciel et systèmes d'information" },
      { titre: "Ingénieur", description: "Génie civil, mécanique, informatique, industriel et procédés" },
      { titre: "Master", description: "Industries 4.0" },
      { titre: "Architecture", description: "Architecture" }
    ]
  },
  {
    nom: "AUNA",
    type: "private",
    ville: "Tunis",
    adresse: "17 Rue Ibn Rachiq",
    siteWeb: "https://auna.com.tn",
    description: "Université privée orientée business, marketing, finance, accounting et e-business.",
    formations: [
      { titre: "Licence", description: "Business management, marketing, finance, accounting" },
      { titre: "Master", description: "E-business et digital marketing" }
    ]
  },
  {
    nom: "APBS Avicenne",
    type: "private",
    ville: "Tunis",
    adresse: "90 Avenue Mohamed V",
    siteWeb: "https://polygon.tn",
    description: "Établissement privé en business, management, finance, ressources humaines, informatique et ingénierie des réseaux.",
    formations: [
      { titre: "Licence", description: "Business management, marketing, finance, comptabilité, RH, supply chain, génie logiciel, réseaux" },
      { titre: "Master", description: "Marketing digital, big data BI, entrepreneuriat, RH, MBA, finance digitale, qualité, santé, cloud, sécurité" }
    ]
  },
  {
    nom: "IHE Sousse",
    type: "private",
    ville: "Sousse",
    adresse: "Route de Ceinture",
    siteWeb: "https://www.ihes.ens.tn",
    description: "Institut privé à Sousse spécialisé en gestion, finance, marketing, droit et management.",
    formations: [
      { titre: "Licence", description: "Comptabilité, finance, marketing, droit privé, management, monnaie-finance-banque-assurance" },
      { titre: "Master", description: "Administration des affaires, comptabilité, ingénierie financière, marketing digital, droit numérique, finance" }
    ]
  },
  {
    nom: "UPSAT",
    type: "private",
    ville: "Sousse",
    siteWeb: "https://upsat.tn",
    description: "Établissement privé orienté sciences de la santé et formations paramédicales.",
    formations: [
      { titre: "Licence", description: "Sciences infirmières, anesthésie-réanimation, physiothérapie, orthoptie, imagerie médicale, optique" },
      { titre: "Master", description: "Âge, handicap et activité physique adaptée" }
    ]
  },
  {
    nom: "Université Arabe des Sciences",
    type: "private",
    ville: "Tunis",
    adresse: "18 Rue Nelson Mandela",
    siteWeb: "https://uas.ens.tn",
    description: "Université privée proposant des formations supérieures dans plusieurs domaines.",
    formations: [
      { titre: "Programmes universitaires privés", description: "Formations en gestion, sciences, langues et domaines appliqués selon les parcours disponibles." }
    ]
  },
  {
    nom: "Université Paris Dauphine Tunis",
    type: "private",
    ville: "Tunis",
    adresse: "20 Rue Baudelaire",
    siteWeb: "https://www.dauphine.tn",
    description: "Campus tunisien privé orienté économie, gestion, finance, mathématiques appliquées et sciences des organisations.",
    formations: [
      { titre: "Gestion, économie et finance", description: "Programmes privés en management, économie appliquée, finance et disciplines quantitatives." }
    ]
  },
  {
    nom: "Institut Supérieur de Gestion Privé",
    type: "private",
    ville: "Sousse",
    siteWeb: "https://isgprive.com",
    description: "Établissement privé spécialisé en gestion, marketing et finance.",
    formations: [
      { titre: "Gestion, marketing et finance", description: "Formations privées en gestion, commerce, finance, marketing et management." }
    ]
  },
  {
    nom: "MSB / MedTech - South Mediterranean University",
    type: "private",
    ville: "Tunis",
    adresse: "Les Berges du Lac 2",
    siteWeb: "https://www.smu.tn",
    description: "Université privée regroupant MSB et MedTech, orientée business, management, ingénierie et technologies.",
    formations: [
      { titre: "Business et ingénierie", description: "Programmes en management, finance, business, software engineering, data et technologies." }
    ]
  },
  {
    nom: "Université Méditerranéenne de Tunis",
    type: "private",
    ville: "Tunis",
    siteWeb: "https://mit-tunisie.com",
    description: "Université privée proposant polytechnique, business, santé et architecture.",
    formations: [
      { titre: "Polytech, business, santé et architecture", description: "Formations privées pluridisciplinaires." }
    ]
  },
  {
    nom: "Université Tunis Carthage",
    type: "private",
    ville: "Ariana",
    adresse: "La Soukra",
    siteWeb: "https://www.utc.ens.tn",
    description: "Université privée à La Soukra proposant architecture, design, business et ingénierie.",
    formations: [
      { titre: "Architecture, design, business et ingénierie", description: "Programmes privés pluridisciplinaires orientés innovation." }
    ]
  },
  {
    nom: "Université Montplaisir Tunis",
    type: "private",
    ville: "Tunis",
    siteWeb: "https://umt.tn",
    description: "Université privée proposant droit, gestion et informatique.",
    formations: [
      { titre: "Droit, gestion et informatique", description: "Formations privées en sciences juridiques, management et IT." }
    ]
  },
  {
    nom: "TIME Université",
    type: "private",
    ville: "Tunis",
    siteWeb: "https://time.ens.tn",
    description: "Université privée spécialisée en informatique, management et ingénierie.",
    formations: [
      { titre: "Informatique, management et ingénierie", description: "Programmes privés orientés technologies et business." }
    ]
  },
  {
    nom: "École Supérieure de Design ESAD",
    type: "private",
    ville: "Tunis",
    siteWeb: "https://esadtunis.com",
    description: "École privée spécialisée en design d'espace, design graphique et design produit.",
    formations: [
      { titre: "Design", description: "Design d'espace, design graphique et design produit." }
    ]
  },
  {
    nom: "UPES - Faculté des Sciences de la Santé",
    type: "private",
    ville: "Tunis",
    siteWeb: "https://upes.tn",
    description: "Faculté privée orientée sciences de la santé, paramédical, infirmier et physiothérapie.",
    formations: [
      { titre: "Sciences de la santé", description: "Paramédical, infirmier, physiothérapie et domaines de santé." }
    ]
  }
];

const seeds = [...publicInstitutions, ...publicEstablishments, ...privateInstitutions];

const detailedFormationSeeds: Record<string, FormationSeed[]> = {
  "ESPRIT": [
    {
      titre: "Ingénieur en génie logiciel",
      domaine: "Informatique",
      description: "Formation d'ingénieur centrée sur le développement logiciel, bases de données, architecture web, DevOps, cloud, tests, gestion de projet et conception d'applications.",
      niveauRequis: "Baccalauréat scientifique ou licence informatique selon le cycle d'admission",
      fraisInscription: 6500,
      duree: "5 ans",
      langue: "Français"
    },
    {
      titre: "Ingénieur en IA et data science",
      domaine: "Intelligence artificielle",
      description: "Parcours orienté machine learning, data mining, statistiques, Python, traitement des données, NLP, vision par ordinateur et projets IA appliqués.",
      niveauRequis: "Licence informatique, cycle préparatoire ou équivalent",
      fraisInscription: 6900,
      duree: "3 ans",
      langue: "Français"
    }
  ],
  "Université Centrale": [
    {
      titre: "Licence en génie logiciel",
      domaine: "Informatique",
      description: "Formation en programmation, algorithmique, bases de données, développement web/mobile, génie logiciel et systèmes d'information.",
      niveauRequis: "Baccalauréat ou équivalent",
      fraisInscription: 4200,
      duree: "3 ans",
      langue: "Français"
    },
    {
      titre: "Master en cybersécurité et cloud",
      domaine: "Cybersécurité",
      description: "Formation avancée en sécurité réseau, cloud computing, audit, cryptographie, administration système, protection des données et gouvernance sécurité.",
      niveauRequis: "Licence en informatique, réseaux ou équivalent",
      fraisInscription: 5200,
      duree: "2 ans",
      langue: "Français"
    },
    {
      titre: "Licence en sciences infirmières",
      domaine: "Santé",
      description: "Formation paramédicale centrée sur les soins infirmiers, anatomie, hygiène, stages cliniques, suivi patient et pratique hospitalière.",
      niveauRequis: "Baccalauréat sciences expérimentales ou équivalent",
      fraisInscription: 4800,
      duree: "3 ans",
      langue: "Français"
    }
  ],
  "Polytechnique Sousse": [
    {
      titre: "Ingénieur en data science et IA",
      domaine: "Intelligence artificielle",
      description: "Formation d'ingénieur couvrant big data, apprentissage automatique, deep learning, visualisation, cloud data platforms et projets industriels.",
      niveauRequis: "Cycle préparatoire, licence informatique ou équivalent",
      fraisInscription: 6200,
      duree: "3 ans",
      langue: "Français"
    },
    {
      titre: "Licence en business intelligence",
      domaine: "Data / Business intelligence",
      description: "Parcours en bases de données, tableaux de bord, analyse décisionnelle, ETL, reporting, statistiques et outils BI.",
      niveauRequis: "Baccalauréat ou équivalent",
      fraisInscription: 3900,
      duree: "3 ans",
      langue: "Français"
    }
  ],
  "EPI Sousse": [
    {
      titre: "Ingénieur en cybersécurité",
      domaine: "Cybersécurité",
      description: "Formation en sécurité applicative, réseau, systèmes, tests d'intrusion, forensic, gestion des risques et normes de sécurité.",
      niveauRequis: "Licence informatique, cycle préparatoire ou équivalent",
      fraisInscription: 5900,
      duree: "3 ans",
      langue: "Français"
    },
    {
      titre: "Licence en marketing digital",
      domaine: "Business",
      description: "Formation en stratégie digitale, communication, publicité en ligne, SEO, réseaux sociaux, analytics et e-commerce.",
      niveauRequis: "Baccalauréat ou équivalent",
      fraisInscription: 3600,
      duree: "3 ans",
      langue: "Français"
    }
  ],
  "Université SESAME": [
    {
      titre: "Licence en informatique et multimédia",
      domaine: "Informatique",
      description: "Formation en développement web, multimédia, design interactif, bases de données, programmation et applications numériques.",
      niveauRequis: "Baccalauréat ou équivalent",
      fraisInscription: 3900,
      duree: "3 ans",
      langue: "Français"
    },
    {
      titre: "Master en data analytics",
      domaine: "Data science",
      description: "Master orienté analyse de données, statistiques, visualisation, machine learning appliqué, business analytics et aide à la décision.",
      niveauRequis: "Licence informatique, gestion quantitative ou équivalent",
      fraisInscription: 4700,
      duree: "2 ans",
      langue: "Français"
    }
  ],
  "Université de Tunis El Manar": [
    {
      titre: "Licence en informatique",
      domaine: "Informatique",
      description: "Formation publique en algorithmique, programmation, bases de données, systèmes, réseaux et mathématiques pour l'informatique.",
      niveauRequis: "Baccalauréat scientifique, technique ou équivalent",
      fraisInscription: 0,
      duree: "3 ans",
      langue: "Français"
    },
    {
      titre: "Parcours médecine",
      domaine: "Médecine",
      description: "Formation médicale publique longue incluant sciences fondamentales, stages hospitaliers, pratique clinique et spécialisation progressive.",
      niveauRequis: "Baccalauréat sciences expérimentales avec excellent dossier",
      fraisInscription: 0,
      duree: "6 ans et plus",
      langue: "Français"
    }
  ],
  "Université de Carthage": [
    {
      titre: "Licence en architecture",
      domaine: "Architecture",
      description: "Parcours académique en conception architecturale, dessin, histoire de l'architecture, urbanisme, construction et projets d'atelier.",
      niveauRequis: "Baccalauréat ou équivalent avec dossier artistique/scientifique",
      fraisInscription: 0,
      duree: "5 ans",
      langue: "Français"
    },
    {
      titre: "Master en économie et finance",
      domaine: "Finance",
      description: "Formation en analyse économique, finance d'entreprise, marchés financiers, statistiques, gestion des risques et politiques économiques.",
      niveauRequis: "Licence en économie, gestion ou équivalent",
      fraisInscription: 0,
      duree: "2 ans",
      langue: "Français"
    }
  ],
  "Université de Sfax": [
    {
      titre: "Ingénieur en informatique",
      domaine: "Informatique",
      description: "Formation publique d'ingénieur couvrant logiciel, systèmes, réseaux, bases de données, architecture, sécurité et projets techniques.",
      niveauRequis: "Cycle préparatoire ou licence scientifique selon concours/admission",
      fraisInscription: 0,
      duree: "3 ans",
      langue: "Français"
    }
  ],
  "MSB / MedTech - South Mediterranean University": [
    {
      titre: "Bachelor in business administration",
      domaine: "Business",
      description: "Programme en management, finance, marketing, comptabilité, entrepreneuriat, communication professionnelle et stratégie d'entreprise.",
      niveauRequis: "Baccalauréat ou équivalent",
      fraisInscription: 9000,
      duree: "3 ans",
      langue: "Anglais"
    },
    {
      titre: "Software engineering",
      domaine: "Informatique",
      description: "Programme technologique en programmation, software architecture, databases, cloud, algorithms, teamwork and engineering projects.",
      niveauRequis: "Baccalauréat scientifique ou équivalent",
      fraisInscription: 9500,
      duree: "3 à 5 ans",
      langue: "Anglais"
    }
  ]
};

function makeEmail(name: string) {
  return `${name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/(^\.|\.$)/g, "")}@tunibridge.local`;
}

function normalizeSite(site?: string) {
  if (!site) return undefined;
  if (site.startsWith("http://") || site.startsWith("https://")) return site;
  return `https://${site}`;
}

function inferDomaine(title: string, description: string) {
  const text = `${title} ${description}`.toLowerCase();

  if (/prépa|prepa|préparatoire|preparatoire|mpsi|mpi|mp|pc|psi|techno/.test(text)) return "Préparatoire ingénieur";
  if (/ia|intelligence artificielle|data|big data|analytics|business intelligence/.test(text)) return "Data / IA";
  if (/informatique|logiciel|software|cloud|réseaux|cyber|iot|multimédia/.test(text)) return "Informatique";
  if (/médecine|santé|infirm|physio|pharmacie|dentaire|paramédical/.test(text)) return "Santé";
  if (/business|management|gestion|marketing|finance|comptabilité|droit|rh/.test(text)) return "Business";
  if (/architecture|design/.test(text)) return "Architecture / Design";
  if (/télécom|telecom|communication/.test(text)) return "Télécommunications";
  if (/civil|mécanique|mecanique|électrique|electrique|industriel|électromécanique|electromecanique|procédés|procedes|mécatronique|mecatronique|biologique|chimique|topographie/.test(text)) return "Ingénierie";
  if (/langue|anglais|français|traduction/.test(text)) return "Langues";

  return "Général";
}

const broadFormationTitles = new Set([
  "Prépa",
  "Prepa",
  "Licence",
  "Ingénieur",
  "Ingenieur",
  "Master",
  "Architecture",
  "Programmes universitaires privés",
  "Gestion, marketing et finance",
  "Polytech, business, santé et architecture",
  "Droit, gestion et informatique",
  "Informatique, management et ingénierie",
  "Business et ingénierie",
  "Design"
]);

function shouldExpandFormation(seed: FormationSeed) {
  return (
    broadFormationTitles.has(seed.titre) ||
    (!/^(Licence en|Master en|Cycle ingénieur|Cycle ingenieur|Cycle préparatoire|Cycle preparatoire|Diplôme|Diplome|Doctorat|Bachelor|Software engineering|Ingénieur en|Ingenieur en|Parcours)/i.test(seed.titre) &&
      /,|\set\s/i.test(seed.titre))
  );
}

function shouldRemoveExistingFormation(formation: Formation) {
  return broadFormationTitles.has(formation.titre) || formation.domaine === "Général";
}

function cleanSpecialty(value: string) {
  return value
    .replace(/^cycle préparatoire intégré\s+/i, "")
    .replace(/^cycle preparatoire integre\s+/i, "")
    .replace(/^cycle préparatoire\s+/i, "")
    .replace(/^cycle preparatoire\s+/i, "")
    .replace(/^programmes?\s+/i, "")
    .replace(/^formations?\s+/i, "")
    .trim();
}

function splitSpecialties(description: string) {
  return description
    .replace(/\bet\b/g, ",")
    .split(",")
    .map(cleanSpecialty)
    .filter(Boolean);
}

function lowerFirst(value: string) {
  if (!value) return value;
  return `${value.charAt(0).toLowerCase()}${value.slice(1)}`;
}

function buildDetailedTitle(level: string, specialty: string) {
  const clean = cleanSpecialty(specialty);
  const lower = lowerFirst(clean);

  if (/prépa|prepa/i.test(level)) return `Cycle préparatoire ${clean.toUpperCase()}`;
  if (/licence/i.test(level)) return `Licence en ${lower}`;
  if (/ingénieur|ingenieur/i.test(level)) return `Cycle ingénieur en ${lower}`;
  if (/master/i.test(level)) return `Master en ${lower}`;
  if (/architecture/i.test(level)) return "Diplôme d'architecture";
  if (/design/i.test(level)) return `Licence en ${lower}`;

  return `Formation en ${lower}`;
}

function buildDetailedDescription(level: string, specialty: string, institutionName: string) {
  const clean = cleanSpecialty(specialty);

  if (/prépa|prepa/i.test(level)) {
    return `Cycle préparatoire en ${clean} à ${institutionName}, centré sur les bases scientifiques, techniques et méthodologiques nécessaires pour accéder aux cycles d'ingénieurs.`;
  }

  if (/ingénieur|ingenieur/i.test(level)) {
    return `Cycle d'ingénieur en ${clean} à ${institutionName}, avec des enseignements spécialisés, des projets pratiques et une orientation professionnelle.`;
  }

  if (/master/i.test(level)) {
    return `Master en ${clean} à ${institutionName}, destiné à approfondir les compétences avancées du domaine et préparer l'insertion professionnelle ou la recherche.`;
  }

  if (/architecture/i.test(level)) {
    return `Formation en architecture à ${institutionName}, couvrant la conception, le dessin, l'urbanisme, les matériaux, les ateliers et les projets architecturaux.`;
  }

  return `Licence en ${clean} à ${institutionName}, avec un parcours spécialisé permettant à l'étudiant de candidater à ce domaine précis.`;
}

function inferDuration(level: string) {
  if (/prépa|prepa/i.test(level)) return "2 ans";
  if (/licence/i.test(level)) return "3 ans";
  if (/ingénieur|ingenieur/i.test(level)) return "3 ans";
  if (/master/i.test(level)) return "2 ans";
  if (/architecture/i.test(level)) return "5 ans";
  return "Variable selon le cycle";
}

function inferRequiredLevel(level: string) {
  if (/prépa|prepa|licence|architecture/i.test(level)) return "Baccalauréat ou équivalent";
  if (/ingénieur|ingenieur/i.test(level)) return "Cycle préparatoire, licence scientifique ou équivalent";
  if (/master/i.test(level)) return "Licence ou équivalent dans un domaine compatible";
  return "Baccalauréat ou équivalent";
}

function expandFormationSeeds(item: InstitutionSeed) {
  const expanded = item.formations.flatMap((seed) => {
    if (!shouldExpandFormation(seed)) {
      return [seed];
    }

    const specialties = splitSpecialties(seed.description);

    if (specialties.length === 0) {
      return [];
    }

    return specialties.map((specialty) => {
      const title = buildDetailedTitle(seed.titre, specialty);
      const description = buildDetailedDescription(seed.titre, specialty, item.nom);

      return {
        titre: title,
        description,
        domaine: inferDomaine(title, description),
        niveauRequis: seed.niveauRequis || inferRequiredLevel(seed.titre),
        fraisInscription: seed.fraisInscription,
        duree: seed.duree || inferDuration(seed.titre),
        langue: seed.langue || "Français"
      };
    });
  });

  return expanded;
}

function dedupeFormationSeeds(formationSeeds: FormationSeed[]) {
  const seen = new Set<string>();

  return formationSeeds.filter((formation) => {
    const key = formation.titre.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function inferParentUniversity(item: InstitutionSeed) {
  if (item.parentUniversity || item.type !== "public") return item.parentUniversity;

  const parentNames = new Set([
    "Université de Tunis El Manar",
    "Université de Tunis",
    "Université de Carthage",
    "Université de La Manouba",
    "Université de Sousse",
    "Université de Monastir",
    "Université de Sfax",
    "Université de Gabès",
    "Université de Gafsa",
    "Université de Jendouba",
    "Université de Kairouan",
    "Université Zitouna",
    "Université Virtuelle de Tunis"
  ]);

  if (parentNames.has(item.nom)) return undefined;

  const name = item.nom.toLowerCase();

  if (/monastir|mahdia/.test(item.ville.toLowerCase())) return "Université de Monastir";
  if (/sousse|hammam sousse/.test(item.ville.toLowerCase())) return "Université de Sousse";
  if (/sfax/.test(item.ville.toLowerCase())) return "Université de Sfax";
  if (/gabès|gabes/.test(item.ville.toLowerCase())) return "Université de Gabès";
  if (/gafsa/.test(item.ville.toLowerCase())) return "Université de Gafsa";
  if (/kairouan/.test(item.ville.toLowerCase())) return "Université de Kairouan";
  if (/jendouba|kef|siliana/.test(item.ville.toLowerCase())) return "Université de Jendouba";
  if (/ensi|isamm|presse|économie numérique|economie numerique|manouba/.test(name)) return "Université de La Manouba";
  if (/insat|carthage|architecture|agronomique|ihec|communications|ipest|bizerte/.test(name)) return "Université de Carthage";
  if (/gestion de tunis/.test(name)) return "Université de Tunis";
  if (/sciences de tunis|ingénieurs de tunis|ingenieurs de tunis|médecine de tunis|medecine de tunis|el manar|biologiques appliquées|biologiques appliquees/.test(name)) return "Université de Tunis El Manar";

  return undefined;
}

export async function seedInstitutions() {
  const institutionRepo = AppDataSource.getRepository(Institution);
  const formationRepo = AppDataSource.getRepository(Formation);
  let createdCount = 0;

  for (const item of seeds) {
    let savedInstitution = await institutionRepo.findOne({
      where: { nom: item.nom },
      relations: ["formations"]
    });

    if (!savedInstitution) {
      const institution = institutionRepo.create({
        nom: item.nom,
        ville: item.ville,
        description: item.description,
        adresse: item.adresse,
        siteWeb: normalizeSite(item.siteWeb),
        email: makeEmail(item.nom),
        type: item.type,
        parentUniversity: inferParentUniversity(item),
        pays: "Tunisie",
        verified: true
      });

      savedInstitution = await institutionRepo.save(institution);
      createdCount += 1;
    }

    const parentUniversity = inferParentUniversity(item);
    if (savedInstitution.parentUniversity !== parentUniversity) {
      savedInstitution.parentUniversity = parentUniversity || "";
      await institutionRepo.save(savedInstitution);
    }

    for (const existingFormation of savedInstitution.formations || []) {
      if (shouldRemoveExistingFormation(existingFormation)) {
        await formationRepo.remove(existingFormation);
      }
    }

    savedInstitution = await institutionRepo.findOne({
      where: { id: savedInstitution.id },
      relations: ["formations"]
    }) || savedInstitution;

    const formationSeeds = dedupeFormationSeeds([
      ...expandFormationSeeds(item),
      ...(detailedFormationSeeds[item.nom] || [])
    ]);

    for (const formationSeed of formationSeeds) {
      const existingFormation = savedInstitution.formations?.find(
        formation => formation.titre === formationSeed.titre
      );

      if (existingFormation) {
        const nextDomaine = formationSeed.domaine || inferDomaine(formationSeed.titre, formationSeed.description);
        const nextNiveau = formationSeed.niveauRequis || "Baccalauréat ou équivalent";
        const nextFrais = formationSeed.fraisInscription ?? (item.type === "public" ? 0 : 3500);
        const nextDuree = formationSeed.duree || "Variable selon le cycle";
        const nextLangue = formationSeed.langue || "Français";

        if (
          existingFormation.description !== formationSeed.description ||
          existingFormation.domaine !== nextDomaine ||
          existingFormation.niveauRequis !== nextNiveau ||
          existingFormation.fraisInscription !== nextFrais ||
          existingFormation.duree !== nextDuree ||
          existingFormation.langue !== nextLangue
        ) {
          existingFormation.description = formationSeed.description;
          existingFormation.domaine = nextDomaine;
          existingFormation.niveauRequis = nextNiveau;
          existingFormation.fraisInscription = nextFrais;
          existingFormation.duree = nextDuree;
          existingFormation.langue = nextLangue;
          await formationRepo.save(existingFormation);
        }

        continue;
      }

      const formation = formationRepo.create({
        titre: formationSeed.titre,
        description: formationSeed.description,
        domaine: formationSeed.domaine || inferDomaine(formationSeed.titre, formationSeed.description),
        niveauRequis: formationSeed.niveauRequis || "Baccalauréat ou équivalent",
        fraisInscription: formationSeed.fraisInscription ?? (item.type === "public" ? 0 : 3500),
        duree: formationSeed.duree || "Variable selon le cycle",
        langue: formationSeed.langue || "Français",
        institution: savedInstitution
      });

      await formationRepo.save(formation);
    }
  }

  if (createdCount > 0) {
    console.log(`Seeded ${createdCount} institutions for universities page`);
  }
}
