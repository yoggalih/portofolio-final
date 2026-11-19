const projectsData = {
  engagement: {
    category: "TUGAS AKHIR · MACHINE LEARNING",
    title: "Klasifikasi Engagement Level",
    subtitle:
      "Prediksi tingkat keterlibatan berdasarkan parameter fisiologis dan kondisi lingkungan menggunakan XGBoost & CatBoost.",
    year: "2025 – 2026",
    role: "ML Developer",
    problem:
      "Pengukuran tingkat keterlibatan (engagement) secara manual sering subjektif, tidak konsisten, dan sulit dipantau secara objektif.",
    solution:
      "Membangun model klasifikasi otomatis untuk mengelompokkan kondisi ke dalam 3 kategori (Highly Engaged, Moderately Engaged, Disengaged) berbasis data sensor fisiologis & lingkungan.",
    jobdesk: [
      "Data cleaning, penanganan missing values, dan normalisasi fitur.",
      "Pengelompokan fitur (fisiologis, lingkungan, dan kombinasi).",
      "Pelatihan dan komparasi model XGBoost serta CatBoost.",
      "Evaluasi model menggunakan Accuracy, Precision, Recall, dan F1-Score.",
    ],
    results: [
      { value: "99.50%", label: "Accuracy" },
      { value: "99.72%", label: "Precision" },
      { value: "98.25%", label: "Recall" },
      { value: "98.96%", label: "F1-Score" },
    ],
    resultSummary:
      "Algoritma CatBoost memberikan performa terbaik pada dataset pengujian dan mampu membedakan ketiga kelas keterlibatan secara presisi.",
    tech: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
      { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain colored" },
      { name: "XGBoost", icon: "fa-solid fa-bolt text-primary" },
      { name: "CatBoost", icon: "fa-solid fa-layer-group text-warning" },
    ],
    github: "https://github.com/",
  },
  tbc: {
    category: "PENGEMBANGAN APLIKASI",
    title: "Sistem Monitoring TBC",
    subtitle:
      "Pengembangan backend untuk pengelolaan data pasien dan monitoring TBC.",
    year: "2025",
    role: "Backend Developer",
    problem:
      "Sistem membutuhkan backend untuk mengelola autentikasi, data pengguna, pasien, dan monitoring TBC.",
    solution:
      "Mengembangkan lima bagian backend utama untuk mendukung fungsi sistem.",
    jobdesk: [
      "Mengembangkan Authentication untuk autentikasi pengguna.",
      "Mengembangkan Patient untuk pengelolaan data pasien.",
      "Mengembangkan Monitoring untuk pengelolaan data monitoring TBC.",
      "Mengembangkan User untuk pengelolaan data pengguna.",
      "Mengembangkan Role untuk pengaturan peran dan hak akses.",
    ],
    results: [],
    resultSummary: "Berkontribusi pada lima modul utama backend sistem.",
    tech: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-original colored" },
    ],
    github: "https://github.com/syahhrul/Konseling-tbc",
  },

  magang: {
    category: "PENGEMBANGAN APLIKASI",
    title: "Sistem Informasi Magang",
    subtitle: "Perancangan dan pengembangan prototype Sistem Informasi Magang.",
    year: "2025",
    role: "Full-Stack Developer",
    organization: "Pengadilan Negeri Klaten Kelas IA",

    problem:
      "Dibutuhkan sistem informasi untuk mendukung pengelolaan kegiatan magang secara terstruktur.",

    solution:
      "Merancang dan mengembangkan prototype Sistem Informasi Magang secara mandiri.",

    jobdesk: [
      "Menganalisis kebutuhan sistem.",
      "Merancang struktur dan alur aplikasi.",
      "Mengembangkan antarmuka aplikasi.",
      "Mengimplementasikan fungsi dan fitur sistem.",
      "Melakukan pengujian aplikasi.",
    ],

    results: [],

    resultSummary:
      "Menghasilkan prototype Sistem Informasi Magang yang dikembangkan secara mandiri.",

    tech: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-original colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Alpine.js", icon: "devicon-alpinejs-original colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],

    github: "https://github.com/yoggalih/SistemInformasiMagang",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id") || "engagement";
  const data = projectsData[projectId] || projectsData.engagement;

  const container = document.getElementById("project-detail");

  container.innerHTML = `
    <div class="container simple-container">
      
      <!-- Navigasi Kembali -->
      <a href="index.html#projects" class="simple-back">
        <i class="fa-solid fa-arrow-left"></i> Kembali ke Proyek
      </a>

      <!-- Header Ringkas -->
      <header class="simple-header">
        <span class="simple-badge">${data.category} · ${data.year}</span>
        <h1>${data.title}</h1>
        <p>${data.subtitle}</p>
      </header>

      <!-- Tech Stack (Logo) -->
 <div class="simple-tech-row">
  ${data.tech
    .map(
      (t) => `
        <span class="simple-tech-pill">
          <i class="${t.icon}"></i>
          ${t.name}
        </span>
      `,
    )
    .join("")}
</div>

      <!-- Masalah & Solusi -->
      <div class="row g-4 simple-grid">
        <div class="col-md-6">
          <div class="simple-card">
            <h6><i class="fa-solid fa-circle-exclamation text-danger"></i> Masalah</h6>
            <p>${data.problem}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="simple-card">
            <h6><i class="fa-solid fa-lightbulb text-success"></i> Solusi</h6>
            <p>${data.solution}</p>
          </div>
        </div>
      </div>

      <!-- Jobdesk -->
      <div class="simple-section">
        <h5><i class="fa-solid fa-list-check text-primary"></i> Jobdesk & Kontribusi (${data.role})</h5>
        <ul class="simple-list">
          ${data.jobdesk.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <!-- Hasil & Metrik -->
      <div class="simple-section">
        <h5><i class="fa-solid fa-chart-line text-primary"></i> Hasil Utama</h5>
        <div class="row g-3 my-2">
          ${data.results
            .map(
              (r) => `
            <div class="col-6 col-sm-3">
              <div class="simple-stat">
                <strong>${r.value}</strong>
                <span>${r.label}</span>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
        <p class="mt-3 text-muted">${data.resultSummary}</p>
      </div>

      <!-- Action Bawah -->
      <div class="simple-footer-action">
        <a href="${data.github}" target="_blank" rel="noopener" class="btn-primary-custom">
          <i class="fa-brands fa-github"></i> Lihat Repository
        </a>
        <a href="index.html#projects" class="btn-outline-custom">
          Proyek Lainnya
        </a>
      </div>

    </div>
  `;
});
