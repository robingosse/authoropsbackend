export function loadEmailMetricsModule() {
  const container = document.createElement("section");
  container.className = "module";
  container.innerHTML = `
    <h3>Email Metrics</h3>
    <ul>
      <li>Subscribers: 1,238</li>
      <li>Open Rate: 42%</li>
      <li>CTR: 11%</li>
    </ul>
  `;
  document.querySelector(".main-panel").appendChild(container);
}