// script.js
// 🎃 Liam's Ultimate Horror & Thriller Master List (2025 Edition)
// Click titles to open IMDb pages. Check a box to mark as finished (hides movie).
// Use the toggle button at the top to show/hide finished films.

document.addEventListener("DOMContentLoaded", () => {
  const sections = {

    "MOVIES": {
      "Shaun of the Dead (2004)": "https://www.imdb.com/title/tt0365748/",
      "Cold Storage (2025)": "https://www.imdb.com/title/tt8879928/",
      "In Time (2011)": "https://www.imdb.com/title/tt1637688/",
      "Now You See Me: Now You Don't (2025)": "https://www.imdb.com/title/tt4712810/",
      "Central Intelligence (2016)": "https://www.imdb.com/title/tt1489889/",
      "Good Fortune (2025)": "https://www.imdb.com/title/tt27543578/",
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
      "Donnie Darko (2001)": "Https://www.imdb.com/title/tt0246578",
      "Pulp Fiction (1994)": "https://www.imdb.com/title/tt0110912/",
      "The Wolf of Wall Street (2013)": "https://www.imdb.com/title/tt0993846/",
      "The Shawshank Redemption (1994)": "https://www.imdb.com/title/tt0111161/",
      "28 Days Later (2002)": "https://www.imdb.com/title/tt0289043/",
      "28 Weeks Later (2007)": "https://www.imdb.com/title/tt0463854/",
      "28 Years Later (2025)": "https://www.imdb.com/title/tt10548174/",
      "28 Years Later: The Bone Temple (2026)": "https://www.imdb.com/title/tt32141377/",
      "Sinners (2025)": "https://www.imdb.com/title/tt31193180/",
      "One Battle After Another (2025)": "https://www.imdb.com/title/tt30144839/",
      "Frankenstein (2025)": "https://www.imdb.com/title/tt1312221/",
      "Play Dirty (2025)": "https://www.imdb.com/title/tt18392014/",
      "Afraid (2024)": "https://www.imdb.com/title/tt24577462/",
      "The Woman in the Yard (2025)": "https://www.imdb.com/title/tt29644189/",
      "Fantasy Island (2020)": "https://www.imdb.com/title/tt0983946/",
      "Imaginary (2024)": "https://www.imdb.com/title/tt26658104/",
      "The Town That Dreaded Sundown (2014)": "https://www.imdb.com/title/tt2561546/",
      "Freaky (2020)": "https://www.imdb.com/title/tt10919380/",
      "The Visit (2015)": "https://www.imdb.com/title/tt3567288/",
      "The Hunt (2020)": "https://www.imdb.com/title/tt8244784/",
      "Glass (2019)": "https://www.imdb.com/title/tt6823368/",
      "Speak No Evil (2024)": "https://www.imdb.com/title/tt27534307/",
      "The Invisible Man (2020)": "https://www.imdb.com/title/tt1051906/",
      "Roofman (2025)": "https://www.imdb.com/title/tt4627382/",
      "The Conjuring: Last Rites (2025)": "https://www.imdb.com/title/tt22898462/",
      "Bring Her Back (2025)": "https://www.imdb.com/title/tt32246771/",
      "Caught Stealing (2025)": "https://www.imdb.com/title/tt1493274/",
      "The Naked Gun (2025)": "https://www.imdb.com/title/tt3402138/",
      "Black Phone 2 (2025)": "https://www.imdb.com/title/tt29644189/"
    },

    "TV SHOWS": {
      "Miracle Workers (2019-2023)": "https://www.imdb.com/title/tt7529770/",
      "Severance - Upcoming Season (2022)": "https://www.imdb.com/title/tt11280740/",
      "NOS4A2 (2019-2020)": "https://www.imdb.com/title/tt2866360/",
      "Andor (2022-2025)": "https://www.imdb.com/title/tt9253284/",
      "Murderbot (2025-)": "https://www.imdb.com/title/tt30444310/",
      "Stranger Things (2016-2025)": "https://www.imdb.com/title/tt4574334/",
      "The 100 (2014-2020)": "https://www.imdb.com/title/tt2661044/",
      "Black Mirror (2011-)": "https://www.imdb.com/title/tt2085059/",
      "A Man on the Inside (2024-)": "https://www.imdb.com/title/tt26670955/",
      "The Terminal List - Upcoming Season (2022-2026)": "https://www.imdb.com/title/tt11743610/",
      "Fubar (2023-2025)": "https://www.imdb.com/title/tt13064902/",
      "Game of Thrones (2011-2019)": "https://www.imdb.com/title/tt0944947/",
      "Breaking Bad (2008-2013)": "https://www.imdb.com/title/tt0903747/",
      "The Walking Dead (2010-2022)": "https://www.imdb.com/title/tt1520211/",
      "Fear the Walking Dead (2015-2023)": "https://www.imdb.com/title/tt3743822/",
      "Counterpart (2017-2019)": "https://www.imdb.com/title/tt4643084/",
      "Slow Horses (2022-)": "https://www.imdb.com/title/tt5875444/",
      "The Boys (2019-)": "https://www.imdb.com/title/tt1190634/",
      "The Good Place (2016-2020)": "https://www.imdb.com/title/tt4955642/",
      "War of the Worlds (2019-2022)": "https://www.imdb.com/title/tt9686194/",
      "I Am Not Okay with This (2020)": "https://www.imdb.com/title/tt9446688/",
      "The Sandman (2022-2025)": "https://www.imdb.com/title/tt1751634/",
      "Skull Island (2023)": "https://www.imdb.com/title/tt13929756/"
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
