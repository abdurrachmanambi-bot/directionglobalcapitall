document.documentElement.classList.add('du-js');

const header = document.querySelector('.du-header');
const progressBar = document.getElementById('du-progress');

function updateScrollState() {
  header?.classList.toggle('is-scrolled', window.scrollY > 18);

  if (progressBar) {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? Math.min(1, window.scrollY / scrollableHeight) : 0;
    progressBar.style.setProperty('--page-progress', String(progress));
  }
}

updateScrollState();
window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState, { passive: true });

const menuToggle = document.getElementById('du-menu-toggle');
const navigation = document.getElementById('du-navigation');

function setMenuOpen(open, restoreFocus = false) {
  if (!menuToggle || !navigation) return;

  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
  navigation.classList.toggle('is-open', open);
  menuToggle.innerHTML = open
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>';

  if (restoreFocus) menuToggle.focus();
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

navigation?.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('a')) {
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false, true);
  }
});

document.addEventListener('click', (event) => {
  if (
    menuToggle?.getAttribute('aria-expanded') === 'true' &&
    event.target instanceof Element &&
    !event.target.closest('.du-header')
  ) {
    setMenuOpen(false);
  }
});

const stories = [
  {
    image: '/dgc-building-day.webp',
    alt: 'Sudut pandang ke atas pada gedung-gedung perkantoran modern di siang hari',
    number: '01',
    title: 'Menyelaraskan arah',
    text: 'Memulai dari pemahaman yang sama tentang prioritas, konteks, dan tujuan perusahaan.',
    label: 'Arah strategis',
  },
  {
    image: '/dgc-building-hero.webp',
    alt: 'Gedung perkantoran modern saat senja dengan cahaya hangat di dalamnya',
    number: '02',
    title: 'Menjaga disiplin',
    text: 'Menghubungkan rencana dengan pengelolaan yang terukur dan pertimbangan jangka panjang.',
    label: 'Pengelolaan',
  },
  {
    image: '/dgc-building-contact.webp',
    alt: 'Menara perkantoran bercahaya pada malam hari',
    number: '03',
    title: 'Tumbuh dengan tanggung jawab',
    text: 'Mendorong kemajuan melalui peran yang jelas, pemantauan, dan akuntabilitas.',
    label: 'Akuntabilitas',
  },
];

const storyPanel = document.getElementById('du-story-panel');
const storyImage = document.getElementById('du-story-image');
const storyHeading = document.getElementById('du-story-heading');
const storyText = document.getElementById('du-story-text');
const storyLabel = document.getElementById('du-story-label');
const storyNumber = document.getElementById('du-story-number');
const storyTabs = Array.from(document.querySelectorAll('[data-story-index]'));
let activeStory = 0;

function showStory(index, moveFocus = false) {
  activeStory = (index + stories.length) % stories.length;
  const story = stories[activeStory];
  const selectedTab = storyTabs[activeStory];

  if (storyImage) {
    storyImage.classList.remove('is-entering');
    storyImage.src = story.image;
    storyImage.alt = story.alt;
    void storyImage.offsetWidth;
    storyImage.classList.add('is-entering');
  }

  if (storyHeading) storyHeading.textContent = story.title;
  if (storyText) storyText.textContent = story.text;
  if (storyLabel) storyLabel.textContent = story.label;
  if (storyNumber) storyNumber.textContent = story.number;
  if (storyPanel) storyPanel.setAttribute('aria-labelledby', `du-story-tab-${story.number}`);

  storyTabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === activeStory;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  if (moveFocus) selectedTab?.focus();
}

storyTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showStory(index));
  tab.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      showStory(activeStory + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
});

document.getElementById('du-story-prev')?.addEventListener('click', () => showStory(activeStory - 1));
document.getElementById('du-story-next')?.addEventListener('click', () => showStory(activeStory + 1));

storyPanel?.addEventListener('keydown', (event) => {
  if (event.target === storyPanel && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
    event.preventDefault();
    showStory(activeStory + (event.key === 'ArrowRight' ? 1 : -1), true);
  }
});

document.querySelectorAll('.du-service-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    const panelId = toggle.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    const card = toggle.closest('.du-service');
    const label = toggle.querySelector('span');
    const chevron = toggle.querySelector('svg');

    toggle.setAttribute('aria-expanded', String(!isExpanded));
    if (panel) panel.hidden = isExpanded;
    card?.classList.toggle('is-expanded', !isExpanded);
    if (label) label.textContent = isExpanded ? 'Jelajahi peran' : 'Tutup penjelasan';
    chevron?.classList.toggle('is-open', !isExpanded);
  });
});

const year = document.getElementById('du-year');
if (year) year.textContent = String(new Date().getFullYear());
