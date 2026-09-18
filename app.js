// ==========================================================
// 1. DATA DES RÉALISATIONS (AVEC APERÇU MOCKUP DYNAMIQUE)
// ==========================================================
const portfolioData = [
  {
    title: "Tour'bois Créations",
    badge: "E-Commerce & Métier d'Art",
    logo: "images/tourn.webp",
    preview: "images/tourn-mac.webp",
    desc: "Conception d’un site e-commerce pour Tournbois Création, entreprise spécialisée dans la tournerie sur bois, visant à digitaliser son offre. Le projet met en avant l'authenticité et la qualité du savoir-faire tout en offrant une expérience d'achat fluide pour les visiteurs.",
    link: "https://tournbois-creations.fr",
    isLive: true,
  },
  {
    title: "MCL Gestion",
    badge: "Site Vitrine PME & Finance",
    logo: "images/mcl.webp",
    preview: "images/mcl-mac.webp",
    desc: "Conception d’un site vitrine pour MCL Gestion, cabinet spécialisé en DAF externalisée et accompagnement des PME, avec la mise en valeur de son expertise en gestion financière, de ses solutions sur mesure et de son accompagnement de proximité auprès des entreprises.",
    link: "https://mclgestion.fr",
    isLive: true,
  },
  {
    title: "Soupe Horticulture",
    badge: "Production Végétale & Jardinerie",
    logo: "images/soupe2.webp",
    preview: "images/soupe-mac.webp",
    desc: "Conception d’un site vitrine pour la SCEA Soupe horticulture, producteur horticole familial spécialisé dans la production de plantes, fleurs et légumes, avec la mise en valeur de ses deux sites de production, de ses jardineries et de son savoir-faire local.",
    link: "https://soupe-horticulture.fr",
    isLive: true,
  },
  {
    title: "Access Machines",
    badge: "Équipement BTP & TP",
    logo: "images/accessmachines.webp",
    preview: "images/access-mac.webp",
    desc: "Conception d’un site vitrine pour Access Machines, spécialiste de la vente de machines TP pour les professionnels du bâtiment, des travaux publics et de l’industrie, avec un accompagnement sur mesure et des conseils personnalisés.",
    link: "https://accesspromachines.fr/",
    isLive: true,
  },
  {
    title: "EGT Environnement",
    badge: "Gestion des Déchets & Bennes",
    logo: "images/egt.webp",
    preview: "images/egt-mac.webp", // Déjà prête !
    desc: "Conception d’un site vitrine pour EGT Environnement, entreprise spécialisée dans la collecte, le tri et la gestion responsable des déchets, proposant également la location de bennes et un accompagnement personnalisé pour les professionnels et collectivités.",
    link: "https://www.egt-environnement.fr",
    isLive: true,
  },
  {
    title: "Mille et un pas",
    badge: "Commerce de Détail & Mode",
    logo: "images/mille.webp",
    preview: "images/mille-mac.webp",
    desc: "Conception d’un site vitrine pour Mille et un pas, magasin de chaussures à Pontarlier, offrant une large gamme de chaussures pour toute la famille, alliant confort, style et qualité, avec un service personnalisé pour répondre aux besoins de chaque client.",
    link: "https://mille-et-un-pas.fr",
    isLive: true,
  },
  {
    title: "AccessPro'TP",
    badge: "Vente Matériel Professionnel",
    logo: "images/access.webp",
    preview: "images/accesspro-mac.webp",
    desc: "Conception d’un site vitrine pour Access’Pro TP, spécialiste de la vente d'équipements pour les professionnels du TP, du bâtiment, de l’environnement, de l’industrie ou du paysage avec un accompagnement sur mesure et des marques européennes reconnues.",
    link: "https://accessprotp.fr",
    isLive: true,
  },
  {
    title: "Formprotech",
    badge: "Organisme de Formation Pro",
    logo: "images/formprotech3.png",
    preview: "images/form-mac.webp",
    desc: "Conception d’un site vitrine pour Formprotech, organisme spécialisé dans la formation professionnelle, alliant expertise technique, développement technico-commercial et accompagnement humain pour renforcer les compétences des entreprises et de leurs collaborateurs.",
    link: "",
    isLive: false,
  },
  {
    title: "Clinic Armes",
    badge: "Armurerie & Équipements",
    logo: "images/clinic.webp",
    preview: "images/clinic-mac.webp",
    desc: "Conception d’un site vitrine pour Clinic Armes, armurerie à Villars-les-Dombes, mettant en avant leur passion pour les équipements de qualité, leur expertise et leurs conseils, au service des particuliers et des professionnels.",
    link: "https://clinic-armes.fr",
    isLive: true,
  },
  {
    title: "Les Meubles Mailland",
    badge: "Artisanat & Meubles Sur-Mesure",
    logo: "images/mailland.png",
    preview: "images/mailland-mac.webp",
    desc: "Conception d’un site vitrine pour l’entreprise Les Meubles Mailland, moderne et fonctionnel, mettant en avant leur savoir-faire et leurs créations sur mesure permettant aux visiteurs de découvrir l’univers de l’entreprise.",
    link: "https://meublesmailland.fr",
    isLive: true,
  },
  {
    title: "Nathalie Robez Masson",
    badge: "Boutique en Ligne Animaux",
    logo: "images/nath.webp",
    preview: "images/nath-mac.webp",
    desc: "Site web e-commerce développé pour l’entreprise Nathalie & Cie, intégrant une boutique en ligne avec un système avancé de gestion des produits et des commandes, et une interface utilisateur à la fois intuitive et moderne.",
    link: "https://nathalie-et-cie.fr",
    isLive: true,
  },
  {
    title: "Aindev Drone",
    badge: "Prises de vue par drone",
    logo: "images/aindev-drone.webp",
    preview: "images/aindev-mac.webp",
    desc: "Site vitrine dédié aux prestations de prises de vue aériennes par drone d’Aindev. Présentation des services, des réalisations et des possibilités de captation photo et vidéo en haute définition.",
    link: "https://aindev-drone.fr",
    isLive: true,
  },
  {
    title: "ESS'Ain",
    badge: "Coopérative & Espace Membres",
    logo: "images/essain4.webp",
    preview: "images/ess-mac.webp",
    desc: "Création d’un portail web pour la Coopérative ESS’Ain, intégrant une fonctionnalité de connexion sécurisée pour les utilisateurs et un annuaire des membres, visant à améliorer la communication et la gestion des informations au sein de la structure.",
    link: "",
    isLive: false,
  },
  {
    title: "Sou des écoles",
    badge: "Plateforme Associative Locale",
    logo: "images/sou.webp",
    preview: "images/sou-mac.webp",
    desc: "Création d’un site pour le Sou des Écoles de Saint-Étienne-du-Bois, conçu pour refléter l’engagement solidaire de l’association. Ce site convivial et informatif permet de présenter les actions, événements et missions du Sou, tout en encourageant la participation des parents et bénévoles au service des enfants de l’école publique.",
    link: "https://sou-des-ecoles-01370.fr/",
    isLive: true,
  },
  {
    title: "Compétences & vous",
    badge: "Audit & Stratégie SEO",
    logo: "images/comp3.webp",
    preview: "",
    desc: "Sécurisation et optimisation des performances du site, optimisation du SEO pour améliorer sa visibilité sur les moteurs de recherche. Mise en place de stratégies d’optimisation on-page et off-page pour un référencement durable.",
    link: "https://competencesetvous.fr/",
    isLive: true,
  },
  {
    title: "Kodama",
    badge: "Webapp Cartographique Métier",
    logo: "images/kodama.webp",
    preview: "",
    desc: "Développement d’une application web sur mesure intégrant une gestion avancée de marqueurs sur une carte interactive (Leaflet), avec suivi des projets clients, interface utilisateur optimisée en React, et gestion des données via une base MongoDB.",
    link: "https://guillaume-gemelas-dev.com/#Projects",
    isLive: true,
  },
  {
    title: "Epgv01",
    badge: "Comité Départemental Sport",
    logo: "images/epgv2.png",
    preview: "images/epgv01-mac.webp",
    desc: "Conception d’un site vitrine pour le CODEP EPGV01, visant à améliorer la visibilité du comité et à fournir une plateforme facile à mettre à jour pour partager les informations sur les activités physiques et les événements locaux.",
    link: "https://epgv01.fr",
    isLive: true,
  },
  {
    title: "GLC Communication",
    badge: "WordPress & Diffusion Médias",
    logo: "images/glc3.webp",
    preview: "images/glc-mac.webp",
    desc: "Site web vitrine développé avec WordPress, intégrant un blog, des podcasts, et divers contenus multimédias pour renforcer la présence de marque et offrir une plateforme interactive d'actualités.",
    link: "",
    isLive: false,
  },
  {
    title: "Essilor",
    badge: "Configurateur Digital Magasin",
    logo: "images/essilo.webp",
    preview: "",
    desc: "Développement d’une webapp interactive pour Essilor, permettant aux utilisateurs de personnaliser des lunettes de vue et solaires en magasin. Cette interface de personnalisation offre une expérience utilisateur fluide, avec des options variées pour ajuster le style, la couleur, et les fonctionnalités des lunettes.",
    link: "https://www.meyecustom.com",
    isLive: true,
  },
];

// ==========================================================
// 2. SÉLECTION ET ANIMATION APPLE SMOOTH ZOOM
// ==========================================================
function selectProject(index) {
  const card = document.getElementById("projectFocusCard");
  const dockItems = document.querySelectorAll(".dock-item");
  const data = portfolioData[index];
  if (!card || !data) return;

  dockItems.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  const activeBtn = dockItems[index];
  if (activeBtn) {
    activeBtn.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  card.classList.add("animating");

  setTimeout(() => {
    // Mise à jour du logo
    document.getElementById("focusLogo").innerHTML = `
      <img src="${data.logo}" alt="${data.title}" onerror="this.outerHTML='<span style=\\'font-weight:800;font-size:1.5rem;color:var(--accent-cyan)\\'>${data.title.slice(0, 2).toUpperCase()}</span>'" />
    `;
    document.getElementById("focusBadge").textContent = data.badge;
    document.getElementById("focusCounter").textContent =
      `${String(index + 1).padStart(2, "0")} / ${String(portfolioData.length).padStart(2, "0")}`;
    document.getElementById("focusTitle").textContent = data.title;
    document.getElementById("focusDesc").textContent = data.desc;

    // Gestion du conteneur d'action (Bouton + Miniature dynamique avec sécurité anti-bug)
    const actionContainer = document.getElementById("focusAction");

    let buttonHtml = "";
    if (data.isLive && data.link) {
      buttonHtml = `
        <a href="${data.link}" target="_blank" rel="noopener" class="btn-action">
          Visiter le site en direct
          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.8rem; margin-left: 6px"></i>
        </a>
      `;
    } else {
      buttonHtml = `<span class="project-badge-tag">Projet métier livré avec succès</span>`;
    }

    // Si une image de preview existe dans la data, on l'affiche, sinon on masque ou laisse vide proprement
    let previewHtml = "";
    if (data.preview) {
      previewHtml = `
        <div class="project-preview-thumb" id="focusPreviewThumb">
          <img
            id="focusPreviewImg"
            src="${data.preview}"
            alt="Aperçu du projet ${data.title}"
            loading="lazy"
            onerror="this.closest('.project-preview-thumb').style.display='none';"
          />
        </div>
      `;
    }

    actionContainer.innerHTML = buttonHtml + previewHtml;

    card.classList.remove("animating");
  }, 160);
}

function scrollLogoDock(direction) {
  const track = document.getElementById("logoDock");
  if (!track) return;
  track.scrollBy({ left: direction * 240, behavior: "smooth" });
}

// ==========================================================
// 3. INTERRUPTEUR JOUR / NUIT (LAMPE)
// ==========================================================
function toggleNightMode() {
  document.body.classList.toggle("is-night");
}

// ==========================================================
// 4. MOTEUR DE BRUITAGES (SFX ULTRA LÉGER & RÉACTIF)
// ==========================================================
function playSoundEffect(src, volume = 0.5) {
  try {
    const sfx = new Audio(src);
    sfx.volume = volume;
    sfx.play().catch(() => {});
  } catch (err) {
    console.warn("Erreur SFX :", err);
  }
}

// ==========================================================
// 5. GESTION DES MODALES
// ==========================================================
function openModal(modalId) {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;

  overlay.classList.add("active");
  document
    .querySelectorAll(".modal-card")
    .forEach((c) => c.classList.remove("active"));

  const target = document.getElementById(modalId);
  if (target) target.classList.add("active");
}

function closeAllModals() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.remove("active");
  document
    .querySelectorAll(".modal-card")
    .forEach((c) => c.classList.remove("active"));
}

function switchToContact(subject) {
  openModal("modal-contact");
  const subInput = document.getElementById("subject");
  if (subInput) subInput.value = subject;
}

function handleFormSubmit(e) {
  e.preventDefault();
  alert("Merci Guillaume ! Votre message a bien été envoyé.");
  closeAllModals();
}

// ==========================================================
// 6. GESTION DE L'INTRO ET DU BOUTON PASSER
// ==========================================================
let introTimers = [];

function skipIntro() {
  introTimers.forEach((timer) => clearTimeout(timer));

  const introLoader = document.getElementById("intro-loader");
  const roomViewport = document.getElementById("room-viewport");
  const skipBtn = document.getElementById("skip-intro-btn");

  document.body.classList.remove("is-night");

  if (skipBtn) skipBtn.classList.remove("show");
  if (introLoader) introLoader.classList.add("hidden");
  if (roomViewport) roomViewport.classList.remove("is-blurred");
}

window.addEventListener("load", () => {
  const logoWrapper = document.getElementById("intro-logo");
  const introPhrase = document.getElementById("intro-phrase");
  const loader = document.getElementById("intro-loader");
  const viewport = document.getElementById("room-viewport");
  const skipBtn = document.getElementById("skip-intro-btn");

  if (logoWrapper) logoWrapper.classList.add("show");

  introTimers.push(
    setTimeout(() => {
      if (logoWrapper) {
        logoWrapper.classList.remove("show");
        logoWrapper.classList.add("fade-out");
      }
      document.body.classList.remove("is-night");
    }, 1400),
  );

  introTimers.push(
    setTimeout(() => {
      if (introPhrase) introPhrase.classList.add("show");
      if (skipBtn) skipBtn.classList.add("show");
    }, 1700),
  );

  introTimers.push(
    setTimeout(() => {
      if (introPhrase) {
        introPhrase.classList.remove("show");
        introPhrase.classList.add("fade-out");
      }
      if (skipBtn) skipBtn.classList.remove("show");
    }, 5000),
  );

  introTimers.push(
    setTimeout(() => {
      if (loader) loader.classList.add("hidden");
      if (viewport) viewport.classList.remove("is-blurred");
    }, 5500),
  );
});

// ==========================================================
// 7. CARROUSEL DES AVIS GOOGLE (AVEC LIRE LA SUITE)
// ==========================================================
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".reviews-slider");
  if (!slider) return;

  const track = slider.querySelector(".reviews-track");
  const cards = slider.querySelectorAll(".review-card");
  const nextBtn = slider.querySelector(".next");
  const prevBtn = slider.querySelector(".prev");
  const readBtns = slider.querySelectorAll(".read-more");

  let reviewIndex = 0;
  let autoTimer;

  function visibleReviews() {
    if (window.innerWidth <= 860) return 1;
    return 2;
  }

  function updateReviewSlider() {
    if (!cards.length) return;
    const gap = 20;
    const cardWidth = cards[0].offsetWidth + gap;
    const maxIndex = Math.max(0, cards.length - visibleReviews());

    if (reviewIndex > maxIndex) reviewIndex = 0;
    if (reviewIndex < 0) reviewIndex = maxIndex;

    track.style.transform = "translateX(-" + reviewIndex * cardWidth + "px)";
  }

  function nextReview() {
    reviewIndex++;
    updateReviewSlider();
  }

  function prevReview() {
    reviewIndex--;
    updateReviewSlider();
  }

  function startAutoReviews() {
    autoTimer = setInterval(nextReview, 4500);
  }

  function stopAutoReviews() {
    clearInterval(autoTimer);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoReviews();
      nextReview();
      startAutoReviews();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoReviews();
      prevReview();
      startAutoReviews();
    });
  }

  readBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".review-card");
      card.classList.toggle("open");
      btn.textContent = card.classList.contains("open")
        ? "Cacher"
        : "Lire la suite";
      stopAutoReviews();
    });
  });

  window.addEventListener("resize", () => {
    updateReviewSlider();
  });

  updateReviewSlider();
  startAutoReviews();
});

// ==========================================================
// 8. GESTION AUDIO AMBIANCE & INTERRUPTEUR PHYSIQUE LAMPE
// ==========================================================
let currentFadeInterval = null;

function fadeAudio(audio, targetVolume, duration = 1200, onComplete = null) {
  if (currentFadeInterval) clearInterval(currentFadeInterval);

  const stepTime = 40;
  const steps = duration / stepTime;
  const volumeStep = (targetVolume - audio.volume) / steps;

  if (targetVolume > 0 && audio.paused) {
    audio.volume = 0;
    audio
      .play()
      .then(() => {
        if (typeof onComplete === "function") onComplete();
      })
      .catch((e) =>
        console.log("Audio en attente d'interaction utilisateur", e),
      );
  }

  let currentStep = 0;
  currentFadeInterval = setInterval(() => {
    currentStep++;
    audio.volume = Math.min(1, Math.max(0, audio.volume + volumeStep));
    if (currentStep >= steps) {
      clearInterval(currentFadeInterval);
      currentFadeInterval = null;
      if (targetVolume === 0) {
        audio.pause();
      }
      if (typeof onComplete === "function") onComplete();
    }
  }, stepTime);
}

function updateAudioBtnState(isPlaying) {
  const btn = document.getElementById("audio-toggle-btn");
  const label = document.getElementById("audio-label-text");
  if (!btn) return;

  if (isPlaying) {
    btn.classList.add("playing");
    btn.classList.remove("muted");
    if (label) label.textContent = "Chill ON";
  } else {
    btn.classList.remove("playing");
    btn.classList.add("muted");
    if (label) label.textContent = "Mute";
  }
}

function toggleAudioManual() {
  const audio = document.getElementById("chill-audio");
  if (!audio) return;

  playSoundEffect("musique/switch.mp3", 0.4);

  if (audio.paused || audio.volume === 0) {
    fadeAudio(audio, 0.3, 800, () => updateAudioBtnState(true));
    updateAudioBtnState(true);
  } else {
    fadeAudio(audio, 0, 800, () => updateAudioBtnState(false));
    updateAudioBtnState(false);
  }
}

function toggleNightModeWithAudio() {
  playSoundEffect("musique/switch.mp3", 0.6);

  if (typeof toggleNightMode === "function") {
    toggleNightMode();
  } else {
    document.body.classList.toggle("is-night");
    const vp = document.getElementById("room-viewport");
    if (vp) vp.classList.toggle("is-blurred");
  }

  const audio = document.getElementById("chill-audio");
  if (audio) {
    if (!document.body.classList.contains("is-night")) {
      fadeAudio(audio, 0.3, 1000, () => updateAudioBtnState(true));
      updateAudioBtnState(true);
    } else {
      fadeAudio(audio, 0, 800, () => updateAudioBtnState(false));
      updateAudioBtnState(false);
    }
  }
}

// ==========================================================
// 9. INTERACTION ACCORDÉON FAQ (BENTO)
// ==========================================================
function toggleFaq(button) {
  const currentItem = button.closest(".faq-item");
  const allItems = document.querySelectorAll(".faq-item");

  const isAlreadyActive = currentItem.classList.contains("active");

  allItems.forEach((item) => {
    item.classList.remove("active");
  });

  if (!isAlreadyActive) {
    currentItem.classList.add("active");
  }
}
/* ==========================================================
   GESTION DE L'AUTO-HIDE DE L'INDICATEUR DE SCROLL
   ========================================================== */
document
  .querySelectorAll(".modal-card, .modal-bento-viewport")
  .forEach((modal) => {
    modal.addEventListener("scroll", () => {
      const indicator = modal.querySelector(".scroll-indicator-pill");
      if (!indicator) return;

      // Si on a scrollé de plus de 15 pixels vers le bas, on masque la capsule
      if (modal.scrollTop > 15) {
        indicator.classList.add("is-hidden");
      } else {
        // Si on est revenu tout en haut, on la réaffiche
        indicator.classList.remove("is-hidden");
      }
    });
  });
