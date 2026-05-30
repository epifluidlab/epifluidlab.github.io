export interface Tool {
  name: string;
  description: string;
  details: string;
  tags: string[];
  links: { label: string; href: string }[];
  image?: string;
}

export const tools: Tool[] = [
  {
    name: 'FinaleToolkit',
    description: 'High-speed toolkit for extracting cfDNA fragmentation features',
    details: 'A fast, comprehensive toolkit for computing cfDNA fragmentation features from whole-genome sequencing data. Supports a wide range of fragmentation metrics used in liquid biopsy research.',
    tags: ['software'],
    image: '/images/tools/finaletoolkit.jpeg',
    links: [
      { label: 'GitHub', href: 'https://github.com/epifluidlab/FinaleToolkit' },
      { label: 'Publication', href: 'https://doi.org/10.1093/bioadv/vbaf236' },
    ],
  },
  {
    name: 'FinaleMe',
    description: 'Predict cfDNA methylation and tissue-of-origin by cfDNA fragmentation patterns',
    details: 'FinaleMe (FragmentatIoN AnaLysis of cEll-free DNA Methylation) is a Java program to predict DNA methylation in deep and low-coverage cell-free DNA WGS data without other training data.',
    tags: ['software'],
    image: '/images/tools/finaleme.gif',
    links: [
      { label: 'GitHub', href: 'https://github.com/epifluidlab/FinaleMe' },
      { label: 'Publication', href: 'https://doi.org/10.1038/s41467-024-47196-6' },
    ],
  },
  {
    name: 'FinaleDB',
    description: 'A browser and database of cell-free DNA fragmentation patterns',
    details: 'Contains thousands of uniformly processed cfDNA WGS datasets across pathological conditions. Includes a fragmentation genome browser integrated with multi-omics data.',
    tags: ['resource'],
    image: '/images/tools/finaledb.png',
    links: [
      { label: 'Database', href: 'http://finaledb.research.cchmc.org/' },
      { label: 'Publication', href: 'https://doi.org/10.1093/bioinformatics/btaa999' },
    ],
  },
  {
    name: 'CRAG',
    description: 'De novo characterization of cell-free DNA fragmentation hotspots',
    details: 'An approach to characterize cfDNA fragmentation hotspots from whole-genome sequencing data. Useful for early-stage cancer detection and biomarker discovery.',
    tags: ['software'],
    image: '/images/tools/crag.webp',
    links: [
      { label: 'GitHub', href: 'https://github.com/epifluidlab/CRAG' },
      { label: 'Publication', href: 'https://doi.org/10.1186/s13073-022-01141-8' },
    ],
  },
  {
    name: 'Bhmem',
    description: 'Computational tools for Methyl-HiC and NOMe-HiC alignment',
    details: 'Based on the BWA aligner, Bhmem is aware of bisulfite-converted reads and genome. Handles Hi-C reads in bisulfite-converted space for joint epigenomic profiling.',
    tags: ['software'],
    image: '/images/tools/bhmem.webp',
    links: [
      { label: 'Bitbucket', href: 'https://bitbucket.org/dnaase/bisulfitehic/src/master/' },
      { label: 'Publication', href: 'https://doi.org/10.1038/s41592-019-0502-z' },
    ],
  },
  {
    name: 'Bis-SNP',
    description: 'Combined SNP and methylation caller for bisulfite sequencing',
    details: 'A GATK-based package for genotyping and DNA methylation calling in bisulfite-treated sequencing data, including Bisulfite-seq, NOMe-seq, and RRBS.',
    tags: ['software'],
    image: '/images/tools/bissnp.webp',
    links: [
      { label: 'Website', href: 'https://people.csail.mit.edu/dnaase/bissnp2011/' },
    ],
  },
];
