// script.js
// 🎃 Liam's Ultimate Horror & Thriller Master List (2025 Edition)
// Click titles to open IMDb pages. Check a box to mark as finished (hides movie).
// Use the toggle button at the top to show/hide finished films.

document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    "Scream Franchise": {
      "Scream (1996)": "https://www.imdb.com/title/tt0117571/",
      "Scream 2 (1997)": "https://www.imdb.com/title/tt0120082/",
      "Scream 3 (2000)": "https://www.imdb.com/title/tt0134084/",
      "Scream 4 (2011)": "https://www.imdb.com/title/tt1262416/",
      "Scream (2022)": "https://www.imdb.com/title/tt11245972/",
      "Scream VI (2023)": "https://www.imdb.com/title/tt17663992/",
      "Scream VII (2026)": "https://www.imdb.com/title/tt32536493/"
    },
    "Fear Street Trilogy": {
      "Fear Street Part One: 1994 (2021)": "https://www.imdb.com/title/tt6566576/",
      "Fear Street Part Two: 1978 (2021)": "https://www.imdb.com/title/tt9701940/",
      "Fear Street Part Three: 1666 (2021)": "https://www.imdb.com/title/tt9701942/"
    },
    "Halloween Franchise": {
      "Halloween (1978)": "https://www.imdb.com/title/tt0077651/",
      "Halloween II (1981)": "https://www.imdb.com/title/tt0082495/",
      "Halloween 4: The Return of Michael Myers (1988)": "https://www.imdb.com/title/tt0095271/",
      "Halloween 5: The Revenge of Michael Myers (1989)": "https://www.imdb.com/title/tt0097474/",
      "Halloween H20: 20 Years Later (1998)": "https://www.imdb.com/title/tt0120694/",
      "Halloween: Resurrection (2002)": "https://www.imdb.com/title/tt0220506/",
      "Halloween (2018)": "https://www.imdb.com/title/tt1502407/",
      "Halloween Kills (2021)": "https://www.imdb.com/title/tt10665338/",
      "Halloween Ends (2022)": "https://www.imdb.com/title/tt10665342/"
    },
     "A Nightmare on Elm Street": {
      "A Nightmare on Elm Street (1984)": "https://www.imdb.com/title/tt0087800/",
      "A Nightmare on Elm Street 2: Freddy’s Revenge (1985)": "https://www.imdb.com/title/tt0089686/",
      "A Nightmare on Elm Street 3: Dream Warriors (1987)": "https://www.imdb.com/title/tt0093629/",
      "A Nightmare on Elm Street 4: The Dream Master (1988)": "https://www.imdb.com/title/tt0095742/",
      "A Nightmare on Elm Street 5: The Dream Child (1989)": "https://www.imdb.com/title/tt0097981/",
      "Freddy’s Dead: The Final Nightmare (1991)": "https://www.imdb.com/title/tt0101917/",
      "Wes Craven’s New Nightmare (1994)": "https://www.imdb.com/title/tt0111686/",
      "Freddy vs. Jason (2003)": "https://www.imdb.com/title/tt0329101/",
      "A Nightmare on Elm Street (2010)": "https://www.imdb.com/title/tt1179056/"
    },

    "Friday the 13th": {
      "Friday the 13th (1980)": "https://www.imdb.com/title/tt0080761/",
      "Friday the 13th Part 2 (1981)": "https://www.imdb.com/title/tt0082418/",
      "Friday the 13th Part III (1982)": "https://www.imdb.com/title/tt0083972/",
      "Friday the 13th: The Final Chapter (1984)": "https://www.imdb.com/title/tt0087298/",
      "Friday the 13th: A New Beginning (1985)": "https://www.imdb.com/title/tt0089173/",
      "Friday the 13th Part VI: Jason Lives (1986)": "https://www.imdb.com/title/tt0091080/",
      "Friday the 13th Part VII: The New Blood (1988)": "https://www.imdb.com/title/tt0095179/",
      "Friday the 13th Part VIII: Jason Takes Manhattan (1989)": "https://www.imdb.com/title/tt0097388/",
      "Jason Goes to Hell: The Final Friday (1993)": "https://www.imdb.com/title/tt0107254/",
      "Jason X (2002)": "https://www.imdb.com/title/tt0211443/",
      "Freddy vs. Jason (2003)": "https://www.imdb.com/title/tt0329101/",
      "Friday the 13th (2009)": "https://www.imdb.com/title/tt0758746/"
    },

    "SAW Franchise": {
      "SAW (2004)": "https://www.imdb.com/title/tt0387564/",
      "SAW II (2005)": "https://www.imdb.com/title/tt0432348/",
      "SAW III (2006)": "https://www.imdb.com/title/tt0489270/",
      "SAW IV (2007)": "https://www.imdb.com/title/tt0890870/",
      "SAW V (2008)": "https://www.imdb.com/title/tt1132626/",
      "SAW VI (2009)": "https://www.imdb.com/title/tt1233227/",
      "SAW VII: The Final Chapter (2010)": "https://www.imdb.com/title/tt1477076/",
      "Jigsaw (2017)": "https://www.imdb.com/title/tt3348730/",
      "Spiral: From the Book of SAW (2021)": "https://www.imdb.com/title/tt10342730/",
      "SAW X (2023)": "https://www.imdb.com/title/tt21807222/"
    },

    "Child’s Play Franchise": {
      "Child’s Play (1988)": "https://www.imdb.com/title/tt0094862/",
      "Child’s Play 2 (1990)": "https://www.imdb.com/title/tt0099253/",
      "Child’s Play 3 (1991)": "https://www.imdb.com/title/tt0103956/",
      "Bride of Chucky (1998)": "https://www.imdb.com/title/tt0144120/",
      "Seed of Chucky (2004)": "https://www.imdb.com/title/tt0387575/",
      "Curse of Chucky (2013)": "https://www.imdb.com/title/tt2230358/",
      "Cult of Chucky (2017)": "https://www.imdb.com/title/tt3280262/",
      "Child’s Play (2019)": "https://www.imdb.com/title/tt8663516/"
    },

    "The Conjuring Universe": {
      "The Nun (2018)": "https://www.imdb.com/title/tt5814060/",
      "Annabelle: Creation (2017)": "https://www.imdb.com/title/tt5140878/",
      "The Nun II (2023)": "https://www.imdb.com/title/tt10160976/",
      "Annabelle (2014)": "https://www.imdb.com/title/tt3322940/",
      "The Conjuring (2013)": "https://www.imdb.com/title/tt1457767/",
      "Annabelle Comes Home (2019)": "https://www.imdb.com/title/tt8350360/",
      "The Conjuring 2 (2016)": "https://www.imdb.com/title/tt3065204/",
      "The Conjuring: The Devil Made Me Do It (2021)": "https://www.imdb.com/title/tt7069210/",
      "The Conjuring: Last Rites (2025)": "https://www.imdb.com/title/tt27670229/"
    },

    "Insidious Franchise": {
      "Insidious (2010)": "https://www.imdb.com/title/tt1591095/",
      "Insidious: Chapter 2 (2013)": "https://www.imdb.com/title/tt2226417/",
      "Insidious: Chapter 3 (2015)": "https://www.imdb.com/title/tt3195644/",
      "Insidious: The Last Key (2018)": "https://www.imdb.com/title/tt5726086/",
      "Insidious: The Red Door (2023)": "https://www.imdb.com/title/tt13405778/"
    },

    "Texas Chainsaw Massacre Franchise": {
      "The Texas Chain Saw Massacre (1974)": "https://www.imdb.com/title/tt0072271/",
      "The Texas Chainsaw Massacre 2 (1986)": "https://www.imdb.com/title/tt0092076/",
      "Leatherface: The Texas Chainsaw Massacre III (1990)": "https://www.imdb.com/title/tt0099994/",
      "The Return of the Texas Chainsaw Massacre (1995)": "https://www.imdb.com/title/tt0110978/",
      "The Texas Chainsaw Massacre (2003)": "https://www.imdb.com/title/tt0324216/",
      "The Texas Chainsaw Massacre: The Beginning (2006)": "https://www.imdb.com/title/tt0420294/",
      "Texas Chainsaw 3D (2013)": "https://www.imdb.com/title/tt1572315/",
      "Leatherface (2017)": "https://www.imdb.com/title/tt2620590/",
      "Texas Chainsaw Massacre (2022)": "https://www.imdb.com/title/tt11755740/"
    },

    "28 Somethings Later": {
      "28 Days Later (2002)": "https://www.imdb.com/title/tt0289043/",
      "28 Weeks Later (2007)": "https://www.imdb.com/title/tt0463854/",
      "28 Years Later (2025)": "https://www.imdb.com/title/tt29538581/"
    },

    "Standalones & Modern Horror": {
      "Midsommar (2019)": "https://www.imdb.com/title/tt8772262/",
      "The Black Phone (2021)": "https://www.imdb.com/title/tt7144666/",
      "Freaky (2020)": "https://www.imdb.com/title/tt10919380/",
      "The Blackening (2022)": "https://www.imdb.com/title/tt11703244/",
      "The Monkey (2025)": "https://www.imdb.com/title/tt15774462/",
      "Weapons (2025)": "https://www.imdb.com/title/tt27674743/",
      "The Long Walk (2025)": "https://www.imdb.com/title/tt10414534/",
      "The Silence of the Lambs (1991)": "https://www.imdb.com/title/tt0102926/"
    },

    "Modern Slashers & Smart Gore": {
      "OLD (2021)": "https://www.imdb.com/title/tt10954652/",
      "Ready or Not (2019)": "https://www.imdb.com/title/tt7798634/",
      "You’re Next (2011)": "https://www.imdb.com/title/tt1853739/",
      "The Strangers (2008)": "https://www.imdb.com/title/tt0482606/",
      "The Strangers: Chapter 1 (2024)": "https://www.imdb.com/title/tt13607790/",
      "Totally Killer (2023)": "https://www.imdb.com/title/tt11426232/",
      "The Babysitter (2017)": "https://www.imdb.com/title/tt4225622/",
      "The Babysitter: Killer Queen (2020)": "https://www.imdb.com/title/tt11024272/",
      "Heart Eyes (2025)": "https://www.imdb.com/title/tt27381892/"
    },

    "Psychological / Supernatural Thrillers": {
      "The Invisible Man (2020)": "https://www.imdb.com/title/tt1051906/",
      "Smile (2022)": "https://www.imdb.com/title/tt15474916/",
      "Talk to Me (2023)": "https://www.imdb.com/title/tt10638522/",
      "Hereditary (2018)": "https://www.imdb.com/title/tt7784604/",
      "The Night House (2020)": "https://www.imdb.com/title/tt9731534/",
      "Barbarian (2022)": "https://www.imdb.com/title/tt15791034/",
      "Saint Maud (2019)": "https://www.imdb.com/title/tt7557108/",
      "Doctor Sleep (2019)": "https://www.imdb.com/title/tt5606664/",
      "Pet Sematary (2019)": "https://www.imdb.com/title/tt0837563/"
    },

    "Sci-Fi Horror / Weird Fiction": {
      "Nope (2022)": "https://www.imdb.com/title/tt10954984/",
      "Annihilation (2018)": "https://www.imdb.com/title/tt2798920/",
      "Underwater (2020)": "https://www.imdb.com/title/tt5774060/",
      "A Quiet Place (2018)": "https://www.imdb.com/title/tt6644200/",
      "A Quiet Place: Part II (2020)": "https://www.imdb.com/title/tt8332922/",
      "A Quiet Place: Day One (2024)": "https://www.imdb.com/title/tt13433802/",
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
