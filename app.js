const API_URL = "https://script.google.com/macros/s/AKfycbz5JFwvP2J_LFVB4aN_VDrsPdmVQl0s6JL-iJQkdaVZr7ICYaILOWZAcgiD56yzRmFlow/exec";

let gatherings = [];

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text || "";
  return div.innerHTML;
}

function render() {
  const container = document.getElementById("gatherings");
  const count = document.getElementById("count");
  if (!container) return;

  container.innerHTML = "";

  if (gatherings.length === 0) {
    container.innerHTML = `<p>No gatherings yet. Create the first one ✨</p>`;
  }

  gatherings.forEach((g) => {
    const div = document.createElement("div");
    div.className = "gathering";
    div.innerHTML = `
      <strong>${escapeHtml(g.title)}</strong><br/>
      ${escapeHtml(g.description || "")}<br/>
      <em>${escapeHtml(g.vibe || "")}</em><br/>
      <button onclick="joinGathering(${JSON.stringify(g.title || "")})">Request to Join</button>
    `;
    container.appendChild(div);
  });

  if (count) {
    count.innerText = `${gatherings.length} gatherings created`;
  }
}

async function loadGatherings() {
  try {
    const res = await fetch(API_URL + "?t=" + Date.now());
    const text = await res.text();
    const data = JSON.parse(text);

    if (data && data.error) {
      alert("Backend error: " + data.error);
      return;
    }

    gatherings = Array.isArray(data) ? data : [];
    gatherings.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    render();
  } catch (error) {
    console.error(error);
    alert("Couldn’t load shared gatherings.");
  }
}

async function createGathering() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const vibe = document.getElementById("vibe").value.trim();

  if (!title) {
    alert("Please enter a title");
    return;
  }

  const url =
    API_URL +
    "?title=" + encodeURIComponent(title) +
    "&description=" + encodeURIComponent(description) +
    "&vibe=" + encodeURIComponent(vibe) +
    "&t=" + Date.now();

  try {
    await fetch(url);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("vibe").value = "";

    alert("✨ Gathering created!");
    setTimeout(loadGatherings, 800);
  } catch (error) {
    console.error(error);
    alert("Couldn’t save.");
  }
}

function joinGathering(title) {
  alert(`Request sent to join "${title}" ✨`);
}

function resetApp() {
  alert("For now, reset should be done directly in the Google Sheet.");
}

loadGatherings();

<header style="background:#111; color:white; padding:20px; text-align:center;">
  <h1 style="margin:0; font-size:22px;">Nest ✨</h1>
  <p style="margin:5px 0 0; font-size:13px; opacity:0.8;">
    A place to build your chosen family
  </p>
</header>