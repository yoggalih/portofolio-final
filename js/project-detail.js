const projectsData = {
  engagement: {
    category: "TUGAS AKHIR · MACHINE LEARNING",
    title: "Klasifikasi Engagement Level",
    subtitle: "Prediksi tingkat keterlibatan berdasarkan parameter fisiologis dan kondisi lingkungan menggunakan XGBoost & CatBoost.",
    year: "2025 – 2026",
    role: "ML Developer",
    problem: "Pengukuran tingkat keterlibatan (engagement) secara manual sering subjektif, tidak konsisten, dan sulit dipantau secara objektif.",
    solution: "Membangun model klasifikasi otomatis untuk mengelompokkan kondisi ke dalam 3 kategori (Highly Engaged, Moderately Engaged, Disengaged) berbasis data sensor fisiologis & lingkungan.",
    jobdesk: [
      "Data cleaning, penanganan missing values, dan normalisasi fitur.",
      "Pengelompokan fitur (fisiologis, lingkungan, dan kombinasi).",
      "Pelatihan dan komparasi model XGBoost serta CatBoost.",
      "Evaluasi model menggunakan Accuracy, Precision, Recall, dan F1-Score."
    ],
    results: [
      { value: "99.50%", label: "Accuracy" },
      { value: "99.72%", label: "Precision" },
      { value: "98.25%", label: "Recall" },
      { value: "98.96%", label: "F1-Score" }
    ],
    resultSummary: "Algoritma CatBoost memberikan performa terbaik pada dataset pengujian dan mampu membedakan ketiga kelas keterlibatan secara presisi.",
    tech: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
      { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain colored" },
      { name: "XGBoost", icon: "fa-solid fa-bolt text-primary" },
      { name: "CatBoost", icon: "fa-solid fa-layer-group text-warning" }
    ],
    github: "https://github.com/"
  }
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
        ${data.tech.map(t => `
          <span class="simple-tech-pill">
            <i class="${t.icon}"></i> ${t.name}
          </span>
        `).join("")}
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
          ${data.jobdesk.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <!-- Hasil & Metrik -->
      <div class="simple-section">
        <h5><i class="fa-solid fa-chart-line text-primary"></i> Hasil Utama</h5>
        <div class="row g-3 my-2">
          ${data.results.map(r => `
            <div class="col-6 col-sm-3">
              <div class="simple-stat">
                <strong>${r.value}</strong>
                <span>${r.label}</span>
              </div>
            </div>
          `).join("")}
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