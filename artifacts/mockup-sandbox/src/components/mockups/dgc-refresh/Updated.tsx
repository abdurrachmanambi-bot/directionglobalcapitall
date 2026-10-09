import './_group.css';
import './Updated.css';
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Compass,
  Layers3,
  MapPin,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Peran Kami', href: '#peran' },
  { label: 'Prinsip', href: '#prinsip' },
  { label: 'Tata Kelola', href: '#tata-kelola' },
];

const services = [
  {
    number: '01',
    title: 'Pendanaan strategis',
    description:
      'Mendukung kebutuhan pendanaan perusahaan dalam lingkup grup secara terarah, dengan mempertimbangkan prioritas dan rencana pertumbuhan.',
    detail:
      'Pembahasan kebutuhan modal diselaraskan dengan prioritas serta rencana pertumbuhan masing-masing perusahaan.',
    icon: BarChart3,
  },
  {
    number: '02',
    title: 'Manajemen keuangan & investasi',
    description:
      'Mendorong pengelolaan keuangan dan investasi perusahaan yang lebih terukur, selaras dengan sasaran dan tata kelola grup.',
    detail:
      'Fokus pada pengelolaan yang terukur, keselarasan sasaran, dan pertimbangan jangka panjang.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Konsultasi & pengawasan operasional',
    description:
      'Memberikan arahan, pemantauan, dan dukungan konsultatif agar operasional perusahaan berjalan dengan disiplin dan akuntabel.',
    detail:
      'Meliputi pemetaan risiko, pemantauan, dan penguatan akuntabilitas dalam kegiatan operasional.',
    icon: Compass,
  },
  {
    number: '04',
    title: 'Layanan penunjang usaha',
    description:
      'Menghubungkan kebutuhan layanan pendukung yang relevan untuk memperkuat ketahanan dan kesiapan perusahaan dalam berkembang.',
    detail:
      'Dukungan disesuaikan dengan kebutuhan dan kesiapan perusahaan dalam lingkup grup.',
    icon: BriefcaseBusiness,
  },
];

const principles = [
  {
    title: 'Disiplin dalam pengelolaan',
    detail:
      'Keputusan dan sumber daya dikelola dengan pertimbangan yang cermat, konsisten, dan berorientasi jangka panjang.',
  },
  {
    title: 'Pertumbuhan yang terarah',
    detail:
      'Dukungan disesuaikan dengan kebutuhan, kesiapan, dan arah strategis setiap perusahaan dalam lingkup grup.',
  },
  {
    title: 'Tanggung jawab yang jelas',
    detail:
      'Peran, proses, dan akuntabilitas dibangun secara terang agar kolaborasi dapat berjalan dengan kepercayaan.',
  },
  {
    title: 'Kemitraan yang terbuka',
    detail:
      'Kami menyambut dialog yang profesional untuk memahami peluang kerja sama dan kebutuhan bisnis secara lebih baik.',
  },
];

const stories = [
  {
    image: '/__mockup/images/dgc-building-day.webp',
    alt: 'Sudut pandang ke atas pada gedung-gedung perkantoran modern di siang hari',
    number: '01',
    title: 'Menyelaraskan arah',
    text: 'Memulai dari pemahaman yang sama tentang prioritas, konteks, dan tujuan perusahaan.',
    label: 'Arah strategis',
  },
  {
    image: '/__mockup/images/dgc-building-hero.webp',
    alt: 'Gedung perkantoran modern saat senja dengan cahaya hangat di dalamnya',
    number: '02',
    title: 'Menjaga disiplin',
    text: 'Menghubungkan rencana dengan pengelolaan yang terukur dan pertimbangan jangka panjang.',
    label: 'Pengelolaan',
  },
  {
    image: '/__mockup/images/dgc-building-contact.webp',
    alt: 'Menara perkantoran bercahaya pada malam hari',
    number: '03',
    title: 'Tumbuh dengan tanggung jawab',
    text: 'Mendorong kemajuan melalui peran yang jelas, pemantauan, dan akuntabilitas.',
    label: 'Akuntabilitas',
  },
];

export function Updated() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [activeStory, setActiveStory] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const storyTabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const story = stories[activeStory];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty('--page-progress', String(height > 0 ? window.scrollY / height : 0));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const changeStory = (direction: number) => {
    setActiveStory((current) => (current + direction + stories.length) % stories.length);
  };

  const onStoryKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const next = (activeStory + direction + stories.length) % stories.length;
      setActiveStory(next);
      storyTabRefs.current[next]?.focus();
    }
  };

  return (
    <div className="dgc-update" id="atas">
      <header className={`du-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="du-progress" ref={progressRef} aria-hidden="true" />
        <div className="du-container du-nav">
          <a className="du-brand" href="#atas" aria-label="PT Direction Global Capital — beranda">
            <span className="du-brand-mark"><ArrowUpRight aria-hidden="true" /></span>
            <span>PT DIRECTION<small>GLOBAL CAPITAL</small></span>
          </a>
          <button
            ref={toggleRef}
            className="du-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={menuOpen}
            aria-controls="du-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav id="du-navigation" className={`du-nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Navigasi utama">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="du-nav-cta" href="#kontak" onClick={closeMenu}>
              Hubungi kami <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="du-hero" aria-labelledby="du-hero-title">
          <div className="du-hero-image" aria-hidden="true" />
          <div className="du-hero-shade" aria-hidden="true" />
          <div className="du-hero-lines" aria-hidden="true" />
          <div className="du-container du-hero-content">
            <div className="du-hero-copy">
              <div className="du-kicker du-kicker-light"><span /> Holding company <i /> Batam, Indonesia</div>
              <h1 id="du-hero-title">Arah yang jelas.<br /><em>Pertumbuhan</em> yang terukur.</h1>
              <p>
                PT Direction Global Capital mendukung pertumbuhan dan pengelolaan perusahaan
                dalam lingkup grup melalui arahan strategis, disiplin keuangan, dan tata kelola
                yang bertanggung jawab.
              </p>
              <div className="du-hero-actions">
                <a className="du-button du-button-bright" href="#peran">Kenali peran kami <ArrowDown aria-hidden="true" /></a>
                <a className="du-button du-button-quiet" href="#kontak">Mulai diskusi <ArrowUpRight aria-hidden="true" /></a>
              </div>
              <div className="du-hero-note"><span className="du-note-rule" /> Dukungan di tingkat kepemilikan dan koordinasi</div>
            </div>
            <div className="du-logo-stage" role="img" aria-label="Logo perak PT Direction Global Capital dengan simbol pertumbuhan">
              <span className="du-stage-orbit du-orbit-a" />
              <span className="du-stage-orbit du-orbit-b" />
              <div className="du-logo-disc">
                <img src="/__mockup/images/dgc-logo-transparent.png" alt="" />
              </div>
              <span className="du-stage-caption">Direction <b>·</b> Growth <b>·</b> Stewardship</span>
            </div>
          </div>
          <a className="du-scroll-cue" href="#tentang"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
          <div className="du-hero-index">01 <span /> 08</div>
        </section>

        <section className="du-intro du-section" id="tentang" aria-labelledby="du-intro-title">
          <div className="du-container du-intro-grid">
            <aside className="du-side-note">
              <span className="du-index-label">01 / TENTANG PERUSAHAAN</span>
              <p>Peran yang terukur di balik perusahaan yang terus berkembang.</p>
              <div className="du-side-mark">DGC<span>—</span>01</div>
            </aside>
            <div className="du-intro-main">
              <div className="du-kicker"><span /> Tentang Direction</div>
              <h2 id="du-intro-title">Membangun <em>fondasi</em> agar bisnis bergerak dengan keyakinan.</h2>
              <p className="du-lead">
                <strong>PT Direction Global Capital adalah perusahaan holding</strong> yang berfokus
                pada dukungan pertumbuhan dan pengelolaan yang disiplin bagi perusahaan di bawah
                lingkupnya. Kami bekerja di tingkat kepemilikan dan koordinasi—membantu menyelaraskan
                arah, sumber daya, serta pengawasan tanpa mengambil alih keahlian tim operasional.
              </p>
              <div className="du-principle-strip">
                <div><span>01</span><b>Arah</b><small>Prioritas yang selaras</small></div>
                <div><span>02</span><b>Disiplin</b><small>Pengelolaan terukur</small></div>
                <div><span>03</span><b>Tumbuh</b><small>Kemajuan berkelanjutan</small></div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="du-story du-section"
          id="cerita"
          aria-labelledby="du-story-title"
          onKeyDown={onStoryKeyDown}
          tabIndex={0}
        >
          <div className="du-container">
            <div className="du-story-heading">
              <div>
                <div className="du-kicker du-kicker-light"><span /> Perspektif kami</div>
                <h2 id="du-story-title">Perjalanan yang dimulai dari <em>arah.</em></h2>
              </div>
              <p>Peran holding hadir dalam tahapan yang saling terhubung—dengan konteks perusahaan sebagai titik awal.</p>
            </div>
            <div className="du-story-stage" id="du-story-panel" role="tabpanel" aria-labelledby={`du-story-tab-${story.number}`} aria-live="polite">
              <div className="du-story-photo">
                <img key={story.image} src={story.image} alt={story.alt} />
                <span className="du-photo-label">Ilustrasi arsitektur · bukan properti perusahaan</span>
                <span className="du-photo-count">{story.number} <i>/</i> 03</span>
              </div>
              <div className="du-story-panel">
                <span className="du-story-label">{story.label}</span>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
                <div className="du-story-bottom">
                  <div className="du-story-dots" role="tablist" aria-label="Tahapan cerita">
                    {stories.map((item, index) => (
                      <button
                        key={item.number}
                        ref={(element) => { storyTabRefs.current[index] = element; }}
                        type="button"
                        role="tab"
                        id={`du-story-tab-${item.number}`}
                        aria-selected={activeStory === index}
                        tabIndex={activeStory === index ? 0 : -1}
                        aria-controls="du-story-panel"
                        aria-label={`Tampilkan tahapan ${item.number}: ${item.title}`}
                        onClick={() => setActiveStory(index)}
                      >
                        <span>{item.number}</span>
                      </button>
                    ))}
                  </div>
                  <div className="du-story-arrows">
                    <button type="button" aria-label="Tahap sebelumnya" onClick={() => changeStory(-1)}><ArrowLeft /></button>
                    <button type="button" aria-label="Tahap berikutnya" onClick={() => changeStory(1)}><ArrowRight /></button>
                  </div>
                </div>
              </div>
            </div>
            <p className="du-story-hint">Gunakan tombol panah kiri dan kanan saat bagian ini dipilih untuk menjelajahi tahapan.</p>
          </div>
        </section>

        <section className="du-services du-section" id="peran" aria-labelledby="du-services-title">
          <div className="du-container">
            <div className="du-section-head">
              <div>
                <div className="du-kicker"><span /> Ruang lingkup dukungan</div>
                <h2 id="du-services-title">Peran kami, <em>dirancang untuk mendukung.</em></h2>
              </div>
              <p>Dukungan holding yang terkoordinasi, berpijak pada kebutuhan perusahaan dan prinsip tata kelola yang sehat.</p>
            </div>
            <div className="du-services-grid">
              {services.map(({ number, title, description, detail, icon: Icon }) => {
                const expanded = expandedService === number;
                const panelId = `du-service-${number}`;
                return (
                  <article className={`du-service${expanded ? ' is-expanded' : ''}`} key={number}>
                    <div className="du-service-top"><span>{number} <i>/ 04</i></span><Icon aria-hidden="true" /></div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="du-service-detail" id={panelId} hidden={!expanded}>
                      <small>Fokus dukungan</small><p>{detail}</p>
                    </div>
                    <button
                      type="button"
                      className="du-service-toggle"
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => setExpandedService(expanded ? null : number)}
                    >
                      {expanded ? 'Tutup penjelasan' : 'Jelajahi peran'} <ChevronDown className={expanded ? 'is-open' : ''} aria-hidden="true" />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="du-model du-section" aria-labelledby="du-model-title">
          <div className="du-container du-model-grid">
            <div className="du-model-copy">
              <div className="du-kicker"><span /> Cara kami bekerja</div>
              <h2 id="du-model-title">Satu arah.<br /><em>Peran yang saling menguatkan.</em></h2>
              <p>
                Sebagai holding company, Direction Global Capital menjalankan fungsi koordinasi
                dan dukungan bagi perusahaan di dalam lingkup grup. Pendekatan kami menghubungkan
                sasaran strategis dengan praktik pengelolaan sehari-hari.
              </p>
              <div className="du-model-callout"><Check aria-hidden="true" /><span>Setiap bentuk dukungan berangkat dari dialog dan kesepakatan yang jelas.</span></div>
            </div>
            <div className="du-model-visual" role="img" aria-label="Hubungan fungsi holding dengan dukungan kepada perusahaan">
              <div className="du-model-rails" />
              <div className="du-model-core"><span>Direction<br />Global Capital</span></div>
              <div className="du-model-node du-node-a"><b>Arah strategis</b><small>Keselarasan sasaran</small></div>
              <div className="du-model-node du-node-b"><b>Pengelolaan</b><small>Keuangan & sumber daya</small></div>
              <div className="du-model-node du-node-c"><b>Pengawasan</b><small>Pemantauan & akuntabilitas</small></div>
              <div className="du-model-node du-node-d"><b>Dukungan</b><small>Konsultasi & layanan usaha</small></div>
              <span className="du-model-caption">KOORDINASI DI TINGKAT HOLDING</span>
            </div>
          </div>
        </section>

        <section className="du-principles du-section" id="prinsip" aria-labelledby="du-principles-title">
          <div className="du-container">
            <div className="du-section-head">
              <div>
                <div className="du-kicker"><span /> Yang kami pegang</div>
                <h2 id="du-principles-title">Kemajuan berarti <em>lebih dari sekadar angka.</em></h2>
              </div>
              <p>Cara kami bekerja sama pentingnya dengan tujuan yang ingin dicapai.</p>
            </div>
            <div className="du-principles-list">
              {principles.map((principle, index) => (
                <article className="du-principle" key={principle.title}>
                  <span className="du-principle-no">0{index + 1}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.detail}</p>
                  <ArrowUpRight aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="du-governance du-section" id="tata-kelola" aria-labelledby="du-governance-title">
          <div className="du-container">
            <div className="du-governance-box">
              <div className="du-governance-title">
                <div className="du-kicker"><span /> Transparansi & tata kelola</div>
                <h2 id="du-governance-title">Kejelasan adalah dasar kepercayaan.</h2>
              </div>
              <div className="du-governance-copy">
                <p>
                  PT Direction Global Capital menjalankan aktivitas perusahaan holding. Peran
                  kami berfokus pada dukungan di tingkat holding, bukan penawaran layanan keuangan
                  kepada masyarakat.
                </p>
                <div className="du-legal-note">
                  Pembahasan peluang kemitraan dilakukan secara langsung dan transparan. Cakupan,
                  tanggung jawab, serta ketentuan kerja sama disepakati terlebih dahulu sesuai
                  kebutuhan para pihak.
                </div>
              </div>
              <span className="du-governance-mark">GOVERNANCE / DGC</span>
            </div>
          </div>
        </section>

        <section className="du-contact du-section" id="kontak" aria-labelledby="du-contact-title">
          <div className="du-contact-photo" aria-hidden="true" />
          <div className="du-contact-shade" aria-hidden="true" />
          <div className="du-container du-contact-content">
            <div className="du-contact-grid">
              <div>
                <div className="du-kicker du-kicker-light"><span /> Terhubung dengan kami</div>
                <h2 id="du-contact-title">Mari mulai dengan <em>percakapan.</em></h2>
                <p className="du-contact-lede">
                  Untuk pertanyaan perusahaan atau diskusi kemitraan, hubungi tim kami. Kami terbuka
                  untuk memahami kebutuhan dan menjajaki kesesuaian secara profesional.
                </p>
                <div className="du-location"><MapPin aria-hidden="true" /> Batam, Indonesia</div>
              </div>
              <div className="du-contact-links" aria-label="Informasi kontak">
                <a href="https://wa.me/6289505752359" target="_blank" rel="noreferrer">
                  <span><small>WhatsApp</small>+62 895-0575-2359</span><ArrowUpRight aria-hidden="true" />
                </a>
                <a href="mailto:capitaldirectionglobal@gmail.com">
                  <span><small>Surat elektronik</small>capitaldirectionglobal@gmail.com</span><ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <footer className="du-footer">
              <a className="du-footer-brand" href="#atas">PT Direction Global Capital</a>
              <span>Holding company · Batam, Indonesia</span>
              <span>© {new Date().getFullYear()} Direction Global Capital</span>
              <a className="du-back-top" href="#atas">Kembali ke atas ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
