/* =========================================================
   AURANICE — site script
   Product catalogue, shop grid + filters, spec-sheet drawer,
   WhatsApp enquiry builder, and lightweight 3D tilt effects.
========================================================= */

const WHATSAPP_NUMBER = "919319078944"; // country code + number, no plus/spaces

/* ---------- Product catalogue ----------
   Add new products here later — every card + spec sheet
   renders straight off this array. MOQ / price basis /
   dispatch are indicative placeholders; edit freely. */
const PRODUCTS = [
  {
    id: "cizyme",
    name: "Cizyme",
    category: "Wellness",
    categoryLabel: "Digestive Care",
    tagline: "Fungal diastase & pepsin with L-lysine, sugar-free enzyme syrup",
    composition: "Fungal Diastase, Pepsin & L-Lysine",
    form: "Syrup",
    pack: "200 ml bottle",
    rx: false,
    img: "assets/cizyme.png",
    photo: true,
    description: "Cizyme is an advanced digestive aid formulated to improve digestion and enhance overall nutrient absorption. Its combination of digestive enzymes — fungal diastase and pepsin — works alongside L-Lysine to break down food efficiently, reduce post-meal heaviness and promote better protein assimilation, while also helping build immunity. Being sugar-free, it suits daily use across the whole family.",
    highlights: ["Digestive aid", "Protein assimilation", "Amino acid absorption", "Sugar free"],
    indications: ["Poor appetite", "Indigestion & acidity", "Gas & bloating", "General weakness"],
    moq: "300 Units",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "yepezole-40",
    name: "Yepezole-40",
    category: "Injectables",
    categoryLabel: "Gastro Care Injectable",
    tagline: "Pantoprazole for Injection I.P., lyophilized powder for I.V. use",
    composition: "Pantoprazole 40 mg",
    form: "Injection (Lyophilized Powder)",
    pack: "40 mg vial",
    rx: true,
    img: "assets/yepezole-40.png",
    description: "Yepezole-40 is a proton pump inhibitor (PPI) formulated for intravenous administration, delivering rapid and long-lasting acid suppression. It promotes gastric ulcer healing and protects against hypersecretory conditions by inhibiting excess stomach acid production — trusted PPI therapy for hospital and institutional use.",
    highlights: ["For I.V. use only", "Lyophilized powder", "Hospital & institutional supply", "Rapid onset of action"],
    indications: ["GERD (acid reflux)", "Peptic ulcers", "Erosive esophagitis", "Zollinger-Ellison syndrome", "Stress ulcer prophylaxis"],
    moq: "1000 Vials",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "qymocef-500",
    name: "Qymocef 500 mg",
    category: "Injectables",
    categoryLabel: "Antibiotic Injectable",
    tagline: "Ceftriaxone Injection I.P. for I.M. / I.V. use",
    composition: "Ceftriaxone 500 mg",
    form: "Injection",
    pack: "500 mg vial",
    rx: true,
    img: "assets/qymocef-500.png",
    description: "Qymocef is a potent, broad-spectrum third-generation cephalosporin antibiotic formulated for intramuscular or intravenous administration. It delivers fast, reliable antibacterial action against severe infections across multiple body systems and is widely relied upon for hospital and institutional use.",
    highlights: ["Broad-spectrum cephalosporin", "I.M. / I.V. use", "Hospital & institutional supply", "Fast action"],
    indications: ["Respiratory tract infections", "Urinary tract infections (UTI)", "Intra-abdominal infections", "Skin & soft tissue infections", "Septicemia & meningitis"],
    moq: "1000 Vials",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "qymocef-1g",
    name: "Qymocef 1 g",
    category: "Injectables",
    categoryLabel: "Antibiotic Injectable",
    tagline: "Ceftriaxone Injection I.P., higher-strength vial for I.M. / I.V. use",
    composition: "Ceftriaxone 1 g",
    form: "Injection",
    pack: "1 g vial",
    rx: true,
    img: "assets/qymocef-1g.png",
    description: "Qymocef 1 g is the higher-strength presentation of our broad-spectrum ceftriaxone injection, built for severe bacterial infections needing a stronger single dose. Trusted by doctors and relied on by patients, it offers broad-spectrum antibacterial coverage with hospital-grade quality for I.M. or I.V. administration.",
    highlights: ["Broad-spectrum cephalosporin", "I.M. / I.V. use", "Hospital & institutional supply", "Higher-strength vial"],
    indications: ["Respiratory tract infections", "Urinary tract infections (UTI)", "Intra-abdominal infections", "Skin & soft tissue infections", "Septicemia & meningitis"],
    moq: "1000 Vials",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "kemo-p",
    name: "Kemo-P",
    category: "Tablets & Capsules",
    categoryLabel: "Pain & Fever",
    tagline: "Nimesulide & Paracetamol tablets for pain and fever relief",
    composition: "Nimesulide + Paracetamol",
    form: "Tablets",
    pack: "10×10 tablets / box",
    rx: true,
    img: "assets/kemo-p.png",
    description: "Kemo-P is a combination analgesic and antipyretic formulated to provide fast-acting, lasting relief from acute pain, fever and inflammation. By targeting pain pathways directly, it effectively eases localized discomfort and reduces swelling — powerful relief with gentle care.",
    highlights: ["Pain relief", "Fever relief", "Anti-inflammatory", "10×10 blister pack"],
    indications: ["Headache", "Toothache", "Body & muscular pain", "Fever & inflammation", "Arthritis pain"],
    moq: "500 Boxes",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "xyrun-plus",
    name: "Xyrun Plus",
    category: "Tablets & Capsules",
    categoryLabel: "Pain & Fever",
    tagline: "Diclofenac Potassium & Paracetamol tablets",
    composition: "Diclofenac Potassium + Paracetamol",
    form: "Tablets",
    pack: "10×10 tablets / box",
    rx: true,
    img: "assets/xyrun-plus.png",
    description: "Xyrun Plus is a dual-action analgesic and anti-inflammatory tablet formulated for fast relief from moderate to severe pain, inflammation and fever. Diclofenac Potassium targets pain and swelling at the source, while Paracetamol enhances pain relief and fever reduction for quick, dependable comfort.",
    highlights: ["Fast-acting pain relief", "Anti-inflammatory", "Fever reduction", "10×10 blister pack"],
    indications: ["Headaches", "Toothaches", "Muscle & back pain", "Arthritis", "Menstrual cramps"],
    moq: "500 Boxes",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "df-spas",
    name: "DF-Spas",
    category: "Tablets & Capsules",
    categoryLabel: "Antispasmodic",
    tagline: "Mefenamic Acid and Dicyclomine Hydrochloride tablets I.P.",
    composition: "Mefenamic Acid + Dicyclomine Hydrochloride",
    form: "Tablets",
    pack: "10×10 tablets / box",
    rx: true,
    img: "assets/df-spas.png",
    description: "DF-Spas is a fast-acting antispasmodic and analgesic formulated to relieve smooth muscle spasms and abdominal discomfort. Mefenamic Acid provides anti-inflammatory pain relief while Dicyclomine Hydrochloride relaxes the muscles of the gastrointestinal tract to ease cramps — dual action for better comfort.",
    highlights: ["Pain relief", "Relieves abdominal spasm", "Dual-action formula", "10×10 blister pack"],
    indications: ["Irritable Bowel Syndrome (IBS)", "Period pain (dysmenorrhea)", "Spastic colon", "Biliary colic", "Muscle spasm-associated pain"],
    moq: "500 Boxes",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "yepezole-dsr",
    name: "Yepezole DSR",
    category: "Tablets & Capsules",
    categoryLabel: "Gastro Care",
    tagline: "Pantoprazole Sodium (enteric coated) & Domperidone (sustained release) capsules",
    composition: "Pantoprazole Sodium (EC) + Domperidone (SR)",
    form: "Capsules",
    pack: "10×10 capsules / box",
    rx: true,
    img: "assets/yepezole-dsr.png",
    description: "Yepezole DSR is a dual-action gastrointestinal capsule designed to combat acidity, acid reflux and nausea together. Enteric-coated Pantoprazole reduces excess acid secretion in the stomach, while sustained-release Domperidone improves stomach motility to prevent nausea, vomiting and reflux — relieving acidity and restoring comfort.",
    highlights: ["Enteric coated pantoprazole", "Sustained release domperidone", "Dual action formula", "10×10 blister pack"],
    indications: ["GERD (acid reflux)", "Gastritis", "Indigestion & bloating", "Heartburn", "Peptic ulcer management"],
    moq: "500 Boxes",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "likmulti",
    name: "Likmulti",
    category: "Wellness",
    categoryLabel: "Nutraceutical Syrup",
    tagline: "Lycopene, multivitamins, multiminerals & antioxidants syrup for energy & immunity",
    composition: "Lycopene, Multivitamins, Multiminerals & Antioxidants",
    form: "Syrup",
    pack: "200 ml bottle",
    rx: false,
    img: "assets/likmulti.png",
    description: "Likmulti provides daily nutritional support designed for the entire family. Packed with essential vitamins (A, C, D, E), minerals, lycopene and antioxidants, it fulfils daily dietary gaps, boosts overall immunity, enhances stamina and energy levels, and offers strong antioxidant protection for long-term wellbeing.",
    highlights: ["Energy & immunity support", "Multivitamin + multimineral", "Antioxidant blend", "For the whole family"],
    indications: ["Immunity support", "Low energy & stamina", "Daily nutritional gaps", "Antioxidant protection"],
    moq: "300 Units",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "likliv",
    name: "Likliv Liver Syrup",
    category: "Wellness",
    categoryLabel: "Liver Care Syrup",
    tagline: "Silymarin, Vitamin B-Complex with Multivitamins & Multiminerals for liver support",
    composition: "Silymarin, Vitamin B-Complex with Multivitamins & Multiminerals",
    form: "Syrup",
    pack: "200 ml bottle",
    rx: false,
    img: "assets/likliv.png",
    photo: true,
    description: "Likliv is a specialised liver care syrup formulated to support optimal liver function and overall vitality. Powered by Silymarin, B-Complex vitamins and essential minerals, it aids liver cell regeneration and body detoxification, and helps protect the liver from the effects of toxins, alcohol and drug-induced damage. It also helps improve digestion, relieve bloating, boost energy levels and enhance immunity — complete care for a healthy liver and daily vitality.",
    highlights: ["Supports liver function", "Detoxifies the body", "Protects liver from toxins", "Boosts energy & vitality"],
    indications: ["Fatty liver", "Loss of appetite", "Indigestion & bloating", "General weakness", "Toxin exposure (alcohol, drugs, pollution)", "Convalescence"],
    moq: "300 Units",
    price: "Get Best Price",
    dispatch: "5–7 business days"
  },
  {
    id: "lektrolite",
    name: "Lektrolite",
    category: "Wellness",
    categoryLabel: "Energy & Electrolyte Drink",
    tagline: "Orange-flavour electrolyte sachet that restores fluids lost to dehydration",
    composition: "Electrolyte blend (3 vital electrolytes)",
    form: "Oral Sachet",
    pack: "21.8 g sachet",
    rx: false,
    img: "assets/lektrolite.png",
    description: "Lektrolite is a fast-acting rehydration solution formulated to replenish vital body fluids and electrolytes lost due to dehydration. Ideal for the whole family, it delivers instant energy, helps prevent dehydration-induced weakness, and is gentle on the stomach — quick hydration and fast recovery in a refreshing orange flavour.",
    highlights: ["Instant energy", "Fast rehydration", "Orange flavour", "Gentle on stomach"],
    indications: ["Heat exhaustion", "Travel fatigue", "Diarrhea & vomiting recovery", "Post-workout hydration"],
    moq: "1000 Sachets",
    price: "Get Best Price",
    dispatch: "3–5 business days"
  },
  {
    id: "neeco",
    name: "NeeCo Herbal Soap",
    category: "Cosmetic",
    categoryLabel: "Herbal Skin Care",
    tagline: "Aloe vera, neem & vitamin E soap, gentle enough for daily use",
    composition: "Aloe Vera, Neem & Vitamin E",
    form: "Bar Soap",
    pack: "100 g bar",
    rx: false,
    img: "assets/neeco.png",
    photo: true,
    description: "NeeCo Herbal Soap is a natural care cleansing bar formulated for healthy, refreshed skin. Infused with the antibacterial benefits of Neem, the soothing hydration of Aloe Vera and the antioxidant power of Vitamin E, it gently cleanses while protecting and nourishing skin across all skin types — pure, gentle and refreshing, for daily moisture balance.",
    highlights: ["Natural ingredients", "Gentle on skin", "For all skin types", "Protects & nourishes"],
    indications: ["Daily cleansing", "Skin nourishment", "Protection against impurities", "Moisture balance"],
    moq: "1000 Units",
    price: "Get Best Price",
    dispatch: "3–5 business days"
  }
];

/* ---------- helpers ---------- */
function buildWhatsAppLink(text){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function productEnquiryMessage(p, {name, company, qty} = {}){
  const lines = [
    `Hi Auranice, I'd like to enquire about *${p.name}*.`,
    ``,
    `Product: ${p.name}`,
    `Composition: ${p.composition}`,
    `Pack size: ${p.pack}`,
  ];
  if (qty) lines.push(`Quantity required: ${qty}`);
  lines.push(``, `Please share MOQ, price and dispatch details.`);
  if (name) lines.push(``, `Name: ${name}`);
  if (company) lines.push(`Company: ${company}`);
  return lines.join("\n");
}

/* ---------- render shop grid ---------- */
const grid = document.getElementById("productGrid");

function cardTemplate(p){
  return `
    <article class="product-card reveal" data-id="${p.id}" data-category="${p.category}">
      <div class="pc-media ${p.photo ? "pc-media-photo" : ""}">
        <div class="pc-badges">
          <span class="pc-cat" title="${p.categoryLabel}">${p.categoryLabel}</span>
          ${p.rx ? '<span class="pc-rx" title="Prescription required">Rx</span>' : ""}
        </div>
        <img src="${p.img}" alt="${p.name} packaging" loading="lazy">
      </div>
      <div class="pc-body">
        <h3 class="pc-name">${p.name}</h3>
        <p class="pc-tagline">${p.tagline}</p>
        <div class="pc-foot">
          <span class="pc-pack">${p.pack}</span>
          <span class="pc-link">View spec sheet
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </div>
    </article>`;
}

function renderGrid(filter = "all"){
  const items = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(cardTemplate).join("");
  attachCardEvents();
  observeReveals();
}

function attachCardEvents(){
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => openDrawer(card.dataset.id));

    const media = card.querySelector(".pc-media");
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      media.style.transform = `rotateY(${x * 14}deg) rotateX(${y * -14}deg)`;
    });
    card.addEventListener("mouseleave", () => { media.style.transform = "rotateY(0) rotateX(0)"; });
  });
}

/* ---------- filters ---------- */
document.getElementById("filterAllCount").textContent = PRODUCTS.length;
document.getElementById("shopFilters").addEventListener("click", e => {
  const chip = e.target.closest(".filter-chip");
  if (!chip) return;
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  renderGrid(chip.dataset.filter);
});

document.querySelectorAll(".cat-card").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach(c => {
      c.classList.toggle("active", c.dataset.filter === target);
    });
    renderGrid(target);
    document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ---------- spec-sheet drawer ---------- */
const drawer = document.getElementById("productDrawer");
const overlay = document.getElementById("drawerOverlay");
const drawerContent = document.getElementById("drawerContent");

function specRow(label, value){
  return `<tr><td>${label}</td><td>${value}</td></tr>`;
}

function drawerTemplate(p){
  return `
    <div class="spec-hero">
      <div class="spec-hero-img-wrap ${p.photo ? "spec-hero-img-wrap-photo" : ""}">
        <img src="${p.img}" alt="${p.name} packaging" class="spec-hero-img" id="drawerImg">
      </div>
      <p class="spec-cat">${p.categoryLabel}</p>
      <h2 class="spec-name">${p.name}</h2>
      <p class="spec-tagline">${p.tagline}</p>
      <span class="spec-rx-flag ${p.rx ? "rx" : "otc"}">${p.rx ? "Rx — prescription product" : "OTC — no prescription required"}</span>
    </div>
    <div class="spec-sheet">
      ${p.description ? `<p class="spec-sheet-title">About this product</p><p class="spec-description">${p.description}</p>` : ""}

      <p class="spec-sheet-title">Spec sheet</p>
      <table class="spec-table">
        ${specRow("Composition", p.composition)}
        ${specRow("Form", p.form)}
        ${specRow("Pack size", p.pack)}
        ${specRow("Category", p.categoryLabel)}
        ${specRow("MOQ", p.moq)}
        ${specRow("Price", p.price)}
        ${specRow("Dispatch", p.dispatch)}
      </table>

      <p class="spec-sheet-title">Highlights</p>
      <div class="spec-highlights">
        ${p.highlights.map(h => `<span class="spec-chip">${h}</span>`).join("")}
      </div>

      ${p.indications ? `
      <p class="spec-sheet-title">Key indications</p>
      <ul class="spec-indications">
        ${p.indications.map(i => `<li>${i}</li>`).join("")}
      </ul>` : ""}

      <p class="spec-sheet-title">Send enquiry</p>
      <form class="spec-form" id="drawerForm">
        <label>Your name
          <input type="text" id="dName" placeholder="e.g. Rakesh Sharma">
        </label>
        <label>Company / Firm name
          <input type="text" id="dCompany" placeholder="e.g. Sharma Medical Agencies">
        </label>
        <label>Quantity required
          <input type="text" id="dQty" placeholder="e.g. 2000 units">
        </label>
        <button type="submit" class="btn btn-solid btn-block">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.13.43.19.5.3.07.11.07.61-.17 1.29z"/></svg>
          Send this enquiry on WhatsApp
        </button>
      </form>
      <p class="spec-disclaimer">MOQ, price and dispatch shown are indicative and confirmed once we receive your enquiry. Rx items are supplied only against a valid pharmacy / institutional purchase order.</p>
    </div>`;
}

function openDrawer(id){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  drawerContent.innerHTML = drawerTemplate(p);
  drawer.classList.add("open");
  overlay.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  drawerContent.scrollTop = 0;
  document.body.style.overflow = "hidden";

  const img = document.getElementById("drawerImg");
  drawer.onmousemove = e => {
    const r = drawer.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    img.style.transform = `rotateY(${x * 16}deg) rotateX(${y * -12}deg)`;
  };

  document.getElementById("drawerForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("dName").value.trim();
    const company = document.getElementById("dCompany").value.trim();
    const qty = document.getElementById("dQty").value.trim();
    const msg = productEnquiryMessage(p, { name, company, qty });
    window.open(buildWhatsAppLink(msg), "_blank", "noopener");
  });
}

function closeDrawer(){
  drawer.classList.remove("open");
  overlay.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("drawerClose").addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

/* ---------- general enquiry form -> WhatsApp ---------- */
document.getElementById("generalEnquiryForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("genName").value.trim();
  const company = document.getElementById("genCompany").value.trim();
  const city = document.getElementById("genCity").value.trim();
  const message = document.getElementById("genMessage").value.trim();

  const lines = [
    `Hi Auranice, I have an enquiry.`,
    ``,
    `Name: ${name}`,
  ];
  if (company) lines.push(`Company: ${company}`);
  if (city) lines.push(`City: ${city}`);
  lines.push(``, `Requirement: ${message}`);

  window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener");
});

/* ---------- hero 3D parallax ---------- */
const heroStage = document.getElementById("heroStage");
const heroFan = document.getElementById("heroFan");
if (heroStage && window.matchMedia("(min-width: 981px)").matches){
  heroStage.addEventListener("mousemove", e => {
    const r = heroStage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    heroFan.style.transform = `rotateY(${x * 16}deg) rotateX(${y * -12}deg)`;
  });
  heroStage.addEventListener("mouseleave", () => {
    heroFan.style.transform = "rotateY(0) rotateX(0)";
  });
}

/* ---------- scroll reveal ---------- */
let revealObserver;
function observeReveals(){
  if (!revealObserver){
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}

/* ---------- mobile nav ---------- */
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});
document.querySelectorAll(".main-nav a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open"));
});

/* ---------- misc ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- init ---------- */
renderGrid("all");

// mark the other reveal-able sections
document.querySelectorAll(".about-inner, .categories-inner, .cat-card, .contact-inner").forEach(el => {
  el.classList.add("reveal");
});
observeReveals();
