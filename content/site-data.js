/* =====================================================================
   SITE CONTENT — this is the ONLY file you need to edit.
   ---------------------------------------------------------------------
   Rules for editing:
   • Keep the quotes "..." around text, and a comma after each item.
   • To add a person / project / paper / news item: copy an existing
     { ... } block, paste it below, and change the details.
   • Photos: upload the image to  assets/img/people/  and put its file
     name in  photo: "name.jpg".  Leave photo: "" to show initials.
   • After editing on GitHub, click "Commit changes". The site updates
     in 1–2 minutes.
   ===================================================================== */

const SITE = {

  /* ---------- Lab identity (change the name here only) ---------- */
  labName: "Dilhara Computational and Applied Math Lab",
  shortName: "DiCAM Lab",   // abbreviation shown in the top bar and browser tab
  tagline: "Mathematical Modeling & Computational Science",
  department: "Department of Mathematics & Statistics",
  university: "Northern Kentucky University",
  email: "wickramasc1@nku.edu",
  location: "Highland Heights, Kentucky",

  /* ---------- Home page ---------- */
  welcome:
    "We are an undergraduate research group at Northern Kentucky University. " +
    "We build mathematical and computational models to understand real-world " +
    "problems, from how brain tumors grow to how solutions behave in thin " +
    "boundary layers, and we combine classical numerical analysis with " +
    "modern scientific machine learning.",

  /* ---------- Research areas (shown on Home and Research pages) ---------- */
  areas: [
    {
      title: "Mathematical Oncology",
      icon: "brain",
      text: "Reaction–diffusion models of brain tumor (glioma) growth, invasion, and response to treatment."
    },
    {
      title: "Singularly Perturbed Problems",
      icon: "layer",
      text: "Convection–reaction–diffusion equations with small parameters, boundary layers, and robust numerical methods."
    },
    {
      title: "Scientific Machine Learning",
      icon: "network",
      text: "Physics-informed neural networks (PINNs) that combine data with the governing differential equations."
    },
    {
      title: "Applications",
      icon: "spark",
      text: "Applying these tools to problems in biology, medicine, engineering, and the physical sciences."
    }
  ],

  /* ---------- Current projects (Research page) ---------- */
  projects: [
    {
      icon: "brain",
      title: "Modeling Brain Tumor Growth with Reaction–Diffusion Equations",
      status: "Active",
      image: "",   // optional: put a figure in assets/img/ and write its file name here
      summary:
        "We use reaction–diffusion partial differential equations to model how glioma cells " +
        "proliferate and spread through brain tissue, and explore how model parameters affect " +
        "tumor growth and treatment outcomes.",
      team: ["Student Name 1", "Student Name 2"]
    },
    {
      icon: "layer",
      title: "Numerical Methods for Singularly Perturbed Convection–Reaction–Diffusion Problems",
      status: "Active",
      image: "",
      summary:
        "When diffusion is very small, solutions develop sharp boundary layers that standard " +
        "methods fail to capture. We design and test numerical schemes that stay accurate " +
        "regardless of the size of the perturbation parameter.",
      team: ["Student Name 3", "Student Name 4"]
    },
    {
      icon: "network",
      title: "Physics-Informed Neural Networks for Differential Equations",
      status: "Active",
      image: "",
      summary:
        "We train neural networks that respect the underlying physics by building the " +
        "differential equation into the loss function, and compare their accuracy with " +
        "classical numerical methods.",
      team: ["Student Name 5", "Student Name 6"]
    }
    /* Past projects from earlier positions: copy this block, remove the // marks, and fill in.
    ,{
      icon: "spark",
      title: "Title of an earlier undergraduate project",
      status: "Completed",
      institution: "Previous University, 2023",
      image: "",
      summary: "Two or three sentences about the project and its outcome.",
      team: ["Former Student A", "Former Student B"]
    }
    */
  ],

  /* ---------- People (Team page) ---------- */
  pi: {
    name: "Dr. Dilhara Wickramasinghe",
    role: "Principal Investigator · Assistant Professor of Mathematics",
    photo: "",
    bio:
      "I am an applied mathematician and educator. My research focuses on numerical analysis, differential equations, scientific computing, and physics-informed neural networks (PINNs),
       with applications in physics, engineering, finance, medicine, and artificial intelligence. My current research work reflects an interplay of mathematical modeling and pharmacology. 
       This includes physiologically based pharmacokinetic (PBPK) modeling of brain cancers, population pharmacokinetic analysis, and metabolic flux analysis. 
       I also develop interactive web applications using R Shiny and Python Shiny to make our novel brain models accessible to a broad audience of researchers, clinicians, and students. 
       In addition, I am interested in using physics-informed neural networks to solve singularly perturbed convection–reaction–diffusion problems."  
    links: [
      { label: "Email", url: "mailto:wickramasc1@nku.edu" },
      { label: "Google Scholar", url: "#" },
      { label: "CV", url: "#" }
    ]
  },

  students: [
    { name: "Student Name 1", major: "Mathematics", year: "Junior",    photo: "", project: "Brain Tumor Modeling",            bio: "One or two sentences written or approved by the student." },
    { name: "Student Name 2", major: "Mathematics", year: "Senior",    photo: "", project: "Brain Tumor Modeling",            bio: "One or two sentences written or approved by the student." },
    { name: "Student Name 3", major: "Mathematics", year: "Junior",    photo: "", project: "Singularly Perturbed Problems",   bio: "One or two sentences written or approved by the student." },
    { name: "Student Name 4", major: "Mathematics", year: "Sophomore", photo: "", project: "Singularly Perturbed Problems",   bio: "One or two sentences written or approved by the student." },
    { name: "Student Name 5", major: "Data Science", year: "Senior",   photo: "", project: "Physics-Informed Neural Networks", bio: "One or two sentences written or approved by the student." },
    { name: "Student Name 6", major: "Computer Science", year: "Junior", photo: "", project: "Physics-Informed Neural Networks", bio: "One or two sentences written or approved by the student." }
  ],

  /* Former members: add people here when they graduate */
  alumni: [
    // { name: "Former Student", years: "2026–2028", now: "PhD student, University X" }
  ],

  /* ---------- Publications & presentations ---------- */
  publications: [
    // { year: 2027, type: "Paper",  authors: "A. Student, B. Student, D. [Last Name]", title: "Paper title", venue: "Journal name", link: "" }
  ],
  presentations: [
    { year: 2027, authors: "Student Name 1, Student Name 2", title: "Example: Modeling glioma growth with reaction–diffusion equations (poster)", venue: "NKU Celebration of Student Research and Creativity", link: "" }
  ],

  /* ---------- News (newest first) ---------- */
  news: [
    { date: "Fall 2026", text: "The Dilhara Computational and Applied Math Lab (DiCAM Lab) is launched at Northern Kentucky University with six undergraduate researchers working on three projects!" },
    { date: "Fall 2026", text: "Welcome to our new website. Check back for updates on our research." }
  ],

  /* ---------- Join Us page ---------- */
  join: {
    intro:
      "We welcome motivated NKU undergraduates who enjoy mathematics, coding, or applications " +
      "of math to science and medicine. No prior research experience is needed.",
    lookingFor: [
      "Completion of Calculus II (Differential Equations is a plus)",
      "Interest in programming (Python or MATLAB), or willingness to learn",
      "About 6–10 hours per week during the semester",
      "Curiosity, persistence, and good communication"
    ],
    youGet: [
      "Hands-on experience with real research problems",
      "Mentoring and a supportive research community",
      "Opportunities to present at conferences and co-author papers",
      "Strong preparation for graduate school and industry careers"
    ],
    applyText: "Email Dr. Dilhara with your name, major, year, relevant courses, and a few sentences about why you are interested.",
    applyLink: "mailto:wickramasc1@nku.edu?subject=Interest%20in%20joining%20the%20DiCAM%20Lab"
  }
};
