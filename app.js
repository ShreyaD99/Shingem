let gatherings = JSON.parse(localStorage.getItem("gatherings")) || [];

function saveData() {
  localStorage.setItem("gatherings", JSON.stringify(gatherings));
}

function render() {
  const container = document.getElementById("gatherings");
  container.innerHTML = "";

  gatherings.forEach((g, index) => {
    const div = document.createElement("div");
    div.className = "gathering";

    div.innerHTML = `
      <strong>${g.title}</strong><br/>
      ${g.description}<br/>
      <em>${g.vibe}</em><br/>
      <button onclick="join(${index})">Request to Join</button>
    `;

    container.appendChild(div);
  });

  document.getElementById("count").innerText =
    `${gatherings.length} gatherings created`;
}

function createGathering() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const vibe = document.getElementById("vibe").value;

  if (!title) {
    alert("Please enter a title");
    return;
  }

  gatherings.push({ title, description, vibe });
  saveData();
  render();

  alert("✨ Gathering created!");

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("vibe").value = "";
}

function join(index) {
  alert("Request sent ✨");
}

function resetApp() {
  localStorage.clear();
  gatherings = [];
  render();
}

render();