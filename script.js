// Replace the values below with the final invitation details. Keep each value in quotes.
const invitation = {
  bride: "Nanda Shiju",
  groom: "Goutham Cherukate",
  engagementDate: "16 January 2027",
  engagementVenue: "Oshin Calicut, Bank Road, Kozhikode 673001",
  celebrationDate: "19 May 2027",
  celebrationVenue: "Staydium Bungalow Resort, Bilathikkulam, Kozhikode",
  weddingDate: "21 May 2027",
  weddingVenue:
    "Lavandis Convention Centre, Mokavoor Road, Eranhikkal, Kozhikode 673303",
  contactName: "Prabhu Cherukate",
  contactPhone: "+91 9480707074",
  secondContactName: "Preetha Prabhu",
  secondContactPhone: "+91 9495033262",
};

// Add the shared Google Drive folder link when guest sharing is ready.
const guestMemoriesUrl = "";

const venueMapQueries = {
  engagement: invitation.engagementVenue,
  celebration: invitation.celebrationVenue,
  wedding: invitation.weddingVenue,
};
document.querySelectorAll("[data-map]").forEach((link) => {
  const venue = venueMapQueries[link.dataset.map];
  if (venue)
    link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}`;
});

const memoryButton = document.getElementById("share-memories-button");
const memoryStatus = document.getElementById("memory-status");
let memoryDestination = null;
try {
  const url = new URL(guestMemoriesUrl);
  if (url.protocol === "https:") memoryDestination = url.href;
} catch {
  // Leave sharing in its coming-soon state until a complete link is supplied.
}
if (memoryDestination) {
  memoryButton.removeAttribute("aria-disabled");
  memoryStatus.textContent =
    "Share your photos and videos in our shared album.";
}
memoryButton.addEventListener("click", () => {
  if (memoryDestination) {
    window.open(memoryDestination, "_blank", "noopener,noreferrer");
  } else {
    memoryStatus.textContent =
      "Our shared album is coming after the celebrations. Please come back to add your favourite photos and videos.";
  }
});

for (const [field, value] of Object.entries(invitation)) {
  document.querySelectorAll(`[data-field="${field}"]`).forEach((element) => {
    element.textContent = value;
  });
}

const audio = document.getElementById("ambience");
const soundToggle = document.getElementById("sound-toggle");
audio.volume = 0.45;
let soundWasPaused = false;
const updateSoundToggle = () => {
  const playing = !audio.paused;
  soundToggle.setAttribute("aria-pressed", String(playing));
  soundToggle.setAttribute(
    "aria-label",
    playing ? "Pause music" : "Play music",
  );
  soundToggle.querySelector(".sound-label").textContent = playing
    ? "Pause music"
    : "Play music";
  soundToggle.classList.toggle("needs-play", !playing);
};
const startMusic = () => {
  if (soundWasPaused || !audio.paused) return;
  audio.play().then(updateSoundToggle).catch(updateSoundToggle);
};
soundToggle.addEventListener("click", () => {
  if (audio.paused) {
    soundWasPaused = false;
    startMusic();
  } else {
    soundWasPaused = true;
    audio.pause();
    updateSoundToggle();
  }
});
audio.addEventListener("play", updateSoundToggle);
audio.addEventListener("pause", updateSoundToggle);
audio.load();
startMusic();
document.addEventListener(
  "pointerdown",
  (event) => {
    if (!soundToggle.contains(event.target)) startMusic();
  },
  { once: true },
);
document.addEventListener(
  "keydown",
  (event) => {
    if (!soundToggle.contains(event.target)) startMusic();
  },
  { once: true },
);
updateSoundToggle();

const words = [
  "LOVE",
  "LAUGHTER",
  "TOGETHERNESS",
  "JOY",
  "BLESSINGS",
  "HOPE",
  "HARMONY",
  "FAMILY",
  "FRIENDSHIP",
  "GRATITUDE",
  "PROMISE",
  "DEVOTION",
  "TRUST",
  "CHERISH",
  "CELEBRATE",
  "RADIANCE",
  "WARMTH",
  "KINDNESS",
  "SERENITY",
  "DELIGHT",
  "FOREVER",
  "DREAMS",
  "MEMORIES",
  "UNITY",
  "HAPPINESS",
  "TRADITION",
  "WONDER",
  "GRACE",
  "AFFECTION",
  "BEGINNINGS",
];
const marqueeTrack = document.getElementById("marquee-track");
const phrase = `${words.join(" · ")} · `;
for (let copy = 0; copy < 2; copy++) {
  const span = document.createElement("span");
  span.textContent = phrase;
  marqueeTrack.append(span);
}

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
if (!reducedMotion) {
  for (const [selector, count] of [
    [".hero", 8],
    [".engagement-section", 9],
  ]) {
    const host = document.querySelector(selector);
    const layer = document.createElement("div");
    layer.className = "petal-layer";
    layer.setAttribute("aria-hidden", "true");
    for (let index = 0; index < count; index++) {
      const petal = document.createElement("span");
      petal.className = "floating-petal";
      petal.style.setProperty("--x", `${(index * 29 + 11) % 94}%`);
      petal.style.setProperty("--delay", `${-index * 2.3}s`);
      petal.style.setProperty("--duration", `${12 + (index % 5) * 2}s`);
      layer.append(petal);
    }
    host.append(layer);
  }

  if ("IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
      ".intro h2, .intro-copy, .occasion-path, .engagement-heading, .event-details, .portrait-heading, .portrait-card, .invitation-card, .rsvp-section h2, .rsvp-contact",
    );
    document.body.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -25px 0px" },
    );
    revealTargets.forEach((target) => observer.observe(target));
  }
}
