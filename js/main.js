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

// Fetch per i testi delle location (3 pubblici x 3 lunghezze)
document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("text-container");
    const mainElement = document.querySelector("main");

    if (!textContainer || !mainElement || !mainElement.dataset.textId) return;

    const textIdToFind = parseInt(mainElement.dataset.textId, 10);
    const titleElement = document.getElementById("location-text-title");
    const pageTitle = document.querySelector("main h1");
    const btnLess = document.getElementById("btn-tell-less");
    const btnMore = document.getElementById("btn-tell-more");
    const audienceButtons = document.querySelectorAll(".btn-audience");

    const lengths = ["short", "medium", "long"];
    // Testo di default: adult - medium
    let audience = "adult";
    let lengthIndex = 1;
    let currentText = null;

    function render() {
        const text = currentText.levels[audience][lengths[lengthIndex]];
        textContainer.innerHTML = "";
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        textContainer.appendChild(paragraph);
        textContainer.scrollTop = 0;

        // Bottone del pubblico attivo
        audienceButtons.forEach(button => {
            const isActive = button.dataset.audience === audience;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", isActive);
        });

        // Disattiva "less" sul testo short e "more" sul testo long
        if (btnLess) btnLess.disabled = lengthIndex === 0;
        if (btnMore) btnMore.disabled = lengthIndex === lengths.length - 1;
    }

    fetch('../json/text_location.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Impossible to find a JSON file (error " + response.status + ")");
            }
            return response.json();
        })
        .then(data => {
            // Cerca per text_id: la stessa location può avere più testi (uno per narrativa/film)
            currentText = data.find(text => text.text_id === textIdToFind);

            if (!currentText) {
                textContainer.innerHTML = `<p>No text for ID ${textIdToFind}</p>`;
                return;
            }

            if (titleElement) {
                titleElement.textContent = pageTitle ? pageTitle.textContent : currentText.reference;
            }

            audienceButtons.forEach(button => {
                button.addEventListener("click", () => {
                    audience = button.dataset.audience;
                    render();
                });
            });

            if (btnLess) {
                btnLess.addEventListener("click", () => {
                    if (lengthIndex > 0) {
                        lengthIndex--;
                        render();
                    }
                });
            }

            if (btnMore) {
                btnMore.addEventListener("click", () => {
                    if (lengthIndex < lengths.length - 1) {
                        lengthIndex++;
                        render();
                    }
                });
            }

            render();
        })
        .catch(error => {
            console.error("Fetch error:", error);
            textContainer.innerHTML = `<p>Error. Please open the console.</p>`;
        });
});