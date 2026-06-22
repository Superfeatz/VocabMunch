// ═══════════════════════════════════════════
//  MAZE  (20 cols × 11 rows, 1=wall 0=open)
//  Hand-crafted symmetric Pac-Man style maze
// ═══════════════════════════════════════════
// prettier-ignore
const MAPS_SMALL = [
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1],
    [1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]
];

const MAPS_LARGE = [
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1],
    [1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1],
    [1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1],
    [1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1],
    [1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1],
    [1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1],
    [1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1],
    [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],
    [1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ],
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]
];

let ROWS=11, COLS=20, CW=800, CH=440, CELL=40;

function setMapSize(cols, rows, cell) {
  COLS = cols; ROWS = rows; CELL = cell;
  CW = COLS * CELL; CH = ROWS * CELL;
  const c = document.getElementById('gc');
  if(c){ c.width = CW; c.height = CH; }
  const wrap = document.querySelector('.canvas-wrap');
  if (wrap) wrap.style.maxWidth = CW + 'px';
  const qs = ['.hud','.timer-bar-wrap','.q-box'];
  qs.forEach(s => {
    const el = document.querySelector(s);
    if(el) el.style.maxWidth = CW + 'px';
  });
}

// ====================== AUDIO, PARTICLES, HELPERS ======================
let audioCtx = null;
function ensureAudio(){ if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }
function beep(freq,dur,type='sine',vol=0.3){
  try{
    ensureAudio();
    const o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.type=type; o.frequency.setValueAtTime(freq,audioCtx.currentTime);
    g.gain.setValueAtTime(vol,audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+dur);
    o.start(); o.stop(audioCtx.currentTime+dur);
  }catch(e){}
}

function sfxEat(){ beep(800, 0.05, 'square', 0.1); }
function sfxWrong(){ beep(200, 0.2, 'sawtooth', 0.2); }
function sfxCorrect(){ beep(600, 0.1, 'sine', 0.2); setTimeout(()=>beep(800,0.15,'sine',0.2), 100); }
function sfxStreak(){ beep(1000, 0.1, 'square', 0.2); setTimeout(()=>beep(1200,0.2,'square',0.2), 100); }
function sfxCompleted(){ try{ensureAudio(); [440,554,659,880].forEach((f,i)=>setTimeout(()=>beep(f,0.15,'sine',0.3),i*150));}catch(e){} }
function sfxFailed(){ try{ensureAudio(); [300,250,200,150].forEach((f,i)=>setTimeout(()=>beep(f,0.3,'sawtooth',0.3),i*300));}catch(e){} }
function spawnParticles(x,y,color,n=8){
  for(let i=0;i<n;i++){
    const a=Math.random()*Math.PI*2, s=2+Math.random()*3;
    particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,
      life:1,color,r:3+Math.random()*3});
  }
}
function updateParticles(){
  for(let i=particles.length-1;i>=0;i--){
    const p=particles[i];
    p.x+=p.vx; p.y+=p.vy; p.vy+=0.12; p.life-=0.04;
    if(p.life<=0) particles.splice(i,1);
  }
}
function drawParticles(ctx){
  particles.forEach(p=>{
    ctx.globalAlpha=p.life;
    ctx.fillStyle=p.color;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r*p.life,0,Math.PI*2);
    ctx.fill();
  });
  ctx.globalAlpha=1;
}

// ═══════════════════════════════════════════
//  SHUFFLE
// ═══════════════════════════════════════════
function shuffle(a){ const b=[...a]; for(let i=b.length-1;i>0;i--){const j=0|Math.random()*(i+1);[b[i],b[j]]=[b[j],b[i]];} return b; }

// ═══════════════════════════════════════════
//  QUESTION BUILDER
// ═══════════════════════════════════════════
function getLevel(qi){ if(qi<3)return 1; if(qi<6)return 2; if(qi<8)return 3; return 4; }

function buildQuestion(pool, qi){
  const lv=getLevel(qi);
  const item=pool[qi % pool.length];
  let answer,qtext,hint,badge;

  const type= lv===4 ? (1+Math.floor(Math.random()*3)) : lv;

  if(type===1){
    answer=item.en.toUpperCase().replace(/\s+/g,'');
    qtext='Apa kata Bahasa Inggrisnya?';
    hint='🇮🇩 '+'"'+item.id+'"';
    badge='⭐ TEBAK KATA';
  } else if(type===2){
    answer=item.id.toUpperCase().replace(/\s+/g,'');
    qtext='Apa artinya dalam Bahasa Indonesia?';
    hint='🇬🇧 '+'"'+item.en+'"';
    badge='⭐⭐ ARTI KATA';
  } else {
    const sd=SENTENCES.find(s=>s.word===item.en)
      ||{word:item.en,sent:'The ___ means '+item.id+' in Indonesian.'};
    answer=item.en.toUpperCase().replace(/\s+/g,'');
    qtext=sd.sent.replace('___','______');
    hint='🇮🇩 Artinya: "'+item.id+'"';
    badge='⭐⭐⭐ LENGKAPI KALIMAT';
  }
  if(lv===4) badge='⭐⭐⭐⭐ '+badge.replace(/⭐+\s*/,'');
  return {answer,qtext,hint,badge,item,lv};
}
// ====================== GLOBAL STATE ======================
let selCat = null, gs = {}, raf = null, timerIv = null, particles = [];

// ====================== CANVAS SETUP ======================
const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');

let maze, dots, pac, ghosts, frame = 0;

function cloneMaze(){ return MAZE_TEMPLATE.map(r => [...r]); }
function openCells(maze){
  const a=[];
  for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++) if(maze[r][c]===0) a.push({r,c});
  return a;
}
function mdist(a,b){ return Math.abs(a.r-b.r) + Math.abs(a.c-b.c); }

function makePac(r, c){
  return {r, c, x: c*CELL + CELL/2, y: r*CELL + CELL/2, dx:0, dy:0, ndx:0, ndy:0, mouth:0, md:1};
}
function makeGhost(r,c,color){
  return{r,c,x:c*CELL+CELL/2,y:r*CELL+CELL/2,color,mt:0,mi:20,alive:true};
}

// ====================== MOVEMENT SYSTEM BARU (FIXED) ======================
function updatePacMovement() {
  const speed = 2; // Pacman speed = 2 (takes 20 frames per cell)

  // Putar balik instan
  if ((pac.ndx === -pac.dx && pac.ndx !== 0) || (pac.ndy === -pac.dy && pac.ndy !== 0)) {
    pac.dx = pac.ndx; pac.dy = pac.ndy;
  }

  const isCenter = (pac.x % CELL === CELL / 2) && (pac.y % CELL === CELL / 2);

  if (isCenter) {
    pac.c = Math.floor(pac.x / CELL);
    pac.r = Math.floor(pac.y / CELL);

    if (pac.ndx !== 0 || pac.ndy !== 0) {
      if (canMove(pac.ndx, pac.ndy)) {
        pac.dx = pac.ndx;
        pac.dy = pac.ndy;
      }
    } else {
      // Tombol dilepas -> berhenti
      pac.dx = 0;
      pac.dy = 0;
    }

    if (!canMove(pac.dx, pac.dy)) {
      pac.dx = 0;
      pac.dy = 0;
    }
  }

  pac.x += pac.dx * speed;
  pac.y += pac.dy * speed;
}

function canMove(dx, dy) {
  if (dx === 0 && dy === 0) return true;
  const nr = pac.r + dy;
  const nc = pac.c + dx;
  return !(nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || maze[nr][nc] === 1);
}

// ====================== GAME LOGIC (lanjutan) ======================
// ... (loadQuestion, placeDots, gameFrame, draw, handleCorrect, dll tetap sama, tapi pakai updatePacMovement)

function gameFrame(){
  if(gs.paused || gs.over) return;
  frame++;
  pac.mouth = Math.abs(Math.sin(frame * 0.3));

  updatePacMovement();
  checkEat();

  // ghosts movement (sama)
  ghosts.forEach(g => {
    if(!g.alive) return;
    g.mt++;
    if(g.mt >= g.mi){ g.mt = 0; moveGhost(g); }
    g.x += (g.c*CELL + CELL/2 - g.x) * 0.22;
    g.y += (g.r*CELL + CELL/2 - g.y) * 0.22;

    if(Math.hypot(g.x - pac.x, g.y - pac.y) < CELL * 0.55){
      handleWrong('👻 Ghost menangkapmu!');
      return;
    }
  });

  updateParticles();
  draw();
  raf = requestAnimationFrame(gameFrame);
}

// Sisanya (setupCanvas, loadQuestion, placeDots, draw functions, event listeners, dll) hampir sama seperti original.

document.getElementById('startBtn').onclick = startGame;
// ====================== GAME FUNCTIONS ======================

function setupCanvas(){
  // Maze and Pac generation is now in loadQuestion
}

function placeDots(answer, lv){
  const letters = answer.split('');
  const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fakeN = lv <= 2 ? letters.length + 2 : letters.length * 2 + 2;
  const all = [...letters.map((ch,i) => ({ch, idx:i, real:true}))];
  
  for(let f = 0; f < fakeN; f++){
    let ch;
    do{ ch = ABC[Math.floor(Math.random()*26)]; }
    while(letters.includes(ch) && Math.random() > 0.3);
    all.push({ch, idx:-1, real:false});
  }
  
  const open = openCells(maze).filter(c => !(c.r === pac.r && c.c === pac.c));
  const placed = shuffle(open).slice(0, all.length);
  
  dots = all.map((l,i) => ({
    ...l,
    r: placed[i % placed.length].r,
    c: placed[i % placed.length].c,
    eaten: false,
    pulse: 0
  }));
  updateTargets();
}

function updateTargets(){
  dots.forEach(d => {
    // isTarget true untuk semua huruf benar yang belum dimakan, TAPI hanya untuk level 1 dan 2
    d.isTarget = d.real && !d.eaten && (gs.q.lv <= 2);
  });
}

function loadQuestion(){
  particles.length = 0;
  const q = buildQuestion(gs.pool, gs.qi);
  gs.q = q;
  gs.collectedIndices = [];

  // Map Logic
  let template;
  if (gs.qi < 5) { // Stage 1-5
    template = MAPS_SMALL[Math.floor(Math.random() * MAPS_SMALL.length)];
    setMapSize(20, 11, 40); // CW=800, CH=440
  } else {         // Stage 6-10
    template = MAPS_LARGE[Math.floor(Math.random() * MAPS_LARGE.length)];
    setMapSize(25, 13, 32); // CW=800, CH=416
  }
  maze = template.map(r => [...r]);
  const opens = openCells(maze);
  const startCell = opens[Math.floor(opens.length / 2)];
  pac = makePac(startCell.r, startCell.c);


  // UI
  const badge = document.getElementById('qBadge');
  badge.textContent = q.badge;
  badge.className = 'q-badge lv' + q.lv;
  document.getElementById('qText').textContent = q.qtext;
  document.getElementById('qHint').textContent = q.hint;
  document.getElementById('hLv').textContent = q.lv;
  document.getElementById('hProg').textContent = (gs.qi+1) + '/' + gs.total;
  updateHUD();

  // Timer
  gs.timeMax = q.lv <= 2 ? 30 : q.lv === 3 ? 45 : 40;
  if(gs.qi >= 8) gs.timeMax = Math.max(18, gs.timeMax - 10);
  gs.timeLeft = gs.timeMax;
  refreshTimerUI();
  updateWordProgressUI();
  clearInterval(timerIv);
  timerIv = setInterval(() => {
    if(gs.paused || gs.over) return;
    gs.timeLeft--;
    refreshTimerUI();
    if(gs.timeLeft <= 0){
      clearInterval(timerIv);
      handleWrong('⏱ Waktu habis!');
    }
  }, 1000);

  // Dots & Ghosts
  placeDots(q.answer, q.lv);
  
  const gCount = Math.min(q.lv, 3);
  const open = openCells(maze);
  // Ghost selalu di-spawn di bagian kanan map (kolom >= 12), berseberangan dengan Pacman (kolom 1)
  const far = open.filter(c => c.c >= 12);
  const gcells = shuffle(far).slice(0, gCount);
  const gcols = ['#FF5252','#CE93D8','#69F0AE'];
  ghosts = gcells.map((c,i) => makeGhost(c.r, c.c, gcols[i]));
  // Rasio 2:1 -> Pacman takes 20 frames, Ghost takes 40 frames
  ghosts.forEach(g => { g.mi = 40; });

  pac = makePac(5,1);

  gs.paused = true;
  if(raf) cancelAnimationFrame(raf);
  doCountdown(() => {
    gs.paused = false;
    raf = requestAnimationFrame(gameFrame);
  });
}

function doCountdown(cb){
  const ov = document.getElementById('cdOv');
  const num = document.getElementById('cdNum');
  let n = 3;
  ov.classList.remove('hide');
  
  const resetAnim = () => {
    num.style.animation = 'none';
    void num.offsetWidth;
    num.style.animation = null;
  };
  
  num.textContent = n;
  resetAnim();
  beep(440, .15, 'sine', .3);

  const iv = setInterval(() => {
    n--;
    if(n > 0){
      num.textContent = n;
      resetAnim();
      beep(440, .15, 'sine', .3);
    } else if(n === 0){
      num.textContent = 'GO!';
      resetAnim();
      beep(660, .2, 'sine', .4);
    } else {
      clearInterval(iv);
      ov.classList.add('hide');
      cb();
    }
  }, 900);
}

function moveGhost(g){
  const DIRS = [[-1,0],[1,0],[0,-1],[0,1]];
  shuffle(DIRS);
  const chase = Math.random() < 0.72;
  let best = null, bs = 1e9;
  for(const [dc, dr] of DIRS){
    const nr = g.r + dr, nc = g.c + dc;
    if(nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || maze[nr][nc] === 1) continue;
    const sc = chase ? mdist({r:nr,c:nc}, pac) : Math.random()*10;
    if(sc < bs){ bs = sc; best = {r:nr, c:nc}; }
  }
  if(best){ g.r = best.r; g.c = best.c; }
}

function checkEat(){
  dots.forEach(d => {
    if(d.eaten || d.r !== pac.r || d.c !== pac.c) return;
    d.eaten = true;
    if(d.real){
      sfxEat();
      spawnParticles(pac.x, pac.y, '#FFD93D', 10);
      gs.collectedIndices.push(d.idx);
      updateTargets();
      updateWordProgressUI();
      if(gs.collectedIndices.length >= gs.q.answer.length) handleCorrect();
    } else {
      sfxWrong();
      spawnParticles(pac.x, pac.y, '#FF5252', 8);
      gs.timeLeft = Math.max(0, gs.timeLeft - 1);
      refreshTimerUI();
      flashBox('no');
      
      // Jika waktu habis karena penalti
      if(gs.timeLeft <= 0){
        handleWrong('⏱ Waktu habis (menabrak huruf salah)!');
      }
    }
  });
}

// ====================== DRAW FUNCTIONS ======================
function draw(){
  ctx.clearRect(0,0,CW,CH);
  ctx.fillStyle = '#050510';
  ctx.fillRect(0,0,CW,CH);

  // walls
  for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++){
    if(maze[r][c]===1){
      ctx.fillStyle = '#0e0e2e';
      ctx.fillRect(c*CELL, r*CELL, CELL, CELL);
      ctx.strokeStyle = '#1e1e5e';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(c*CELL + 0.75, r*CELL + 0.75, CELL-1.5, CELL-1.5);
    } else {
      ctx.fillStyle = '#12122a';
      ctx.beginPath();
      ctx.arc(c*CELL+CELL/2, r*CELL+CELL/2, 1.5, 0, Math.PI*2);
      ctx.fill();
    }
  }

  // dots (sama seperti original)
  dots.forEach(d => {
    if(d.eaten) return;
    const px = d.c*CELL + CELL/2, py = d.r*CELL + CELL/2;
    const pulse = (frame * 0.08);
    const isT = d.isTarget;
    const r2 = isT ? 14 : 10;

    if(isT){
      const grd = ctx.createRadialGradient(px,py,1,px,py,22);
      const alpha = 0.25 + 0.15 * Math.sin(pulse);
      grd.addColorStop(0, `rgba(255,217,61,${alpha})`);
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(px,py,22,0,Math.PI*2); ctx.fill();
    }

    ctx.fillStyle = isT ? '#1e1e38' : '#0e0e22';
    ctx.beginPath(); ctx.arc(px,py,r2,0,Math.PI*2); ctx.fill();

    let col;
    if (isT) {
       col = `hsl(47,100%,${60+8*Math.sin(pulse)}%)`;
    } else {
       // Jika level > 2, samarkan huruf asli agar terlihat sama persis dengan jebakan
       col = (gs.q.lv > 2) ? '#333360' : (d.real ? '#4a4a7a' : '#333360');
    }
    
    ctx.strokeStyle = col;
    ctx.lineWidth = isT ? 2 : 1;
    ctx.beginPath(); ctx.arc(px,py,r2,0,Math.PI*2); ctx.stroke();

    ctx.fillStyle = col;
    ctx.font = `bold ${isT?11:9}px "Press Start 2P",monospace`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(d.ch, px, py+1);
  });

  ghosts.forEach(g => { if(g.alive) drawGhost(ctx, g.x, g.y, g.color); });
  drawPac(ctx, pac.x, pac.y, pac.mouth, pac.dx, pac.dy);
  drawParticles(ctx);
}

function drawPac(ctx,x,y,mouth,dx,dy){ /* sama seperti original */ 
  let rot = 0;
  if(dx===1) rot=0; else if(dx===-1) rot=Math.PI;
  else if(dy===-1) rot=-Math.PI/2; else if(dy===1) rot=Math.PI/2;
  const gap = mouth * 0.4;

  const grd = ctx.createRadialGradient(x,y,2,x,y,20);
  grd.addColorStop(0,'rgba(255,217,61,.5)');
  grd.addColorStop(1,'transparent');
  ctx.fillStyle = grd;
  ctx.beginPath(); ctx.arc(x,y,20,0,Math.PI*2); ctx.fill();

  ctx.fillStyle = '#FFD93D';
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.arc(x,y,13,rot+gap,rot+Math.PI*2-gap);
  ctx.closePath();
  ctx.fill();

  const ea = rot - Math.PI * 0.3;
  ctx.fillStyle = '#000';
  ctx.beginPath(); ctx.arc(x + Math.cos(ea)*5, y + Math.sin(ea)*5, 2, 0, Math.PI*2); ctx.fill();
}

function drawGhost(ctx,x,y,color){ /* sama seperti original */ 
  // (paste seluruh fungsi drawGhost dari file HTML asli)
  const r = 12;
  const grd = ctx.createRadialGradient(x,y,1,x,y,22);
  grd.addColorStop(0,color+'55'); grd.addColorStop(1,'transparent');
  ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(x,y,22,0,Math.PI*2); ctx.fill();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x,y-2,r,Math.PI,0);
  ctx.lineTo(x+r,y+r);
  for(let i=0;i<3;i++){
    const bx = x + r - (i+0.5)*(r*2/3);
    ctx.quadraticCurveTo(bx-r/3,y+r+5,bx,y+r-2);
    ctx.quadraticCurveTo(bx+r/3,y+r-8,bx+r/3*2,y+r-2);
  }
  ctx.lineTo(x-r,y+r); ctx.closePath(); ctx.fill();

  ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.ellipse(x-4,y-2,3.5,4,0,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(x+4,y-2,3.5,4,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle = '#0000dd';
  ctx.beginPath(); ctx.arc(x-4,y-1,2,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(x+4,y-1,2,0,Math.PI*2); ctx.fill();
}

function updateWordProgressUI(){
  const container = document.getElementById('qWordProg');
  if(!container) return;
  const ans = gs.q ? gs.q.answer : '';
  container.innerHTML = '';
  for(let i = 0; i < ans.length; i++){
    const el = document.createElement('div');
    el.className = 'qw-ltr';
    if(gs.collectedIndices && gs.collectedIndices.includes(i)) {
      el.classList.add('done');
    }
    el.textContent = ans[i];
    container.appendChild(el);
  }
}

// ====================== HANDLE RESULT ======================
function handleCorrect(){ /* sama seperti original */ 
  // (paste seluruh fungsi handleCorrect dari file HTML asli)
  clearInterval(timerIv);
  if(raf) cancelAnimationFrame(raf);
  gs.paused = true;

  gs.streak++;
  if(gs.streak > gs.maxStreak) gs.maxStreak = gs.streak;

  const lv = gs.q.lv;
  const base = lv * 120;
  const timePts = gs.timeLeft * 6;
  const streakPts = gs.streak >= 3 ? gs.streak * 20 : 0;
  const total = base + timePts + streakPts;
  gs.score += total;
  gs.playedWords.push({item: gs.q.item, correct: true});
  updateHUD();

  sfxCorrect();
  if(gs.streak >= 3) sfxStreak();
  spawnParticles(pac.x, pac.y, '#FFD93D', 20);
  spawnParticles(pac.x, pac.y, '#69F0AE', 15);

  flashBox('ok');

  const streakMsg = gs.streak >= 5 ? ` 🔥×${gs.streak} STREAK!` : gs.streak >= 3 ? ` 🔥 STREAK x${gs.streak}` : '';
  const ov = document.getElementById('ov');
  document.getElementById('ovTitle').textContent = '✅ BENAR! +' + total + streakMsg;
  document.getElementById('ovTitle').style.color = '#00E676';
  document.getElementById('ovWord').textContent = gs.q.answer;
  document.getElementById('ovDesc').textContent =
    '🇬🇧 ' + gs.q.item.en + '  ↔  🇮🇩 ' + gs.q.item.id +
    '\nBase: +' + base + '  Waktu: +' + timePts + (streakPts ? '  Streak: +' + streakPts : '');
  ov.classList.remove('hide');

  gs.qi++;
  document.getElementById('ovNext').textContent = gs.qi >= gs.total ? 'LIHAT HASIL ▶' : 'LANJUT ▶';
}

function handleWrong(reason){ /* sama seperti original */ 
  // (paste seluruh fungsi handleWrong dari file HTML asli)
  clearInterval(timerIv);
  if(raf) cancelAnimationFrame(raf);
  gs.paused = true;

  gs.streak = 0;
  gs.lives--;
  gs.playedWords.push({item: gs.q.item, correct: false});
  updateHUD();
  sfxWrong();
  flashBox('no');

  const ov = document.getElementById('ov');
  if(gs.lives <= 0){
    gs.over = true;
    sfxFailed();
    document.getElementById('ovTitle').textContent = '💀 GAME OVER';
    document.getElementById('ovTitle').style.color = '#FF5252';
  } else {
    document.getElementById('ovTitle').textContent = '❌ SALAH! -1 Nyawa';
    document.getElementById('ovTitle').style.color = '#FF5252';
  }
  document.getElementById('ovWord').textContent = gs.q.answer;
  document.getElementById('ovDesc').textContent = reason + '\n🇬🇧 ' + gs.q.item.en + '  =  🇮🇩 ' + gs.q.item.id;

  gs.qi++;
  document.getElementById('ovNext').textContent = (gs.qi >= gs.total || gs.over) ? 'LIHAT HASIL ▶' : 'LANJUT ▶';
  ov.classList.remove('hide');
}

// ====================== UI HELPERS ======================
function refreshTimerUI(){
  const t = gs.timeLeft, max = gs.timeMax;
  document.getElementById('hTimer').textContent = t;
  const pct = Math.max(0, t / max) * 100;
  const bar = document.getElementById('timerBar');
  bar.style.width = pct + '%';
  bar.style.background = pct > 50 ? '#FFB74D' : pct > 25 ? '#FF9800' : '#FF5252';
}

function updateHUD(){
  document.getElementById('hSkor').textContent = gs.score;
  document.getElementById('hStreak').textContent = gs.streak + '🔥';
  document.querySelectorAll('#hLives .life').forEach((el,i) => {
    el.classList.toggle('on', i < gs.lives);
  });
}

function flashBox(type){
  const b = document.getElementById('qBox');
  b.classList.remove('flash-ok','flash-no');
  void b.offsetWidth;
  b.classList.add(type === 'ok' ? 'flash-ok' : 'flash-no');
}

function showResult(){ /* sama seperti original */ 
  // (paste seluruh fungsi showResult dari file HTML asli)
  showScreen('result-screen');
  const correct = gs.playedWords.filter(w => w.correct).length;
  if(!gs.over && correct > 0) sfxCompleted();
  const wrong = gs.playedWords.filter(w => !w.correct).length;
  const lv = getLevel(Math.max(0, gs.qi-1));
  const pct = gs.playedWords.length > 0 ? correct / gs.playedWords.length : 0;

  document.getElementById('rSkor').textContent = gs.score;
  document.getElementById('rBenar').textContent = correct;
  document.getElementById('rSalah').textContent = wrong;
  document.getElementById('rLv').textContent = lv;
  document.getElementById('rStreak').textContent = gs.maxStreak;

  const lb = JSON.parse(localStorage.getItem('vocab_pacman_leaderboard')||'[]');
  if (gs.score > 0 && (lb.length < 10 || gs.score > lb[lb.length-1].score)) {
    document.getElementById('lbInputArea').style.display = 'block';
    document.getElementById('lbSaveBtn').onclick = () => {
      let name = document.getElementById('lbName').value.trim() || 'Anonim';
      lb.push({name, score: gs.score});
      lb.sort((a,b) => b.score - a.score);
      if(lb.length > 10) lb.pop();
      localStorage.setItem('vocab_pacman_leaderboard', JSON.stringify(lb));
      document.getElementById('lbInputArea').style.display = 'none';
      loadLeaderboard();
    };
  } else {
    document.getElementById('lbInputArea').style.display = 'none';
  }

  const titles = ['Tetap semangat! 💪','Lumayan bagus! 👍','Bagus sekali! 🎉','Luar biasa! 🌟','🏆 MASTER KOSAKATA!'];
  const stars = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐'];
  const idx = pct < .4 ? 0 : pct < .6 ? 1 : pct < .8 ? 2 : pct < 1 ? 3 : 4;
  document.getElementById('resTitle').textContent = titles[idx];
  document.getElementById('resStars').textContent = stars[idx];

  const list = document.getElementById('vocabList');
  list.innerHTML = '';
  gs.playedWords.forEach(w => {
    const row = document.createElement('div');
    row.className = 'v-row';
    row.innerHTML = `<span class="en">${w.item.en}</span><span class="id">${w.item.id}</span><span class="st">${w.correct?'✅':'❌'}</span>`;
    list.appendChild(row);
  });
}

// ====================== CONTROLS ======================
const KMAP = {
  ArrowLeft:[-1,0], ArrowRight:[1,0], ArrowUp:[0,-1], ArrowDown:[0,1],
  a:[-1,0], d:[1,0], w:[0,-1], s:[0,1],
  A:[-1,0], D:[1,0], W:[0,-1], S:[0,1]
};

let activeKeys = {};

function onKey(e){
  if(document.activeElement && document.activeElement.tagName === 'INPUT') return;
  if(KMAP[e.key]){
    e.preventDefault();
    activeKeys[e.key] = true;
    const [dx,dy] = KMAP[e.key];
    pac.ndx = dx;
    pac.ndy = dy;
  }
}
document.addEventListener('keydown', onKey);
document.addEventListener('keyup', e => {
  if(document.activeElement && document.activeElement.tagName === 'INPUT') return;
  if(KMAP[e.key]){
    e.preventDefault();
    activeKeys[e.key] = false;
    if(!Object.values(activeKeys).some(v => v)) {
      pac.ndx = 0;
      pac.ndy = 0;
    } else {
      for(let k in activeKeys) {
        if(activeKeys[k]) {
          pac.ndx = KMAP[k][0];
          pac.ndy = KMAP[k][1];
          break;
        }
      }
    }
  }
});

// D-Pad dan Swipe (sama seperti original)
let activeBtn = null;
[['dUp',[0,-1]],['dDown',[0,1]],['dLeft',[-1,0]],['dRight',[1,0]]].forEach(([id,dir]) => {
  const btn = document.getElementById(id);
  const act = () => { pac.ndx = dir[0]; pac.ndy = dir[1]; activeBtn = id; };
  const endAct = () => { if(activeBtn === id) { pac.ndx = 0; pac.ndy = 0; activeBtn = null; } };
  
  btn.addEventListener('touchstart', e=>{e.preventDefault(); act();}, {passive:false});
  btn.addEventListener('touchend', e=>{e.preventDefault(); endAct();}, {passive:false});
  btn.addEventListener('mousedown', act);
  btn.addEventListener('mouseup', endAct);
  btn.addEventListener('mouseleave', endAct);
});
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startGame(){
  showScreen('game-screen');
  ensureAudio();

  let activeCat = selCat;
  if(selCat === 'random'){
    const keys = Object.keys(VOCAB);
    activeCat = keys[Math.floor(Math.random() * keys.length)];
  }
  const rawPool = activeCat==='all' ? Object.values(VOCAB).flat() : VOCAB[activeCat]||[];
  const pool = shuffle(rawPool);
  const TOTAL = Math.min(10, pool.length);

  gs = {
    score:0, lives:3, qi:0, total:TOTAL, streak:0, maxStreak:0,
    pool, playedWords:[], paused:true, over:false,
    timeLeft:30, timeMax:30
  };

  setupCanvas();
  loadQuestion();
}

// ====================== CONTROLS ======================
// (kode KMAP, onKey, dpad, dll sudah ada di bagian bawah)

// Cleanup & Overlay
function cleanup(){
  clearInterval(timerIv);
  if(raf) cancelAnimationFrame(raf);
}

function endGame(){
  cleanup();
  showResult();
}

// Overlay buttons
document.getElementById('ovNext').onclick = () => {
  document.getElementById('ov').classList.add('hide');
  if(gs.qi >= gs.total || gs.over){ endGame(); return; }
  loadQuestion();
};

// ====================== CATEGORY BUTTONS FIX ======================
document.querySelectorAll('.cat-btn').forEach(button => {
  button.addEventListener('click', function() {
    
    // Reset semua tombol
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.classList.remove('selected');
    });

    // Aktifkan tombol yang diklik
    this.classList.add('selected');
    
    // Simpan pilihan kategori
    selCat = this.dataset.cat;

    // Aktifkan tombol Mulai
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.style.opacity = '1';
      startBtn.style.cursor = 'pointer';
    }

    console.log('Kategori dipilih:', selCat); // untuk debugging
  });
});

document.getElementById('ovQuit').onclick = () => { cleanup(); endGame(); };

document.getElementById('startBtn').onclick = startGame;


function loadLeaderboard(){
  const lbList = document.getElementById('lbList');
  if(!lbList) return;
  const lb = JSON.parse(localStorage.getItem('vocab_pacman_leaderboard')||'[]');
  if(lb.length === 0){
    lbList.innerHTML = 'Belum ada skor.';
    return;
  }
  lbList.innerHTML = lb.map((x,i) => `<div style="display:flex;justify-content:space-between;border-bottom:1px solid #333;padding:4px 0;"><span>${i+1}. ${x.name}</span><span style="color:var(--yellow);font-family:var(--gfont);font-size:10px;">${x.score}</span></div>`).join('');
}
loadLeaderboard();