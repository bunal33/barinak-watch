const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const CONFIG = {
  incidentPaths: ["data/incidents.json"],
  mesemPath: "data/mesem-schools.json",
  fallbackSeedPath: "data/seed-cases.json",
  defaultCenter: [39.05, 35.05],
  defaultZoom: 6,
  recentWorkerDeathMonths: 6,
};

const PROVINCES = [
  { key: "ADANA", name: "Adana", lat: 37.0, lng: 35.32 },
  { key: "ADIYAMAN", name: "Adıyaman", lat: 37.76, lng: 38.28 },
  { key: "AFYONKARAHISAR", name: "Afyonkarahisar", lat: 38.76, lng: 30.54 },
  { key: "AGRI", name: "Ağrı", lat: 39.72, lng: 43.05 },
  { key: "AKSARAY", name: "Aksaray", lat: 38.37, lng: 34.04 },
  { key: "AMASYA", name: "Amasya", lat: 40.65, lng: 35.83 },
  { key: "ANKARA", name: "Ankara", lat: 39.92, lng: 32.85 },
  { key: "ANTALYA", name: "Antalya", lat: 37.07, lng: 30.69 },
  { key: "ARDAHAN", name: "Ardahan", lat: 41.11, lng: 42.7 },
  { key: "ARTVIN", name: "Artvin", lat: 41.18, lng: 41.82 },
  { key: "AYDIN", name: "Aydın", lat: 37.84, lng: 28.0 },
  { key: "BALIKESIR", name: "Balıkesir", lat: 39.64, lng: 27.88 },
  { key: "BARTIN", name: "Bartın", lat: 41.64, lng: 32.34 },
  { key: "BATMAN", name: "Batman", lat: 37.88, lng: 41.13 },
  { key: "BAYBURT", name: "Bayburt", lat: 40.25, lng: 40.23 },
  { key: "BILECIK", name: "Bilecik", lat: 40.15, lng: 29.98 },
  { key: "BINGOL", name: "Bingöl", lat: 38.88, lng: 40.5 },
  { key: "BITLIS", name: "Bitlis", lat: 38.4, lng: 42.11 },
  { key: "BOLU", name: "Bolu", lat: 40.74, lng: 31.61 },
  { key: "BURDUR", name: "Burdur", lat: 37.72, lng: 30.29 },
  { key: "BURSA", name: "Bursa", lat: 40.18, lng: 29.06 },
  { key: "CANAKKALE", name: "Çanakkale", lat: 40.15, lng: 26.41 },
  { key: "CANKIRI", name: "Çankırı", lat: 40.6, lng: 33.62 },
  { key: "CORUM", name: "Çorum", lat: 40.55, lng: 34.96 },
  { key: "DENIZLI", name: "Denizli", lat: 37.78, lng: 29.09 },
  { key: "DIYARBAKIR", name: "Diyarbakır", lat: 37.91, lng: 40.22 },
  { key: "DUZCE", name: "Düzce", lat: 40.84, lng: 31.16 },
  { key: "EDIRNE", name: "Edirne", lat: 41.68, lng: 26.56 },
  { key: "ELAZIG", name: "Elazığ", lat: 38.68, lng: 39.22 },
  { key: "ERZINCAN", name: "Erzincan", lat: 39.75, lng: 39.5 },
  { key: "ERZURUM", name: "Erzurum", lat: 39.9, lng: 41.27 },
  { key: "ESKISEHIR", name: "Eskişehir", lat: 39.78, lng: 30.52 },
  { key: "GAZIANTEP", name: "Gaziantep", lat: 37.06, lng: 37.38 },
  { key: "GIRESUN", name: "Giresun", lat: 40.91, lng: 38.39 },
  { key: "GUMUSHANE", name: "Gümüşhane", lat: 40.46, lng: 39.48 },
  { key: "HAKKARI", name: "Hakkari", lat: 37.58, lng: 43.74 },
  { key: "HATAY", name: "Hatay", lat: 36.4, lng: 36.35 },
  { key: "IGDIR", name: "Iğdır", lat: 39.89, lng: 44.05 },
  { key: "ISPARTA", name: "Isparta", lat: 37.76, lng: 30.55 },
  { key: "ISTANBUL", name: "İstanbul", lat: 41.01, lng: 28.98 },
  { key: "IZMIR", name: "İzmir", lat: 38.42, lng: 27.14 },
  { key: "KAHRAMANMARAS", name: "Kahramanmaraş", lat: 37.58, lng: 36.93 },
  { key: "KARABUK", name: "Karabük", lat: 41.2, lng: 32.63 },
  { key: "KARAMAN", name: "Karaman", lat: 37.18, lng: 33.22 },
  { key: "KARS", name: "Kars", lat: 40.6, lng: 43.1 },
  { key: "KASTAMONU", name: "Kastamonu", lat: 41.38, lng: 33.78 },
  { key: "KAYSERI", name: "Kayseri", lat: 38.72, lng: 35.48 },
  { key: "KILIS", name: "Kilis", lat: 36.72, lng: 37.12 },
  { key: "KIRIKKALE", name: "Kırıkkale", lat: 39.85, lng: 33.52 },
  { key: "KIRKLARELI", name: "Kırklareli", lat: 41.73, lng: 27.22 },
  { key: "KIRSEHIR", name: "Kırşehir", lat: 39.15, lng: 34.16 },
  { key: "KOCAELI", name: "Kocaeli", lat: 40.77, lng: 29.94 },
  { key: "KONYA", name: "Konya", lat: 37.87, lng: 32.48 },
  { key: "KUTAHYA", name: "Kütahya", lat: 39.42, lng: 29.98 },
  { key: "MALATYA", name: "Malatya", lat: 38.35, lng: 38.31 },
  { key: "MANISA", name: "Manisa", lat: 38.61, lng: 27.43 },
  { key: "MARDIN", name: "Mardin", lat: 37.31, lng: 40.74 },
  { key: "MERSIN", name: "Mersin", lat: 36.8, lng: 34.63 },
  { key: "MUGLA", name: "Muğla", lat: 37.22, lng: 28.36 },
  { key: "MUS", name: "Muş", lat: 38.73, lng: 41.49 },
  { key: "NEVSEHIR", name: "Nevşehir", lat: 38.62, lng: 34.71 },
  { key: "NIGDE", name: "Niğde", lat: 37.97, lng: 34.68 },
  { key: "ORDU", name: "Ordu", lat: 40.98, lng: 37.88 },
  { key: "OSMANIYE", name: "Osmaniye", lat: 37.07, lng: 36.25 },
  { key: "RIZE", name: "Rize", lat: 41.03, lng: 40.52 },
  { key: "SAKARYA", name: "Sakarya", lat: 40.78, lng: 30.4 },
  { key: "SAMSUN", name: "Samsun", lat: 41.29, lng: 36.33 },
  { key: "SANLIURFA", name: "Şanlıurfa", lat: 37.16, lng: 38.79 },
  { key: "SIIRT", name: "Siirt", lat: 37.93, lng: 41.94 },
  { key: "SINOP", name: "Sinop", lat: 42.03, lng: 35.15 },
  { key: "SIRNAK", name: "Şırnak", lat: 37.52, lng: 42.46 },
  { key: "SIVAS", name: "Sivas", lat: 39.75, lng: 37.02 },
  { key: "TEKIRDAG", name: "Tekirdağ", lat: 40.98, lng: 27.51 },
  { key: "TOKAT", name: "Tokat", lat: 40.31, lng: 36.55 },
  { key: "TRABZON", name: "Trabzon", lat: 41.0, lng: 39.72 },
  { key: "TUNCELI", name: "Tunceli", lat: 39.11, lng: 39.55 },
  { key: "USAK", name: "Uşak", lat: 38.68, lng: 29.41 },
  { key: "VAN", name: "Van", lat: 38.5, lng: 43.37 },
  { key: "YALOVA", name: "Yalova", lat: 40.65, lng: 29.27 },
  { key: "YOZGAT", name: "Yozgat", lat: 39.82, lng: 34.81 },
  { key: "ZONGULDAK", name: "Zonguldak", lat: 41.45, lng: 31.79 },
];

const PROVINCE_BY_KEY = Object.fromEntries(PROVINCES.map((item) => [item.key, item]));
const PROVINCE_BY_NAME = Object.fromEntries(PROVINCES.map((item) => [item.name, item]));

const RECORD_TYPES = ["worker_death", "strike", "mesem_school", "union_labor_arrest"];
const ACTION_TYPES = ["legal_strike", "fiili_wildcat", "protest", "bargaining_dispute", "solidarity_action"];
const LAYER_ORDER = [
  "worker_death_recent",
  "strike_ongoing",
  "union_arrest_current",
  "strike_decision",
  "strike_ended",
  "strike_postponed",
  "worker_death_older",
  "mesem_school",
  "union_arrest_released",
];
const DEFAULT_LAYERS = ["worker_death_recent", "strike_ongoing", "union_arrest_current"];
const QUICK_LAYERS = ["worker_death_recent", "strike_ongoing", "union_arrest_current", "mesem_school"];

const LAYER_COLORS = {
  worker_death_recent: "#111111",
  worker_death_older: "#111111",
  strike_ongoing: "#d72d2d",
  strike_ended: "#2f8f4e",
  strike_decision: "#f7f4ea",
  strike_postponed: "#7c6f64",
  mesem_school: "#e3b505",
  union_arrest_current: "#e76f00",
  union_arrest_released: "#7c6f64",
};

const COPY = {
  tr: {
    nav: { filters: "Filtre", methodology: "Yöntem", sources: "Kaynaklar", submit: "+ Bildir" },
    common: { cancel: "Vazgeç", close: "Kapat", notSpecified: "Belirtilmedi", source: "Kaynak" },
    stats: { label: "Genel görünüm", total: "Toplam kayıt", deaths: "Son 6 ay iş cinayeti", strikes: "Süren grev", arrests: "Tutuklu emekçi" },
    filters: {
      panel: "Filtreler",
      panelTitle: "Kayıtları daralt",
      search: "Ara",
      searchPlaceholder: "İşveren, sendika, okul, il...",
      province: "İl",
      sector: "Sektör",
      allProvinces: "Tüm iller",
      allSectors: "Tüm sektörler",
      layers: "Katmanlar",
      actionType: "Grev / eylem türü",
    },
    map: { results: "sonuç" },
    empty: {
      title: "Haritadan bir kayıt seçin",
      text: "Varsayılan harita son altı aydaki iş cinayetlerini, süren grevleri ve güncel emek tutuklamalarını gösterir.",
      context: "Bağlam kaynakları",
    },
    recordType: {
      worker_death: "İş cinayeti",
      strike: "Grev / işçi eylemi",
      mesem_school: "MESEM okulu",
      union_labor_arrest: "Emek tutuklaması",
    },
    status: {
      fatality_recorded: "İş cinayeti kaydı",
      decision_taken: "Grev kararı alındı",
      ongoing: "Sürüyor",
      ended: "Sona erdi",
      postponed_banned: "Ertelendi / yasaklandı",
      active_school: "Aktif okul",
      currently_arrested: "Tutuklu",
      released: "Tahliye",
      unknown: "Bilinmiyor",
    },
    layer: {
      worker_death_recent: "Son 6 ay iş cinayeti",
      worker_death_older: "Eski iş cinayeti",
      strike_ongoing: "Süren grev",
      strike_ended: "Sona eren grev",
      strike_decision: "Grev kararı",
      strike_postponed: "Ertelenen / yasaklanan grev",
      mesem_school: "MESEM okulu",
      union_arrest_current: "Tutuklu",
      union_arrest_released: "Tahliye",
    },
    quickLayer: {
      worker_death_recent: "İş cinayeti",
      strike_ongoing: "Grev",
      union_arrest_current: "Tutuklu",
      mesem_school: "MESEM",
    },
    actionType: {
      legal_strike: "Yasal grev",
      fiili_wildcat: "Fiili / wildcat",
      protest: "Protesto",
      bargaining_dispute: "TİS / pazarlık uyuşmazlığı",
      solidarity_action: "Dayanışma eylemi",
    },
    detail: {
      summary: "Özet",
      workerName: "İşçi",
      age: "Yaş",
      employer: "İşveren / kurum",
      sector: "Sektör",
      date: "Tarih",
      cause: "Ölüm nedeni / olay",
      fatalityCount: "İş cinayeti sayısı",
      legalStatus: "Hukuki süreç",
      union: "Sendika / örgüt",
      actionType: "Eylem türü",
      workers: "Yaklaşık katılımcı",
      demands: "Talepler / konular",
      decisionDate: "Karar tarihi",
      startDate: "Başlangıç",
      endDate: "Bitiş",
      schoolName: "Okul adı",
      institutionCode: "Kurum kodu",
      activeDate: "Bilinen aktiflik",
      linkedIncidents: "Bağlı olay sayısı",
      person: "Kişi / grup",
      role: "Görev / rol",
      detentionDate: "Tutuklama tarihi",
      custodyStatus: "Mevcut durum",
      accusation: "Suçlama / hukuki durum",
      locations: "Konumlar",
      timeline: "Zaman çizelgesi",
      sources: "Kaynaklar",
      lastVerified: "Son teyit",
      geocode: "Konum kesinliği",
    },
    geocodePrecision: {
      exact: "tam koordinat",
      district_centroid: "ilçe merkezi",
      province_centroid: "il merkezi",
      unknown: "bilinmiyor",
    },
    submit: {
      label: "İnceleme kuyruğu",
      title: "Eylem veya kaynak bildir",
      recordType: "Kayıt türü",
      province: "İl",
      caseTitle: "Başlık",
      caseTitlePlaceholder: "Örn. Özel İtalyan Lisesi öğretmenleri grevde",
      summary: "Kısa özet",
      summaryPlaceholder: "Ne oldu, kimler dahil, hangi talep veya hak ihlali var?",
      location: "Konum adı",
      locationPlaceholder: "Fabrika, okul, adliye, meydan...",
      date: "Tarih",
      sourceUrl: "Kaynak URL",
      sourceTitle: "Kaynak başlığı",
      contact: "İletişim",
      contactPlaceholder: "İsteğe bağlı e-posta",
      note: "Bildirimler editör incelemesinden sonra yayımlanır. Sosyal medya veya tanık aktarımı tek başına doğrulanmış kayıt sayılmaz.",
      send: "İncelemeye gönder",
      successTitle: "Bildirim alındı",
      successLocal: "Supabase yapılandırılmadığı için bildirim bu tarayıcıda demo kuyruğuna kaydedildi.",
      successRemote: "Bildirim Supabase inceleme kuyruğuna kaydedildi.",
      missing: "Kayıt türü, başlık, özet, il ve kaynak URL zorunludur.",
      badUrl: "Kaynak URL http veya https ile başlamalıdır.",
      badCoords: "Koordinatlar birlikte girilmeli ve sayı olmalıdır.",
    },
    methodology: {
      label: "Yöntem",
      title: "Kayıt ve doğrulama ilkeleri",
      p1: "GrevTakip; grev, fiili eylem, iş cinayeti, MESEM okulu ve emek örgütlerine yönelik tutuklama kayıtlarını tek haritada gösterir. Bir nokta bir konum örneğidir; aynı vaka birden çok konuma sahip olabilir.",
      p2: "Grevler için “grev kararı alındı”, “sürüyor”, “sona erdi” ve “ertelendi/yasaklandı” ayrıdır. İş cinayeti, MESEM okulu ve tutuklama kayıtları kendi durum etiketlerini kullanır.",
      p3: "EÇT ve Cornell yaklaşımından uyarlanan kaynak disiplini kullanılır: sendika açıklamaları, emek haberleri, resmi belgeler ve araştırma raporları güçlü kaynak sayılır; sosyal medya ve tanık aktarımı ek teyit ister.",
    },
    sources: { label: "Kaynaklar", title: "Başlangıç kaynak havuzu" },
  },
  en: {
    nav: { filters: "Filter", methodology: "Method", sources: "Sources", submit: "+ Report" },
    common: { cancel: "Cancel", close: "Close", notSpecified: "Not specified", source: "Source" },
    stats: { label: "Overview", total: "Total records", deaths: "Recent workplace killings", strikes: "Ongoing strikes", arrests: "Jailed labor figures" },
    filters: {
      panel: "Filters",
      panelTitle: "Narrow records",
      search: "Search",
      searchPlaceholder: "Employer, union, school, province...",
      province: "Province",
      sector: "Sector",
      allProvinces: "All provinces",
      allSectors: "All sectors",
      layers: "Layers",
      actionType: "Strike / action type",
    },
    map: { results: "results" },
    empty: {
      title: "Select a record on the map",
      text: "By default the map shows workplace killings in the last six months, ongoing strikes, and current labor arrests.",
      context: "Context sources",
    },
    recordType: {
      worker_death: "Workplace killing",
      strike: "Strike / labor action",
      mesem_school: "MESEM school",
      union_labor_arrest: "Labor arrest",
    },
    status: {
      fatality_recorded: "Workplace killing recorded",
      decision_taken: "Strike decision taken",
      ongoing: "Ongoing",
      ended: "Ended",
      postponed_banned: "Postponed / banned",
      active_school: "Active school",
      currently_arrested: "Currently jailed",
      released: "Released",
      unknown: "Unknown",
    },
    layer: {
      worker_death_recent: "Recent workplace killing",
      worker_death_older: "Older workplace killing",
      strike_ongoing: "Ongoing strike",
      strike_ended: "Ended strike",
      strike_decision: "Strike decision",
      strike_postponed: "Postponed / banned strike",
      mesem_school: "MESEM school",
      union_arrest_current: "Jailed",
      union_arrest_released: "Released",
    },
    quickLayer: {
      worker_death_recent: "Killings",
      strike_ongoing: "Strikes",
      union_arrest_current: "Jailed",
      mesem_school: "MESEM",
    },
    actionType: {
      legal_strike: "Legal strike",
      fiili_wildcat: "Wildcat / de facto",
      protest: "Protest",
      bargaining_dispute: "Bargaining dispute",
      solidarity_action: "Solidarity action",
    },
    detail: {
      summary: "Summary",
      workerName: "Worker",
      age: "Age",
      employer: "Employer / institution",
      sector: "Sector",
      date: "Date",
      cause: "Cause / incident",
      fatalityCount: "Fatalities",
      legalStatus: "Legal process",
      union: "Union / organization",
      actionType: "Action type",
      workers: "Approx. participants",
      demands: "Demands / issues",
      decisionDate: "Decision date",
      startDate: "Start",
      endDate: "End",
      schoolName: "School name",
      institutionCode: "Institution code",
      activeDate: "Known active",
      linkedIncidents: "Linked incidents",
      person: "Person / group",
      role: "Role",
      detentionDate: "Arrest date",
      custodyStatus: "Current status",
      accusation: "Accusation / legal status",
      locations: "Locations",
      timeline: "Timeline",
      sources: "Sources",
      lastVerified: "Last verified",
      geocode: "Geocode precision",
    },
    geocodePrecision: {
      exact: "exact",
      district_centroid: "district centroid",
      province_centroid: "province centroid",
      unknown: "unknown",
    },
    submit: {
      label: "Review queue",
      title: "Report an action or source",
      recordType: "Record type",
      province: "Province",
      caseTitle: "Title",
      caseTitlePlaceholder: "E.g. Italian High School teachers are on strike",
      summary: "Short summary",
      summaryPlaceholder: "What happened, who is involved, what demand or rights violation is at issue?",
      location: "Location name",
      locationPlaceholder: "Factory, school, courthouse, square...",
      date: "Date",
      sourceUrl: "Source URL",
      sourceTitle: "Source title",
      contact: "Contact",
      contactPlaceholder: "Optional email",
      note: "Reports are published after editorial review. Social media or witness accounts alone are not treated as verified records.",
      send: "Send for review",
      successTitle: "Report received",
      successLocal: "Supabase is not configured, so the report was saved to this browser's demo queue.",
      successRemote: "The report was saved to the Supabase review queue.",
      missing: "Record type, title, summary, province, and source URL are required.",
      badUrl: "The source URL must start with http or https.",
      badCoords: "Coordinates must be entered together and must be numbers.",
    },
    methodology: {
      label: "Method",
      title: "Recording and verification rules",
      p1: "GrevTakip maps strikes, de facto labor actions, workplace killings, MESEM schools, and labor-organization arrests in one tracker. One dot is one mapped location instance; one case can have multiple locations.",
      p2: "Strike records distinguish decision taken, ongoing, ended, and postponed / banned. Workplace killing, MESEM school, and arrest records use their own status labels.",
      p3: "The source discipline adapts EÇT and Cornell practice: union statements, labor news, official documents, and research reports are stronger sources; social media and witness reports need corroboration.",
    },
    sources: { label: "Sources", title: "Initial source pool" },
  },
};

const state = {
  lang: "tr",
  records: [],
  filtered: [],
  markers: new Map(),
  selectedRecordId: null,
  map: null,
  sb: null,
  layerFilters: new Set(DEFAULT_LAYERS),
  actionFilters: new Set(ACTION_TYPES),
  search: "",
  province: "",
  sector: "",
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  initMap();
  initSupabase();
  bindStaticEvents();
  await loadRecords();
  populateControls();
  applyTranslations();
  applyFilters();
}

function initMap() {
  state.map = L.map("map", { zoomControl: false }).setView(CONFIG.defaultCenter, CONFIG.defaultZoom);
  L.control.zoom({ position: "topright" }).addTo(state.map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(state.map);
}

function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !window.supabase) return;
  state.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function loadRecords() {
  if (state.sb) {
    const { data, error } = await state.sb
      .from("cases")
      .select("*, case_locations(*), case_sources(*), case_timeline(*)")
      .eq("verification_status", "verified");
    if (!error && Array.isArray(data)) {
      state.records = data.map(normalizeSupabaseRecord).filter(hasPublicSource);
      return;
    }
    showLoadNotice(`Supabase okunamadı, statik veri kullanılıyor: ${error?.message || "bilinmeyen hata"}`);
  }

  try {
    const [incidentPayloads, mesemSchools] = await Promise.all([
      Promise.all(CONFIG.incidentPaths.map(fetchJson)),
      fetchJson(CONFIG.mesemPath),
    ]);
    state.records = [...incidentPayloads.flatMap(extractRecords), ...extractRecords(mesemSchools)]
      .map(normalizeRecord)
      .filter(hasPublicSource);
  } catch (error) {
    showLoadNotice(`Yeni veri dosyaları okunamadı, seed yedeği deneniyor: ${error.message}`);
    const fallback = await fetchJson(CONFIG.fallbackSeedPath);
    state.records = extractRecords(fallback).map(normalizeRecord).filter(hasPublicSource);
  }
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${path} ${response.status}`);
  return response.json();
}

function extractRecords(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.records)) return payload.records;
  if (Array.isArray(payload.cases)) return payload.cases;
  return [];
}

function normalizeSupabaseRecord(row) {
  return normalizeRecord({
    ...row,
    locations: row.case_locations || row.locations || [],
    sources: row.case_sources || row.sources || [],
    timeline: row.case_timeline || row.timeline || [],
  });
}

function normalizeRecord(raw) {
  const provinceFromKey = raw.province_key ? PROVINCE_BY_KEY[raw.province_key]?.name : null;
  const fallbackProvince = provinceFromKey || raw.province || "";
  const topLocation = raw.lat || raw.lng || fallbackProvince ? [{
    id: `${raw.id || raw.public_id || raw.title}-loc`,
    label: raw.location_label || raw.school_name || raw.employer || raw.title,
    province_key: raw.province_key,
    province: fallbackProvince,
    district: raw.district || "",
    lat: raw.lat,
    lng: raw.lng,
    geocode_precision: raw.geocode_precision,
    fatality_count: raw.fatality_count,
  }] : [];

  const locations = (raw.locations?.length ? raw.locations : topLocation).map((location, index) => {
    const provinceKey = location.province_key || raw.province_key || keyForProvince(location.province || fallbackProvince);
    const province = PROVINCE_BY_KEY[provinceKey]?.name || location.province || fallbackProvince;
    const center = PROVINCE_BY_KEY[provinceKey] || PROVINCE_BY_NAME[province] || {};
    return {
      id: location.id || `${raw.id || raw.public_id || "record"}-${index}`,
      label: location.label || raw.location_label || raw.school_name || raw.employer || raw.title || province,
      province_key: provinceKey || "",
      province,
      district: cleanTitle(location.district || raw.district || ""),
      lat: finiteNumber(location.lat) ?? finiteNumber(raw.lat) ?? center.lat ?? null,
      lng: finiteNumber(location.lng) ?? finiteNumber(raw.lng) ?? center.lng ?? null,
      geocode_precision: location.geocode_precision || raw.geocode_precision || (location.lat && location.lng ? "exact" : "province_centroid"),
      fatality_count: finiteNumber(location.fatality_count) ?? null,
    };
  }).filter((location) => Number.isFinite(location.lat) && Number.isFinite(location.lng));

  const record = {
    id: String(raw.id || raw.public_id || slugify(raw.title || cryptoRandomId())),
    public_id: raw.public_id || raw.id || "",
    record_type: raw.record_type || raw.category || "strike",
    status: raw.status || raw.stage || "unknown",
    action_type: raw.action_type || null,
    title: raw.title || raw.school_name || "İsimsiz kayıt",
    summary: raw.summary || "",
    worker_name: raw.worker_name || "",
    worker_age: raw.worker_age || raw.age || null,
    person_name: raw.person_name || raw.person || "",
    school_name: raw.school_name || "",
    institution_code: raw.institution_code || "",
    employer: raw.employer || "",
    labor_organization: raw.labor_organization || raw.union || "",
    role: raw.role || "",
    sector: raw.sector || "",
    cause: raw.cause || raw.cause_of_death || "",
    demands: Array.isArray(raw.demands) ? raw.demands : stringList(raw.demands),
    participant_count: raw.participant_count || null,
    decision_date: raw.decision_date || null,
    start_date: raw.start_date || null,
    end_date: raw.end_date || null,
    death_date: raw.death_date || raw.event_date || null,
    detention_date: raw.detention_date || raw.arrest_date || null,
    known_active_date: raw.known_active_date || raw.active_date || null,
    custody_status: raw.custody_status || raw.detention_status || "",
    accusation: raw.accusation || "",
    legal_status: raw.legal_status || "",
    linked_incident_count: raw.linked_incident_count ?? null,
    last_verified_at: raw.last_verified_at || raw.updated_at || null,
    locations,
    sources: (raw.sources || []).map((source) => ({
      title: source.title || source.source_title || source.url || "",
      url: source.url || source.source_url || "",
      publisher: source.publisher || source.source_publisher || "",
      type: source.type || source.source_type || "",
      published_at: source.published_at || source.source_published_at || null,
    })),
    timeline: (raw.timeline || []).map((item) => ({
      date: item.date || null,
      status: item.status || item.stage || raw.status || "unknown",
      note: item.note || "",
    })),
  };

  record.layer = getLayer(record);
  record.search_blob = buildSearchBlob(record);
  return record;
}

function hasPublicSource(record) {
  return record.sources.some((source) => /^https?:\/\//i.test(source.url));
}

function getLayer(record) {
  if (record.record_type === "worker_death") {
    return isRecentWorkerDeath(record) ? "worker_death_recent" : "worker_death_older";
  }
  if (record.record_type === "mesem_school") return "mesem_school";
  if (record.record_type === "union_labor_arrest") {
    return record.status === "released" ? "union_arrest_released" : "union_arrest_current";
  }
  if (record.status === "ended") return "strike_ended";
  if (record.status === "decision_taken") return "strike_decision";
  if (record.status === "postponed_banned") return "strike_postponed";
  return "strike_ongoing";
}

function isRecentWorkerDeath(record) {
  const date = parseDate(record.death_date || record.start_date || record.decision_date);
  if (!date) return false;
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - CONFIG.recentWorkerDeathMonths);
  return date >= cutoff;
}

function recentWorkerDeathTotal() {
  const recentDeaths = state.records.filter((record) => record.record_type === "worker_death" && isRecentWorkerDeath(record));
  return recentDeaths.reduce((total, record) => total + fatalityCount(record), 0);
}

function fatalityCount(record) {
  const linkedCount = finiteNumber(record.linked_incident_count);
  if (linkedCount > 0) return linkedCount;
  const locationTotal = record.locations.reduce((total, location) => total + (finiteNumber(location.fatality_count) || 0), 0);
  return locationTotal > 0 ? locationTotal : 1;
}

function populateControls() {
  const provinceOptions = [`<option value="">${t("filters.allProvinces")}</option>`]
    .concat(PROVINCES.map((province) => `<option value="${escapeHtml(province.name)}">${escapeHtml(province.name)}</option>`));
  document.getElementById("province-filter").innerHTML = provinceOptions.join("");
  document.getElementById("submission-province").innerHTML = `<option value=""></option>${PROVINCES.map((province) => `<option value="${escapeHtml(province.name)}">${escapeHtml(province.name)}</option>`).join("")}`;

  const sectors = Array.from(new Set(state.records.map((item) => item.sector).filter(Boolean))).sort((a, b) => a.localeCompare(b, "tr"));
  document.getElementById("sector-filter").innerHTML = [`<option value="">${t("filters.allSectors")}</option>`]
    .concat(sectors.map((sector) => `<option value="${escapeHtml(sector)}">${escapeHtml(sector)}</option>`)).join("");

  document.getElementById("submission-record-type").innerHTML = RECORD_TYPES
    .map((recordType) => `<option value="${recordType}">${t(`recordType.${recordType}`)}</option>`)
    .join("");

  renderCheckboxGroup("layer-filters", LAYER_ORDER, state.layerFilters, "layer");
  renderCheckboxGroup("action-filters", ACTION_TYPES, state.actionFilters, "actionType");
}

function renderCheckboxGroup(containerId, values, selectedSet, labelKey) {
  document.getElementById(containerId).innerHTML = values.map((value) => {
    const checked = selectedSet.has(value) ? "checked" : "";
    const color = labelKey === "layer" ? LAYER_COLORS[value] : "#ffffff";
    const border = value === "strike_decision" ? "border-color:#575047" : "";
    return `
      <label class="check-row">
        <input type="checkbox" value="${escapeHtml(value)}" data-filter-group="${labelKey}" ${checked}>
        <span>${escapeHtml(t(`${labelKey}.${value}`))}</span>
        <i class="check-dot" style="background:${color};${border}"></i>
      </label>`;
  }).join("");
}

function bindStaticEvents() {
  document.getElementById("search-input").addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLocaleLowerCase("tr");
    applyFilters();
  });
  document.getElementById("province-filter").addEventListener("change", (event) => {
    state.province = event.target.value;
    applyFilters();
  });
  document.getElementById("sector-filter").addEventListener("change", (event) => {
    state.sector = event.target.value;
    applyFilters();
  });
  document.querySelector(".filters").addEventListener("change", (event) => {
    if (!event.target.matches("[data-filter-group]")) return;
    const group = event.target.dataset.filterGroup;
    const set = group === "layer" ? state.layerFilters : state.actionFilters;
    event.target.checked ? set.add(event.target.value) : set.delete(event.target.value);
    applyFilters();
  });
  document.getElementById("mobile-chipbar").addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick-layer]");
    if (!button) return;
    const layer = button.dataset.quickLayer;
    state.layerFilters.has(layer) ? state.layerFilters.delete(layer) : state.layerFilters.add(layer);
    populateControls();
    applyFilters();
  });
  document.getElementById("mobile-filter-btn").addEventListener("click", openFilters);
  document.getElementById("close-filter-btn").addEventListener("click", closeFilters);
  document.getElementById("drawer-scrim").addEventListener("click", closeFilters);
  document.getElementById("lang-btn").addEventListener("click", toggleLanguage);
  document.getElementById("open-submit-btn").addEventListener("click", () => openModal("submit-modal"));
  document.getElementById("methodology-btn").addEventListener("click", () => openModal("methodology-modal"));
  document.getElementById("sources-btn").addEventListener("click", () => openModal("sources-modal"));
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeOpenModal));
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) closeOpenModal();
    });
  });
  document.getElementById("submission-form").addEventListener("submit", submitReport);
}

function openFilters() {
  document.body.classList.add("filters-open");
  document.getElementById("drawer-scrim").hidden = false;
  setTimeout(() => state.map.invalidateSize(), 200);
}

function closeFilters() {
  document.body.classList.remove("filters-open");
  document.getElementById("drawer-scrim").hidden = true;
}

function toggleLanguage() {
  state.lang = state.lang === "tr" ? "en" : "tr";
  document.documentElement.lang = state.lang;
  document.getElementById("lang-btn").textContent = state.lang === "tr" ? "EN" : "TR";
  populateControls();
  applyTranslations();
  applyFilters();
  if (state.selectedRecordId) renderDetail(getSelectedRecord());
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
}

function applyFilters() {
  state.filtered = state.records.filter((record) => {
    if (!state.layerFilters.has(record.layer)) return false;
    if (state.province && !record.locations.some((location) => location.province === state.province)) return false;
    if (state.sector && record.sector !== state.sector) return false;
    if (record.record_type === "strike" && record.action_type && !state.actionFilters.has(record.action_type)) return false;
    if (state.search && !record.search_blob.includes(state.search)) return false;
    return true;
  });

  if (state.selectedRecordId && !state.filtered.some((record) => record.id === state.selectedRecordId)) {
    clearSelection();
  }

  updateStats();
  renderLegend();
  renderMobileChips();
  renderMarkers();
  document.getElementById("result-count").textContent = state.filtered.length;
}

function updateStats() {
  document.getElementById("stat-total").textContent = state.records.length;
  document.getElementById("stat-deaths").textContent = formatCount(recentWorkerDeathTotal());
  document.getElementById("stat-strikes").textContent = state.records.filter((record) => record.layer === "strike_ongoing").length;
  document.getElementById("stat-arrests").textContent = state.records.filter((record) => record.layer === "union_arrest_current").length;
}

function renderLegend() {
  document.getElementById("legend-card").innerHTML = LAYER_ORDER.map((layer) => {
    const border = layer === "strike_decision" ? "border-color:#575047" : "";
    return `<div class="legend-row"><span class="legend-dot" style="background:${LAYER_COLORS[layer]};${border}"></span>${escapeHtml(t(`layer.${layer}`))}</div>`;
  }).join("");
}

function renderMobileChips() {
  const counts = Object.fromEntries(QUICK_LAYERS.map((layer) => [layer, state.records.filter((record) => record.layer === layer).length]));
  document.getElementById("mobile-chipbar").innerHTML = QUICK_LAYERS.map((layer) => {
    const active = state.layerFilters.has(layer) ? "active" : "";
    return `<button class="quick-chip ${active}" type="button" data-quick-layer="${layer}">
      <span class="quick-dot" style="background:${LAYER_COLORS[layer]}"></span>${escapeHtml(t(`quickLayer.${layer}`))} ${counts[layer]}
    </button>`;
  }).join("");
}

function renderMarkers() {
  state.markers.forEach((marker) => marker.remove());
  state.markers.clear();

  state.filtered.forEach((record) => {
    record.locations.forEach((location) => {
      const selected = record.id === state.selectedRecordId ? "selected" : "";
      const marker = L.marker([location.lat, location.lng], {
        icon: L.divIcon({
          className: "case-marker-wrap",
          html: `<div class="case-marker ${record.layer} ${selected}">${escapeHtml(markerLetter(record, location))}</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        }),
        title: record.title,
      }).addTo(state.map);
      marker.on("click", () => selectRecord(record.id, location));
      state.markers.set(`${record.id}:${location.id}`, marker);
    });
  });
}

function markerLetter(record, location) {
  if (record.record_type === "worker_death") {
    const count = finiteNumber(location?.fatality_count) ?? fatalityCount(record);
    if (count > 1) return count > 999 ? "999+" : String(count);
    return "İC";
  }
  if (record.record_type === "mesem_school") return "M";
  if (record.record_type === "union_labor_arrest") return "T";
  return "G";
}

function selectRecord(recordId, location) {
  state.selectedRecordId = recordId;
  document.body.classList.add("detail-open");
  closeFilters();
  renderDetail(getSelectedRecord());
  renderMarkers();
  if (location) state.map.flyTo([location.lat, location.lng], Math.max(state.map.getZoom(), 8), { duration: 0.45 });
  setTimeout(() => state.map.invalidateSize(), 220);
}

function clearSelection() {
  state.selectedRecordId = null;
  document.body.classList.remove("detail-open");
  document.getElementById("case-detail").hidden = true;
  document.getElementById("empty-detail").hidden = false;
  renderMarkers();
}

function getSelectedRecord() {
  return state.records.find((record) => record.id === state.selectedRecordId) || null;
}

function renderDetail(record) {
  const detail = document.getElementById("case-detail");
  const empty = document.getElementById("empty-detail");
  if (!record) {
    clearSelection();
    return;
  }
  empty.hidden = true;
  detail.hidden = false;

  detail.innerHTML = `
    <header class="detail-header">
      <div class="detail-topline">
        <div class="chip-row">
          ${chip(t(`recordType.${record.record_type}`), null)}
          ${chip(t(`status.${record.status}`), LAYER_COLORS[record.layer], record.layer === "strike_decision")}
        </div>
        <div class="detail-actions">
          <button class="icon-btn" type="button" data-close-detail aria-label="${escapeHtml(t("common.close"))}">×</button>
        </div>
      </div>
      <h2>${escapeHtml(record.title)}</h2>
      <p class="case-summary">${escapeHtml(record.summary || t("common.notSpecified"))}</p>
    </header>
    <div class="detail-stats">${renderTypeStats(record)}</div>
    ${record.demands.length ? detailSection(t("detail.demands"), `<div class="chip-row">${record.demands.map((demand) => chip(demand)).join("")}</div>`) : ""}
    ${detailSection(t("detail.locations"), renderLocations(record))}
    ${detailSection(t("detail.timeline"), renderTimeline(record))}
    ${detailSection(t("detail.sources"), renderSources(record))}
  `;
  detail.querySelector("[data-close-detail]").addEventListener("click", clearSelection);
}

function renderTypeStats(record) {
  if (record.record_type === "worker_death") {
    return [
      detailStat(t("detail.workerName"), record.worker_name),
      detailStat(t("detail.age"), record.worker_age),
      detailStat(t("detail.employer"), record.employer),
      detailStat(t("detail.sector"), record.sector),
      detailStat(t("detail.date"), formatDate(record.death_date)),
      detailStat(t("detail.cause"), record.cause),
      detailStat(t("detail.fatalityCount"), formatCount(fatalityCount(record))),
      detailStat(t("detail.legalStatus"), record.legal_status),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "mesem_school") {
    return [
      detailStat(t("detail.schoolName"), record.school_name || record.title),
      detailStat(t("detail.institutionCode"), record.institution_code),
      detailStat(t("detail.sector"), record.sector),
      detailStat(t("detail.activeDate"), formatDate(record.known_active_date)),
      detailStat(t("detail.linkedIncidents"), record.linked_incident_count),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "union_labor_arrest") {
    return [
      detailStat(t("detail.person"), record.person_name || record.title),
      detailStat(t("detail.union"), record.labor_organization),
      detailStat(t("detail.role"), record.role),
      detailStat(t("detail.detentionDate"), formatDate(record.detention_date)),
      detailStat(t("detail.custodyStatus"), t(`status.${record.status}`)),
      detailStat(t("detail.accusation"), record.accusation || record.legal_status),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  return [
    detailStat(t("detail.employer"), record.employer),
    detailStat(t("detail.union"), record.labor_organization),
    detailStat(t("detail.sector"), record.sector),
    detailStat(t("detail.actionType"), record.action_type ? t(`actionType.${record.action_type}`) : ""),
    detailStat(t("detail.workers"), formatCount(record.participant_count)),
    detailStat(t("detail.decisionDate"), formatDate(record.decision_date)),
    detailStat(t("detail.startDate"), formatDate(record.start_date)),
    detailStat(t("detail.endDate"), formatDate(record.end_date)),
    detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
  ].join("");
}

function detailStat(label, value) {
  const display = value || value === 0 ? String(value) : t("common.notSpecified");
  return `<div class="detail-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(display)}</strong></div>`;
}

function detailSection(title, content) {
  return `<section class="detail-section"><h3>${escapeHtml(title)}</h3>${content}</section>`;
}

function renderLocations(record) {
  return `<div class="location-list">${record.locations.map((location) => `
    <div class="location-row">
      <strong>${escapeHtml(location.label)}</strong>
      <span>${escapeHtml(renderLocationSubtitle(location))}</span><br>
      <span>${escapeHtml(t("detail.geocode"))}: ${escapeHtml(t(`geocodePrecision.${location.geocode_precision || "unknown"}`))}</span>
    </div>`).join("")}</div>`;
}

function renderLocationSubtitle(location) {
  const parts = [location.district, location.province].filter(Boolean);
  if (location.fatality_count) parts.push(`${formatCount(location.fatality_count)} ${state.lang === "tr" ? "iş cinayeti" : "fatalities"}`);
  return parts.join(", ");
}

function renderTimeline(record) {
  if (!record.timeline.length) return `<p class="case-summary">${escapeHtml(t("common.notSpecified"))}</p>`;
  return `<div class="timeline-list">${record.timeline.map((item) => `
    <div class="timeline-row">
      <div class="timeline-date">${escapeHtml(formatDate(item.date) || "")}</div>
      <div class="timeline-body"><strong>${escapeHtml(t(`status.${item.status}`))}</strong>${escapeHtml(item.note)}</div>
    </div>`).join("")}</div>`;
}

function renderSources(record) {
  return `<div class="source-list">${record.sources.map((source) => `
    <a class="source-row" href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">
      <strong>${escapeHtml(source.title || t("common.source"))}</strong>
      <span>${escapeHtml([source.publisher, formatDate(source.published_at)].filter(Boolean).join(" · "))}</span>
    </a>`).join("")}</div>`;
}

function chip(label, color, outlined = false) {
  const dot = color ? `<span class="chip-dot" style="background:${color};${outlined ? "border-color:#575047" : ""}"></span>` : "";
  return `<span class="chip">${dot}${escapeHtml(label)}</span>`;
}

async function submitReport(event) {
  event.preventDefault();
  const errorBox = document.getElementById("submission-error");
  errorBox.textContent = "";
  const payload = buildSubmissionPayload();
  const validationError = validateSubmission(payload);
  if (validationError) {
    errorBox.textContent = validationError;
    return;
  }

  try {
    if (state.sb) {
      const { error } = await state.sb.from("case_submissions").insert(payload);
      if (error) throw error;
      showSubmissionSuccess(t("submit.successRemote"));
    } else {
      const pending = JSON.parse(localStorage.getItem("grevtakip_pending_submissions") || "[]");
      pending.push({ ...payload, local_id: cryptoRandomId(), created_at: new Date().toISOString() });
      localStorage.setItem("grevtakip_pending_submissions", JSON.stringify(pending));
      showSubmissionSuccess(t("submit.successLocal"));
    }
  } catch (error) {
    errorBox.textContent = error.message || String(error);
  }
}

function buildSubmissionPayload() {
  const province = document.getElementById("submission-province").value;
  const center = PROVINCE_BY_NAME[province] || {};
  const latRaw = document.getElementById("submission-lat").value;
  const lngRaw = document.getElementById("submission-lng").value;
  return {
    record_type: document.getElementById("submission-record-type").value,
    title: document.getElementById("submission-title").value.trim(),
    summary: document.getElementById("submission-summary").value.trim(),
    province,
    province_key: keyForProvince(province),
    location_label: document.getElementById("submission-location").value.trim(),
    event_date: document.getElementById("submission-date").value || null,
    lat: latRaw ? Number(latRaw) : center.lat || null,
    lng: lngRaw ? Number(lngRaw) : center.lng || null,
    geocode_precision: latRaw && lngRaw ? "exact" : "province_centroid",
    source_url: document.getElementById("submission-source-url").value.trim(),
    source_title: document.getElementById("submission-source-title").value.trim(),
    submitter_contact: document.getElementById("submission-contact").value.trim(),
    status: "needs_review",
  };
}

function validateSubmission(payload) {
  if (!payload.record_type || !payload.title || !payload.summary || !payload.province || !payload.source_url) return t("submit.missing");
  if (!/^https?:\/\//i.test(payload.source_url)) return t("submit.badUrl");
  const latEntered = Boolean(document.getElementById("submission-lat").value);
  const lngEntered = Boolean(document.getElementById("submission-lng").value);
  if (latEntered !== lngEntered || !Number.isFinite(payload.lat) || !Number.isFinite(payload.lng)) return t("submit.badCoords");
  return "";
}

function showSubmissionSuccess(message) {
  document.getElementById("submission-form").hidden = true;
  document.getElementById("submission-success").hidden = false;
  document.getElementById("submission-success-copy").textContent = message;
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.setAttribute("aria-hidden", "false");
  if (id === "submit-modal") {
    document.getElementById("submission-form").hidden = false;
    document.getElementById("submission-success").hidden = true;
    document.getElementById("submission-error").textContent = "";
  }
}

function closeOpenModal() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.setAttribute("aria-hidden", "true"));
}

function showLoadNotice(message) {
  const notice = document.createElement("div");
  notice.className = "load-notice";
  notice.textContent = message;
  document.querySelector(".map-region").appendChild(notice);
  setTimeout(() => notice.remove(), 8000);
}

function buildSearchBlob(record) {
  const values = [
    record.title,
    record.summary,
    record.worker_name,
    record.person_name,
    record.school_name,
    record.employer,
    record.labor_organization,
    record.sector,
    record.cause,
    record.legal_status,
    record.accusation,
    ...record.demands,
    ...record.locations.flatMap((location) => [location.label, location.province, location.district]),
    ...record.sources.flatMap((source) => [source.title, source.publisher]),
  ];
  return values.filter(Boolean).join(" ").toLocaleLowerCase("tr");
}

function stringList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return String(value).split(/[;,]/).map((item) => item.trim()).filter(Boolean);
}

function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function keyForProvince(name) {
  if (!name) return "";
  const existing = PROVINCE_BY_NAME[name];
  if (existing) return existing.key;
  const normalized = normalizeAscii(name);
  return PROVINCES.find((province) => normalizeAscii(province.name) === normalized || province.key === normalized)?.key || "";
}

function cleanTitle(value) {
  if (!value) return "";
  return String(value)
    .toLocaleLowerCase("tr")
    .split(/\s+/)
    .map((word) => word ? word[0].toLocaleUpperCase("tr") + word.slice(1) : "")
    .join(" ");
}

function normalizeAscii(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/İ/g, "I")
    .replace(/ı/g, "i")
    .toUpperCase();
}

function parseDate(value) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function formatDate(value) {
  const date = parseDate(value);
  if (!date) return "";
  return new Intl.DateTimeFormat(state.lang === "tr" ? "tr-TR" : "en", { year: "numeric", month: "short", day: "numeric" }).format(date);
}

function formatCount(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  return new Intl.NumberFormat(state.lang === "tr" ? "tr-TR" : "en").format(number);
}

function slugify(value) {
  return normalizeAscii(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || cryptoRandomId();
}

function cryptoRandomId() {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}

function t(path) {
  const parts = path.split(".");
  let value = COPY[state.lang];
  for (const part of parts) value = value?.[part];
  return value || path;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
