export const programData2 = [
  {
    type: 'break',
    time: '8:30 am',
    heading: ['Light Breakfast', 'Breakfast will be provided to everyone.'],
  },
  {
    type: 'talk',
    time: '9:00 am',
    heading: 'Gaussian Mixture Reduction based on Composite Transportation Divergence',
    name: 'Jiahua Chen, Professor, Department of Statistics, University of British Columbia',
    abstract: 'Gaussian mixtures can closely approximate almost any smooth density function and they are used to simplify downstream inference tasks. As such, it is widely used in applications in density estimation, belief propagation, and Bayesian filtering. In these applications, a finite Gaussian mixture provides an initial approximation to density functions that are updated recursively. A challenge in these recursions is that the order of the Gaussian mixture increases exponentially, and the inference quickly becomes intractable. To overcome the difficulty, Gaussian mixture reduction, which approximates a high order Gaussian mixture by one of a lower order, can be used. Existing methods, such as clustering-based approaches, are renowned for their satisfactory performance and computational efficiency. However, they have unknown convergence and optimal targets. Directly searching for a lower order Gaussian mixture that minimizes some divergence from the original mixture usually involves a challenging optimization problem. We propose a novel optimization-based Gaussian mixture reduction method. We find that a composite transportation divergence is particularly suited to the reduction problem. It facilitates an easy-to-implement and effective majorization-minimization algorithm for its numerical solution. We further establish theoretical convergence under general conditions. We show that many existing clustering-based methods are special cases of ours, thus bridging the gap between optimization-based and clustering-based methods. The unified framework allows users to choose the most suitable cost function to achieve superior performance in their specific application. We validate the efficiency and effectiveness of the proposed method through extensive empirical experiments Based on Thesis of Qiong Zhang'
  },
  {
    type: 'talk',
    time: '9:40 am',
    heading: 'Fast, Distributed Bayesian Inference for Everyone',
    name: 'Alexandre Bouchard-Côté, Professor, Department of Statistics, University of British Columbia',
    abstract: "Bayesian statistics has the potential to be the data scientist's swiss army knife. In areas where the data types and the questions posed are highly varied, Bayes Estimators adapt to the problem at hand. This contrasts with more rigid statistical methodologies where the problem is adapted to the statistical tools. I will describe current work motivated by this vision. One question my group investigate is: how to scale Bayesian inference using distributed architectures? I will describe novel perspectives on this old problem coming from the nascent field of non-reversible Monte Carlo methods. In particular, I will present an adaptive, non-reversible parallel tempering allowing MCMC exploration of challenging problems such as single cell phylogenetic trees.  My group is working on making these advanced Monte Carlo methods easy to use: we have developed Blang, a Bayesian modelling language to perform inference over arbitrary data types using non-reversible, highly parallel algorithms, and Pigeons, a package allowing the user to leverage clusters of 1000s of nodes to speed-up difficult Monte Carlo problems without requiring knowledge of distributed algorithms."
  },
  {
    type: 'talk',
    time: '10:20 am',
    heading: 'Post-selection estimation and prediction strategies in linear mixed models for high-dimensional data application',
    name: 'S. Ejaz Ahmed, Professor, Department of Mathematics and Statistics, Brock University',
    abstract: 'In high-dimensional settings where number of predictors is greater than observations, many penalized methods were introduced for simultaneous variable selection and parameters estimation when the model is sparse. However, a model may have sparse signals as well as with number predictors with weak signals. In this scenario variable selection methods may not distinguish predictors with weak signals and sparse signals. The prediction based on a selected submodel may not be preferable in such cases. For this reason, we propose a high-dimensional shrinkage strategy to improve the prediction performance of a submodel in linear mixed effect models. Such a high-dimensional shrinkage estimator (HDSE) is constructed by shrinking a ridge estimator in the direction of a candidate submodel. We demonstrate that the proposed HDSE performs uniformly better than the ridge estimator. Interestingly, it improves the prediction performance of given submodel generated from most existing variable selection methods. The relative performance of the proposed HDSE strategy is appraised by both simulation studies and the real data analysis.  The methodology is demonstrated on a longitudinal resting-state functional magnetic resonance imaging (rs-fMRI) effective brain connectivity network and genetic data.  Some open research problems will be discussed, as well.'
  },
  {
    type: 'break',
    time: '11:00 am',
    heading: ['Coffee Break', 'Coffee will be provided to everyone.'],
  },
  {
    type: 'talk',
    time: '11:20 am',
    heading: 'Graphical proportional hazards models with measurement error',
    name: 'Grace Y. Yi, Professor and Canada Research Chair in Data Science (Tier 1), Department of Statistical and Actuarial Sciences, University of Western Ontario',
    abstract: 'In survival data analysis, the Cox proportional hazards (PH) model is perhaps the most widely used model to feature the dependence of survival times on covariates. While many inference methods have been developed under such a model or its variants, those models are not adequate for handling data with complex structured covariates. High-dimensional survival data often entail several features: (1) many covariates are inactive in explaining the survival information, (2) active covariates are associated in a network structure, and (3) some covariates are error-contaminated. To handle such survival data, we propose graphical PH measurement error models and develop inferential procedures for the parameters of interest. Our proposed models significantly enlarge the scope of the usual Cox PH model and have great flexibility in characterizing survival data. Theoretical results are established to justify the proposed methods. Numerical studies are conducted to assess the performance of the proposed methods.'
  },
  {
    type: 'break',
    time: '12:00 noon',
    heading: ['Lunch Break', 'Lunch will be provided to the invited speakers and volunteers.'],
  },
  {
    type: 'talk',
    time: '1:30 pm',
    heading: 'Rank-based support vector machines for highly imbalance data using nominated samples',
    name: 'Mohammad Jafari Jozani, Professor, Department of Statistics, University of Manitoba',
    abstract: 'We propose a novel approach to address the issue of highly imbalanced binary classification problems using rank information. Our approach utilizes a maxima nominated sampling technique that biases the training sample towards the minority class by using observations with the highest chance of being from the minority class in a small sample of randomly selected units from the underlying population. This sampling technique is based on expert opinion, which has received minimal attention in the machine learning community so far. To incorporate the extra rank information of maxima nominated samples (MaxNS) into the learning process, we introduce novel rank-based Hinge and Logistic loss functions that account for the extra rank information in MaxNS training data sets. We develop MaxNS Support Vector Machines and provide efficient algorithms for solving the proposed learning problems. Numerical studies are performed to validate the efficacy of the methods presented.'
  },
  {
    type: 'talk',
    time: '2:10 pm',
    heading: 'A novel machine learning approach for gene module identification and prediction via a co-expression network of single-cell sequencing data',
    name: 'Li Xing, Assistant Professor, Department of Mathematics and Statistics, University of Saskatchewan',
    abstract: 'Gene co-expression network analysis is widely used in microarray and RNA sequencing data analysis. It groups genes based on their co-expression network. And genes within a group infer similarity in function or coregulation in the pathway. In literature, the approaches to group genes are mainly unsupervised, which may introduce instability and variation across different datasets. Inspired by ensemble learning, we propose a novel approach that ensemble supervised and unsupervised learning techniques and simultaneously works on two tasks, gene module identification and phenotype prediction, during the data analysis process. The identified gene modules from this approach could suggest more candidate genes to the original pathway, and those genes are potential biomarkers for pathway-related diseases. In addition, the novel approach also improves the prediction accuracy for phenotypes. The algorithm can be used as a general prediction algorithm. And, as it is specially designed to handle large samples, it is suitable for handling single-cell data with many cells. We showcased the use of the algorithm in single-cell cell-type auto-annotation'
  },
  {
    type: 'break',
    time: '2:50 pm',
    heading: ['Coffee Break', 'Coffee will be provided to everyone.'],
  },
  {
    type: 'talk',
    time: '3:10 pm',
    heading: 'The scalable birth-death MCMC algorithm for mixed graphical model learning with application to genomic data integrations',
    name: 'Nanwei Wang, Assistant Professor, Department of Mathematics and Statistics, University of New Brunswick',
    abstract: 'Recent advances in biological research have seen the emergence of high-throughput technologies with numerous applications. In cancer research, the challenge is now to perform integrative analyses of high-dimensional multi-omic data with the goal to better understand genomic processes that correlate with cancer outcomes. We propose here a novel mixed graphical model approach to analyze multi-omic data of different types (continuous, discrete and count) and perform model selection by extending the Birth-Death MCMC (BDMCMC) algorithm. We compare the performance of our method to the LASSO and the standard BDMCMC methods using simulations and found that our method is superior in terms of both computational efficiency and the accuracy of the model selection results. Finally, an application to the TCGA breast cancer data shows that integrating genomic information at different levels (mutation and expression data) leads to better subtyping of breast cancers.'
  },
  {
    type: 'talk',
    time: '3:50 pm',
    heading: 'Nonparametric high-dimensional multi-sample tests based on graph theory.',
    name: 'Xiaping Shi, Assistant Professor, Department of Computer Science, Mathematics, Physics and Statistics, UBCO',
    abstract: 'High-dimensional data pose unique challenges for data processing in an era of ever-increasing amounts of data availability. Graph theory can provide a structure of high-dimensional data. We introduce two key properties desirable for graphs in testing homogeneity. Roughly speaking, these properties may be described as: unboundedness of edge counts under the same distribution and boundedness of edge counts under different distributions. It turns out that the minimum spanning tree violates these properties but the shortest Hamiltonian path posses them.    Based on the shortest Hamiltonian path, we propose two combinations of edge counts in multiple samples to test the homogeneity. We give the permutation null distributions of proposed statistics when sample sizes go to infinity. The power is analyzed by assuming both sample sizes and dimensionality tend to infinity. Simulations show that our new tests behave very well overall in comparison with various competitors. Real data analysis of tumors and images further convince the value of our proposed tests. Software implementing the test is available in the R package GRelevance.'
  },
  {
    type: 'talk',
    time: '4:30 pm',
    heading: 'Cell annotation using single-cell genomics data',
    name: 'Xuekui Zhang, Associate Professor, Department of Mathematics and Statistics, University of Victoria',
    abstract: 'Single-cell RNA-sequencing (scRNA-seq) technology enables researchers to investigate a genome at the cellular level with unprecedented resolution. An organism consists of a heterogeneous collection of cell types, each of which plays a distinct role in various biological processes. Hence, the first step of scRNA-seq data analysis is often to distinguish cell types so they can be investigated separately. This talk introduces our recent works in cell type annotation using scRNA-seq data.',
  },
]