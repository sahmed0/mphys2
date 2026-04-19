export interface Citation {
  id: string;
  author: string;
  year: number;
  title: string;
  journal?: string;
  publisher?: string;
}

export const citations: Citation[] = [
  { id: "rallabandi2021", author: "Rallabandi, B., Eggers, J., Herrada, M. A., & Stone, H. A.", year: 2021, title: "Motion of a tightly fitting axisymmetric object through a lubricated elastic tube", journal: "Journal of Fluid Mechanics" },
  { id: "barakat2018a", author: "Barakat, J. M., & Shaqfeh, E. S. G.", year: 2018, title: "The steady motion of a closely fitting vesicle in a tube", journal: "Journal of Fluid Mechanics" }
];

export const paperData = {
  title: "The scaling laws governing the dynamics of rigid, pressure-driven spheres in narrow, fluid-filled elastic tubes",
  authors: ["Sajid Ahmed"],
  summary: "This report presents a comprehensive analysis of the elastohydrodynamic behaviour of rigid intruders in lubricated elastic tubes. It provides new experimental evidence for the intermediate and high-speed drag force scaling laws predicted by Rallabandi et al. (2021).",
  sections: [
    {
      title: "Key Highlights",
      content: "- New data to validate elastohydrodynamic drag force scaling theory.\n- Developed custom Python scripts for automated high-speed video analysis.\n- Designed and built custom experimental hardware for fluid-structure interaction."
    },
    {
      title: "Introduction",
      content: "This report investigates the elastohydrodynamic problem of a rigid, axisymmetric intruder being driven through a narrow elastic tube filled with a lubricating fluid (Barakat & Shaqfeh, 2018; Rallabandi et al. 2021). Specifically, we examine the power laws relating the propulsive force on the intruder to its velocity. Such a system is ubiquitous in natural and engineered settings, and a rigorous characterisation of its force-velocity relationship is crucial for diverse applications. \n\n The importance of studying this system lies in its similarities to many real-world phenomena, including the motion of red blood cells in capillaries, the movement of eggs in oviducts, soft robotics, and industrial manufacturing processes that rely on material extrusion."
    },
    {
      title: "Theoretical Framework",
      content: "The authors constructed the following ordinary differential equation which accounts for the lubrication film pressure, hoop stress resistance and axial membrane tension in the elastic tube.: \n\n$$\\frac{dh}{dz} - \\frac{6 \\mu V a^{2}}{Eb} \\frac{(h-h^{*})}{h^{3}} + \\frac{d\\delta}{dz} = 0$$ \n\n This equation was solved using perturbative asymptotic analysis and direct numerical simulations - resulting in the following power-law relationships between the drag force and the speed of an intruder: \n\n$$F \\propto \\begin{cases} V^{1/2} & \\text{low speed} \\\\ V^{2/3} & \\text{intermediate speed} \\\\ V^{4/5} & \\text{high speed} \\end{cases}$$ \n\n The objective of this study is to experimentally test these power laws."
    },
    {
      title: "Methodology",
      content: "We designed and constructed a precision experimental rig using a silicone tube and fluid reservoirs filled with rapeseed oil to simulate elastohydrodynamic conditions.\n - Hardware: An Elveflow OB1 Mk3+ pressure controller was used to apply hydraulic pressure to drive spherical intruders (10mm to 18mm) through the elastic medium. We used a high-speed camera to record the intruders' motion. \n - Software: Developed a custom Python pipeline to process high-framerate video, extracting ball velocity and performing piecewise linear fits to identify the power law exponents.",
      figures: [
        { title: "Figure 1: Experimental Apparatus", url: "apparatus.png" }
      ]
    },
    {
      title: "Results",
      content: "The data confirmed two major theoretical regimes: \n - 11mm to 15mm intruders: Observed High-Speed Scaling. \n - 18mm intruder: Observed Intermediate-Speed Scaling. \n - 10mm intruder: Linear scaling, likely too small to create deformation. \n - 12mm intruder: Possibly high-speed scaling but requires further experiments. \n - Low-speed power law was not observed in any of our experiments.",
      figures: [
        { title: "Figure 2: Table of Results", url: "table.png" }
      ]
    },
    {
      title: "Discussion",
      content: "These results prove that modern elastohydrodynamic models are accurate predictors for real-world fluid systems. By validating these power laws, this work provides engineers with a roadmap for predicting friction and flow more accurately in flexible medical devices and bio-inspired robots. \n\n Sources of systematic errors include the assumptions that pressure drops due to Poiseuille flow are negligible, the largest spheres act like slender intruders, and the Young's modulus of the silicone tubes did not change after oil submersion. \n\n Future work would further refine the bridge between theory and application by conducting tests with non-spherical intruders and different elastic materials, and by using a mechanically driven apparatus to drive the intruders."
    },
    {
      title: "Conclusion",
      content: "This experimental investigation successfully validated modern theoretical predictions regarding the motion of oversized spherical intruders through fluid-filled elastic tubes. \n\n By designing a custom hydraulic apparatus and utilising Python-based motion analysis, the study captured specific power-law scaling relationships between pressure and velocity across various intruder sizes. \n\n These findings provide critical empirical support for the elastohydrodynamic models proposed by Rallabandi et al. (2021), moving beyond classical 1968 theories. \n\n Beyond the theoretical validation, the results have direct implications for diverse fields such as soft robotics, microfluidic medical devices, and biological systems like blood flow in capillaries."
    },
    {
      title: "References",
      content: "\n - B. Rallabandi, J. Eggers, M. A. Herrada, and H. A. Stone, “Motion of a tightly fitting axisymmetric object through a lubricated elastic tube”, Journal of Fluid Mechanics 926, A27 (2021) \n - J. M. Barakat and E. S. G. Shaqfeh, “The steady motion of a closely fitting vesicle in a tube”, Journal of Fluid Mechanics 835, 721 (2018)."
    }
  ],
  pdfUrl: "report.pdf",
  tooltips: {
    "axisymmetric": "A 3D shape that is symmetrical about one or more of its axes.",
    "elastohydrodynamic": "A type of fluid film lubrication that occurs where very high contact pressure causes elastic deformations of the contacting surfaces.",
    "poiseuille": "The laminar flow of a viscous fluid through a cylindrical pipe.",
    "fluid-structure interaction": "The study of interactions between fluids (gases & liquids) and solid structures.",
    "ordinary differential equation": "An equation that relates a function to its derivatives.",
    "lubrication film pressure": "The pressure of the fluid film between two surfaces.",
    "hoop stress": "The stress in a direction perpendicular/tangential to the axis of a cylinder.",
    "axial membrane tension": "The longitudinal tension in the membrane of a cylinder.",
    "perturbative asymptotic analysis": "A method of solving differential equations by approximating the solution as a series expansion.",
    "direct numerical simulations": "A method of solving differential equations by numerical integration.",
    "power laws": "A relationship between two quantities where one is proportional to a power of the other.",
    "piecewise linear fits": "A method of fitting a function to data by fitting a series of linear functions to the data.",
    "Young's modulus": "A measure of the stiffness of a material.",
  },
  authorDetails: [
    {
      name: "Sajid Ahmed",
      bio: "Integrated Master's of Physics (MPhys), The University of Manchester",
      website: "https://sajidahmed.co.uk/"
    }
  ],
  citations
};
