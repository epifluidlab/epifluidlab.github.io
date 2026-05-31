export interface Member {
  name: string;
  image: string;
  title: string;
  email?: string;
  bio: string;
}

export const members: Member[] = [
  {
    name: 'Yaping Liu',
    image: '/images/yaping_2024.jpg',
    title: 'Principal Investigator',
    email: 'yaping@northwestern.edu',
    bio: 'Assistant Professor in the Department of Biochemistry and Molecular Genetics at Northwestern University Feinberg School of Medicine. He received his Ph.D. from the University of Southern California and completed his postdoctoral training with Dr. Manolis Kellis at MIT CSAIL and the Broad Institute.',
  },
  {
    name: 'Li Wang',
    image: '/images/liwang_2022.jpg',
    title: 'Research Assistant Professor',
    email: 'li.wang1@northwestern.edu',
    bio: 'Research Assistant Professor at the EpiFluid Lab. She received her Ph.D. in Plant Biology (Epigenomics) from the University of Georgia and completed her postdoctoral training with Dr. Manolis Kellis at MIT CSAIL and the Broad Institute.',
  },
  {
    name: 'Hailu Fu',
    image: '/images/hailu.jpg',
    title: 'Research Associate',
    email: 'hailu.fu@northwestern.edu',
    bio: 'Research Associate at the EpiFluid Lab. She received her Ph.D. in Histology and Embryology from Dalian Medical University and her B.S. in Clinical Medicine from Nantong University.',
  },
  {
    name: 'Jiayan (Yoshii) Ma',
    image: '/images/jiayanma.jpg',
    title: 'Ph.D. Student',
    email: 'jiayan.ma@northwestern.edu',
    bio: 'Ph.D. student in the Driskill Graduate Program in Life Sciences at Northwestern University. He received his B.S. in Bioinformatics from the University of California, San Diego.',
  },
  {
    name: 'Jocelyn Liang',
    image: '/images/jocelyn_liang.jpg',
    title: 'Ph.D. Student',
    email: 'jocelyn.liang@northwestern.edu',
    bio: 'Ph.D. student in the Driskill Graduate Program in Life Sciences at Northwestern University. She received her B.S. in Molecular & Cell Biology and Cognitive Science from the University of California, Berkeley.',
  },
  {
    name: 'Weimin Wu',
    image: '/images/weimin_wu.jpg',
    title: 'Ph.D. Student',
    email: 'WeiminWu2023@u.northwestern.edu',
    bio: 'Ph.D. student in Computer Science at Northwestern University, co-advised by Prof. Han Liu and Prof. Yaping Liu. He received his B.S. in Mathematics from Fudan University.',
  },
  {
    name: 'James Li',
    image: '/images/jamesli.jpg',
    title: 'Data Analyst',
    email: 'james.li3@northwestern.edu',
    bio: 'Medical student at Northwestern University Feinberg School of Medicine. He received his B.S. from Wake Forest University.',
  },
  {
    name: 'Ravi Bandaru',
    image: '/images/ravi_bandaru.jpg',
    title: 'Data Analyst',
    email: 'ravi.bandaru@northwestern.edu',
    bio: 'Medical student at Sidney Kimmel Medical College at Thomas Jefferson University. He received his B.S. from Penn State University.',
  },
  {
    name: 'Kundan Baliga',
    image: '/images/kundan_baliga.jpg',
    title: 'Intern',
    email: 'kbaliga2@illinois.edu',
    bio: 'Undergraduate at the University of Illinois Urbana-Champaign, studying Statistics and Computer Science.',
  },
];
