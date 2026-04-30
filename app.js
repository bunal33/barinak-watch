const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const CONFIG = {
  seedPath: "data/seed-cases.json",
  defaultCenter: [39.05, 35.05],
  defaultZoom: 6,
};

const TR_PROVINCES = [
  ["Adana", 37.0, 35.32], ["Adıyaman", 37.76, 38.28], ["Afyonkarahisar", 38.76, 30.54],
  ["Ağrı", 39.72, 43.05], ["Aksaray", 38.37, 34.04], ["Amasya", 40.65, 35.83],
  ["Ankara", 39.92, 32.85], ["Antalya", 37.07, 30.69], ["Ardahan", 41.11, 42.70],
  ["Artvin", 41.18, 41.82], ["Aydın", 37.84, 28.0], ["Balıkesir", 39.64, 27.88],
  ["Bartın", 41.64, 32.34], ["Batman", 37.88, 41.13], ["Bayburt", 40.25, 40.23],
  ["Bilecik", 40.15, 29.98], ["Bingöl", 38.88, 40.5], ["Bitlis", 38.4, 42.11],
  ["Bolu", 40.74, 31.61], ["Burdur", 37.72, 30.29], ["Bursa", 40.18, 29.06],
  ["Çanakkale", 40.15, 26.41], ["Çankırı", 40.6, 33.62], ["Çorum", 40.55, 34.96],
  ["Denizli", 37.78, 29.09], ["Diyarbakır", 37.91, 40.22], ["Düzce", 40.84, 31.16],
  ["Edirne", 41.68, 26.56], ["Elazığ", 38.68, 39.22], ["Erzincan", 39.75, 39.5],
  ["Erzurum", 39.9, 41.27], ["Eskişehir", 39.78, 30.52], ["Gaziantep", 37.06, 37.38],
  ["Giresun", 40.91, 38.39], ["Gümüşhane", 40.46, 39.48], ["Hakkari", 37.58, 43.74],
  ["Hatay", 36.4, 36.35], ["Iğdır", 39.89, 44.05], ["Isparta", 37.76, 30.55],
  ["İstanbul", 41.01, 28.98], ["İzmir", 38.42, 27.14], ["Kahramanmaraş", 37.58, 36.93],
  ["Karabük", 41.2, 32.63], ["Karaman", 37.18, 33.22], ["Kars", 40.6, 43.1],
  ["Kastamonu", 41.38, 33.78], ["Kayseri", 38.72, 35.48], ["Kırıkkale", 39.85, 33.52],
  ["Kırklareli", 41.73, 27.22], ["Kırşehir", 39.15, 34.16], ["Kilis", 36.72, 37.12],
  ["Kocaeli", 40.77, 29.94], ["Konya", 37.87, 32.48], ["Kütahya", 39.42, 29.98],
  ["Malatya", 38.35, 38.31], ["Manisa", 38.61, 27.43], ["Mardin", 37.31, 40.74],
  ["Mersin", 36.8, 34.63], ["Muğla", 37.22, 28.36], ["Muş", 38.73, 41.49],
  ["Nevşehir", 38.62, 34.71], ["Niğde", 37.97, 34.68], ["Ordu", 40.98, 37.88],
  ["Osmaniye", 37.07, 36.25], ["Rize", 41.03, 40.52], ["Sakarya", 40.78, 30.4],
  ["Samsun", 41.29, 36.33], ["Siirt", 37.93, 41.94], ["Sinop", 42.03, 35.15],
  ["Sivas", 39.75, 37.02], ["Şanlıurfa", 37.16, 38.79], ["Şırnak", 37.52, 42.46],
  ["Tekirdağ", 40.98, 27.51], ["Tokat", 40.31, 36.55], ["Trabzon", 41.0, 39.72],
  ["Tunceli", 39.11, 39.55], ["Uşak", 38.68, 29.41], ["Van", 38.5, 43.37],
  ["Yalova", 40.65, 29.27], ["Yozgat", 39.82, 34.81], ["Zonguldak", 41.45, 31.79],
];

const PROVINCE_CENTER = Object.fromEntries(TR_PROVINCES.map(([name, lat, lng]) => [name, { lat, lng }]));
const TAXONOMY = {
  category: ["labor_action", "mesem", "unionist_detention"],
  stage: ["decision_taken", "started", "ongoing", "ended", "postponed_banned", "cancelled", "unknown"],
  actionType: ["legal_strike", "fiili_wildcat", "protest", "bargaining_dispute", "solidarity_action"],
};
const COLORS = {
  decision_taken: "#c9881f",
  started: "#cf3f35",
  ongoing: "#257b83",
  ended: "#347d57",
  postponed_banned: "#6e5bbd",
  cancelled: "#7c807c",
  unknown: "#7c807c",
};

const COPY = {
  tr: {
    nav: { methodology: "Yöntem", sources: "Kaynaklar", submit: "+ Eylem/Kaynak Bildir" },
    stats: { label: "Genel görünüm", total: "Doğrulanmış kayıt", active: "Süren grev/eylem", decision: "Grev kararı", mesem: "MESEM kaydı" },
    filters: { search: "Ara", searchPlaceholder: "İşveren, sendika, il, talep...", province: "İl", sector: "Sektör", allProvinces: "Tüm iller", allSectors: "Tüm sektörler", category: "Kategori", stage: "Aşama", actionType: "Eylem türü" },
    map: { results: "sonuç" },
    empty: { title: "Haritadan bir kayıt seçin", text: "Grevler, fiili eylemler, MESEM vakaları ve sendikacılara yönelik davalar aynı veri modelinde izlenir.", context: "Bağlam kaynakları" },
    submit: {
      label: "İnceleme kuyruğu", title: "Eylem veya kaynak bildir", category: "Kategori", province: "İl", caseTitle: "Başlık",
      caseTitlePlaceholder: "Örn. Özel İtalyan Lisesi öğretmenleri grevde", summary: "Kısa özet",
      summaryPlaceholder: "Ne oldu, kimler dahil, hangi talep veya hak ihlali var?", location: "Konum adı",
      locationPlaceholder: "Fabrika, okul, adliye, meydan...", date: "Tarih", sourceUrl: "Kaynak URL",
      sourceTitle: "Kaynak başlığı", contact: "İletişim", contactPlaceholder: "İsteğe bağlı e-posta",
      note: "Bildirimler editör incelemesinden sonra yayımlanır. Sosyal medya veya tanık aktarımı tek başına doğrulanmış kayıt sayılmaz.",
      send: "İncelemeye gönder", successTitle: "Bildirim alındı",
      successLocal: "Supabase yapılandırılmadığı için bildirim bu tarayıcıda demo kuyruğuna kaydedildi.",
      successRemote: "Bildirim Supabase inceleme kuyruğuna kaydedildi.",
      required: "Kategori, başlık, özet, il ve en az bir geçerli kaynak URL zorunludur.",
      badCoords: "Koordinatlar birlikte ve geçerli sayı olarak girilmeli.",
    },
    common: { cancel: "Vazgeç", close: "Kapat" },
    methodology: {
      label: "Yöntem", title: "Kayıt ve doğrulama ilkeleri",
      p1: "GrevTakip, tek bir veri modelinde işyeri temelli eylemleri, genel eylemleri, dayanışma eylemlerini, MESEM vakalarını ve sendikacılara yönelik gözaltı/tutuklama kayıtlarını izler.",
      p2: "Grev kararı ile grevin başlaması ayrı aşamalardır. Bir kayıt \"grev kararı alındı\" aşamasında olabilir, daha sonra \"grev başladı\", \"sürüyor\", \"sona erdi\" veya \"ertelendi/yasaklandı\" aşamasına taşınabilir.",
      p3: "EÇT ve Cornell yaklaşımından uyarlanan kaynak disiplini kullanılır: sendika açıklamaları, emek haberleri, resmi belgeler ve araştırma raporları güçlü kaynak sayılır; sosyal medya ve tanık aktarımı ek teyit ister.",
    },
    sources: { label: "Kaynaklar", title: "Başlangıç kaynak havuzu" },
    detail: { employer: "İşveren / kurum", union: "Sendika / örgüt", sector: "Sektör", workers: "Yaklaşık katılımcı", startDate: "Başlangıç", endDate: "Bitiş", demands: "Talepler / konular", locations: "Konumlar", timeline: "Zaman çizelgesi", sources: "Kaynaklar", detentionStatus: "Hukuki durum", lastVerified: "Son teyit", noData: "Belirtilmedi" },
    category: { labor_action: "İşçi eylemi", mesem: "MESEM", unionist_detention: "Tutuklu sendikacı" },
    stage: { decision_taken: "Grev kararı alındı", started: "Grev başladı", ongoing: "Sürüyor", ended: "Sona erdi", postponed_banned: "Ertelendi / yasaklandı", cancelled: "İptal / anlaşma", unknown: "Bilinmiyor" },
    actionType: { legal_strike: "Yasal grev", fiili_wildcat: "Fiili grev", protest: "Protesto", bargaining_dispute: "TİS uyuşmazlığı", solidarity_action: "Dayanışma" },
    detentionStatus: { detained: "Gözaltında", arrested: "Tutuklu", convicted: "Hükümlü", released: "Serbest", trial_ongoing: "Yargılama sürüyor", unknown: "Bilinmiyor" },
  },
  en: {
    nav: { methodology: "Method", sources: "Sources", submit: "+ Report Action/Source" },
    stats: { label: "Overview", total: "Verified records", active: "Active strikes/actions", decision: "Strike decisions", mesem: "MESEM records" },
    filters: { search: "Search", searchPlaceholder: "Employer, union, province, demand...", province: "Province", sector: "Sector", allProvinces: "All provinces", allSectors: "All sectors", category: "Category", stage: "Stage", actionType: "Action type" },
    map: { results: "results" },
    empty: { title: "Select a map record", text: "Strikes, wildcat actions, MESEM cases, and cases against unionists share one data model.", context: "Context sources" },
    submit: {
      label: "Review queue", title: "Report an action or source", category: "Category", province: "Province", caseTitle: "Title",
      caseTitlePlaceholder: "Example: Private Italian High School teachers on strike", summary: "Short summary",
      summaryPlaceholder: "What happened, who is involved, what demand or rights violation is at issue?", location: "Location name",
      locationPlaceholder: "Factory, school, courthouse, square...", date: "Date", sourceUrl: "Source URL",
      sourceTitle: "Source title", contact: "Contact", contactPlaceholder: "Optional email",
      note: "Reports are published only after editor review. Social media or witness leads alone are not verified records.",
      send: "Send for review", successTitle: "Report received",
      successLocal: "Supabase is not configured, so the report was saved to this browser's demo queue.",
      successRemote: "The report was saved to the Supabase review queue.",
      required: "Category, title, summary, province, and at least one valid source URL are required.",
      badCoords: "Coordinates must be entered together as valid numbers.",
    },
    common: { cancel: "Cancel", close: "Close" },
    methodology: {
      label: "Method", title: "Recording and verification principles",
      p1: "GrevTakip tracks workplace actions, general labor actions, solidarity actions, MESEM cases, and detention/arrest cases against unionists in one data model.",
      p2: "A strike decision and strike start are separate stages. A record can move from decision taken to started, ongoing, ended, or postponed/banned.",
      p3: "The source discipline is adapted from EÇT and Cornell: union statements, labor news, official records, and research reports are strong sources; social media and informant leads require corroboration.",
    },
    sources: { label: "Sources", title: "Starter source pool" },
    detail: { employer: "Employer / institution", union: "Union / organization", sector: "Sector", workers: "Approx. participants", startDate: "Start", endDate: "End", demands: "Demands / issues", locations: "Locations", timeline: "Timeline", sources: "Sources", detentionStatus: "Legal status", lastVerified: "Last verified", noData: "Not specified" },
    category: { labor_action: "Labor action", mesem: "MESEM", unionist_detention: "Jailed unionist" },
    stage: { decision_taken: "Strike decision taken", started: "Strike started", ongoing: "Ongoing", ended: "Ended", postponed_banned: "Postponed / banned", cancelled: "Cancelled / agreement", unknown: "Unknown" },
    actionType: { legal_strike: "Legal strike", fiili_wildcat: "Wildcat action", protest: "Protest", bargaining_dispute: "Bargaining dispute", solidarity_action: "Solidarity" },
    detentionStatus: { detained: "Detained", arrested: "Arrested", convicted: "Convicted", released: "Released", trial_ongoing: "Trial ongoing", unknown: "Unknown" },
  },
};

const state = {
  lang: "tr",
  cases: [],
  filtered: [],
  markers: new Map(),
  selectedCaseId: null,
  selectedLocationId: null,
  categoryFilters: new Set(TAXONOMY.category),
  stageFilters: new Set(TAXONOMY.stage),
  actionFilters: new Set(TAXONOMY.actionType),
  search: "",
  province: "",
  sector: "",
  map: null,
  sb: null,
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  setupLanguage();
  setupMap();
  setupModals();
  setupSubmissionForm();
  initSupabase();
  renderStaticSelects();
  renderFilterGroups();
  bindFilters();
  await loadData();
  renderAll();
}

function t(path) {
  return path.split(".").reduce((value, key) => value && value[key], COPY[state.lang]) || path;
}

function setupLanguage() {
  document.getElementById("lang-btn").addEventListener("click", () => {
    state.lang = state.lang === "tr" ? "en" : "tr";
    renderAll();
  });
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.getElementById("lang-btn").textContent = state.lang === "tr" ? "EN" : "TR";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
}

function setupMap() {
  state.map = L.map("map", { center: CONFIG.defaultCenter, zoom: CONFIG.defaultZoom, minZoom: 5, maxZoom: 13, zoomControl: true });
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: "abcd",
    maxZoom: 20,
  }).addTo(state.map);
  const labelPane = state.map.createPane("labels");
  labelPane.style.zIndex = 450;
  labelPane.style.pointerEvents = "none";
  TR_PROVINCES.forEach(([name, lat, lng]) => {
    L.marker([lat, lng], {
      pane: "labels",
      interactive: false,
      icon: L.divIcon({ className: "province-label", html: name, iconSize: [90, 16], iconAnchor: [45, 8] }),
    }).addTo(state.map);
  });
}

function setupModals() {
  [["open-submit-btn", "submit-modal"], ["methodology-btn", "methodology-modal"], ["sources-btn", "sources-modal"]].forEach(([buttonId, modalId]) => {
    document.getElementById(buttonId).addEventListener("click", () => openModal(modalId));
  });
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) closeModal(backdrop.id);
    });
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest(".modal-backdrop").id));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") document.querySelectorAll(".modal-backdrop.open").forEach((modal) => closeModal(modal.id));
  });
}

function openModal(id) {
  if (id === "submit-modal") {
    document.getElementById("submission-form").hidden = false;
    document.getElementById("submission-success").hidden = true;
  }
  const modal = document.getElementById(id);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !window.supabase) return;
  state.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function loadData() {
  if (state.sb) {
    try {
      const { data, error } = await state.sb
        .from("cases")
        .select("*, case_locations(*), case_sources(*), case_timeline(*)")
        .eq("verification_status", "verified")
        .order("start_date", { ascending: false });
      if (error) throw error;
      state.cases = (data || []).map(normalizeSupabaseCase);
      if (state.cases.length) return;
    } catch (error) {
      showLoadNotice(`Supabase okunamadı, seed veri kullanılıyor: ${error.message}`);
    }
  }
  try {
    const response = await fetch(CONFIG.seedPath, { cache: "no-store" });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const payload = await response.json();
    state.cases = (payload.cases || []).map(normalizeSeedCase);
  } catch (error) {
    showLoadNotice(`Seed veri yüklenemedi: ${error.message}`);
    state.cases = [];
  }
}

function normalizeSupabaseCase(row) {
  return normalizeSeedCase({
    ...row,
    action_type: row.action_type || null,
    detention_status: row.detention_status || null,
    locations: row.case_locations || [],
    sources: row.case_sources || [],
    timeline: row.case_timeline || [],
  });
}

function normalizeSeedCase(row) {
  return {
    id: row.id,
    category: row.category,
    action_type: row.action_type || null,
    stage: row.stage || "unknown",
    detention_status: row.detention_status || null,
    title: row.title || "",
    summary: row.summary || "",
    employer: row.employer || "",
    labor_organization: row.labor_organization || "",
    sector: row.sector || "",
    participant_count: row.participant_count ?? null,
    start_date: row.start_date || null,
    end_date: row.end_date || null,
    last_verified_at: row.last_verified_at || null,
    demands: row.demands || [],
    locations: (row.locations || []).map((location, index) => ({
      id: location.id || `${row.id}-loc-${index + 1}`,
      label: location.label || location.province || "",
      province: location.province || "",
      district: location.district || "",
      lat: Number(location.lat),
      lng: Number(location.lng),
      address: location.address || "",
    })),
    timeline: (row.timeline || []).map((item) => ({ date: item.date || null, stage: item.stage || "unknown", note: item.note || "" })),
    sources: (row.sources || []).map((source) => ({
      title: source.title || source.url,
      url: source.url,
      publisher: source.publisher || "",
      source_type: source.source_type || "news",
      published_at: source.published_at || null,
    })),
  };
}

function showLoadNotice(message) {
  const notice = document.createElement("div");
  notice.className = "load-error";
  notice.textContent = message;
  document.querySelector(".map-region").appendChild(notice);
  setTimeout(() => notice.remove(), 6500);
}

function renderAll() {
  applyLanguage();
  renderStaticSelects();
  renderDynamicSelects();
  renderFilterGroups();
  applyFilters();
  renderStats();
  renderLegend();
  renderMarkers();
  renderSelectedDetail();
}

function renderStaticSelects() {
  const provinceFilter = document.getElementById("province-filter");
  const provinceValue = state.province || provinceFilter.value || "";
  provinceFilter.innerHTML = [`<option value="">${t("filters.allProvinces")}</option>`]
    .concat(TR_PROVINCES.map(([name]) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`))
    .join("");
  provinceFilter.value = provinceValue;

  const submissionProvince = document.getElementById("submission-province");
  const submissionProvinceValue = submissionProvince.value || "";
  submissionProvince.innerHTML = `<option value=""></option>${TR_PROVINCES.map(([name]) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("")}`;
  submissionProvince.value = submissionProvinceValue;

  const submissionCategory = document.getElementById("submission-category");
  const submissionCategoryValue = submissionCategory.value || "labor_action";
  submissionCategory.innerHTML = TAXONOMY.category.map((category) => `<option value="${category}">${t(`category.${category}`)}</option>`).join("");
  submissionCategory.value = submissionCategoryValue;
}

function renderDynamicSelects() {
  const sectorFilter = document.getElementById("sector-filter");
  const sectorValue = state.sector || sectorFilter.value || "";
  const sectors = Array.from(new Set(state.cases.map((item) => item.sector).filter(Boolean))).sort((a, b) => a.localeCompare(b, "tr"));
  sectorFilter.innerHTML = [`<option value="">${t("filters.allSectors")}</option>`]
    .concat(sectors.map((sector) => `<option value="${escapeHtml(sector)}">${escapeHtml(sector)}</option>`))
    .join("");
  sectorFilter.value = sectors.includes(sectorValue) ? sectorValue : "";
}

function renderFilterGroups() {
  renderCheckboxGroup("category-filters", TAXONOMY.category, state.categoryFilters, "category");
  renderCheckboxGroup("stage-filters", TAXONOMY.stage, state.stageFilters, "stage");
  renderCheckboxGroup("action-filters", TAXONOMY.actionType, state.actionFilters, "actionType");
}

function renderCheckboxGroup(containerId, values, activeSet, labelKey) {
  document.getElementById(containerId).innerHTML = values.map((value) => {
    const checked = activeSet.has(value) ? "checked" : "";
    const dot = labelKey === "stage" ? `<span class="check-dot" style="background:${COLORS[value]}"></span>` : "<span></span>";
    return `<label class="check-row"><input type="checkbox" value="${value}" data-filter-group="${labelKey}" ${checked}><span>${t(`${labelKey}.${value}`)}</span>${dot}</label>`;
  }).join("");
}

function bindFilters() {
  document.getElementById("search-input").addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLocaleLowerCase("tr");
    updateView();
  });
  document.getElementById("province-filter").addEventListener("change", (event) => {
    state.province = event.target.value;
    updateView();
  });
  document.getElementById("sector-filter").addEventListener("change", (event) => {
    state.sector = event.target.value;
    updateView();
  });
  document.querySelector(".filters").addEventListener("change", (event) => {
    if (!event.target.matches("[data-filter-group]")) return;
    const group = event.target.dataset.filterGroup;
    const set = group === "category" ? state.categoryFilters : group === "stage" ? state.stageFilters : state.actionFilters;
    if (event.target.checked) set.add(event.target.value);
    else if (set.size > 1) set.delete(event.target.value);
    else event.target.checked = true;
    updateView();
  });
}

function updateView() {
  applyFilters();
  renderStats();
  renderMarkers();
  renderSelectedDetail();
}

function applyFilters() {
  const actionFilterActive = state.actionFilters.size < TAXONOMY.actionType.length;
  state.filtered = state.cases.filter((item) => {
    if (!state.categoryFilters.has(item.category)) return false;
    if (!state.stageFilters.has(item.stage)) return false;
    if (actionFilterActive && !state.actionFilters.has(item.action_type)) return false;
    if (state.sector && item.sector !== state.sector) return false;
    if (state.province && !item.locations.some((location) => location.province === state.province)) return false;
    return !state.search || searchableText(item).includes(state.search);
  });
  document.getElementById("result-count").textContent = state.filtered.length;
  if (state.selectedCaseId && !state.filtered.some((item) => item.id === state.selectedCaseId)) {
    state.selectedCaseId = null;
    state.selectedLocationId = null;
  }
}

function searchableText(item) {
  return [
    item.title, item.summary, item.employer, item.labor_organization, item.sector, item.demands.join(" "),
    item.locations.map((location) => `${location.label} ${location.province} ${location.district}`).join(" "),
  ].join(" ").toLocaleLowerCase("tr");
}

function renderStats() {
  document.getElementById("stat-total").textContent = state.cases.length;
  document.getElementById("stat-active").textContent = state.cases.filter((item) => ["started", "ongoing"].includes(item.stage)).length;
  document.getElementById("stat-decision").textContent = state.cases.filter((item) => item.stage === "decision_taken").length;
  document.getElementById("stat-mesem").textContent = state.cases.filter((item) => item.category === "mesem").length;
}

function renderLegend() {
  document.getElementById("legend-card").innerHTML = ["decision_taken", "started", "ongoing", "ended", "postponed_banned"]
    .map((stage) => `<div class="legend-row"><span class="legend-dot" style="background:${COLORS[stage]}"></span>${t(`stage.${stage}`)}</div>`)
    .join("");
}

function renderMarkers() {
  state.markers.forEach((marker) => marker.remove());
  state.markers.clear();
  state.filtered.forEach((item) => {
    item.locations.forEach((location) => {
      if (!Number.isFinite(location.lat) || !Number.isFinite(location.lng)) return;
      const selected = item.id === state.selectedCaseId && location.id === state.selectedLocationId;
      const marker = L.marker([location.lat, location.lng], {
        icon: L.divIcon({
          className: "",
          html: `<div class="case-marker ${selected ? "selected" : ""}" style="background:${COLORS[item.stage] || COLORS.unknown}">${markerLetter(item.category)}</div>`,
          iconSize: selected ? [34, 34] : [28, 28],
          iconAnchor: selected ? [17, 17] : [14, 14],
        }),
      }).addTo(state.map);
      marker.on("click", () => selectCase(item.id, location.id));
      marker.bindTooltip(`${item.title} (${location.province})`);
      state.markers.set(`${item.id}:${location.id}`, marker);
    });
  });
}

function markerLetter(category) {
  if (category === "mesem") return "M";
  if (category === "unionist_detention") return "S";
  return "G";
}

function selectCase(caseId, locationId) {
  state.selectedCaseId = caseId;
  state.selectedLocationId = locationId;
  renderMarkers();
  renderSelectedDetail();
}

function renderSelectedDetail() {
  const detail = document.getElementById("case-detail");
  const empty = document.getElementById("empty-detail");
  const item = state.cases.find((candidate) => candidate.id === state.selectedCaseId);
  if (!item) {
    detail.hidden = true;
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  detail.hidden = false;
  const labels = COPY[state.lang].detail;
  detail.innerHTML = `
    <header class="detail-header">
      <div class="chip-row">
        ${chip(t(`category.${item.category}`))}
        ${item.action_type ? chip(t(`actionType.${item.action_type}`)) : ""}
        ${chip(t(`stage.${item.stage}`), COLORS[item.stage])}
        ${item.detention_status ? chip(t(`detentionStatus.${item.detention_status}`)) : ""}
      </div>
      <h2>${escapeHtml(item.title)}</h2>
      <p class="case-summary">${escapeHtml(item.summary)}</p>
    </header>
    <div class="detail-stats">
      ${detailStat(labels.employer, item.employer || labels.noData)}
      ${detailStat(labels.union, item.labor_organization || labels.noData)}
      ${detailStat(labels.sector, item.sector || labels.noData)}
      ${detailStat(labels.workers, formatCount(item.participant_count) || labels.noData)}
      ${detailStat(labels.startDate, formatDate(item.start_date) || labels.noData)}
      ${detailStat(labels.endDate, formatDate(item.end_date) || labels.noData)}
      ${item.detention_status ? detailStat(labels.detentionStatus, t(`detentionStatus.${item.detention_status}`)) : ""}
      ${detailStat(labels.lastVerified, formatDate(item.last_verified_at) || labels.noData)}
    </div>
    ${item.demands.length ? detailSection(labels.demands, `<div class="chip-row">${item.demands.map((value) => chip(value)).join("")}</div>`) : ""}
    ${detailSection(labels.locations, renderLocations(item))}
    ${detailSection(labels.timeline, renderTimeline(item))}
    ${detailSection(labels.sources, renderSources(item))}
  `;
}

function chip(label, color) {
  const style = color ? `style="border-color:${color}55;color:${color};background:${color}12"` : "";
  return `<span class="chip" ${style}>${escapeHtml(label)}</span>`;
}

function detailStat(label, value) {
  return `<div class="detail-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function detailSection(title, content) {
  return `<section class="detail-section"><h3>${escapeHtml(title)}</h3>${content}</section>`;
}

function renderLocations(item) {
  return `<div class="location-list">${item.locations.map((location) => `
    <button class="location-item" type="button" data-case-id="${escapeAttr(item.id)}" data-location-id="${escapeAttr(location.id)}">
      <strong>${escapeHtml(location.label || location.province)}</strong>
      <span>${escapeHtml([location.district, location.province].filter(Boolean).join(", "))}</span>
    </button>`).join("")}</div>`;
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".location-item");
  if (!button) return;
  const item = state.cases.find((candidate) => candidate.id === button.dataset.caseId);
  const location = item && item.locations.find((candidate) => candidate.id === button.dataset.locationId);
  if (!location) return;
  selectCase(item.id, location.id);
  state.map.flyTo([location.lat, location.lng], Math.max(state.map.getZoom(), 8), { duration: 0.5 });
});

function renderTimeline(item) {
  if (!item.timeline.length) return `<p class="case-summary">${COPY[state.lang].detail.noData}</p>`;
  return `<div class="timeline">${item.timeline.map((entry) => `
    <div class="timeline-item">
      <div class="timeline-date">${formatDate(entry.date) || ""}</div>
      <div class="timeline-body"><strong>${escapeHtml(t(`stage.${entry.stage}`))}</strong><br>${escapeHtml(entry.note)}</div>
    </div>`).join("")}</div>`;
}

function renderSources(item) {
  if (!item.sources.length) return `<p class="case-summary">${COPY[state.lang].detail.noData}</p>`;
  return `<div class="source-items">${item.sources.map((source) => `
    <a class="source-link" href="${escapeAttr(source.url)}" target="_blank" rel="noreferrer">
      ${escapeHtml(source.title)}${source.publisher ? ` <span>(${escapeHtml(source.publisher)})</span>` : ""}
    </a>`).join("")}</div>`;
}

function setupSubmissionForm() {
  document.getElementById("submission-form").addEventListener("submit", submitLead);
}

async function submitLead(event) {
  event.preventDefault();
  const errorBox = document.getElementById("submission-error");
  errorBox.classList.remove("on");
  errorBox.textContent = "";
  const payload = collectSubmission();
  const validationError = validateSubmission(payload);
  if (validationError) {
    errorBox.textContent = validationError;
    errorBox.classList.add("on");
    return;
  }
  let remote = false;
  if (state.sb) {
    const { error } = await state.sb.from("case_submissions").insert(payload);
    if (error) {
      errorBox.textContent = error.message;
      errorBox.classList.add("on");
      return;
    }
    remote = true;
  } else {
    const saved = JSON.parse(localStorage.getItem("grevtakip_pending_submissions") || "[]");
    saved.push({ ...payload, saved_at: new Date().toISOString() });
    localStorage.setItem("grevtakip_pending_submissions", JSON.stringify(saved));
  }
  document.getElementById("submission-form").reset();
  document.getElementById("submission-form").hidden = true;
  document.getElementById("submission-success").hidden = false;
  document.getElementById("submission-success-copy").textContent = remote ? t("submit.successRemote") : t("submit.successLocal");
}

function collectSubmission() {
  const province = document.getElementById("submission-province").value;
  const center = PROVINCE_CENTER[province] || {};
  const latRaw = document.getElementById("submission-lat").value;
  const lngRaw = document.getElementById("submission-lng").value;
  return {
    category: document.getElementById("submission-category").value,
    title: document.getElementById("submission-title").value.trim(),
    summary: document.getElementById("submission-summary").value.trim(),
    province,
    location_label: document.getElementById("submission-location").value.trim() || province,
    event_date: document.getElementById("submission-date").value || null,
    lat: latRaw ? Number(latRaw) : center.lat || null,
    lng: lngRaw ? Number(lngRaw) : center.lng || null,
    source_url: document.getElementById("submission-source-url").value.trim(),
    source_title: document.getElementById("submission-source-title").value.trim(),
    contact_email: document.getElementById("submission-contact").value.trim(),
    status: "needs_review",
    raw_payload: {},
  };
}

function validateSubmission(payload) {
  if (!payload.category || !payload.title || !payload.summary || !payload.province || !isValidUrl(payload.source_url)) {
    return t("submit.required");
  }
  const latEntered = Boolean(document.getElementById("submission-lat").value);
  const lngEntered = Boolean(document.getElementById("submission-lng").value);
  if (latEntered !== lngEntered || !Number.isFinite(payload.lat) || !Number.isFinite(payload.lng)) return t("submit.badCoords");
  return "";
}

function isValidUrl(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol);
  } catch {
    return false;
  }
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(state.lang === "tr" ? "tr-TR" : "en-US", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function formatCount(value) {
  if (value === null || value === undefined || value === "") return "";
  return new Intl.NumberFormat(state.lang === "tr" ? "tr-TR" : "en-US").format(value);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
