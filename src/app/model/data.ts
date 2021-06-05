import { Risk } from './risk';
import {
  ActivitiesList,
  ItemRisk,
  MenuOptions,
  ServicesWellness,
  StudentInDanger,
} from './ui';

// Item Riesgos
export const itemsaEconomicRisks: ItemRisk = {
  icon: 'fa-hand-holding-usd',
  urlImg: 'economico.svg',
  items: [
    'Estrato',
    'Situación Laboral',
    'Situación Laboral e ingreso de los padres',
    'Dependencia económica',
    'Nivel educativo de los padres',
    'Entorno macroeconómico del país',
  ],
};

export const itemAcademicRisks: ItemRisk = {
  icon: 'fa-address-book',
  urlImg: 'academico.svg',
  items: [
    'Orientación socio-ocupacional',
    'Tipo de Colegio',
    'Rendiminento académico',
    'Calidad del programa',
    'Métodos de estudio y aprendizaje',
    'Pruebas saber',
    'Resultados de examen de ingreso',
    'Cualificación docente',
    'Grado de satisfacción con el programa',
  ],
};

export const itemsaIndividualRisks: ItemRisk = {
  icon: 'fa-male',
  urlImg: 'individual.svg',
  items: [
    'Edad, sexo, estado civil',
    'Posición dentro de los hermanos',
    'Entorno familiar',
    'Calamidad, problemas de salud',
    'Integración social',
    'Incompatibilidad horaria con actividades extra-académicas',
    'Espectativas satisfechas',
    ' Embarazo',
  ],
};

export const itemsaInstitucionalRisks: ItemRisk = {
  icon: 'fa-university',
  urlImg: 'institucional.svg',
  items: [
    'Normalidad acadèmica',
    'Servicios de financiamiento',
    'Recursos universitarios',
    'Orden pùblico',
    'Entorno politico',
    'Nivel de interaciòn entre estudiantes y docentes',
    'Apoyo acadèmico',
    'Apoyo psicològico',
  ],
};

// Actividades
export const activities: ActivitiesList[] = [
  {
    date: '12/05/2020',
    name: 'Amigos Academicos',
    icon: 'fa-check-circle',
  },
  {
    date: '12/05/2020',
    name: 'Apoyo Psicologico',
    icon: 'fa-times-circle',
  },
  {
    date: '12/05/2020',
    name: 'Amigos Academicos',
    icon: 'fa-spinner',
  },
];

export const servicesWellness: ServicesWellness[] = [
  {
    num: 1,
    name: 'Beca trabajo',
    icon: 'fas fa-check',
  },
  {
    num: 2,
    name: 'subsidio  alcaldia',
    icon: 'fas fa-check',
  },
  {
    num: 3,
    name: 'Beca trabajo',
    icon: 'recomendar',
  },
];

// Rutas

export const menuRoutes: MenuOptions[] = [
  {
    path: '/estudiante/chat',
    name: 'Ver chat',
    icon: 'envelope',
    isAllowed: () => true,
  },
  {
    path: '/estudiante/actividades',
    name: 'Ver actividades',
    icon: 'list',
    isAllowed: (role: String) =>
      role === 'estudiante' || role === 'vicerrector' ? true : false,
  },
  {
    path: '/estudiante/ver-historial',
    name: 'Ver instrumentos',
    icon: 'clock',
    isAllowed: () => true,
  },
  {
    path: '/estudiante',
    name: 'Ver riesgos',
    icon: 'hand-holding-medical',
    isAllowed: () => true,
  },
  {
    path: '/estudiante/perfil-academico',
    name: 'Perfil académico',
    icon: 'book-open',
    isAllowed: () => true,
  },
];

<<<<<<< HEAD
export const risks: Risk[] = [
  {
    name: 'Académico',
    description: 'No presenta riesgos para está categoría',
    icon: 'id-badge',
    path: 'academico',
  },
  {
    name: 'Económico',
    description: 'No presenta riesgos para está categoría',
    icon: 'hand-holding-usd',
    path: 'economico',
  },
  {
    name: 'Individual',
    description: 'No presenta riesgos para está categoría',
    icon: 'male',
    path: 'individual',
  },
  {
    name: 'Institucional',
    description: 'No presenta riesgos para está categoría',
    icon: 'university',
    path: 'institucional',
  },
];

=======
>>>>>>> 54d88c78c5214b34159b9948c187672e07f35ffc
// Estudiantes que han postulado

export const postulates: StudentInDanger[] = [
  {
    student: {
      id: 1,
      code: '1151163',
      names: 'Luis Alexander',
      surnames: 'Peñaloza Romero',
      risk: 'leve',
    },
    date: new Date(),
    postulatorRole: 'Docente',
  },
  {
    student: {
      id: 2,
      code: '1151157',
      names: 'Niver Daniel',
      surnames: 'Romero Manrique',
      risk: 'moderado',
    },
    date: new Date(),
    postulatorRole: 'Estudiante',
  },
  {
    student: {
      id: 3,
      code: '1151173',
      names: 'Fabian',
      surnames: 'Suarez Ruiz',
      risk: 'critico',
    },
    date: new Date(),
    postulatorRole: 'Docente',
  },
];

// Estudiantes que estan en riesgo critico

export const inRisk: StudentInDanger[] = [
  {
    student: {
      id: 1,
      code: '1151190',
      names: 'Juan Guillermo',
      surnames: 'Cuadrado',
      risk: 'Acádemico',
    },
    date: new Date(),
    postulatorRole: null,
  },
  {
    student: {
      id: 2,
      code: '1151191',
      names: 'James David',
      surnames: 'Rodriguez Rubio',
      risk: 'Individual',
    },
    date: new Date(),
    postulatorRole: null,
  },
];
<<<<<<< HEAD
=======
export  const risks:Risk[]=[
  {
    name:"Académico",
    description:"No presenta riesgos para está categoría",
    icon:"id-badge",
    path:"academico"
  },
  {
    name:"Económico",
    description:"No presenta riesgos para está categoría",
    icon:"hand-holding-usd",
    path:"economico"
  },
  {
    name:"Individual",
    description:"No presenta riesgos para está categoría",
    icon:"male",
    path:"individual"
  },
  {
    name:"Institucional",
    description:"No presenta riesgos para está categoría",
    icon:"university",
    path:"institucional"
  },
]
>>>>>>> 54d88c78c5214b34159b9948c187672e07f35ffc
