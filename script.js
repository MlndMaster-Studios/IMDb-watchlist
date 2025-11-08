// script.js
// 🎃 Liam's Ultimate Horror & Thriller Master List (2025 Edition)
// Click titles to open IMDb pages. Check a box to mark as finished (hides movie).
// Use the toggle button at the top to show/hide finished films.

document.addEventListener("DOMContentLoaded", () => {
  const sections = {

    "MOVIES": {
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "The Running Man (2025)": "https://www.imdb.com/title/tt14107334/",
      "Novocaine (2025)": "https://www.imdb.com/title/tt29603959/",
      "Nope (2022)": "https://www.imdb.com/title/tt10954984/",
      "A Working Man (2025)": "https://www.imdb.com/title/tt29644189/",
      "Zootopia 2 (2025)": "https://www.imdb.com/title/tt26443597/",
      "Five Nights at Freddy's 2 (2025)": "https://www.imdb.com/title/tt30274401/",
      "Scream 7 (2026)": "https://www.imdb.com/title/tt27047903/",
      "The Beekeeper (2024)": "https://www.imdb.com/title/tt15314262/",
      "A.I. Artificial Intelligence (2001)": "https://www.imdb.com/title/tt0212720/",
      "Companion (2025)": "https://www.imdb.com/title/tt26584495/",
      "Donnie Darko (2001)": "https://www.imdb.com/title/tt0246578/",
      "Pulp Fiction (1994)": "https://www.imdb.com/title/tt0110912/",
      "The Wolf of Wall Street (2013)": "https://www.imdb.com/title/tt0993846/",
      "The Shawshank Redemption (1994)": "https://www.imdb.com/title/tt0111161/",
      "28 Days Later (2002)": "https://www.imdb.com/title/tt0289043/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/",
      "The Monkey (2025)": "https://www.imdb.com/title/tt15774462/"
    },

    "High-Concept / “Scary but Not Horror”": {
      "10 Cloverfield Lane (2016)": "https://www.imdb.com/title/tt1179933/",
      "Coherence (2013)": "https://www.imdb.com/title/tt2866360/",
      "Don’t Breathe (2016)": "https://www.imdb.com/title/tt4160708/",
      "The Menu (2022)": "https://www.imdb.com/title/tt9764362/",
      "Run (2020)": "https://www.imdb.com/title/tt8633478/",
      "Get Out (2017)": "https://www.imdb.com/title/tt5052448/",
      "Us (2019)": "https://www.imdb.com/title/tt6857112/"
    }
  };


  const listContainer = document.getElementById("wishlist");

  // Create toggle button
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Show Finished Movies";
  toggleBtn.className = "toggle-btn";
  document.body.insertBefore(toggleBtn, listContainer);

  let showFinished = false;

  // Load hidden movies from localStorage
  const hiddenMovies = JSON.parse(localStorage.getItem("hiddenMovies")) || {};

  function saveHiddenMovies() {
    localStorage.setItem("hiddenMovies", JSON.stringify(hiddenMovies));
  }

  function renderList() {
    listContainer.innerHTML = "";

    for (const [section, movies] of Object.entries(sections)) {
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "section";

      const header = document.createElement("h2");
      header.textContent = section;
      sectionDiv.appendChild(header);

      const ul = document.createElement("ul");

      for (const [title, link] of Object.entries(movies)) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "movie-checkbox";

        const movieId = `${section}::${title}`;
        checkbox.checked = hiddenMovies[movieId] || false;

        const span = document.createElement("span");
        span.textContent = title;
        span.addEventListener("click", () => window.open(link, "_blank"));

        checkbox.addEventListener("change", () => {
          hiddenMovies[movieId] = checkbox.checked;
          saveHiddenMovies();
          renderList(); // re-render to hide/show
        });

        if (hiddenMovies[movieId] && !showFinished) continue;

        li.appendChild(checkbox);
        li.appendChild(span);
        ul.appendChild(li);
      }

      sectionDiv.appendChild(ul);
      listContainer.appendChild(sectionDiv);
    }
  }

  toggleBtn.addEventListener("click", () => {
    showFinished = !showFinished;
    toggleBtn.textContent = showFinished ? "Hide Finished Movies" : "Show Finished Movies";
    renderList();
  });

  renderList();
});

// === Theme Toggle ===
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "horror") document.body.classList.add("horror-theme");

// Toggle on click
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("horror-theme");

  // Save preference
  if (document.body.classList.contains("horror-theme")) {
    localStorage.setItem("theme", "horror");
    themeToggleBtn.textContent = "🌌 Switch to Brand Theme";
  } else {
    localStorage.setItem("theme", "brand");
    themeToggleBtn.textContent = "💀 Switch to Horror Theme";
  }
});

// Set initial button label
themeToggleBtn.textContent = document.body.classList.contains("horror-theme")
  ? "🌌 Switch to Brand Theme"
  : "💀 Switch to Horror Theme";
