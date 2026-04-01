const API_URL = "https://script.google.com/macros/s/AKfycbwboJ7yLK6XZdjI3bQH7xeV-jL2JSxk1QnAnJ6AXKtb_LrI47lhDDjMY5T3tXuDURsxoQ/exec";

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
    const res = await fetch(API_URL, {
      method: "GET",
      mode: "cors"
    });

    const text = await res.text();
    const data = JSON.parse(text);

    if (data.error) {
      alert("Backend error: " + data.error);
      return;
    }

    gatherings = Array.isArray(data) ? data : [];
    gatherings.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    render();
  } catch (error) {
    console.error(error);
    alert("Couldn’t load shared gatherings. Try refreshing the page once.");
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
    const res = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({ title, description, vibe })
    });

    const text = await res.text();
    const result = JSON.parse(text);

    if (result.success) {
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
      document.getElementById("vibe").value = "";

      alert("✨ Gathering created!");
      await loadGatherings();
    } else {
      alert("Could not create gathering: " + (result.error || "Unknown error"));
    }
  } catch (error) {
    console.error(error);
    alert("Could not create gathering.");
  }
}

function joinGathering(title) {
  alert(`Request sent to join "${title}" ✨`);
}

function resetApp() {
  alert("For now, reset should be done directly in the Google Sheet.");
}

loadGatherings();