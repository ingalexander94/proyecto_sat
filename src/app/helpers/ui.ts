const semesters = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
  'XIII',
  'XIV',
  'XV',
  'XVI',
  'XVII',
  'XVIII',
  'XIX',
  'XX',
];

const getSemestersInRoman = (quantity: number = 1) =>
  semesters.slice(0, quantity);

const convertSemesterInRoman = (semester: number = 1) =>
  semesters[semester - 1];

export { getSemestersInRoman, convertSemesterInRoman };
