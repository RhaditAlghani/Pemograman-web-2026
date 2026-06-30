// ─── DATA ───────────────────────────────────────────
const drivers = [
  { pos:1, num:1,  name:"Max Verstappen",    team:"Red Bull Racing",     nat:"🇳🇱", pts:319, color:"#1E41D0", wins:4 },
  { pos:2, num:4,  name:"Lando Norris",      team:"McLaren",             nat:"🇬🇧", pts:307, color:"#FF8000", wins:3 },
  { pos:3, num:81, name:"Oscar Piastri",     team:"McLaren",             nat:"🇦🇺", pts:242, color:"#FF8000", wins:2 },
  { pos:4, num:16, name:"Charles Leclerc",   team:"Ferrari",             nat:"🇲🇨", pts:206, color:"#DC0000", wins:1 },
  { pos:5, num:55, name:"Carlos Sainz Jr.",  team:"Ferrari",             nat:"🇪🇸", pts:200, color:"#DC0000", wins:0 },
  { pos:6, num:44, name:"Lewis Hamilton",    team:"Mercedes",            nat:"🇬🇧", pts:190, color:"#00D2BE", wins:0 },
  { pos:7, num:63, name:"George Russell",    team:"Mercedes",            nat:"🇬🇧", pts:175, color:"#00D2BE", wins:0 },
  { pos:8, num:11, name:"Sergio Perez",      team:"Red Bull Racing",     nat:"🇲🇽", pts:152, color:"#1E41D0", wins:0 },
  { pos:9, num:14, name:"Fernando Alonso",   team:"Aston Martin",        nat:"🇪🇸", pts:70,  color:"#006F62", wins:0 },
  { pos:10,num:18, name:"Lance Stroll",      team:"Aston Martin",        nat:"🇨🇦", pts:24,  color:"#006F62", wins:0 },
];

const teams = [
  { name:"McLaren",         engine:"Mercedes", pts:549, championships:8,  color:"#FF8000", principal:"Andrea Stella"   },
  { name:"Ferrari",         engine:"Ferrari",  pts:406, championships:16, color:"#DC0000", principal:"Frédéric Vasseur" },
  { name:"Red Bull Racing", engine:"Honda",    pts:471, championships:6,  color:"#1E41D0", principal:"Christian Horner" },
  { name:"Mercedes",        engine:"Mercedes", pts:365, championships:8,  color:"#00D2BE", principal:"Toto Wolff"       },
  { name:"Aston Martin",    engine:"Mercedes", pts:94,  championships:0,  color:"#006F62", principal:"Mike Krack"       },
  { name:"Alpine",          engine:"Renault",  pts:65,  championships:2,  color:"#0090FF", principal:"Bruno Famin"      },
  { name:"Haas",            engine:"Ferrari",  pts:54,  championships:0,  color:"#B6BABD", principal:"Ayao Komatsu"     },
  { name:"Williams",        engine:"Mercedes", pts:17,  championships:7,  color:"#005AFF", principal:"James Vowles"     },
];

const races = [
  { round:1,  name:"Bahrain Grand Prix",      circuit:"Bahrain International Circuit",        date:"2 Mar 2025",   status:"done"     },
  { round:2,  name:"Saudi Arabian Grand Prix", circuit:"Jeddah Corniche Circuit",             date:"9 Mar 2025",   status:"done"     },
  { round:3,  name:"Australian Grand Prix",    circuit:"Albert Park Circuit",                 date:"16 Mar 2025",  status:"done"     },
  { round:4,  name:"Japanese Grand Prix",      circuit:"Suzuka International Racing Course",  date:"6 Apr 2025",   status:"done"     },
  { round:5,  name:"Chinese Grand Prix",       circuit:"Shanghai International Circuit",      date:"20 Apr 2025",  status:"done"     },
  { round:6,  name:"Miami Grand Prix",         circuit:"Miami International Autodrome",       date:"4 May 2025",   status:"done"     },
  { round:7,  name:"Emilia Romagna Grand Prix",circuit:"Autodromo Enzo e Dino Ferrari",       date:"18 May 2025",  status:"done"     },
  { round:8,  name:"Monaco Grand Prix",        circuit:"Circuit de Monaco",                   date:"25 May 2025",  status:"done"     },
  { round:9,  name:"Canadian Grand Prix",      circuit:"Circuit Gilles Villeneuve",           date:"15 Jun 2025",  status:"done"     },
  { round:10, name:"Spanish Grand Prix",       circuit:"Circuit de Barcelona-Catalunya",      date:"29 Jun 2025",  status:"done"     },
  { round:11, name:"Austrian Grand Prix",      circuit:"Red Bull Ring",                       date:"29 Jun 2025",  status:"done"     },
  { round:12, name:"British Grand Prix",       circuit:"Silverstone Circuit",                 date:"6 Jul 2025",   status:"next"     },
  { round:13, name:"Hungarian Grand Prix",     circuit:"Hungaroring",                         date:"20 Jul 2025",  status:"upcoming" },
  { round:14, name:"Belgian Grand Prix",       circuit:"Circuit de Spa-Francorchamps",        date:"27 Jul 2025",  status:"upcoming" },
  { round:15, name:"Dutch Grand Prix",         circuit:"Circuit Zandvoort",                   date:"31 Aug 2025",  status:"upcoming" },
  { round:16, name:"Italian Grand Prix",       circuit:"Autodromo Nazionale Monza",           date:"7 Sep 2025",   status:"upcoming" },
  { round:17, name:"Azerbaijan Grand Prix",    circuit:"Baku City Circuit",                   date:"21 Sep 2025",  status:"upcoming" },
  { round:18, name:"Singapore Grand Prix",     circuit:"Marina Bay Street Circuit",           date:"5 Oct 2025",   status:"upcoming" },
  { round:19, name:"United States Grand Prix", circuit:"Circuit of The Americas",             date:"19 Oct 2025",  status:"upcoming" },
  { round:20, name:"Mexico City Grand Prix",   circuit:"Autodromo Hermanos Rodriguez",        date:"26 Oct 2025",  status:"upcoming" },
  { round:21, name:"São Paulo Grand Prix",     circuit:"Autodromo Jose Carlos Pace",          date:"9 Nov 2025",   status:"upcoming" },
  { round:22, name:"Las Vegas Grand Prix",     circuit:"Las Vegas Strip Circuit",             date:"22 Nov 2025",  status:"upcoming" },
  { round:23, name:"Qatar Grand Prix",         circuit:"Lusail International Circuit",        date:"30 Nov 2025",  status:"upcoming" },
  { round:24, name:"Abu Dhabi Grand Prix",     circuit:"Yas Marina Circuit",                  date:"7 Dec 2025",   status:"upcoming" },
];

// ─── RENDER DRIVERS ──────────────────────────────────
function renderDrivers(list) {
  const grid = document.getElementById('driversGrid');
  grid.innerHTML = list.map(d => `
    <div class="driver-card reveal" style="--team-color:${d.color}">
      <div class="driver-pos ${d.pos<=3?'p'+d.pos:''}">${d.pos}</div>
      <div class="driver-num">${d.num}</div>
      <div class="driver-info">
        <div class="driver-name">${d.nat} ${d.name}</div>
        <div class="driver-team">${d.team}</div>
      </div>
      <div class="driver-pts">${d.pts}<small>PTS</small></div>
    </div>`).join('');
  observeReveal();
}

// ─── RENDER TEAMS ────────────────────────────────────
function renderTeams() {
  document.getElementById('teamsGrid').innerHTML = teams.map(t => `
    <div class="team-card reveal">
      <div class="team-color-bar" style="background:${t.color}"></div>
      <div class="team-name">${t.name}</div>
      <div class="team-engine">${t.engine} Power Unit</div>
      <div class="team-meta">
        <div>
          <div class="team-meta-label">Poin</div>
          <div class="team-meta-val">${t.pts}</div>
        </div>
        <div style="text-align:right">
          <div class="team-meta-label">Juara</div>
          <div class="team-meta-val">${t.championships}</div>
        </div>
      </div>
    </div>`).join('');
  observeReveal();
}

// ─── RENDER SCHEDULE ─────────────────────────────────
function renderSchedule() {
  const badgeMap = {
    done:     ['badge-done',     'Selesai'],
    next:     ['badge-next',     '● Berikutnya'],
    upcoming: ['badge-upcoming', 'Akan Datang'],
  };
  document.getElementById('scheduleList').innerHTML = races.map(r => {
    const [cls, lbl] = badgeMap[r.status];
    return `
    <div class="schedule-item ${r.status} reveal">
      <div class="sched-round">${String(r.round).padStart(2,'0')}</div>
      <div>
        <div class="sched-name">${r.name}</div>
        <div class="sched-circuit">📍 ${r.circuit}</div>
      </div>
      <div class="sched-date">
        ${r.date}
        <div><span class="badge ${cls}">${lbl}</span></div>
      </div>
    </div>`;
  }).join('');
  observeReveal();
}

// ─── FILTER ──────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    const list = f === 'top5' ? drivers.slice(0,5) : drivers;
    renderDrivers(list);
  });
});

// ─── HAMBURGER ───────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ─── SCROLL REVEAL ───────────────────────────────────
function observeReveal() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 50);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => io.observe(el));
}

// ─── COUNT-UP ANIMATION ──────────────────────────────
function countUp() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const step   = Math.ceil(target / 60);
    let current  = 0;
    const tick = () => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current < target) requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { tick(); io.disconnect(); }
    });
    io.observe(el);
  });
}

// ─── ACTIVE NAV HIGHLIGHT ────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');

const navIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (link) link.style.color = 'var(--txt)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navIO.observe(s));

// ─── INIT ────────────────────────────────────────────
renderDrivers(drivers);
renderTeams();
renderSchedule();
countUp();
observeReveal();
