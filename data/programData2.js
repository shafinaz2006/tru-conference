export const programData2 = [
  {
    type: 'break',
    time: '8.30 am',
    heading: ['Light Breakfast'],
  },
  {
    type: 'break',
    time: '9.00 am',
    heading: ['Welcome event'],
  },
  {
    type: 'talk',
    time: '9.40 am',
    heading: 'Information-Rich Environments for Population Health Research: Challenges and Opportunities',
    name: 'Lisa Lix (Department of Community Health Sciences, University of Manitoba)',
    abstract: 'Canada\'s health information environment is expanding rapidly to integrate administrative data, electronic medical records, and clinical registries, and to incorporate methods and tools to mine these data. Despite extraordinary opportunities for research aimed at improving the health of populations, there are also significant barriers, including less-than- optimal data qualities, data siloes, and limited analytic training opportunities. As a consequence, the value of these data are not fully realized. This talk will highlight initiatives to improve data fitness for use, expand data collaborations and networks, and build capacity in machine learning and advanced data visualization methods.',
  },
  {
    type: 'talk',
    time: '10.20 am',
    heading: 'Evidence changes beliefs and measuring change in beliefs measures evidence',
    name: 'Micheal Evans (Department of Statistical Sciences, University of Toronto)',
    abstract: 'The concept of statistical evidence is central to the field of statistics. In spite of this, it is reasonable to conclude, based on current debates, that the field has not settled on how to exactly define and measure statistical evidence. There is, however, a fairly simple characterization whenever a prior is incorporated into the analysis. In that context the Bayes factor seems to provide this, but there are still concerns that need to addressed. These issues are discussed together with their resolution. Overall, this necessitates an approach to statistical problems that combines Bayesian and frequentist attributes to provide a logically sound methodology. We achieve, not only a relatively simple characterization of statistical evidence, but a resolution between what can be considered as very different views of statistics and its role in science.',
  },
  {
    type: 'break',
    time: '11.00 am',
    heading: ['Coffee Break', 'Coffee will be provided for everyone.'],
  },
  {
    type: 'talk',
    time: '11.20 am',
    heading: 'An exploration of the relationship between wastewater viral signals and COVID-19 hospitalizations in Ottawa, Canada',
    name: 'Charmaine Dean (Department of Statistics and Actuarial Science, University of Waterloo)',
    abstract: 'Monitoring of viral signal in wastewater is considered a useful tool for monitoring the burden of COVID-19, especially during times of limited availability in testing. Studies have shown that COVID-19 hospitalizations are highly correlated with wastewater viral signals and the increases in wastewater viral signals can provide an early warning for increasing hospital admissions. However, the association between wastewater viral signals and COVID-19 hospitalizations may not be linear or consistent over time. A clear understanding of the time-varying and nonlinear association between wastewater viral signals and COVID-19 hospitalizations is necessary. This project uses a distributed lag nonlinear model (DLNM) (Gasparrini et al., 2010) to study the nonlinear exposure-response delayed association of the COVID-19 hospitalizations and SARS-CoV-2 wastewater viral signals, using data from Ottawa, Ontario, Canada. We consider up to a 15-day time lag from the average of SARS-CoV two gene concentrations and their contribution to COVID-19 hospitalizations. We also included an adjustment for the expected reduction in hospitalization from vaccination efforts. A correlation analysis of the data verifies that COVID-19 hospitalizations are highly correlated with wastewater viral signals with a time-varying relationship. Our analysis with DLNM suggests that the model yields a reasonable estimate of COVID-19 hospitalizations and enhances our understanding of the association between wastewater viral signals and COVID-19 hospitalizations. This paper quantifies the relationship between SARS-CoV gene concentrations and COVID-19 hospitalizations at the population level.'
  },
  {
    type: 'break',
    time: '12.00 pm',
    heading: ['Lunch Break', 'Lunch will be provided for the speakers and volunteers.'],
  },
  {
    type: 'talk',
    time: '1.30 pm',
    heading: 'Pretest and shrinkage estimators in generalized partially linear models with application to real data',
    name: 'Shakhawat Hossain (Department of Mathematics and Statistics, University of Winnipeg)',
    abstract: 'Semiparametric models hold promise to address many challenges to statistical inference that arise from real world applications, but their novelty and theoretical complexity create challenges for estimation. Taking advantage of the broad applicability of semiparametric models, we propose some novel and improved methods to estimate the regression coefficients of generalized partially linear models (GPLM). This model extends the generalized linear model by adding a nonparametric component. Like in parametric models, variable selection is important in the GPLM to single out the inactive covariates for the response. Instead of deleting inactive covariates, our approach uses them as auxiliary information in the estimation procedure. We then define two models, one that includes all the covariates and another that includes the active covariates only. We then combine these two model estimators optimally to form the pretest and shrinkage estimators. Asymptotic properties are studied to derive the asymptotic biases and risks of the proposed estimators. We show that if the shrinkage dimension exceeds two, the asymptotic risks of the shrinkage estimators are strictly less than that of the full model estimators. Extensive Monte Carlo simulation studies are conducted to examine the finite-sample performance of the proposed estimation methods. We then apply our proposed methods to two real data sets. Our simulation and real data results show that the proposed estimators perform with higher accuracy and lower variability in the estimation of regression parameters for GPLM compared to competing estimation methods.',
  },
  {
    type: 'talk',
    time: '2.10 pm',
    heading: 'Feedback mechanisms in epidemic models: Is your population alarmed?',
    name: 'Rob Deardon (Faculty of Veterinary Medicine and Department of Mathematics &amp; Statistics, University of Calgary)',
    abstract: 'The COVID-19 pandemic has illustrated both the utility and limitation of using epidemic models for understanding and forecasting disease spread. One of the many difficulties in modelling epidemic spread is that caused by behavioural change in the underlying population. This can be a major issue in public health since, as we have seen during the COVID-19 pandemic, behaviour in the population can change drastically as infection levels vary, both due to government mandates and personal decisions. Such changes in the underlying population result in major changes in transmission dynamics of the disease, making the modelling challenges. However, these issues arise in agriculture and public health, as changes in farming practice are also often observed as disease prevalence changes. We propose a model formulation where time-varying transmission is captured by the level of alarm in the population and specified as a function of the past epidemic trajectory. The model is set in a data-augmented Bayesian framework as epidemic data are often only partially observed, and we can utilize prior information to help with parameter identifiability. We investigate the estimability of the population alarm across a wide range of scenarios, using both parametric functions and non-parametric Gaussian process and splines. The benefit and utility of the proposed approach is illustrated through an application to COVID-19 data from New York City.',
  },
  {
    type: 'break',
    time: '2.50 am',
    heading: ['Coffee Break', 'Coffee will be provided for everyone.'],
  },
  {
    type: 'talk',
    time: '3.10 pm',
    heading: 'Reducing Residual Confounding Bias in Health Research: Evaluating High-Dimensional Propensity Score Algorithm and Machine Learning Extensions',
    name: 'M. Ehsan Karim (School of Population and Public Health, University of British Columbia)',
    abstract: 'Health research that utilizes administrative health databases may lack complete information on confounding variables. This limitation can lead to bias in treatment effect estimation. The high-dimensional propensity score (hdPS) algorithm has been proposed as a solution to reduce bias by using proxies for unmeasured and mismeasured covariates. However, the hdPS framework involves a large amount of data, and machine learning variable selection methods have been proposed as alternatives. Despite this, accurately estimating variance remains a challenge, even for doubly robust or targeted maximum likelihood estimators. In this study, we evaluate the performances of vanilla hdPS, machine learning alternatives, and doubly robust versions in terms of bias, model-based and empirical variances, and coverage based on updated methodological recommendations. We also present a nationally representative analysis as a motivating example and provide practical recommendations for practitioners.',
  },
  {
    type: 'talk',
    time: '3.50 pm',
    heading: 'Cell annotation using single-cell genomics data',
    name: 'Xuekui Zhang, (Department of Mathematics and Statistics, University of Victoria)',
    abstract: 'Single-cell RNA-sequencing (scRNA-seq) technology enables researchers to investigate a genome at the cellular level with unprecedented resolution. An organism consists of a heterogeneous collection of cell types, each of which plays a distinct role in various biological processes. Hence, the first step of scRNA-seq data analysis is often to distinguish cell types so they can be investigated separately. This talk introduces our recent works in cell type annotation using scRNA-seq data.',
  },
  {
    type: 'talk',
    time: '4.30 pm',
    heading: 'Joint modeling of longitudinal and time-to-event data',
    name: 'Shahedul Khan (Department of Mathematics and Statistics, University of Saskatchewan)',
    abstract: 'In follow-up studies, both fixed and time-dependent covariates are often available along with an observation on the time to an event of interest. A time-dependent covariate can also be internal (generated by the unit under study and measured longitudinally over time) or external (changes its values due to external characteristics). For example, in HIV clinical trials, datasets typically contain not only time to progression to AIDS or death but also information on several covariates such as treatment assignment, demographic information, and physiological characteristics which are recorded at baseline, and CD4 cell counts which are taken at subsequent clinic visits (longitudinal measurements). The study is typically designed not only to explore the effects of the fixed covariates on time-to-event but also to (i) understand within-subject patterns of change of the internal covariate (longitudinal response), and/or (ii) characterize the relationship between features of the internal covariate and time to the occurrence of the event. The complications posed by the realities of the observed data and the potential for biased inferences for both (i) and (ii) if ordinary techniques are applied have led to the development of a new approach, called &quot;joint models&quot; for longitudinal and time-to-event data. The joint modeling approach works in two steps: (a) modeling the internal covariate taking into account measurement error to construct its complete history, and (b) quantifying the effects of the covariates on time-to-event taking into account the history as constructed in (a). Combining the two processes enables us to mutually borrow information from each process and gain efficiency in statistical inference. In this talk, rationale and background of joint modeling will be discussed, and our recent contributions will be presented.',
  }
]