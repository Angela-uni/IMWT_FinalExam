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