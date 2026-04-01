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

function loadGatherings() {
  const callbackName = "kindredCallback_" + Date.now();

  window[callbackName] = function(data) {
    try {
      if (data && data.error) {
        alert("Backend error: " + data.error);
        return;
      }

      gatherings = Array.isArray(data) ? data : [];
      gatherings.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      render();
    } finally {
      delete window[callbackName];
    }
  };

  const script = document.createElement("script");
  script.src = API_URL + "?callback=" + callbackName + "&t=" + Date.now();
  script.onerror = function() {
    delete window[callbackName];
    alert("Couldn’t load shared gatherings.");
  };

  document.body.appendChild(script);
}

function createHiddenIframe(name) {
  let iframe = document.getElementById(name);
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.name = name;
    iframe.id = name;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }
  return iframe;
}

function postViaForm(data) {
  return new Promise((resolve) => {
    const frameName = "kindred-submit-frame";
    createHiddenIframe(frameName);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = API_URL;
    form.target = frameName;
    form.style.display = "none";

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value ?? "";
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      form.remove();
      resolve();
    }, 1200);
  });
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
    await postViaForm({ title, description, vibe });

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("vibe").value = "";

    alert("✨ Gathering created!");
    setTimeout(loadGatherings, 1500);
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