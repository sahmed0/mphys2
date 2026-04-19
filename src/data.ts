export interface Citation {
  id: string;
  author: string;
  year: number;
  title: string;
  journal?: string;
  publisher?: string;
}

export const citations: Citation[] = [
  { id: "lighthill1968", author: "Lighthill, M. J.", year: 1968, title: "Pressure-forcing of tightly fitting pellets along fluid-filled elastic tubes", journal: "Journal of Fluid Mechanics" },
  { id: "rallabandi2021", author: "Rallabandi, B., Eggers, J., Herrada, M. A., & Stone, H. A.", year: 2021, title: "Motion of a tightly fitting axisymmetric object through a lubricated elastic tube", journal: "Journal of Fluid Mechanics" }
];

export const paperData = {
  title: "The scaling laws governing the dynamics of rigid, pressure-driven spheres in narrow, fluid-filled elastic tubes",
  authors: ["Sajid Ahmed"],
  abstract: "This report provides comprehensive evidence for the existence of the intermediate and high-speed scaling laws predicted by Rallabandi et al. (2021).",
  sections: [
    {
      title: "Key Highlights",
      content: "- Validated 2021 theoretical models for elastohydrodynamic scaling.\n- Developed Python scripts for automated high-speed video analysis.\n- Built custom experimental hardware for fluid-structure interaction."
    },
    {
      title: "Introduction",
      content: "This study investigates how oversized objects move through fluid-filled elastic tubes - a physics problem with massive implications for soft robotics, microfluidics, and biology (such as blood flow in capillaries and eggs in the oviduct). \n\n While mathematical models have existed since 1968, this project sought to provide much-needed experimental evidence to confirm the most recent theoretical predictions from Rallabandi et al. (2021)."
    },
    {
      title: "Theoretical Framework",
      content: "The core objective was to mathematically predict and experimentally verify the scaling laws - the specific power-law relationships between the drag force and the speed of an intruder: \n\n$$F \\propto \\begin{cases} V^{1/2} & \\text{low speed} \\\\ V^{2/3} & \\text{intermediate speed} \\\\ V^{4/5} & \\text{high speed} \\end{cases}$$ \n\n These relationships are derived from the construction of an ordinary differential equation that accounts for the lubrication film pressure, hoop stress resistance and axial membrane tension in the elastic tube."
    },
    {
      title: "Methodology",
      content: "We designed and constructed a precision experimental rig using a silicone tube and fluid reservoirs filled with rapeseed oil to simulate elastohydrodynamic conditions.\n - Hardware: An Elveflow OB1 Mk3+ pressure controller was used to apply hydraulic pressure to drive spherical intruders (10mm to 18mm) through the elastic medium. A high-speed camera was used to record the motion of the intruders. \n - Software: Developed a custom Python pipeline to process high-framerate video, extracting ball velocity and performing piecewise linear fits to identify the power law exponents.",
      figures: [
        { title: "Figure 1: Experimental Apparatus", url: "public/apparatus.png" }
      ]
    },
    {
      title: "Results",
      content: "The data confirmed two major theoretical regimes: \n - High-Speed Scaling: Observed in 11mm to 15mm intruders. \n - Intermediate-Speed Scaling: Observed in 18mm intruders. \n - While the 10mm ball showed linear scaling due to minimal tube deformation, the overall data successfully mapped the transition between different physical states as predicted by modern theory",
      figures: [
        { title: "Figure 2: Table of Results", url: "public/table.png" }
      ]
    },
    {
      title: "Discussion",
      content: "These results prove that modern elastohydrodynamic models are accurate predictors for real-world fluid systems. By validating these power laws, this work provides a roadmap for engineers to better predict friction and flow in flexible medical devices and bio-inspired robots. \n\n Sources of systematic errors include the assumptions that pressure drops due to Poiseuille flow are negligible, the largest spheres act like slender intruders, and the Young's modulus of the silicone tubes did not change after oil submersion. \n\n Future work would further refine the bridge between theory and application by conducting tests with non-spherical intruders and different elastic materials, and by using a mechanically driven apparatus to drive the intruders."
    },
    {
      title: "Conclusion",
      content: "This experimental investigation successfully validated modern theoretical predictions regarding the motion of oversized spherical intruders through fluid-filled elastic tubes. \n\n By designing a custom hydraulic apparatus and utilising Python-based motion analysis, the study captured specific power-law scaling relationships between pressure and velocity across various intruder sizes. \n\n These findings provide critical empirical support for the elastohydrodynamic models proposed by Rallabandi et al. (2021), moving beyond classical 1968 theories. \n\n Beyond the theoretical validation, the results have direct implications for diverse fields such as soft robotics, microfluidic medical devices, and biological systems like blood flow in capillaries."
    },
    {
      title: "References",
      content: "- M. J. Lighthill, “Pressure-forcing of tightly fitting pellets along fluid-filled elastic tubes”, Journal of Fluid Mechanics 34, 113 (1968). \n - B. Rallabandi, J. Eggers, M. A. Herrada, and H. A. Stone, “Motion of a tightly fitting axisymmetric object through a lubricated elastic tube”, Journal of Fluid Mechanics 926, A27 (2021)"
    }
  ],
  pdfUrl: "/Report.pdf",
  tooltips: {
    "axisymmetric": "A 3D shape that is symmetrical about one or more of its axes.",
    "elastohydrodynamic": "A type of fluid film lubrication that occurs where very high contact pressure causes elastic deformations of the contacting surfaces.",
    "poiseuille": "The laminar flow of a viscous fluid through a cylindrical pipe."
  },
  authorDetails: [
    {
      name: "Sajid Ahmed",
      bio: "Integrated Master's of Physics (MPhys), The University of Manchester",
      linkedin: "https://www.linkedin.com/in/s-ahmed1"
    }
  ],
  citations
};
