import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
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

const supportAreas = [
  {
    number: '01',
    title: 'Pendanaan strategis',
    description:
      'Mendukung kebutuhan pendanaan perusahaan dalam lingkup grup secara terarah, dengan mempertimbangkan prioritas dan rencana pertumbuhan.',
    icon: BarChart3,
  },
  {
    number: '02',
    title: 'Manajemen keuangan & investasi',
    description:
      'Mendorong pengelolaan keuangan dan investasi perusahaan yang lebih terukur, selaras dengan sasaran dan tata kelola grup.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Konsultasi & pengawasan operasional',
    description:
      'Memberikan arahan, pemantauan, dan dukungan konsultatif agar operasional perusahaan berjalan dengan disiplin dan akuntabel.',
    icon: Compass,
  },
  {
    number: '04',
    title: 'Layanan penunjang usaha',
    description:
      'Menghubungkan kebutuhan layanan pendukung yang relevan untuk memperkuat ketahanan dan kesiapan perusahaan dalam berkembang.',
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="atas">
      <header className="topbar">
        <div className="container nav-inner">
          <a className="brand" href="#atas" aria-label="PT Direction Global Capital — beranda" data-testid="link-home">
            <span className="brand-mark" aria-hidden="true">
              <ArrowUpRight />
            </span>
            <span className="brand-name">
              DIRECTION
              <small>GLOBAL CAPITAL</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav id="site-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Navigasi utama">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#kontak" onClick={closeMenu} data-testid="link-nav-kontak">
              Hubungi kami <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Holding company · Batam, Indonesia</span>
              <h1 id="hero-title">
                Arah yang jelas.
                <br />
                <em>Pertumbuhan</em> yang terukur.
              </h1>
              <p>
                PT Direction Global Capital mendukung pertumbuhan dan pengelolaan
                perusahaan dalam lingkup grup melalui arahan strategis, disiplin
                keuangan, dan tata kelola yang bertanggung jawab.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#peran" data-testid="link-explore">
                  Kenali peran kami <ArrowDown aria-hidden="true" />
                </a>
                <a className="button button-outline" href="#kontak" data-testid="link-discussion">
                  Mulai diskusi <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="hero-meta" aria-label="Informasi perusahaan">
                <span><b>64210</b> KBLI</span>
                <span><b>Batam</b> Indonesia</span>
                <span><b>Mandiri</b> dalam prinsip</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="Identitas Direction Global Capital">
              <div className="logo-frame">
                <img src="/dgc-logo.png" alt="Logo perak Direction Global Capital dengan simbol arah pertumbuhan" width="824" height="824" />
                <span className="orb-caption">Direction · Growth · Stewardship</span>
              </div>
            </div>
          </div>
          <span className="scroll-note" aria-hidden="true">GULIR UNTUK MENJELAJAH</span>
        </section>

        <section className="intro" id="tentang" aria-labelledby="intro-title">
          <div className="container intro-grid">
            <aside className="intro-aside">
              <span className="index">01 / TENTANG PERUSAHAAN</span>
              <p>Peran yang terukur di balik perusahaan yang terus berkembang.</p>
            </aside>
            <div>
              <span className="eyebrow">Tentang Direction</span>
              <h2 id="intro-title" className="section-title">
                Membangun <em>fondasi</em> agar bisnis bergerak dengan keyakinan.
              </h2>
              <p className="intro-text">
                <strong>PT Direction Global Capital adalah perusahaan holding</strong>{' '}
                yang berfokus pada dukungan pertumbuhan dan pengelolaan yang disiplin
                bagi perusahaan di bawah lingkupnya. Kami bekerja di tingkat
                kepemilikan dan koordinasi—membantu menyelaraskan arah, sumber daya,
                serta pengawasan tanpa mengambil alih keahlian tim operasional.
              </p>
              <div className="principle-line">
                <div><b>01 — Arah</b>Prioritas yang selaras</div>
                <div><b>02 — Disiplin</b>Pengelolaan yang terukur</div>
                <div><b>03 — Tumbuh</b>Kemajuan berkelanjutan</div>
              </div>
            </div>
          </div>
        </section>

        <section className="approach" id="peran" aria-labelledby="approach-title">
          <div className="container">
            <div className="approach-head">
              <div>
                <span className="eyebrow">Ruang lingkup dukungan</span>
                <h2 id="approach-title" className="section-title">
                  Peran kami, <em>dirancang untuk mendukung.</em>
                </h2>
              </div>
              <p className="section-intro">
                Dukungan holding yang terkoordinasi, berpijak pada kebutuhan
                perusahaan dan prinsip tata kelola yang sehat.
              </p>
            </div>
            <div className="service-layout">
              {supportAreas.map(({ number, title, description, icon: Icon }) => (
                <article className="service-item" key={number} data-testid={`card-area-${number}`}>
                  <div className="service-top">
                    <span className="service-number">{number} / 04</span>
                    <span className="service-icon"><Icon aria-hidden="true" /></span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="model" aria-labelledby="model-title">
          <div className="container model-grid">
            <div className="model-copy">
              <span className="eyebrow">Cara kami bekerja</span>
              <h2 id="model-title" className="section-title">
                Satu arah. <em>Peran yang saling menguatkan.</em>
              </h2>
              <p className="section-intro">
                Sebagai holding company, Direction Global Capital menjalankan
                fungsi koordinasi dan dukungan bagi perusahaan di dalam lingkup
                grup. Pendekatan kami menghubungkan sasaran strategis dengan
                praktik pengelolaan sehari-hari.
              </p>
              <p className="model-note">
                Setiap kebutuhan dibahas secara kontekstual. Bentuk dukungan dan
                kerja sama ditentukan melalui dialog langsung serta kesepakatan
                yang jelas antar pihak.
              </p>
            </div>
            <div className="orbit-panel" role="img" aria-label="Diagram hubungan fungsi holding dan dukungan bagi perusahaan">
              <div className="orbit-lines" />
              <span className="orbit-dot dot-a" /><span className="orbit-dot dot-b" />
              <span className="orbit-dot dot-c" /><span className="orbit-dot dot-d" />
              <div className="orbit-center"><span>Direction Global Capital</span></div>
              <div className="orbit-point point-one"><strong>Arah strategis</strong><span>Keselarasan sasaran dan prioritas</span></div>
              <div className="orbit-point point-two"><strong>Pengelolaan</strong><span>Keuangan dan sumber daya</span></div>
              <div className="orbit-point point-three"><strong>Pengawasan</strong><span>Pemantauan dan akuntabilitas</span></div>
              <div className="orbit-point point-four"><strong>Dukungan</strong><span>Konsultasi dan layanan usaha</span></div>
            </div>
          </div>
        </section>

        <section className="principles" id="prinsip" aria-labelledby="principles-title">
          <div className="container">
            <div className="principles-head">
              <div>
                <span className="eyebrow">Yang kami pegang</span>
                <h2 id="principles-title" className="section-title">
                  Kemajuan berarti <em>lebih dari sekadar angka.</em>
                </h2>
              </div>
              <p className="section-intro">
                Cara kami bekerja sama pentingnya dengan tujuan yang ingin dicapai.
              </p>
            </div>
            <div className="principles-list">
              {principles.map((principle, index) => (
                <article className="principle" key={principle.title}>
                  <span className="num">0{index + 1}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="transparency" id="tata-kelola" aria-labelledby="governance-title">
          <div className="container">
            <div className="transparency-box">
              <div>
                <span className="eyebrow">Transparansi & tata kelola</span>
                <h2 id="governance-title">Kejelasan adalah dasar kepercayaan.</h2>
              </div>
              <div className="transparency-copy">
                <p>
                  Kegiatan usaha PT Direction Global Capital tercatat dalam
                  klasifikasi KBLI 64210 — aktivitas perusahaan holding. Peran
                  kami adalah dukungan di tingkat holding, bukan penawaran
                  layanan keuangan kepada masyarakat.
                </p>
                <div className="legal-note">
                  Pembahasan peluang kemitraan dilakukan secara langsung dan
                  transparan. Cakupan, tanggung jawab, serta ketentuan kerja sama
                  disepakati terlebih dahulu sesuai kebutuhan para pihak.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="kontak" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div className="contact-grid">
              <div>
                <span className="eyebrow">Terhubung dengan kami</span>
                <h2 id="contact-title">Mari mulai dengan <em>percakapan.</em></h2>
                <p className="contact-lede">
                  Untuk pertanyaan perusahaan atau diskusi kemitraan, hubungi tim
                  kami. Kami terbuka untuk memahami kebutuhan dan menjajaki
                  kesesuaian secara profesional.
                </p>
                <div className="contact-location">
                  <MapPin aria-hidden="true" />
                  <span>Batam, Indonesia</span>
                </div>
              </div>
              <div className="contact-links" aria-label="Informasi kontak">
                <a className="contact-link" href="https://wa.me/6289505752359" target="_blank" rel="noreferrer" data-testid="link-whatsapp">
                  <span><small>WhatsApp</small>+62 895-0575-2359</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="contact-link" href="mailto:capitaldirectionglobal@gmail.com" data-testid="link-email">
                  <span><small>Surat elektronik</small>capitaldirectionglobal@gmail.com</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <footer className="footer">
              <span className="footer-brand">PT Direction Global Capital</span>
              <span>KBLI 64210 · Batam, Indonesia</span>
              <span>© {new Date().getFullYear()} Direction Global Capital</span>
              <a className="back-top" href="#atas" data-testid="link-back-to-top">Kembali ke atas ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
