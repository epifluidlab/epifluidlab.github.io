---
title: Research
nav:
  order: 1
  tooltip: Published works
---

# <i class="fas fa-microscope"></i>Research

Our long-term research interest is to decode the human genome. The recent research focus of my lab is on developing and applying computational and high-throughput experimental methods in epigenomics to understand the gene regulatory roles of non-coding genetic variants in different pathological conditions, including cancers and neurodegenerative diseases. Specifically, we focused on the computational method development for circulating cell-free DNA fragmentation and new biotechnology development for the joint profiling of multi-omics within the same single cells, which will eventually enable biomarker discovery for the early diagnosis and prognosis of many complex diseases.

# <i class="fas fa-microscope"></i>Current Projects

## Non-invasive monitor the <em>in vivo</em> epigenomes by circulating cell-free DNA
Circulating cell-free DNA (cfDNA) is released into the peripheral blood after cellular death and recycled every few mins up to 12 hours. The collection of cfDNA fragments represents a real-time <em>in vivo</em> snapshot of the genome from cells that contribute to cfDNA. CfDNA is not randomly fragmented into small pieces and recently associated with the cellular epigenomes, suggesting the possibility of computationally inferring the cellular epigenomes from cfDNA fragmentation. However, the computational tools are still not available to comprehensively infer the cellular epigenomes from cfDNA whole-genome sequencing (WGS). Millions of low-coverage and high-coverage cfDNA WGS are generated every year. Given the potential to leverage these cfDNA WGS datasets to advance the understanding of the epigenomes and thus the function of non-coding regulatory elements, we are developing a set of computational methods to reconstruct the multi-dimensional epigenomes from a single cfDNA WGS.


{%
  include figure.html
  image="images/cfdna_epi.png"
  caption="Utilize cfDNA fragmentation pattern and AI to monitor the gene regulation within the cells during the disease initiation and progression."
  width="1000px"
%}

## Develop methods to jointly profile multi-omics in the same single cells
Epigenetic modifications, including DNA methylation, histone modifications, and three-dimensional (3D) genome topology, combine with genetic content to determine the mammalian transcriptional factor (TF) binding and, thus, gene regulation. Gene activation or repression potential, however, cannot be entirely predicted by looking at a single molecular measurement. Accurate predictive models require multiple molecular measurements simultaneously. At present, we are limited by the number of simultaneous measurements that we can perform in a single cell. In addition, the interactions between different epigenetic marks and their effects on gene expression are currently studied either in homogenous cultured cells or bulk tissues that average the readout. The study of interactions between different cell-type-specific epigenetic marks and gene expression in heterogeneous tissues at the single cell level is still in its infancy. We and others developed several technologies to simultaneously capture multiple molecular measurements in the same assay or single-cells. We continue to develope more high-throughput mutli-omic technologies to comprehensively dissect the regulatory roles of the non-coding regulatory elements in the genome.


{%
  include figure.html
  image="images/singlecell_multi.png"
  caption="Develop single-cell multi-omics technologies to understand gene regulation"
  width="800px"
%}

## Epigenomics in liquid biopsy for the early diagnosis and prognosis of diseases
Routine screening in the average-risk population provides the opportunity to detect cancer early and significantly reduce morbidity and mortality in cancer. Early identification of lethal cancer versus non-lethal diseases will minimize overdiagnosis. Both medical needs require non-invasive biomarkers with ultra-high specificity (>99%) and high sensitivity at the same time, which, however, are still not available in the clinic. Recent advances in circulating cell-free DNA (cfDNA) suggested a promising non-invasive approach for cancer diagnosis and prognosis by using the tumor-specific genetic and epigenetic alterations. However, there is still a huge gap to limit its clinical application for cancer screening. We are utilizing the epigenomic signals from circulating cfDNA for the early diagnosis and prognosis of cancers. Moreover, we are expanding the studies in cancer to many other complex diseases.


{%
  include figure.html
  image="images/diagnosis.png"
  caption="Epigenomics in liquid biopsy for disease diagnosis"
  width="500px"
%}


# Funding

Our work is currently (and was previously) supported by **NIH** (R35GM147283, R56HG012360), **NSF** (ACCESS and XSEDE Resource Allocation Service), **Bill & Melinda Gates Foundation** (MOMI Ideas Award), and **Northwestern University** (Yaping Liu's start-up).
