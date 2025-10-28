export function loadKDPModule() {
  const container = document.createElement("section");
  container.className = "module";
  container.innerHTML = `
    <h3>KDP Sales Module</h3>
    <p>Upload your KDP sales CSV here to view analytics.</p>
    <input type="file" id="kdp-upload" accept=".csv" />
    <div id="kdp-results"></div>
  `;
  document.querySelector(".main-panel").appendChild(container);
}