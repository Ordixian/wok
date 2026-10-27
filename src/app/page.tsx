"use client";

import React, { useState } from "react";

const DATA = {
  brand: {
    name: "ASK Geospatial Strategies Limited",
    shortName: "ASK Geospatial",
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
      label: "SURCON-Registered Surveyor",
      sub: "Full Regulatory Compliance & Record Copy Filing",
    },
    {
      label: "Member of NIS",
      sub: "Nigerian Institution of Surveyors Certified Practice",
    },
    {
      label: "Principal: Surv. A.S. Adeyemi",
      sub: "B.Tech, M.Sc. (Lagos) — Lead Geomatics Consultant",
    },
    {
      label: "Ibeju-Lekki Strategic Base",
      sub: "Km 42 Lekki-Epe Expressway — Rapid Site Mobilisation",
    },
  ],
  services: [
    {
      id: "01",
      title: "Land Surveying",
      description:
        "Boundary, cadastral, topographic, GNSS control and as-built surveys for accurate land-information.",
      items: [
        "Cadastral & Boundary Surveys",
        "Topographic Mapping & Contours",
        "GNSS / RTK Control Points",
        "As-Built Surveys",
      ],
    },
    {
      id: "02",
      title: "Real Estate Surveying",
      description:
        "Land verification, C of O preparation, subdivision layouts and property-boundary dispute resolution.",
      items: [
        "Land Verification & Charting",
        "C of O & Governor’s Consent Plans",
        "Subdivision & Layout Surveys",
        "Boundary Dispute Resolution",
      ],
    },
    {
      id: "03",
      title: "Real Estate General Consultancy",
      description:
        "Due-diligence, zoning, land-use advisory and liaison with Lagos State Lands Bureau.",
      items: [
        "Title Due Diligence",
        "Zoning & Land-Use Advisory",
        "Survey Plan Interpretation",
        "Land Registry Liaison",
      ],
    },
    {
      id: "04",
      title: "Engineering Surveys",
      description:
        "Construction setting-out, deformation monitoring, road & pipeline routing and infrastructure alignment.",
      items: [
        "Construction Setting-Out",
        "Deformation & QA/QC Monitoring",
        "Road & Pipeline Route Surveys",
        "Infrastructure Alignment",
      ],
    },
    {
      id: "05",
      title: "GIS & Geospatial Services",
      description:
        "Spatial analysis, UAV/drone photogrammetry, LiDAR and GIS data delivery.",
      items: [
        "GIS Mapping & Spatial Analysis",
        "UAV/Drones – Orthophotos, DSM, 3D point clouds",
        "LiDAR Surveys",
        "Geodatabase Design & Delivery",
      ],
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Reconnaissance",
      tag: "Site & Control Planning",
      description:
        "Site visit, historical charting check, geodetic control point planning, and instrument calibration.",
    },
    {
      step: "02",
      title: "Data Capture",
      tag: "Field Instrumentation",
      description:
        "High-precision field observations using optical Total Stations, dual-frequency GNSS RTK rovers, and UAV mapping.",
    },
    {
      step: "03",
      title: "Processing",
      tag: "CAD / GIS Computation",
      description:
        "Rigorous traverse adjustment, coordinate transformation, CAD drafting, and zero-error closure QA/QC checks.",
    },
    {
      step: "04",
      title: "Delivery",
      tag: "Certified Output",
      description:
        "SURCON-sealed survey plans, Red Copy lodgement, AutoCAD (.DWG) / GIS shapefiles, and on-site beacon briefing.",
    },
  ],
  corridorLandmarks: [
    "Dangote Refinery & Petrochemical Complex",
    "Lekki Free Trade Zone (LFTZ)",
    "Lekki Deep Sea Port",
    "Lagos-Calabar Coastal Highway Corridor",
  ],
};

export default function Page() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello ASK Geospatial Strategies Ltd,\n\nI would like to request a survey quote:\n• Name: ${formState.name || "N/A"}\n• Email: ${formState.email || "N/A"}\n• Phone: ${formState.phone || "N/A"}\n• Service Needed: ${formState.service || "General Survey Inquiry"}\n• Project Details: ${formState.message || "Please contact me."}`
    );
    window.open(
      `https://wa.me/${DATA.brand.whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#111317] antialiased selection:bg-[#E30613] selection:text-white">
      {/* TOP UTILITY BAR */}
      <div className="hidden border-b border-white/10 bg-[#0B0D11] text-xs text-slate-300 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#E30613]" />
              <span className="font-semibold text-white">Office:</span>{" "}
              {DATA.brand.address}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+2348061235341"
              className="font-medium text-white transition hover:text-[#E30613]"
            >
              {DATA.brand.phones[0]}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:+2348082929915"
              className="font-medium text-white transition hover:text-[#E30613]"
            >
              {DATA.brand.phones[1]}
            </a>
            <span className="rounded bg-[#E30613]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#FF4D58]">
              We are always open to serve you
            </span>
          </div>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/logo-light.svg"
              alt={DATA.brand.name}
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#" className="text-[#E30613] transition">
              Home
            </a>
            <a href="#services" className="transition hover:text-[#E30613]">
              Services
            </a>
            <a href="#workflow" className="transition hover:text-[#E30613]">
              How We Work
            </a>
            <a href="#why-ask" className="transition hover:text-[#E30613]">
              Why ASK Geospatial
            </a>
            <a href="#contact" className="transition hover:text-[#E30613]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#E30613] px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-[#E30613]/25 transition hover:bg-[#b8000a]"
            >
              Request Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#F4F7F9] py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E30613]/25 bg-[#E30613]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E30613]">
              <span className="h-2 w-2 rounded-full bg-[#E30613]" />
              SURCON-Registered Land Surveying & Geo-Information Firm
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#111317] sm:text-5xl lg:text-[54px] lg:leading-[1.12]">
              Precision <span className="text-[#E30613]">Land Surveying</span> &{" "}
              Geo-Information Intelligence
            </h1>

            <div className="mt-6 border-l-4 border-[#E30613] pl-5">
              <p className="text-lg font-medium leading-relaxed text-slate-700">
                From boundary verification and C of O charting to engineering
                setting-out, we deliver court-admissible, SURCON-registered
                surveys across the fast-growing{" "}
                <span className="font-bold text-[#111317]">
                  Ibeju-Lekki corridor
                </span>{" "}
                and Lagos State.
              </p>
              <p className="mt-2 text-sm italic text-slate-500">
                “{DATA.brand.missionQuote}”
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#E30613] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#E30613]/25 transition hover:-translate-y-0.5 hover:bg-[#b8000a]"
              >
                Request a Survey Quote →
              </a>
              <a
                href="tel:+2348061235341"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#E30613] bg-white px-6 py-3.5 text-base font-bold text-[#E30613] transition hover:bg-[#E30613] hover:text-white"
              >
                Call +234 806 123 5341
              </a>
            </div>
          </div>

          {/* Right Column — Live CAD/RTK Survey Viewport */}
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0D1017] p-6 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono font-semibold uppercase tracking-wider text-slate-300">
                    RTK GNSS / TOTAL STATION LOCK
                  </span>
                </div>
                <span className="rounded bg-[#E30613] px-2 py-0.5 font-mono text-[10px] font-bold">
                  UTM ZONE 31N
                </span>
              </div>

              <div className="relative my-5 rounded-xl border border-white/10 bg-[#131822] p-5">
                <svg
                  viewBox="0 0 400 220"
                  className="h-48 w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 44H400M0 88H400M0 132H400M0 176H400M80 0V220M160 0V220M240 0V220M320 0V220"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                  <polygon
                    points="85,165 145,55 305,45 335,150 205,185"
                    fill="rgba(227, 6, 19, 0.14)"
                    stroke="#E30613"
                    strokeWidth="2.5"
                  />
                  {[
                    { x: 85, y: 165, id: "PB101" },
                    { x: 145, y: 55, id: "PB102" },
                    { x: 305, y: 45, id: "PB103" },
                    { x: 335, y: 150, id: "PB104" },
                    { x: 205, y: 185, id: "PB105" },
                  ].map((pt) => (
                    <g key={pt.id}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="5"
                        fill="#FFB703"
                        stroke="#0D1017"
                        strokeWidth="2"
                      />
                      <text
                        x={pt.x + 8}
                        y={pt.y - 6}
                        fill="#E2E8F0"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {pt.id}
                      </text>
                    </g>
                  ))}
                </svg>

                <div className="mt-2 flex flex-wrap items-center justify-between border-t border-white/10 pt-3 font-mono text-[11px] text-slate-400">
                  <span>LAT: 06° 28&apos; 14.2&quot; N</span>
                  <span>LON: 03° 45&apos; 09.8&quot; E</span>
                  <span className="text-emerald-400">CLOSURE: 1:100,000</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-xs font-bold text-[#FFB703]">OPTICAL</div>
                  <div className="mt-0.5 text-xs text-slate-300">Total Station</div>
                </div>
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-xs font-bold text-[#E30613]">SATELLITE</div>
                  <div className="mt-0.5 text-xs text-slate-300">Dual-Freq RTK</div>
                </div>
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-xs font-bold text-emerald-400">AERIAL</div>
                  <div className="mt-0.5 text-xs text-slate-300">UAV / LiDAR GIS</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 shadow-lg sm:-mt-6 sm:mx-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E30613] text-sm font-bold text-white">
                  ⊿
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                    Field-to-Finish Guarantee
                  </div>
                  <div className="text-sm font-bold text-[#111317]">
                    Fresh control points. Everything closes clean.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS RIBBON */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {DATA.credentials.map((cred) => (
            <div key={cred.label} className="px-6 py-6">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E30613]" />
                <span className="text-sm font-extrabold text-[#111317]">
                  {cred.label}
                </span>
              </div>
              <p className="mt-1 pl-5 text-xs text-slate-500">{cred.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
              SURCON-Registered Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#111317] sm:text-4xl">
              Our <span className="text-[#E30613]">Geospatial</span> & Survey
              Services
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DATA.services.map((srv) => (
              <div
                key={srv.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#E30613]/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs font-bold text-slate-600">
                      SERVICE {srv.id}
                    </span>
                    <span className="text-lg font-bold text-[#E30613]">⊿</span>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-[#111317]">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {srv.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-sm font-medium text-slate-700">
                    {srv.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#E30613]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E30613] group-hover:underline"
                  >
                    Request {srv.title} Quote →
                  </a>
                </div>
              </div>
            ))}

            <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#E30613] to-[#9E0000] p-7 text-white shadow-xl">
              <div>
                <span className="inline-block rounded-md bg-white/20 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white">
                  FAST-TRACK DESK • IBEJU-LEKKI
                </span>
                <h3 className="mt-4 text-2xl font-extrabold leading-snug">
                  Buying Land in Ibeju-Lekki or Epe? Verify Before You Pay.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  Don’t risk government acquisition or boundary overlap. Send us
                  an existing survey plan for rapid charting verification, or
                  mobilise our Km 42 Lekki-Epe crew to pick fresh coordinates on
                  site.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-extrabold text-[#111317] shadow transition hover:bg-slate-100"
                >
                  Verify a Survey Plan Now →
                </a>
                <a
                  href="tel:+2348061235341"
                  className="flex w-full items-center justify-center rounded-lg border border-white/40 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
                >
                  Direct Hotline: +234 806 123 5341
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="border-y border-slate-200 bg-[#F4F7F9] py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
              Standard Operating Procedure
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#111317] sm:text-4xl">
              From <span className="text-[#E30613]">Field</span> to Finish
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DATA.workflow.map((wf) => (
              <div
                key={wf.step}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-[#E30613]">
                    {wf.step}
                  </span>
                  <span className="rounded bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    {wf.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#111317]">
                  {wf.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {wf.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ASK GEOSPATIAL? */}
      <section id="why-ask" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
                Strategic Corridor Advantage
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#111317] sm:text-4xl">
                Why Choose{" "}
                <span className="text-[#E30613]">ASK Geospatial?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Located at{" "}
                <strong className="text-[#111317]">
                  Km 42 Lekki-Epe Expressway
                </strong>
                , we are stationed right on the ground where West Africa’s
                fastest-growing real-estate corridor meets major infrastructure
                projects. Our fully equipped field crew (Total Station, RTK GNSS
                rover, UAV) and office GIS team bridge rugged data capture with
                modern digital deliverables.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DATA.corridorLandmarks.map((landmark) => (
                  <div
                    key={landmark}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F4F7F9] px-4 py-3 text-sm font-bold text-[#111317]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E30613] text-xs text-white">
                      ✓
                    </span>
                    <span>{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border-l-4 border-[#E30613] bg-[#111317] p-8 text-white shadow-xl">
                <div className="text-xs font-bold uppercase tracking-widest text-[#FFB703]">
                  Leadership & Regulatory Seal
                </div>
                <h3 className="mt-2 text-2xl font-extrabold">
                  {DATA.brand.principal}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  SURCON-Registered Surveyor • Member, Nigerian Institution of
                  Surveyors (NIS)
                </p>

                <blockquote className="mt-6 border-t border-white/10 pt-5 text-sm italic leading-relaxed text-slate-300">
                  “As we begin every project, we remain committed to accuracy,
                  integrity, and excellence in every survey. Every control point
                  is verified, and every boundary closes clean.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & QUOTE SECTION */}
      <section
        id="contact"
        className="relative border-t-4 border-[#E30613] bg-[#0B0D11] py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
                  Get in Touch / Mobilise a Crew
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Request a Survey Quote
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Need a cadastral survey plan, land verification charting,
                  topographical contour map, or construction setting-out? Fill
                  out the project brief or call our Ibeju-Lekki desk directly.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                      Lagos Office Address
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      {DATA.brand.address}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                      Direct Survey Hotlines
                    </div>
                    <div className="mt-1 flex flex-col gap-1 text-sm font-bold text-white">
                      <a
                        href="tel:+2348061235341"
                        className="hover:text-[#E30613]"
                      >
                        +234 806 123 5341
                      </a>
                      <a
                        href="tel:+2348082929915"
                        className="hover:text-[#E30613]"
                      >
                        +234 808 292 9915
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleQuoteSubmit}
                className="rounded-2xl border border-white/10 bg-[#141821] p-8 shadow-2xl"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Engr. Tunde Bakare"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-700 bg-white px-4 py-3 text-sm font-medium text-[#111317] placeholder:text-slate-400 focus:border-[#E30613] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 806 123 5341"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-700 bg-white px-4 py-3 text-sm font-medium text-[#111317] placeholder:text-slate-400 focus:border-[#E30613] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-700 bg-white px-4 py-3 text-sm font-medium text-[#111317] placeholder:text-slate-400 focus:border-[#E30613] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Select Service *
                    </label>
                    <select
                      required
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-700 bg-white px-4 py-3 text-sm font-semibold text-[#111317] focus:border-[#E30613] focus:outline-none"
                    >
                      <option value="">Select Service...</option>
                      <option value="Land & Boundary Surveying">
                        Land & Boundary Surveying
                      </option>
                      <option value="Real Estate & C of O Surveying">
                        Real Estate & C of O Surveying
                      </option>
                      <option value="Land Verification & Charting">
                        Land Verification & Charting
                      </option>
                      <option value="Engineering & Construction Setting-Out">
                        Engineering & Construction Setting-Out
                      </option>
                      <option value="GIS, UAV Drone & Topographic Mapping">
                        GIS, UAV Drone & Topographic Mapping
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Project Location & Brief *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="I would like to request a survey quote for..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-700 bg-white px-4 py-3 text-sm font-medium text-[#111317] placeholder:text-slate-400 focus:border-[#E30613] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-[#E30613] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-[#E30613]/30 transition hover:bg-[#b8000a]"
                >
                  Request a Quote →
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-dark.svg"
                alt={DATA.brand.name}
                className="h-8 w-auto"
              />
              <span>
                © {new Date().getFullYear()} {DATA.brand.name}. All rights
                reserved.
              </span>
            </div>
            <div>
              SURCON Registered • Member of NIS • Ibeju-Lekki, Lagos, Nigeria
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
