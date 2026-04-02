<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Nest</title>
  <style>
    :root {
      --bg: #fbf7f3;
      --bg-2: #f5ede5;
      --card: rgba(255,255,255,0.88);
      --card-solid: #ffffff;
      --text: #231f1c;
      --text-soft: #6d655f;
      --line: rgba(120,100,82,0.10);
      --pill: #f5eee7;
      --accent: #eadbcc;
      --accent-2: #f1e5d9;
      --shadow: 0 10px 30px rgba(70,54,42,0.08);
      --shadow-soft: 0 6px 18px rgba(70,54,42,0.05);
      --gold: #b9925c;
      --pink: #c86d7a;
      --danger: #9f4b4b;
      --bubble-self: #efe0d1;
      --bubble-other: #ffffff;
    }

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, #fffaf5 0%, transparent 35%),
        radial-gradient(circle at top right, #f7efe7 0%, transparent 30%),
        linear-gradient(180deg, var(--bg) 0%, #f8f2eb 100%);
      min-height: 100vh;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 30;
      padding: 22px 20px 20px;
      text-align: center;
      color: white;
      background: linear-gradient(135deg, rgba(28,24,22,0.97), rgba(62,48,39,0.92));
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
      box-shadow: 0 10px 30px rgba(28,24,22,0.18);
    }

    header h1 {
      margin: 0;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 0.2px;
    }

    header p {
      margin: 7px 0 0;
      font-size: 13px;
      opacity: 0.88;
      letter-spacing: 0.2px;
    }

    .container {
      max-width: 840px;
      margin: 0 auto;
      padding: 18px 16px 110px;
    }

    .hero-card,
    .card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 24px;
      box-shadow: var(--shadow);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .hero-card {
      padding: 18px;
      margin-bottom: 16px;
      background: linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(249,243,236,0.92) 100%);
    }

    .card {
      padding: 18px;
      margin-bottom: 16px;
    }

    .hero-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 6px;
    }

    .hero-copy,
    .screen-subtitle,
    .small-text {
      color: var(--text-soft);
      font-size: 14px;
      line-height: 1.55;
    }

    .screen-title {
      font-size: 22px;
      font-weight: 700;
      margin: 8px 2px 8px;
    }

    .screen-subtitle {
      margin: 0 2px 18px;
    }

    .event-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.25;
    }

    .event-description {
      margin-top: 8px;
      color: var(--text-soft);
      line-height: 1.55;
      font-size: 14px;
    }

    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--pill);
      color: #5f544b;
      border: 1px solid rgba(120,100,82,0.08);
      padding: 7px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
    }

    .section-title {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 700;
    }

    .section-note {
      color: var(--text-soft);
      font-size: 13px;
      line-height: 1.5;
      margin-top: -2px;
      margin-bottom: 10px;
    }

    .host-note {
      background: linear-gradient(180deg, #f8f1ea 0%, #f5ede5 100%);
      border: 1px solid rgba(185,146,92,0.14);
      border-left: 4px solid var(--gold);
      padding: 14px;
      border-radius: 16px;
      color: #54483f;
      line-height: 1.55;
    }

    .top-pick-item,
    .suggestion-item,
    .chat-message,
    .people-item,
    .prompt-box {
      border-radius: 18px;
    }

    .top-pick-item {
      background: linear-gradient(180deg, #f7efe7 0%, #f4eadf 100%);
      border: 1px solid rgba(185,146,92,0.14);
      padding: 13px 14px;
      margin-top: 10px;
      box-shadow: var(--shadow-soft);
    }

    .top-pick-title {
      font-weight: 700;
      margin-bottom: 4px;
    }

    .top-pick-meta {
      color: var(--text-soft);
      font-size: 12.5px;
      line-height: 1.45;
    }

    .prompt-box,
    .people-item {
      background: linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(249,244,239,0.94) 100%);
      border: 1px solid rgba(120,100,82,0.09);
      padding: 14px;
      margin-top: 12px;
      box-shadow: var(--shadow-soft);
    }

    .prompt-question {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .suggestion-item {
      background: rgba(255,255,255,0.92);
      border: 1px solid rgba(120,100,82,0.08);
      padding: 12px;
      margin-top: 9px;
      box-shadow: 0 3px 10px rgba(70,54,42,0.03);
    }

    .item-line {
      line-height: 1.5;
      font-size: 14px;
    }

    .row {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 8px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .subtabs {
      display: flex;
      gap: 8px;
      margin-top: 18px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    .subtabs button {
      width: auto;
      margin-top: 0;
      padding: 10px 14px;
      border-radius: 999px;
      background: white;
      color: #544941;
      box-shadow: none;
      border: 1px solid rgba(120,100,82,0.10);
    }

    .subtabs button.active {
      background: linear-gradient(180deg, var(--accent-2) 0%, var(--accent) 100%);
      color: #40362f;
    }

    input, textarea, select {
      width: 100%;
      border: 1px solid rgba(120,100,82,0.12);
      background: rgba(255,255,255,0.94);
      color: var(--text);
      border-radius: 15px;
      padding: 12px 14px;
      font-size: 14px;
      margin-top: 8px;
      margin-bottom: 10px;
      outline: none;
      transition: border-color 0.18s ease, box-shadow 0.18s ease;
      font-family: inherit;
    }

    textarea {
      min-height: 96px;
      resize: vertical;
      line-height: 1.5;
    }

    input:focus, textarea:focus, select:focus {
      border-color: rgba(185,146,92,0.42);
      box-shadow: 0 0 0 4px rgba(220,198,178,0.18);
    }

    button {
      width: 100%;
      border: none;
      border-radius: 15px;
      padding: 12px 14px;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.12s ease, opacity 0.18s ease;
      background: linear-gradient(135deg, #24201d 0%, #3d322a 100%);
      color: white;
      box-shadow: 0 8px 18px rgba(36,32,29,0.18);
    }

    button:active {
      transform: scale(0.985);
    }

    .secondary-btn {
      background: linear-gradient(180deg, var(--accent-2) 0%, var(--accent) 100%);
      color: #473d36;
      box-shadow: 0 8px 18px rgba(141,116,88,0.12);
    }

    .like-btn, .tiny-btn {
      width: auto;
      padding: 8px 12px;
      margin-top: 0;
      font-size: 12px;
      font-weight: 700;
      border-radius: 999px;
      background: white;
      color: var(--pink);
      border: 1px solid rgba(200,109,122,0.18);
      box-shadow: none;
    }

    .danger-btn {
      background: linear-gradient(135deg, #8f4949 0%, #a34f4f 100%);
      color: white;
    }

    .empty {
      text-align: center;
      color: var(--text-soft);
      padding: 38px 20px;
      border-radius: 22px;
      background: rgba(255,255,255,0.7);
      border: 1px dashed rgba(120,100,82,0.18);
      box-shadow: var(--shadow-soft);
    }

    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(120,100,82,0.12), transparent);
      margin: 16px 0;
    }

    .chat-wrap {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
    }

    .chat-message {
      max-width: 82%;
      padding: 12px 14px;
      box-shadow: var(--shadow-soft);
      font-size: 14px;
      line-height: 1.45;
      border: 1px solid rgba(120,100,82,0.08);
    }

    .chat-message.other {
      align-self: flex-start;
      background: var(--bubble-other);
      border-top-left-radius: 8px;
    }

    .chat-message.self {
      align-self: flex-end;
      background: var(--bubble-self);
      border-top-right-radius: 8px;
    }

    .chat-name {
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 4px;
      color: #5f544b;
    }

    .chat-time {
      margin-top: 6px;
      font-size: 11px;
      color: var(--text-soft);
      text-align: right;
    }

    .tabs {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 16px;
      width: min(92vw, 520px);
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 8px;
      padding: 8px;
      background: rgba(255,255,255,0.78);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1px solid rgba(120,100,82,0.10);
      border-radius: 22px;
      box-shadow: 0 18px 40px rgba(70,54,42,0.10);
      z-index: 30;
    }

    .tabs button {
      width: 100%;
      margin-top: 0;
      padding: 11px 12px;
      border-radius: 14px;
      background: transparent;
      color: #544941;
      box-shadow: none;
      font-weight: 700;
    }

    .tabs button.active {
      background: linear-gradient(180deg, var(--accent-2) 0%, var(--accent) 100%);
      color: #40362f;
    }

    @media (max-width: 640px) {
      .container {
        padding: 16px 14px 110px;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .event-title {
        font-size: 18px;
      }

      .screen-title {
        font-size: 20px;
      }

      .chat-message {
        max-width: 90%;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Nest ✨</h1>
    <p>a place to build your chosen family</p>
  </header>

  <div class="container" id="app"></div>

  <div class="tabs">
    <button id="homeTab" class="active">Home</button>
    <button id="createTab">Create</button>
    <button id="profileTab">Profile</button>
  </div>

  <script>
    const STORAGE_KEY = "nest_premium_v2";
    let events = [];
    let currentView = { page: "home", eventIndex: null, subtab: "chat" };

    try {
      events = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      events = [];
    }

    function save() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    }

    function escapeHtml(text) {
      return String(text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function formatTime(dateString) {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "";
      return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    }

    function defaultPromptQuestions() {
      return [
        "What movie should we watch?",
        "What game should we play?",
        "What music should we have in the background?",
        "What would you love us to talk about?"
      ];
    }

    function setActiveTab(tab) {
      document.getElementById("homeTab").classList.remove("active");
      document.getElementById("createTab").classList.remove("active");
      document.getElementById("profileTab").classList.remove("active");
      if (tab === "home") document.getElementById("homeTab").classList.add("active");
      if (tab === "create") document.getElementById("createTab").classList.add("active");
      if (tab === "profile") document.getElementById("profileTab").classList.add("active");
    }

    function renderAuthlessHero() {
      return `
        <div class="hero-card">
          <div class="hero-title">Create evenings people want to remember.</div>
          <div class="hero-copy">Plan cozy gatherings, collect ideas, and make your people feel at home.</div>
        </div>
      `;
    }

    function getTopPicks(event) {
      const picks = [];

      (event.prompts || []).forEach(prompt => {
        (prompt.answers || []).forEach(answer => {
          picks.push({
            type: prompt.question,
            name: answer.name,
            text: answer.text,
            likes: answer.likes || 0,
            mood: answer.mood || ""
          });
        });
      });

      (event.comments || []).forEach(comment => {
        picks.push({
          type: "Guest comment",
          name: comment.name,
          text: comment.text,
          likes: comment.likes || 0,
          mood: comment.mood || ""
        });
      });

      return picks.sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 3);
    }

    function renderHome() {
      currentView = { page: "home", eventIndex: null, subtab: "chat" };
      setActiveTab("home");

      let html = renderAuthlessHero();
      html += `
        <div class="screen-title">Upcoming gatherings</div>
        <div class="screen-subtitle">Soft plans, warm energy, and thoughtful connection.</div>
      `;

      if (events.length === 0) {
        html += `<div class="empty">No gatherings yet — create one ✨</div>`;
      } else {
        events.forEach((event, index) => {
          html += `
            <div class="card">
              <div class="event-title">${escapeHtml(event.title)}</div>
              <div class="event-description">${escapeHtml(event.description || "A warm space to connect.")}</div>

              <div class="meta-row">
                <div class="pill">✨ ${escapeHtml(event.vibe || "Meaningful")}</div>
                ${event.eventMood ? `<div class="pill">☁️ ${escapeHtml(event.eventMood)}</div>` : ""}
                ${event.date ? `<div class="pill">📅 ${escapeHtml(event.date)}</div>` : ""}
                ${event.time ? `<div class="pill">🕒 ${escapeHtml(event.time)}</div>` : ""}
                ${event.location ? `<div class="pill">📍 ${escapeHtml(event.location)}</div>` : ""}
              </div>

              <button onclick="openEvent(${index}, 'chat')">Open Gathering</button>
            </div>
          `;
        });
      }

      document.getElementById("app").innerHTML = html;
    }

    function renderCreate() {
      currentView = { page: "create", eventIndex: null, subtab: "chat" };
      setActiveTab("create");

      document.getElementById("app").innerHTML = `
        <div class="screen-title">Create a gathering</div>
        <div class="screen-subtitle">Shape the mood, add the details, and make it feel inviting.</div>

        <div class="card">
          <input id="title" placeholder="Ladies Evening ✨" />

          <div class="form-grid">
            <input id="vibe" placeholder="Cozy, meaningful, fun..." />
            <select id="eventMood">
              <option>Chill</option>
              <option>Fun</option>
              <option>Deep talk</option>
              <option>Cozy</option>
              <option>Party</option>
            </select>
          </div>

          <div class="form-grid">
            <input id="date" placeholder="Friday, April 5" />
            <input id="time" placeholder="7:00 PM" />
          </div>

          <input id="location" placeholder="Chelsea / My apartment" />
          <textarea id="desc" placeholder="What makes this gathering special?"></textarea>
          <textarea id="hostNote" placeholder="Host note: what kind of evening are you imagining?"></textarea>

          <div class="section-title">Default prompts</div>
          <div class="section-note">These help guests contribute ideas before the evening begins.</div>
          <div class="small-text">• What movie should we watch?</div>
          <div class="small-text">• What game should we play?</div>
          <div class="small-text">• What music should we have in the background?</div>
          <div class="small-text">• What would you love us to talk about?</div>

          <button onclick="createEvent()">Create Gathering</button>
        </div>
      `;
    }

    function renderProfile() {
      currentView = { page: "profile", eventIndex: null, subtab: "chat" };
      setActiveTab("profile");

      let html = `
        <div class="screen-title">Your space</div>
        <div class="screen-subtitle">A quiet place to manage your gatherings and reset things when needed.</div>

        <div class="card">
          <div style="font-size:18px; font-weight:700;">${events.length} gathering${events.length === 1 ? "" : "s"} created so far ✨</div>
          <div class="section-note">Everything is stored locally on this device for now.</div>
          <button class="danger-btn" onclick="resetAllEvents()">Delete All Gatherings</button>
        </div>

        <div class="card">
          <div class="section-title" style="margin-top:0;">Manage gatherings</div>
          ${
            events.length === 0
              ? `<div class="small-text">No gatherings to manage yet.</div>`
              : events.map((event, index) => `
                  <div class="prompt-box">
                    <div class="prompt-question">${escapeHtml(event.title)}</div>
                    <div class="small-text">${escapeHtml(event.description || "")}</div>
                    <button class="danger-btn" onclick="deleteEvent(${index})">Delete This Gathering</button>
                  </div>
                `).join("")
          }
        </div>
      `;

      document.getElementById("app").innerHTML = html;
    }

    function openEvent(index, subtab = "chat") {
      const event = events[index];
      if (!event) return renderHome();

      currentView = { page: "event", eventIndex: index, subtab };
      setActiveTab("home");

      const topPicks = getTopPicks(event);

      let html = `
        <div class="card">
          <button class="secondary-btn" onclick="renderHome()">← Back to Home</button>

          <div class="section-title" style="margin-top:16px; font-size:20px;">${escapeHtml(event.title)}</div>
          <div class="event-description">${escapeHtml(event.description || "A warm space to connect.")}</div>

          <div class="meta-row">
            <div class="pill">✨ ${escapeHtml(event.vibe || "Meaningful")}</div>
            ${event.eventMood ? `<div class="pill">☁️ ${escapeHtml(event.eventMood)}</div>` : ""}
            ${event.date ? `<div class="pill">📅 ${escapeHtml(event.date)}</div>` : ""}
            ${event.time ? `<div class="pill">🕒 ${escapeHtml(event.time)}</div>` : ""}
            ${event.location ? `<div class="pill">📍 ${escapeHtml(event.location)}</div>` : ""}
          </div>

          ${event.hostNote ? `
            <div class="section-title">From the host</div>
            <div class="host-note">${escapeHtml(event.hostNote)}</div>
          ` : ""}

          <div class="subtabs">
            <button class="${subtab === 'chat' ? 'active' : ''}" onclick="openEvent(${index}, 'chat')">Chat</button>
            <button class="${subtab === 'ideas' ? 'active' : ''}" onclick="openEvent(${index}, 'ideas')">Ideas</button>
            <button class="${subtab === 'people' ? 'active' : ''}" onclick="openEvent(${index}, 'people')">People</button>
          </div>
      `;

      if (subtab === "chat") {
        html += `
          <div class="section-title">Event chat</div>
          <div class="small-text">A soft space for the group conversation.</div>

          <div class="chat-wrap">
            ${
              !event.chatMessages || event.chatMessages.length === 0
                ? `<div class="small-text">No messages yet — start the conversation ✨</div>`
                : event.chatMessages.map(msg => `
                    <div class="chat-message ${msg.isSelf ? "self" : "other"}">
                      ${!msg.isSelf ? `<div class="chat-name">${escapeHtml(msg.name)}</div>` : ""}
                      <div>${escapeHtml(msg.text)}</div>
                      <div class="chat-time">${escapeHtml(formatTime(msg.createdAt))}</div>
                    </div>
                  `).join("")
            }
          </div>

          <input id="chatName" placeholder="Your name" />
          <textarea id="chatMessage" placeholder="Type a message..."></textarea>
          <div class="row">
            <button class="secondary-btn" onclick="sendMessage(${index}, false)">Send as Guest</button>
            <button onclick="sendMessage(${index}, true)">Send as You</button>
          </div>
        `;
      }

      if (subtab === "ideas") {
        html += `
          <div class="section-title">Top picks</div>
          ${
            topPicks.length === 0
              ? `<div class="small-text">No suggestions yet — be the first ✨</div>`
              : topPicks.map(item => `
                  <div class="top-pick-item">
                    <div class="top-pick-title">${escapeHtml(item.text)}</div>
                    <div class="top-pick-meta">
                      ${escapeHtml(item.name)} • ${escapeHtml(item.type)}${item.mood ? ` • ${escapeHtml(item.mood)}` : ""} • ❤️ ${item.likes}
                    </div>
                  </div>
                `).join("")
          }

          <div class="section-title">Prompts for the evening</div>
        `;

        (event.prompts || []).forEach((prompt, promptIndex) => {
          html += `
            <div class="prompt-box">
              <div class="prompt-question">${escapeHtml(prompt.question)}</div>

              ${(prompt.answers || []).map((answer, answerIndex) => `
                <div class="suggestion-item">
                  <div class="item-line"><strong>${escapeHtml(answer.name)}</strong>: ${escapeHtml(answer.text)}</div>
                  <div class="row">
                    ${answer.mood ? `<span class="pill">${escapeHtml(answer.mood)}</span>` : ""}
                    <button class="like-btn" onclick="likeAnswer(${index}, ${promptIndex}, ${answerIndex})">❤️ ${answer.likes || 0}</button>
                  </div>
                </div>
              `).join("")}

              <input id="answerName-${promptIndex}" placeholder="Your name" />
              <select id="answerMood-${promptIndex}">
                <option>Chill</option>
                <option>Fun</option>
                <option>Deep talk</option>
                <option>Cozy</option>
                <option>Party</option>
              </select>
              <input id="answerText-${promptIndex}" placeholder="Add your idea..." />
              <button class="secondary-btn" onclick="addAnswer(${index}, ${promptIndex})">Add Answer</button>
            </div>
          `;
        });

        html += `
          <div class="section-title">Add your own question or comment</div>

          ${(event.comments || []).map((comment, commentIndex) => `
            <div class="suggestion-item">
              <div class="item-line"><strong>${escapeHtml(comment.name)}</strong>: ${escapeHtml(comment.text)}</div>
              <div class="row">
                ${comment.mood ? `<span class="pill">${escapeHtml(comment.mood)}</span>` : ""}
                <button class="like-btn" onclick="likeComment(${index}, ${commentIndex})">❤️ ${comment.likes || 0}</button>
              </div>
            </div>
          `).join("")}

          <input id="commentName" placeholder="Your name" />
          <select id="commentMood">
            <option>Chill</option>
            <option>Fun</option>
            <option>Deep talk</option>
            <option>Cozy</option>
            <option>Party</option>
          </select>
          <textarea id="commentText" placeholder="Share a thought, suggestion, or question..."></textarea>
          <button class="secondary-btn" onclick="addComment(${index})">Add Comment</button>
        `;
      }

      if (subtab === "people") {
        html += `
          <div class="section-title">People</div>
          <div class="small-text">Join requests and attendee list for this gathering.</div>

          <div class="people-item">
            <div class="prompt-question">Join requests</div>
            ${
              !event.joinRequests || event.joinRequests.length === 0
                ? `<div class="small-text">No join requests yet.</div>`
                : event.joinRequests.map((req, reqIndex) => `
                    <div class="suggestion-item">
                      <div class="item-line"><strong>${escapeHtml(req.name)}</strong></div>
                      <div class="small-text">Status: ${escapeHtml(req.status)}</div>
                      <div class="row">
                        <button class="secondary-btn tiny-btn" onclick="updateJoinRequest(${index}, ${reqIndex}, 'approved')">Approve</button>
                        <button class="tiny-btn danger-btn" onclick="updateJoinRequest(${index}, ${reqIndex}, 'declined')">Decline</button>
                      </div>
                    </div>
                  `).join("")
            }

            <input id="joinName" placeholder="Your name to request joining" />
            <button onclick="joinEvent(${index})">Request to Join</button>
          </div>

          <div class="people-item">
            <div class="prompt-question">Approved guests</div>
            ${
              !(event.joinRequests || []).filter(r => r.status === "approved").length
                ? `<div class="small-text">No approved guests yet.</div>`
                : event.joinRequests
                    .filter(r => r.status === "approved")
                    .map(r => `<div class="suggestion-item"><div class="item-line"><strong>${escapeHtml(r.name)}</strong></div></div>`)
                    .join("")
            }
          </div>
        `;
      }

      html += `
          <div class="divider"></div>
          <button class="secondary-btn" onclick="copySummary(${index})">Copy Event Summary</button>
        </div>
      `;

      document.getElementById("app").innerHTML = html;
    }

    function createEvent() {
      const title = document.getElementById("title").value.trim();
      const vibe = document.getElementById("vibe").value.trim();
      const eventMood = document.getElementById("eventMood").value;
      const date = document.getElementById("date").value.trim();
      const time = document.getElementById("time").value.trim();
      const location = document.getElementById("location").value.trim();
      const description = document.getElementById("desc").value.trim();
      const hostNote = document.getElementById("hostNote").value.trim();

      if (!title) {
        alert("Please add a gathering name ✨");
        return;
      }

      const event = {
        title,
        vibe: vibe || "Meaningful",
        eventMood: eventMood || "Chill",
        date,
        time,
        location,
        description: description || "A warm space to connect.",
        hostNote: hostNote || "",
        prompts: defaultPromptQuestions().map(question => ({
          question,
          answers: []
        })),
        comments: [],
        chatMessages: [],
        joinRequests: []
      };

      events.unshift(event);
      save();
      alert("Gathering created ✨");
      renderHome();
    }

    function addAnswer(eventIndex, promptIndex) {
      const name = document.getElementById(`answerName-${promptIndex}`).value.trim() || "Guest";
      const mood = document.getElementById(`answerMood-${promptIndex}`).value;
      const text = document.getElementById(`answerText-${promptIndex}`).value.trim();

      if (!text) return;

      events[eventIndex].prompts[promptIndex].answers.push({
        name,
        mood,
        text,
        likes: 0
      });

      save();
      openEvent(eventIndex, "ideas");
    }

    function addComment(eventIndex) {
      const name = document.getElementById("commentName").value.trim() || "Guest";
      const mood = document.getElementById("commentMood").value;
      const text = document.getElementById("commentText").value.trim();

      if (!text) return;

      events[eventIndex].comments.push({
        name,
        mood,
        text,
        likes: 0
      });

      save();
      openEvent(eventIndex, "ideas");
    }

    function likeAnswer(eventIndex, promptIndex, answerIndex) {
      events[eventIndex].prompts[promptIndex].answers[answerIndex].likes += 1;
      save();
      openEvent(eventIndex, "ideas");
    }

    function likeComment(eventIndex, commentIndex) {
      events[eventIndex].comments[commentIndex].likes += 1;
      save();
      openEvent(eventIndex, "ideas");
    }

    function sendMessage(eventIndex, isSelf) {
      const name = document.getElementById("chatName").value.trim() || (isSelf ? "You" : "Guest");
      const text = document.getElementById("chatMessage").value.trim();

      if (!text) return;

      events[eventIndex].chatMessages.push({
        name,
        text,
        isSelf,
        createdAt: new Date().toISOString()
      });

      save();
      openEvent(eventIndex, "chat");
    }

    function joinEvent(eventIndex) {
      const name = document.getElementById("joinName").value.trim();

      if (!name) {
        alert("Please add your name first ✨");
        return;
      }

      events[eventIndex].joinRequests.push({
        name,
        status: "pending"
      });

      save();
      alert("Request sent 💛");
      openEvent(eventIndex, "people");
    }

    function updateJoinRequest(eventIndex, requestIndex, status) {
      events[eventIndex].joinRequests[requestIndex].status = status;
      save();
      openEvent(eventIndex, "people");
    }

    function deleteEvent(index) {
      const confirmed = confirm("Delete this gathering?");
      if (!confirmed) return;

      events.splice(index, 1);
      save();
      renderProfile();
    }

    function resetAllEvents() {
      const confirmed = confirm("Delete all gatherings?");
      if (!confirmed) return;

      events = [];
      save();
      renderHome();
    }

    function copySummary(eventIndex) {
      const event = events[eventIndex];
      if (!event) return;

      const topPicks = getTopPicks(event);

      let summary = `${event.title}\n`;
      summary += `${event.description || ""}\n`;
      if (event.date) summary += `Date: ${event.date}\n`;
      if (event.time) summary += `Time: ${event.time}\n`;
      if (event.location) summary += `Location: ${event.location}\n`;
      summary += `Vibe: ${event.vibe || "Meaningful"}\n`;
      summary += `Mood: ${event.eventMood || "Chill"}\n\n`;

      if (event.hostNote) {
        summary += `Host note:\n${event.hostNote}\n\n`;
      }

      summary += `Top picks:\n`;
      if (!topPicks.length) {
        summary += `- No suggestions yet\n`;
      } else {
        topPicks.forEach(item => {
          summary += `- ${item.text} (${item.name}, ${item.type}, ❤️ ${item.likes})\n`;
        });
      }

      summary += `\nChat messages:\n`;
      if (!event.chatMessages.length) {
        summary += `- No messages yet\n`;
      } else {
        event.chatMessages.forEach(msg => {
          summary += `- ${msg.name}: ${msg.text}\n`;
        });
      }

      navigator.clipboard.writeText(summary)
        .then(() => alert("Summary copied ✨"))
        .catch(() => alert("Copy didn’t work automatically."));
    }

    document.getElementById("homeTab").addEventListener("click", renderHome);
    document.getElementById("createTab").addEventListener("click", renderCreate);
    document.getElementById("profileTab").addEventListener("click", renderProfile);

    renderHome();
  </script>
</body>
</html>