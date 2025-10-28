document.addEventListener("DOMContentLoaded", () => {
  const metrics = [
    { day: "Mon", sales: 12, reads: 1800, rank: 1450 },
    { day: "Tue", sales: 9, reads: 1500, rank: 1400 },
    { day: "Wed", sales: 15, reads: 2400, rank: 1300 },
    { day: "Thu", sales: 7, reads: 1200, rank: 1250 },
    { day: "Fri", sales: 20, reads: 3000, rank: 1000 },
    { day: "Sat", sales: 14, reads: 2200, rank: 950 },
    { day: "Sun", sales: 18, reads: 2600, rank: 880 },
  ];
  const alerts = [
    "📈 Sales up 20% this week",
    "⚠️ Meta ad CTR below 1.2%"
  ];

  const tbody = document.getElementById("metrics-body");
  metrics.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.day}</td><td>${row.sales}</td><td>${row.reads}</td><td>${row.rank}</td>`;
    tbody.appendChild(tr);
  });

  const alertList = document.getElementById("alerts-list");
  alerts.forEach(alert => {
    const li = document.createElement("li");
    li.textContent = alert;
    alertList.appendChild(li);
  });
});
