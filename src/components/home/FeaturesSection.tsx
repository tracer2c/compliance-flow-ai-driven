<!-- GSAP -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<section class="fx-wrap" id="features">
  <div class="fx-bg"></div>

  <div class="fx-inner">
    <div class="fx-left">
      <div class="fx-kicker">Features</div>
      <h2 class="fx-title">
        Built to feel <span class="fx-gradient">fast</span>, <span class="fx-gradient">smooth</span>, and <span class="fx-gradient">alive</span>.
      </h2>
      <p class="fx-sub">
        Scroll to explore. Each feature animates with motion design that makes your product feel premium.
      </p>

      <div class="fx-meter">
        <div class="fx-meter-line"></div>
        <div class="fx-meter-dot"></div>
      </div>
    </div>

    <div class="fx-right">
      <div class="fx-cards">
        <article class="fx-card" data-parallax="12">
          <div class="fx-icon">⚡</div>
          <h3>Instant Performance</h3>
          <p>Snappy UI interactions that feel native — no jank, no lag.</p>
          <div class="fx-chip">Latency-friendly</div>
        </article>

        <article class="fx-card" data-parallax="18">
          <div class="fx-icon">🧠</div>
          <h3>Smart Workflows</h3>
          <p>Guide users with helpful automations and clean, predictable flows.</p>
          <div class="fx-chip">Fewer clicks</div>
        </article>

        <article class="fx-card" data-parallax="10">
          <div class="fx-icon">🔒</div>
          <h3>Secure by Design</h3>
          <p>Modern protection patterns built in — from auth to safe defaults.</p>
          <div class="fx-chip">Trust-first</div>
        </article>

        <article class="fx-card" data-parallax="16">
          <div class="fx-icon">🎯</div>
          <h3>Delightful UX</h3>
          <p>Micro-interactions that make every step feel intentional and clean.</p>
          <div class="fx-chip">Polished</div>
        </article>
      </div>

      <div class="fx-glow"></div>
    </div>
  </div>
</section>

<style>
  :root{
    --bg:#070A12;
    --panel:#0D1224;
    --panel2:#0B1020;
    --text:#EAF0FF;
    --muted:#A9B3D6;
    --stroke:rgba(255,255,255,.10);
    --stroke2:rgba(255,255,255,.14);
    --grad: linear-gradient(90deg, #7C3AED, #22D3EE, #F97316);
  }

  body{ background:var(--bg); color:var(--text); margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto; }
  .fx-wrap{
    position:relative;
    padding: min(10vh,120px) 20px;
    overflow:hidden;
  }
  .fx-bg{
    position:absolute; inset:-30%;
    background:
      radial-gradient(closest-side, rgba(124,58,237,.18), transparent 60%),
      radial-gradient(closest-side, rgba(34,211,238,.14), transparent 60%),
      radial-gradient(closest-side, rgba(249,115,22,.10), transparent 60%);
    filter: blur(10px);
    transform: translateZ(0);
    pointer-events:none;
  }

  .fx-inner{
    max-width: 1100px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 48px;
    align-items:start;
    position:relative;
    z-index:1;
  }

  .fx-left{
    position:sticky;
    top: 90px;
    padding: 18px 0;
  }

  .fx-kicker{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:8px 12px;
    border:1px solid var(--stroke);
    border-radius:999px;
    background: rgba(255,255,255,.03);
    color: var(--muted);
    letter-spacing:.08em;
    text-transform: uppercase;
    font-size:12px;
  }

  .fx-title{
    font-size: clamp(32px, 4vw, 54px);
    line-height:1.05;
    margin: 18px 0 14px;
  }
  .fx-gradient{
    background: var(--grad);
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }
  .fx-sub{
    color: var(--muted);
    font-size: 16px;
    line-height:1.6;
    max-width: 42ch;
    margin: 0 0 26px;
  }

  .fx-meter{
    position:relative;
    height: 6px;
    border-radius:999px;
    background: rgba(255,255,255,.05);
    border:1px solid var(--stroke);
    overflow:hidden;
  }
  .fx-meter-line{
    height:100%;
    width:0%;
    background: var(--grad);
  }
  .fx-meter-dot{
    position:absolute;
    top:50%;
    left:0%;
    width:16px; height:16px;
    border-radius:50%;
    transform: translate(-50%,-50%);
    background: rgba(255,255,255,.9);
    box-shadow: 0 0 0 6px rgba(124,58,237,.20), 0 0 40px rgba(34,211,238,.35);
    mix-blend-mode: screen;
  }

  .fx-right{ position:relative; }
  .fx-glow{
    position:absolute;
    inset:-40px -40px auto auto;
    width: 260px; height: 260px;
    background: var(--grad);
    border-radius: 999px;
    filter: blur(55px);
    opacity: .14;
    pointer-events:none;
  }

  .fx-cards{
    display:grid;
    gap: 16px;
  }

  .fx-card{
    position:relative;
    padding: 18px 18px 16px;
    border-radius: 18px;
    border:1px solid var(--stroke2);
    background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
    box-shadow: 0 10px 30px rgba(0,0,0,.35);
    transform-style: preserve-3d;
    will-change: transform;
  }
  .fx-card::before{
    content:"";
    position:absolute; inset:0;
    border-radius: inherit;
    background: radial-gradient(120px 120px at var(--mx,50%) var(--my,50%), rgba(255,255,255,.10), transparent 60%);
    opacity:0;
    transition: opacity .25s ease;
    pointer-events:none;
  }
  .fx-card:hover::before{ opacity:1; }

  .fx-icon{
    width: 40px; height: 40px;
    border-radius: 12px;
    display:grid; place-items:center;
    background: rgba(255,255,255,.06);
    border:1px solid var(--stroke);
    margin-bottom: 12px;
    font-size: 20px;
  }
  .fx-card h3{ margin: 0 0 6px; font-size: 18px; }
  .fx-card p{ margin: 0; color: var(--muted); line-height:1.6; }
  .fx-chip{
    margin-top: 12px;
    display:inline-block;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid var(--stroke);
    background: rgba(255,255,255,.03);
    color: rgba(255,255,255,.86);
  }

  @media (max-width: 920px){
    .fx-inner{ grid-template-columns: 1fr; }
    .fx-left{ position:relative; top:auto; }
  }
</style>

<script>
  gsap.registerPlugin(ScrollTrigger);

  // Helper: prefers-reduced-motion support
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    // Background slow drift
    gsap.to(".fx-bg", {
      xPercent: 8,
      yPercent: -6,
      duration: 8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // Section entrance
    gsap.from(".fx-kicker, .fx-title, .fx-sub", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: "#features",
        start: "top 75%",
        once: true
      }
    });

    // Cards: fly-in stagger + subtle depth
    gsap.from(".fx-card", {
      opacity: 0,
      y: 50,
      rotateX: 10,
      transformOrigin: "50% 100%",
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".fx-cards",
        start: "top 80%",
        once: true
      }
    });

    // Progress meter: scrub across the section
    const meterTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#features",
        start: "top 20%",
        end: "bottom 30%",
        scrub: true
      }
    });

    meterTL.to(".fx-meter-line", { width: "100%", ease: "none" }, 0)
           .to(".fx-meter-dot",  { left: "100%", ease: "none" }, 0);

    // Parallax icons tied to scroll (each card slightly different)
    document.querySelectorAll(".fx-card").forEach((card) => {
      const amount = Number(card.dataset.parallax || 12);
      gsap.to(card, {
        y: -amount,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Hover tilt + glow tracking
    const cards = document.querySelectorAll(".fx-card");
    cards.forEach((card) => {
      const setVars = (e) => {
        const r = card.getBoundingClientRect();
        const mx = ((e.clientX - r.left) / r.width) * 100;
        const my = ((e.clientY - r.top) / r.height) * 100;
        card.style.setProperty("--mx", mx + "%");
        card.style.setProperty("--my", my + "%");

        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;

        gsap.to(card, {
          rotateY: dx * 10,
          rotateX: -dy * 10,
          scale: 1.02,
          duration: 0.25,
          ease: "power3.out"
        });
      };

      card.addEventListener("mousemove", setVars);

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.35,
          ease: "power3.out"
        });
      });
    });
  }
</script>
