"use client";

import React, { useState } from "react";

const DATA = {
  brand: {
    name: "ASK Geospatial Strategies Limited",
    shortName: "ASK Geospatial",
    tagline: "Precision Land Surveying & Geo-Information",
    missionQuote:
      "We remain committed to accuracy, integrity, and excellence in every survey — fresh control points, clean measurements, and everything closes clean.",
    principal: "Surv. A.S. Adeyemi, B.Tech, M.Sc. (Lagos)",
    address:
      "Km 42 Lekki-Epe Expressway, Beside Keewas Hotel, Ayeteju Bus Stop, Ibeju-Lekki, Lagos.",
    phones: ["+234 806 123 5341", "+234 808 292 9915"],
    whatsappNumber: "2348061235341",
  },
  credentials: [
    {
      title: "SURCON Registered",
      desc: "Licensed Surveyors Council of Nigeria practice",
      icon: (
        <svg className="h-6 w-6 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "NIS Corporate Member",
      desc: "Nigerian Institution of Surveyors institutional affiliate",
      icon: (
        <svg className="h-6 w-6 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Principal Leadership",
      desc: "Surv. A.S. Adeyemi, B.Tech, M.Sc. (Lagos)",
      icon: (
        <svg className="h-6 w-6 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Ibeju-Lekki Base",
      desc: "Km 42 Lekki-Epe Expressway on-site mobilization",
      icon: (
        <svg className="h-6 w-6 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ],
  services: [
    {
      id: "01",
      title: "Cadastral & Boundary Surveying",
      featured: false,
      badge: "Legal Protection",
      description:
        "Accurate boundary beacons and court-admissible survey plans for land purchase, property titling, and Governor's Consent lodgement.",
      items: [
        "Property Beacon Fixation & Retracement",
        "Record Copy / Red Copy Lodgement",
        "C of O & Governor's Consent Survey Plans",
        "Subdivision & Estate Layout Charting",
      ],
      icon: (
        <svg className="h-7 w-7 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Land Verification & Charting",
      featured: true,
      badge: "High-Risk Prevention",
      description:
        "Crucial due diligence across the Lekki-Epe corridor. We verify whether your intended land parcel falls under committed government acquisition or approved excision.",
      items: [
        "Lagos State Lands Bureau Charting",
        "Excision & Gazette Status Verification",
        "Boundary Dispute & Encroachment Audits",
        "Immediate On-Site Coordinate Validation",
      ],
      icon: (
        <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Engineering & Construction Setting-Out",
      featured: false,
      badge: "Structural Alignment",
      description:
        "Sub-millimeter alignment for civil infrastructure, high-rise piling, column positions, drainage slopes, and industrial facility foundations.",
      items: [
        "Building Foundation & Pile Layouts",
        "Road, Bridge & Drainage Alignments",
        "Structural QA/QC Deformation Monitoring",
        "As-Built Engineering Deliverables",
      ],
      icon: (
        <svg className="h-7 w-7 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "Topographic & Contour Surveys",
      featured: false,
      badge: "Site Planning",
      description:
        "Detailed surface height models and contour mapping essential for architects, civil engineers, flood prevention, and cut-and-fill calculations.",
      items: [
        "Spot Heights & Digital Elevation Models",
        "Floodplain & Drainage Path Analysis",
        "Earthwork & Cut/Fill Volumetric Reports",
        "AutoCAD 3D Surface Integration",
      ],
      icon: (
        <svg className="h-7 w-7 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "05",
      title: "GIS & UAV Drone Photogrammetry",
      featured: false,
      badge: "High-Altitude Mapping",
      description:
        "Rapid, large-scale spatial intelligence for estates, agricultural tracts, and infrastructure corridors using high-resolution orthophotos and 3D point clouds.",
      items: [
        "High-Resolution Aerial Orthomosaics",
        "LiDAR & 3D Point Cloud Modeling",
        "Geodatabase Creation & Cadastral GIS",
        "Large-Tract Plantation & Route Surveys",
      ],
      icon: (
        <svg className="h-7 w-7 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      id: "06",
      title: "Real Estate Title & Advisory Consultancy",
      featured: false,
      badge: "Statutory Guidance",
      description:
        "Professional technical liaison with the Lagos State Lands Bureau, providing advisory on land regularisation, Governor's consent, and titling processes.",
      items: [
        "Survey Plan Authenticity Verification",
        "Land Titling Regularisation Liaison",
        "Estate Master Plan Boundary Advisory",
        "Technical Arbitration for Land Disputes",
      ],
      icon: (
        <svg className="h-7 w-7 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Reconnaissance & Control Fix",
      desc: "Our team reviews existing charting records and establishes verified geodetic control points on-site.",
    },
    {
      step: "02",
      title: "High-Precision Site Capture",
      desc: "Observations using calibrated optical Total Stations, dual-frequency RTK GNSS, and drone equipment.",
    },
    {
      step: "03",
      title: "Rigorous CAD/GIS Computation",
      desc: "Strict coordinate transformation, error balancing, and mathematical traverse closure verification.",
    },
    {
      step: "04",
      title: "SURCON Seal & Plan Delivery",
      desc: "Certified survey plans, official Red Copy record lodgement, and digital CAD (.DWG) handover.",
    },
  ],
  projects: [
    {
      title: "Ibeju-Lekki Residential Boundary Survey",
      category: "Cadastral Survey",
      location: "Ayeteju, Lekki-Epe Corridor",
      desc: "Comprehensive 4-plot boundary survey and Red Copy record lodgement for private developer titling.",
      placeholderType: "SITE_VIEW",
    },
    {
      title: "Commercial Logistics Setting-Out",
      category: "Engineering Survey",
      location: "Near Lekki Free Trade Zone",
      desc: "High-precision foundation pile layout and structural column alignment for an industrial facility.",
      placeholderType: "EQUIPMENT_FIELD",
    },
    {
      title: "50-Hectare Topographic & Contour Model",
      category: "Topographical Survey",
      location: "Epe Suburb, Lagos",
      desc: "Digital elevation modeling, cut-and-fill analysis, and drainage contour map for an agricultural hub.",
      placeholderType: "FIELD_CREW",
    },
  ],
  faqs: [
    {
      q: "What is a 'Red Copy' survey plan, and why is it essential?",
      a: "A Red Copy (Record Copy) is the official duplicate of your survey plan lodged directly at the office of the Surveyor General of Lagos State. It serves as permanent government-recognized evidence that your land boundary has been surveyed, beaconed, and indexed, safeguarding you against future disputes or unauthorized encroachment.",
    },
    {
      q: "How do I know if land in Ibeju-Lekki is free from government acquisition?",
      a: "Before payment, the exact geographic coordinates (Northings and Eastings) of the parcel must be charted against the Lagos State composite acquisition and excision records. ASK Geospatial conducts rapid charting to confirm whether the land falls within an approved excision, gazette, or committed government acquisition.",
    },
    {
      q: "What instruments do you deploy to my site?",
      a: "We deploy industrial-grade dual-frequency RTK GNSS receivers for satellite positioning, high-precision optical Total Stations for boundary angles and distances, and UAV drones for large-area aerial topographic mapping.",
    },
    {
      q: "How fast can an ASK Geospatial survey crew mobilise to my site?",
      a: "Because our primary office is stationed directly at Km 42 Lekki-Epe Expressway (Ayeteju Bus Stop), our crews can mobilise to sites across Ibeju-Lekki, Eleko, Epe, and surrounding corridors within 24 to 48 hours of instruction.",
    },
  ],
};

function VisualPlaceholder({
  label,
  subtext,
  height = "h-64",
  className = "",
}: {
  label: string;
  subtext: string;
  height?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center ${height} ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
        <svg
          className="h-6 w-6 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <span className="mt-3 text-sm font-bold text-slate-800">{label}</span>
      <span className="mt-1 max-w-xs text-xs text-slate-500">{subtext}</span>
    </div>
  );
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello ASK Geospatial Strategies Ltd,\n\nI would like to request a survey quote:\n• Name: ${formState.name || "N/A"}\n• Phone: ${formState.phone || "N/A"}\n• Service: ${formState.service || "General Inquiry"}\n• Location: ${formState.location || "Lagos / Ibeju-Lekki"}\n• Notes: ${formState.message || "Please contact me."}`
    );
    window.open(
      `https://wa.me/${DATA.brand.whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#E30613] selection:text-white pb-20 md:pb-0">
      {/* 1. TOP UTILITY BAR (Clear White Text on Solid Charcoal) */}
      <div className="hidden border-b border-slate-800 bg-[#0F172A] text-sm text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E30613]" />
              <span className="text-slate-300">Head Office:</span>
              <span className="font-semibold">{DATA.brand.address}</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">Hotlines:</span>
              <a
                href="tel:+2348061235341"
                className="font-bold hover:text-[#E30613]"
              >
                {DATA.brand.phones[0]}
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="tel:+2348082929915"
                className="font-bold hover:text-[#E30613]"
              >
                {DATA.brand.phones[1]}
              </a>
            </div>
            <a
              href={`https://wa.me/${DATA.brand.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white hover:bg-emerald-500"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER (Crisp SVG Brand Lockup without dark box) */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 p-2 shadow-sm">
              <svg viewBox="0 0 36 36" className="h-full w-full" fill="none">
                <path
                  d="M10 6L18 14L10 22L2 14L10 6Z"
                  stroke="#E30613"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 14L28 22L20 30L12 22L20 14Z"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <span className="block text-base font-black tracking-tight text-slate-950 sm:text-lg leading-tight">
                ASK GEOSPATIAL
              </span>
              <span className="block text-[10px] font-bold tracking-widest text-[#E30613] uppercase">
                STRATEGIES LIMITED
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-base font-semibold text-slate-700 md:flex">
            <a href="#services" className="transition hover:text-[#E30613]">
              Services
            </a>
            <a href="#workflow" className="transition hover:text-[#E30613]">
              Our Process
            </a>
            <a href="#people" className="transition hover:text-[#E30613]">
              Team & Equipment
            </a>
            <a href="#projects" className="transition hover:text-[#E30613]">
              Projects
            </a>
            <a href="#faq" className="transition hover:text-[#E30613]">
              FAQ
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-[#E30613] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#b8000a]"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* 3. HERO SECTION (Real Survey Field Photography Focus — No Dark Dashboard) */}
      <section className="relative border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-bold text-[#E30613] ring-1 ring-red-200">
                SURCON Registered • Lagos State
              </span>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                Precision Land Surveying &{" "}
                <span className="text-[#E30613]">Geo-Information</span> in Lagos
              </h1>

              <p className="mt-6 text-lg font-normal leading-relaxed text-slate-700 sm:text-xl">
                From boundary retracement and certified C of O survey plans to
                civil engineering setting-out. We give landowners, developers,
                and corporate institutions verified mathematical certainty on
                the ground.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#E30613] px-8 py-4 text-base font-bold text-white shadow-md shadow-[#E30613]/25 transition hover:bg-[#b8000a]"
                >
                  Request a Site Survey
                </a>
                <a
                  href={`https://wa.me/${DATA.brand.whatsappNumber}?text=Hello%20ASK%20Geospatial,%20I%20need%20to%20verify%20a%20land%20survey%20plan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-7 py-3.5 text-base font-bold text-slate-800 transition hover:border-[#E30613] hover:text-[#E30613]"
                >
                  <span>Verify Land Coordinates</span>
                  <span className="text-emerald-600 font-extrabold">→</span>
                </a>
              </div>

              {/* Corridor Highlights */}
              <div className="mt-10 border-t border-slate-200 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Daily Mobilisation Along:
                </span>
                <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
                  <span className="rounded-md bg-slate-100 px-3 py-1">
                    Ibeju-Lekki
                  </span>
                  <span className="rounded-md bg-slate-100 px-3 py-1">
                    Lekki-Epe Expressway
                  </span>
                  <span className="rounded-md bg-slate-100 px-3 py-1">Epe</span>
                  <span className="rounded-md bg-slate-100 px-3 py-1">
                    Lekki Free Zone
                  </span>
                  <span className="rounded-md bg-slate-100 px-3 py-1">
                    Greater Lagos
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (Large Photographic Focus) */}
            <div className="relative lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
                <VisualPlaceholder
                  label="PHOTO: Survey Crew On-Site with Total Station"
                  subtext="Suggested: Authentic photograph of ASK field surveyors in high-vis vests and white hard hats setting up a tripod along the Lekki-Epe corridor."
                  height="h-96 md:h-[460px]"
                  className="bg-slate-100"
                />
              </div>

              {/* Floating Confidence Badge */}
              <div className="relative z-10 -mt-8 mx-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:mx-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 font-black">
                    ✓
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-slate-900">
                      Court-Admissible Deliverables
                    </span>
                    <span className="block text-xs text-slate-500">
                      SURCON sealed & registered with Lagos State Lands Bureau
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPACIOUS TRUST & ACCREDITATION STRIP */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DATA.credentials.map((cred) => (
              <div
                key={cred.title}
                className="flex items-start gap-4 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200/60"
              >
                <div className="shrink-0 rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-slate-200">
                  {cred.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">
                    {cred.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{cred.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION (Differentiation, Larger Text, Custom Icons) */}
      <section id="services" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Surveying & Geospatial Services
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Every service is executed under the strict statutory supervision
              of a SURCON-licensed surveyor, ensuring zero legal ambiguities for
              your property.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DATA.services.map((srv) => (
              <div
                key={srv.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-8 transition-all hover:shadow-lg ${
                  srv.featured
                    ? "border-red-600 bg-white ring-2 ring-red-600/20"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        srv.featured ? "bg-[#E30613]" : "bg-red-50"
                      }`}
                    >
                      {srv.icon}
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        srv.featured
                          ? "bg-red-100 text-[#E30613]"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-950 sm:text-2xl">
                    {srv.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-slate-700">
                    {srv.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-sm font-medium text-slate-800">
                    {srv.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E30613]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E30613] hover:underline"
                  >
                    <span>Inquire About This Service</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH CALL-TO-ACTION BAND */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Purchasing Land in Ibeju-Lekki or Epe?
              </h2>
              <p className="mt-2 text-base text-slate-300">
                Confirm coordinates and government acquisition status before
                parting with capital.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-[#E30613] px-7 py-3.5 text-base font-bold text-white transition hover:bg-[#b8000a]"
              >
                Request Land Charting
              </a>
              <a
                href="tel:+2348061235341"
                className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-3.5 text-base font-bold text-white transition hover:bg-slate-700"
              >
                Call Hotline: 0806 123 5341
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR PROCESS AS A CONNECTED JOURNEY */}
      <section id="workflow" className="border-b border-slate-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              From Field to Finish
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700">
              A transparent, four-stage workflow that guarantees traverse closure
              accuracy and permanent statutory validity.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connecting Track Line (Desktop) */}
            <div className="absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-slate-200 lg:block" />

            <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {DATA.workflow.map((item, idx) => (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-4 ring-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-lg font-black text-white">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                      Stage {idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. PEOPLE & EQUIPMENT SECTION (Photographic Placeholders) */}
      <section id="people" className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Principal Surveyor Portrait */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lg">
                <VisualPlaceholder
                  label="PHOTO: Surv. A.S. Adeyemi, B.Tech, M.Sc."
                  subtext="Suggested: Professional headshot or field portrait of the Principal Surveyor in corporate or field attire."
                  height="h-96 md:h-[440px]"
                />
              </div>
            </div>

            {/* Principal Narrative & Equipment Fleet */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Principal Leadership & Field Fleet
              </h2>

              <p className="mt-4 text-lg font-medium text-slate-800">
                Led by {DATA.brand.principal}, ASK Geospatial bridges rigorous
                academic geomatics with decades of hands-on property demarcation
                experience in Lagos and Ogun States.
              </p>

              <blockquote className="mt-6 border-l-4 border-[#E30613] pl-4 text-base italic text-slate-600">
                “{DATA.brand.missionQuote}”
              </blockquote>

              {/* Equipment Grid */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="font-bold text-slate-950">
                    High-End Total Stations
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Sub-second angular precision for column and boundary setting-out.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="font-bold text-slate-950">
                    Dual-Frequency GNSS RTK
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Real-time satellite positioning referenced to national geodetic beacons.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="font-bold text-slate-950">
                    Photogrammetry Drones
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    UAV orthomosaic and contour capture for large acreage mapping.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="font-bold text-slate-950">
                    CAD & GIS Workstations
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Full AutoCAD Civil 3D, ArcGIS, and QGIS data processing suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROJECTS & CASE PROOF (Gallery Placeholders) */}
      <section id="projects" className="border-b border-slate-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Recent Field Engagements
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                A selection of representative boundary, setting-out, and contour surveys.
              </p>
            </div>
            <a
              href="#contact"
              className="text-base font-bold text-[#E30613] hover:underline"
            >
              Discuss Your Project Specs →
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {DATA.projects.map((proj) => (
              <div
                key={proj.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <VisualPlaceholder
                  label={`PROJECT PHOTO: ${proj.placeholderType}`}
                  subtext={`Suggested: Photo representing ${proj.title}`}
                  height="h-52"
                />
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                    {proj.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">
                    {proj.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {proj.location}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (Accordion) */}
      <section id="faq" className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Surveying & Land Titling FAQs
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Clear answers to essential property surveying questions in Lagos.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {DATA.faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-bold text-slate-950 sm:text-lg">
                    {faq.q}
                  </span>
                  <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-base leading-relaxed text-slate-700">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT & SURVEY QUOTE COMMAND CENTER */}
      <section id="contact" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Contact & Physical Office Card */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Mobilise a Survey Crew
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Call our Ibeju-Lekki desk or fill out the brief below. For urgent
                coordinate verification, you can also send a survey plan directly
                over WhatsApp.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                    Physical Office
                  </span>
                  <p className="mt-1 text-base font-semibold text-slate-950">
                    {DATA.brand.address}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                    Direct Hotlines
                  </span>
                  <div className="mt-1 flex flex-col gap-1 text-base font-bold text-slate-900">
                    <a href="tel:+2348061235341" className="hover:text-[#E30613]">
                      +234 806 123 5341
                    </a>
                    <a href="tel:+2348082929915" className="hover:text-[#E30613]">
                      +234 808 292 9915
                    </a>
                  </div>
                </div>

                {/* Office Exterior Placeholder */}
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <VisualPlaceholder
                    label="PHOTO: Office Location / Ayeteju Bus Stop"
                    subtext="Suggested: Exterior photo or landmark signage at Km 42 Lekki-Epe Expressway."
                    height="h-44"
                  />
                </div>
              </div>
            </div>

            {/* Right Quote Submission Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleQuoteSubmit}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10"
              >
                <h3 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
                  Request a Quotation
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Fill in your project requirements for an immediate response.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. Adebayo Ogunlesi"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0806 123 5341"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613]/20"
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800">
                      Service Type *
                    </label>
                    <select
                      required
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base font-medium text-slate-900 focus:border-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613]/20"
                    >
                      <option value="">Select service required...</option>
                      <option value="Cadastral Boundary Survey">
                        Cadastral & Boundary Survey
                      </option>
                      <option value="Land Verification & Charting">
                        Land Verification & Charting Due Diligence
                      </option>
                      <option value="Engineering Setting-Out">
                        Engineering Setting-Out & Construction Piling
                      </option>
                      <option value="Topographic & Contour Survey">
                        Topographic & Contour Survey
                      </option>
                      <option value="GIS & Drone Photogrammetry">
                        GIS, Drone & Aerial Photogrammetry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800">
                      Site Location / Corridor *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayeteju, Ibeju-Lekki / Epe"
                      value={formState.location}
                      onChange={(e) =>
                        setFormState({ ...formState, location: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613]/20"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-semibold text-slate-800">
                    Project Brief or Plot Size
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify number of plots, existing title status (excision/C of O), or specific delivery timeline needed..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:border-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-[#E30613] px-6 py-4 text-base font-extrabold text-white shadow-md shadow-[#E30613]/25 transition hover:bg-[#b8000a]"
                >
                  Submit Quote Request →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CORPORATE FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 py-12 text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-base font-black text-white">
                ASK GEOSPATIAL STRATEGIES LIMITED
              </span>
              <p className="mt-1 text-xs text-slate-500">
                SURCON Registered Land Surveying & Geo-Information Practice
              </p>
            </div>
            <div className="text-xs text-center md:text-right">
              <p>© {new Date().getFullYear()} ASK Geospatial Strategies Limited. All rights reserved.</p>
              <p className="mt-1 text-slate-500">Km 42 Lekki-Epe Expressway, Ibeju-Lekki, Lagos State, Nigeria.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* 13. STICKY CALL & WHATSAPP BAR ON MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center border-t border-slate-200 bg-white p-3 shadow-2xl md:hidden">
        <a
          href="tel:+2348061235341"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-3 text-sm font-bold text-slate-900 shadow-sm"
        >
          <svg className="h-4 w-4 text-[#E30613]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call Desk</span>
        </a>
        <div className="w-2" />
        <a
          href={`https://wa.me/${DATA.brand.whatsappNumber}?text=Hello%20ASK%20Geospatial,%20I%20would%20like%20to%20inquire%20about%20a%20survey.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-sm font-bold text-white shadow-sm"
        >
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
