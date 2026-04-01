let gatherings = JSON.parse(localStorage.getItem("gatherings")) || [];

function saveData() {
  localStorage.setItem("gatherings", JSON.stringify(gatherings));
}

function render() {
  const container = document.getElementById("gatherings");
  if (!container) return;

  container.innerHTML = "";

  gatherings.forEach((g, index) => {
    const div = document.createElement("div");
    div.className = "gathering";

    div.innerHTML = `
      <strong>${g.title}</strong><br/>
      ${g.description ? g.description : ""}<br/>
      <em>${g.vibe ? g.vibe : ""}</em><br/>
      <button onclick="joinGathering(${index})">Request to Join</button>
    `;

    container.appendChild(div);
  });

  const count = document.getElementById("count");
  if (count) {
    count.innerText = `${gatherings.length} gatherings created`;
  }
}

function createGathering() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const vibe = document.getElementById("vibe").value.trim();

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

function joinGathering(index) {
  alert(`Request sent to join "${gatherings[index].title}" ✨`);
}

function resetApp() {
  localStorage.removeItem("gatherings");
  gatherings = [];
  render();
}

render();