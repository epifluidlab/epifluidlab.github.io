export interface NewsItem {
  date: string;
  text: string;
  link?: string;
  linkText?: string;
}

export const news: NewsItem[] = [
  {
    date: '2024-08-02',
    text: 'Jiayan (Yoshii) Ma from the DGP program joins us as a Ph.D. student. Welcome!',
  },
  {
    date: '2024-07-25',
    text: 'Ravi Bandaru receives the runner-up award ($10,000) from the Science Olympiad Alumni Research (SOAR) Foundation for his cfDNA research. Congrats!',
  },
  {
    date: '2024-07-19',
    text: 'Sanaz Ghotbaldini receives the T32 Carcinogenesis Fellowship for her Ph.D. thesis project. Congrats!',
  },
  {
    date: '2024-07-12',
    text: 'James Li presents his work at ISMB (Montreal) and receives 2nd place for best student talk. Congrats!',
  },
  {
    date: '2024-04-06',
    text: 'Sanaz Ghotbaldini from Dr. Joshua J. Meeks\'s lab joins as a co-mentored Ph.D. student. Welcome!',
  },
  {
    date: '2024-03-30',
    text: 'Our FinaleMe paper is accepted by Nature Communications.',
    link: 'https://news.feinberg.northwestern.edu/2024/04/11/developing-tools-to-explore-dna-methylation/',
    linkText: 'Northwestern news',
  },
  {
    date: '2024-01-29',
    text: 'Ravi Bandaru joins the lab as a full-time Data Analyst. Welcome!',
  },
  {
    date: '2023-09-01',
    text: 'The lab moves to Northwestern University Feinberg School of Medicine.',
  },
  {
    date: '2023-03-16',
    text: 'Dr. Hailu Fu\'s NOMe-HiC paper is published in Genome Biology.',
    link: 'https://doi.org/10.1186/s13059-023-02889-x',
    linkText: 'Read paper',
  },
  {
    date: '2023-03-07',
    text: 'Dr. Yaping Liu receives the Focused Research Award from the Sony Research Award Program for cell-free DNA work.',
  },
  {
    date: '2022-11-14',
    text: 'CRAG paper on cfDNA fragmentation hotspots accepted by Genome Medicine.',
    link: 'https://genomemedicine.biomedcentral.com/articles/10.1186/s13073-022-01141-8',
    linkText: 'Read paper',
  },
  {
    date: '2022-08-01',
    text: 'Dr. Yaping Liu receives the MIRA (R35) award from NIGMS for five years of single-cell multi-omics work.',
  },
  {
    date: '2022-09-20',
    text: 'Dr. Yaping Liu receives the R56 High Priority Short-Term Award from NHGRI for cell-free DNA work.',
  },
  {
    date: '2021-07-26',
    text: 'Dr. Yaping Liu receives the MOMI pilot grant from the Bill & Melinda Gates Foundation for cfDNA study in preterm birth.',
  },
  {
    date: '2021-11-03',
    text: 'Review paper on cfDNA fragmentation patterns accepted by British Journal of Cancer.',
    link: 'https://doi.org/10.1038/s41416-021-01635-z',
    linkText: 'Read paper',
  },
  {
    date: '2020-11-16',
    text: 'FinaleDB paper accepted by Bioinformatics.',
    link: 'https://doi.org/10.1093/bioinformatics/btaa999',
    linkText: 'Read paper',
  },
  {
    date: '2020-01-07',
    text: 'Our single-cell Methyl-HiC work is highlighted by Nature Methods as "Method of the Year 2019."',
  },
  {
    date: '2019-06-20',
    text: 'Single-cell Methyl-HiC paper accepted by Nature Methods.',
    link: 'https://doi.org/10.1038/s41592-019-0502-z',
    linkText: 'Read paper',
  },
  {
    date: '2019-01-14',
    text: 'EpiFluid Lab officially starts at CCHMC.',
  },
];
