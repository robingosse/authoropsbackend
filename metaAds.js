export function loadMetaAdsModule() {
  const container = document.createElement("section");
  container.className = "module";
  container.innerHTML = `
    <h3>Meta Ads Analytics</h3>
    <p>Connects to Meta Ads API (simulated).</p>
    <ul>
      <li>Spend: $46.23</li>
      <li>CTR: 1.13%</li>
      <li>ROAS: 2.4</li>
    </ul>
  `;
  document.querySelector(".main-panel").appendChild(container);
}