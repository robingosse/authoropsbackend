export function loadGoogleAdsModule() {
  const container = document.createElement("section");
  container.className = "module";
  container.innerHTML = `
    <h3>Google Ads Analytics</h3>
    <p>Pulls basic data from your Google campaigns.</p>
    <ul>
      <li>Top Keyword: 'philosophical horror book'</li>
      <li>CTR: 1.45%</li>
      <li>CPC: $0.34</li>
    </ul>
  `;
  document.querySelector(".main-panel").appendChild(container);
}