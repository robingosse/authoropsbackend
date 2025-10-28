export function loadReviewModule() {
  const container = document.createElement("section");
  container.className = "module";
  container.innerHTML = `
    <h3>Review Highlights</h3>
    <p>AI sentiment summary:</p>
    <blockquote>"A haunting, intelligent journey. More philosophy than fright — exactly what I wanted."</blockquote>
    <p>Keywords: introspective, chilling, simulated reality, identity</p>
  `;
  document.querySelector(".main-panel").appendChild(container);
}