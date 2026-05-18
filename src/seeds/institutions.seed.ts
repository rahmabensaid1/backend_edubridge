import { AppDataSource } from "../config/data-source";
import { Institution } from "../entities/institution.entity";
import { Formation } from "../entities/formation.entity";

type FormationSeed = {
  titre: string;
  description: string;
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
  formations: FormationSeed[];
};

const publicInstitutions: InstitutionSeed[] = [
  {
    nom: "Université de Tunis El Manar",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://www.utm.rnu.tn",
    description: "Grande université publique tunisienne reconnue pour les sciences, la médecine, l'ingénierie et la recherche.",
    formations: [
      { titre: "Sciences, médecine et ingénierie", description: "Formations publiques en sciences fondamentales, santé, technologies et ingénierie." }
    ]
  },
  {
    nom: "Université de Tunis",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://www.utunis.rnu.tn",
    description: "Université publique couvrant lettres, sciences humaines, arts, droit, gestion et économie.",
    formations: [
      { titre: "Lettres, droit, gestion et arts", description: "Programmes de licence, master et doctorat dans plusieurs domaines académiques." }
    ]
  },
  {
    nom: "Université de Carthage",
    type: "public",
    ville: "Tunis",
    siteWeb: "https://www.ucar.rnu.tn",
    description: "Université publique pluridisciplinaire incluant ingénierie, commerce, sciences agronomiques, architecture et sciences économiques.",
    formations: [
      { titre: "Ingénierie, économie et sciences agronomiques", description: "Réseau d'établissements publics autour de Tunis, Carthage et Ariana." }
    ]
  },
  {
    nom: "Université de La Manouba",
    type: "public",
    ville: "Manouba",
    siteWeb: "https://www.uma.rnu.tn",
    description: "Université publique connue pour les sciences humaines, lettres, documentation, multimédia, arts et biotechnologie.",
    formations: [
      { titre: "Humanités, arts et technologies", description: "Formations publiques en lettres, information, multimédia, arts et sciences." }
    ]
  },
  {
    nom: "Université de Sousse",
    type: "public",
    ville: "Sousse",
    siteWeb: "https://www.uc.rnu.tn",
    description: "Université publique du Sahel proposant santé, économie, droit, sciences, ingénierie et technologies.",
    formations: [
      { titre: "Santé, sciences et ingénierie", description: "Parcours publics adaptés aux besoins académiques et économiques du Sahel." }
    ]
  },
  {
    nom: "Université de Monastir",
    type: "public",
    ville: "Monastir",
    siteWeb: "https://www.um.rnu.tn",
    description: "Université publique reconnue notamment pour médecine, pharmacie, médecine dentaire, sciences et ingénierie.",
    formations: [
      { titre: "Santé, sciences et technologie", description: "Programmes publics en santé, sciences appliquées et domaines technologiques." }
    ]
  },
  {
    nom: "Université de Sfax",
    type: "public",
    ville: "Sfax",
    siteWeb: "https://www.uss.rnu.tn",
    description: "Université publique majeure du sud-est, active en sciences, économie, droit, ingénierie et médecine.",
    formations: [
      { titre: "Sciences, économie, médecine et ingénierie", description: "Large choix de formations publiques de licence, master, ingénieur et doctorat." }
    ]
  },
  {
    nom: "Université de Gabès",
    type: "public",
    ville: "Gabès",
    siteWeb: "https://www.univgb.rnu.tn",
    description: "Université publique du sud tunisien avec des spécialités en sciences, technologie, gestion et environnement.",
    formations: [
      { titre: "Sciences, technologie et gestion", description: "Formations publiques orientées développement régional et innovation." }
    ]
  },
  {
    nom: "Université de Gafsa",
    type: "public",
    ville: "Gafsa",
    siteWeb: "https://www.ugaf.rnu.tn",
    description: "Université publique du sud-ouest proposant sciences, lettres, informatique, gestion et domaines appliqués.",
    formations: [
      { titre: "Sciences, informatique et gestion", description: "Programmes publics diversifiés en licence et master." }
    ]
  },
  {
    nom: "Université de Jendouba",
    type: "public",
    ville: "Jendouba",
    siteWeb: "https://www.uj.rnu.tn",
    description: "Université publique du nord-ouest avec des établissements en sciences, agriculture, économie, sport et technologies.",
    formations: [
      { titre: "Sciences, agriculture et économie", description: "Formations publiques adaptées aux secteurs régionaux et nationaux." }
    ]
  },
  {
    nom: "Université de Kairouan",
    type: "public",
    ville: "Kairouan",
    siteWeb: "https://www.univ-k.rnu.tn",
    description: "Université publique proposant lettres, sciences humaines, informatique, arts, gestion et sciences appliquées.",
    formations: [
      { titre: "Lettres, informatique et sciences appliquées", description: "Parcours publics de formation supérieure et recherche." }
    ]
  },
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

const seeds = [...publicInstitutions, ...privateInstitutions];

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
        pays: "Tunisie",
        verified: true
      });

      savedInstitution = await institutionRepo.save(institution);
      createdCount += 1;
    }

    for (const formationSeed of item.formations) {
      const exists = savedInstitution.formations?.some(
        formation => formation.titre === formationSeed.titre
      );

      if (exists) {
        continue;
      }

      const formation = formationRepo.create({
        titre: formationSeed.titre,
        description: formationSeed.description,
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
