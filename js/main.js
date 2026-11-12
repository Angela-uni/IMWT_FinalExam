// Timeline
const timelineData = [
  {
    year: "1194",
    title: "Middle Ages",
    text: "Explore London film locations featuring medieval architecture, ancient churches, and historical landmarks."
  },
  {
    year: "1558",
    title: "Elizabeth I Age",
    text: "Discover iconic settings representing the Elizabethan era, Renaissance drama, and royal heritage in London cinema."
  },
  {
    year: "First 1990s",
    title: "Digital & Early 90s",
    text: "Film locations representing the early 1990s cinematic landscape and London's evolving urban scenes."
  },
  {
    year: "99s - 00s",
    title: "Turn of the Century (99s-00s)",
    text: "Iconic movie locations from famous late 90s and 2000s British rom-coms and dramas."
  },
  {
    year: "2010 & after",
    title: "2010 and after (Our Age)",
    text: "Modern film locations featured in contemporary movies and modern television series set in London."
  }
];

// Function to select an age with a click
function selectStep(index) {
  const nodes = document.querySelectorAll('.timeline-node');
  const progress = document.getElementById('timelineProgress');
  
  // Update age
  nodes.forEach((node, i) => {
    if (i === index) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  });

  // percentage of completion
  const progressPercentage = (index / (nodes.length - 1)) * 100;
  progress.style.width = progressPercentage + '%';

  // update text
  const card = document.getElementById('timelineCard');
  card.style.opacity = '0';
  card.style.transform = 'translateY(8px)';

  setTimeout(() => {
    document.getElementById('cardYear').innerText = timelineData[index].year;
    document.getElementById('cardTitle').innerText = timelineData[index].title;
    document.getElementById('cardText').innerText = timelineData[index].text;

    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 150);
}

// SWITCH THEME

document.addEventListener("DOMContentLoaded", () => {
    // 1. Recupera il tema salvato nel browser, altrimenti usa quello di default
    const savedTheme = localStorage.getItem("selected-theme") || "early1900";
    setTheme(savedTheme);

    // 2. Aggiunge l'evento di click su tutti i link di cambio tema
    const themeOptions = document.querySelectorAll(".theme-option");
    
    themeOptions.forEach(option => {
        option.addEventListener("click", (e) => {
            e.preventDefault(); // Impedisce il comportamento di default del link (#)
            const selectedTheme = option.getAttribute("data-theme");
            setTheme(selectedTheme);
        });
    });
});

// Funzione principale per cambiare tema
function setTheme(themeName) {
    // Rimuove eventuali classi di temi precedenti applicati al body
    document.body.classList.forEach(className => {
        if (className.startsWith("theme-")) {
            document.body.classList.remove(className);
        }
    });

    // Aggiunge la nuova classe (es. "theme-future")
    document.body.classList.add(`theme-${themeName}`);

    // Salva la scelta dell'utente per le sessioni/pagine successive
    localStorage.setItem("selected-theme", themeName);
}

// Animazioni homepage

document.addEventListener("DOMContentLoaded", function() {
    // Seleziona tutte le righe delle narratives
    const narrativeRows = document.querySelectorAll('.narrative-row-left, .narrative-row-right');

    // Configurazione dell'osservatore
    const observerOptions = {
        root: null, // usa la finestra del browser come viewport
        threshold: 0.2 // l'animazione parte quando il 20% dell'elemento è visibile sullo schermo
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aggiunge la classe .animate quando l'elemento entra in vista
                entry.target.classList.add('animate');
                // Smette di osservare l'elemento una volta animato (così l'animazione avviene una sola volta)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Dice all'osservatore di controllare ciascuna riga
    narrativeRows.forEach(row => {
        observer.observe(row);
    });
});

// Fetch per i metadati del film
document.addEventListener("DOMContentLoaded", () => {
    const metadataList = document.getElementById("metadata-list");
    const mainElement = document.querySelector("main");
    
    if (metadataList && mainElement && mainElement.dataset.filmId) {
        const filmIdToFind = parseInt(mainElement.dataset.filmId, 10);
        fetch('../json/film_metadata.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Impossible to find a JSON file (error " + response.status + ")");
                }
                return response.json();
            })
            .then(data => {
                const currentFilm = data.find(film => film.film_id === filmIdToFind);
                
                if (currentFilm) {
                    metadataList.innerHTML = `
                        <li><strong>Title:</strong> ${currentFilm.film_name}</li>
                        <li><strong>Director:</strong> ${currentFilm.director}</li>
                        <li><strong>Year:</strong> ${currentFilm.year}</li>
                        <li><strong>Genre:</strong> ${currentFilm.genre}</li>
                        <li><strong>Starring:</strong> ${currentFilm.starring}</li>
                        <li><strong>Duration:</strong> ${currentFilm.duration}</li>
                        <li><strong>Production:</strong> ${currentFilm.production}</li>
                        <li><strong>Distribution:</strong> ${currentFilm.distribution}</li>
                    `;
                } else {
                    metadataList.innerHTML = `<li>No metadata for ID ${filmIdToFind}</li>`;
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
                metadataList.innerHTML = `<li>Error. Please open the console.</li>`;
            });
    }
});