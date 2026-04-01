const API_URL = "PASTE_YOUR_DEPLOYED_APPS_SCRIPT_EXEC_URL_HERE";

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
      ${escapeHtml(g.description)}<br/>
      <em>${escapeHtml(g.vibe)}</em><br/>
      <button onclick="joinGathering('${g.id || ""}', ${JSON.stringify(g.title || "")})">Request to Join</button>
    `;

    container.appendChild(div);
  });

  if (count) {
    count.innerText = `${gatherings.length} gatherings created`;
  }
}

async function loadGatherings() {
  try {
    console.log("Loading from:", API_URL);
    const res = await fetch(API_URL);
    console.log("GET status:", res.status, res.statusText);

    const text = await res.text();
    console.log("GET raw response:", text);

    gatherings = JSON.parse(text);

    gatherings.sort((a, b) => {
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });

    render();
  } catch (error) {
    console.error("Load error:", error);
    alert("Couldn’t load shared gatherings. Open browser console or verify Apps Script deployment URL.");
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

  try {
    console.log("Posting to:", API_URL);

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({ title, description, vibe })
    });

    console.log("POST status:", res.status, res.statusText);

    const text = await res.text();
    console.log("POST raw response:", text);

    const result = JSON.parse(text);

    if (result.success) {
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
      document.getElementById("vibe").value = "";

      alert("✨ Gathering created!");
      await loadGatherings();
    } else {
      alert("Could not create gathering.");
    }
  } catch (error) {
    console.error("Create error:", error);
    alert("Could not create gathering.");
  }
}

function joinGathering(id, title) {
  alert(`Request sent to join "${title}" ✨`);
}

function resetApp() {
  alert("For now, reset should be done directly in the Google Sheet.");
}

loadGatherings();