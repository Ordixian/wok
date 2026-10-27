export const siteContent = {
  brand: {
    name: "ASK Geospatial",
    tagline: "Registered Surveyors & Geo‑Information Consultants",
    address: "Km 42, Lekki‑Epe Expressway, Beside Keewas Hotel, Ayeteju Bus Stop, Ibeju‑Lekki, Lagos, Nigeria",
    phonePrimary: "+234 806 123 5341",
    phoneSecondary: "+234 808 292 9915",
    whatsappLink: "https://wa.me/2348061235341",
    email: "info@askgeospatial.com",
    logoLight: "/images/logo-light.svg",
    logoDark: "/images/logo-dark.svg",
    logoMark: "/images/logo-mark.svg"
  },
  principal: {
    name: "Surv. A.S. Adeyemi, B.Tech, M.Sc. (Lagos)",
    credentials: {
      surcon: true, // placeholder – actual registration number to confirm
      nis: true
    }
  },
  services: [
    {
      id: "land",
      title: "Land Surveying",
      description: "Boundary, cadastral, topographic, GNSS control and as‑built surveys for accurate land‑information.",
      items: [
        "Cadastral & Boundary Surveys",
        "Topographic Mapping & Contours",
        "GNSS / RTK Control Points",
        "As‑Built Surveys"
      ]
    },
    {
      id: "realestate",
      title: "Real Estate Surveying",
      description: "Land verification, C of O preparation, subdivision layouts and property‑boundary dispute resolution.",
      items: [
        "Land Verification & Charting",
        "C of O & Governor’s Consent Plans",
        "Subdivision & Layout Surveys",
        "Boundary Dispute Resolution"
      ]
    },
    {
      id: "consultancy",
      title: "Real Estate General Consultancy",
      description: "Due‑diligence, zoning, land‑use advisory and liaison with Lagos State Lands Bureau.",
      items: [
        "Title Due Diligence",
        "Zoning & Land‑Use Advisory",
        "Survey Plan Interpretation",
        "Land Registry Liaison"
      ]
    },
    {
      id: "engineering",
      title: "Engineering Surveys",
      description: "Construction setting‑out, deformation monitoring, road & pipeline routing and infrastructure alignment.",
      items: [
        "Construction Setting‑Out",
        "Deformation & QA/QC Monitoring",
        "Road & Pipeline Route Surveys",
        "Infrastructure Alignment"
      ]
    },
    {
      id: "gis",
      title: "GIS & Geospatial Services",
      description: "Spatial analysis, UAV/drone photogrammetry, LiDAR and GIS data delivery.",
      items: [
        "GIS Mapping & Spatial Analysis",
        "UAV/Drones – Orthophotos, DSM, 3D point clouds",
        "LiDAR Surveys",
        "Geodatabase Design & Delivery"
      ]
    }
  ],
  contact: {
    placeholderMessage: "I would like to request a survey quote for …",
    submitButton: "Request a Quote",
    honeypotField: "website" // invisible field for spam protection
  },
  seo: {
    title: "ASK Geospatial – Land Surveyors & Geo‑Information Consultants in Lagos",
    description: "Professional land, real‑estate and engineering surveying services in Ibeju‑Lekki, Lagos. SURCON‑registered, fast quotes, on‑site expertise.",
    ogImage: "/images/og-image.jpg"
  }
};
