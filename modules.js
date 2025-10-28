<script>
  document.addEventListener("DOMContentLoaded", () => {
    const modules = [
      {
        id: "kdp-panel",
        title: "KDP Sales Module",
        content: `
          <p><strong>Yesterday:</strong> 14 Sales / 1800 Page Reads</p>
          <p><strong>7-Day Total:</strong> 92 Sales / 12,340 Page Reads</p>
          <input type="file" accept=".csv" onchange="handleCSVUpload(event, 'KDP')" />
          <button onclick="authService('KDP')">🔐 Login to KDP</button>
        `
      },
      {
        id: "meta-panel",
        title: "Meta Ads Module",
        content: `
          <p>Spend: $24.50</p>
          <p>Impressions: 8,200</p>
          <input type="file" accept=".csv" onchange="handleCSVUpload(event, 'Meta Ads')" />
          <button onclick="authService('Meta Ads')">🔐 Connect Meta</button>
        `
      },
      {
        id: "google-panel",
        title: "Google Ads Module",
        content: `
          <p>Spend: $19.00</p>
          <p>CTR: 3.1%</p>
          <input type="file" accept=".csv" onchange="handleCSVUpload(event, 'Google Ads')" />
          <button onclick="authService('Google Ads')">🔐 Connect Google</button>
        `
      },
      {
        id: "email-panel",
        title: "Email Metrics Module",
        content: `
          <p>New Subs: 31</p>
          <p>Open Rate: 47%</p>
          <input type="file" accept=".csv" onchange="handleCSVUpload(event, 'Email')" />
          <button onclick="authService('MailerLite')">🔐 Connect MailerLite</button>
        `
      },
      {
        id: "reviews-panel",
        title: "Review Summary Module",
        content: `
          <p>Amazon: 22 Reviews, Avg: ★4.6</p>
          <p>Goodreads: 15 Reviews, Avg: ★4.4</p>
          <input type="file" accept=".csv" onchange="handleCSVUpload(event, 'Reviews')" />
          <button onclick="authService('Goodreads')">🔐 Connect Goodreads</button>
        `
      }
    ];

    modules.forEach(mod => {
      const el = document.getElementById(mod.id);
      if (el) el.innerHTML += mod.content;
    });
  });

  function handleCSVUpload(event, module) {
    const file = event.target.files[0];
    if (file) alert(`Loaded CSV for ${module}: ${file.name}`);
  }

  function authService(service) {
    alert(`Redirecting to authenticate with ${service}...`);
    // Insert OAuth2 flow or external login redirect here
  }
</script>
