(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var canvas = document.createElement("canvas");
  canvas.id = "embers";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);
  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var KEY = "iratxo-embers";
  var COUNT = 32;
  var width = 0;
  var height = 0;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function make(seed) {
    var e = seed || {};
    return {
      x: typeof e.x === "number" ? e.x : Math.random(),
      y: typeof e.y === "number" ? e.y : Math.random(),
      vy: typeof e.vy === "number" ? e.vy : 0.018 + Math.random() * 0.028,
      drift: typeof e.drift === "number" ? e.drift : 0.01 + Math.random() * 0.02,
      phase: typeof e.phase === "number" ? e.phase : Math.random() * Math.PI * 2,
      spin: typeof e.spin === "number" ? e.spin : 0.35 + Math.random() * 0.7,
      r: typeof e.r === "number" ? e.r : 1.1 + Math.random() * 1.7,
      life: typeof e.life === "number" ? e.life : Math.random(),
      span: typeof e.span === "number" ? e.span : 14 + Math.random() * 16,
      warm: typeof e.warm === "number" ? e.warm : Math.random()
    };
  }

  function rebirth(e) {
    e.x = Math.random();
    e.y = 1.02 + Math.random() * 0.06;
    e.life = 1;
    e.vy = 0.018 + Math.random() * 0.028;
    e.warm = Math.random();
  }

  function advance(e, dt) {
    var steps = Math.max(1, Math.ceil(dt / 0.05));
    var slice = dt / steps;
    for (var i = 0; i < steps; i++) {
      e.phase += e.spin * slice;
      e.x += Math.sin(e.phase) * e.drift * slice;
      e.y -= e.vy * slice;
      e.life -= slice / e.span;
      if (e.x < -0.08) e.x += 1.16;
      if (e.x > 1.08) e.x -= 1.16;
      if (e.life <= 0 || e.y < -0.08) rebirth(e);
    }
  }

  var embers = [];
  try {
    var saved = JSON.parse(sessionStorage.getItem(KEY) || "null");
    if (saved && saved.embers && saved.embers.length) {
      var gap = Math.min(20, Math.max(0, (Date.now() - saved.t) / 1000));
      embers = saved.embers.slice(0, COUNT).map(make);
      embers.forEach(function (e) { advance(e, gap); });
    }
  } catch (err) {}
  while (embers.length < COUNT) embers.push(make());

  function persist() {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), embers: embers }));
    } catch (err) {}
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pagehide", persist);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") persist();
  });

  var prev = performance.now();
  function frame(now) {
    var dt = Math.min(0.05, (now - prev) / 1000);
    prev = now;
    ctx.clearRect(0, 0, width, height);
    embers.forEach(function (e) {
      advance(e, dt);
      var alpha = Math.sin(Math.max(0, Math.min(1, e.life)) * Math.PI) * 0.8;
      var x = e.x * width;
      var y = e.y * height;
      var glow = e.r * 4.2;
      var core = e.warm > 0.7 ? "240,196,138" : "224,164,88";
      var grd = ctx.createRadialGradient(x, y, 0, x, y, glow);
      grd.addColorStop(0, "rgba(" + core + "," + alpha + ")");
      grd.addColorStop(0.4, "rgba(196,120,58," + (alpha * 0.4) + ")");
      grd.addColorStop(1, "rgba(196,120,58,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(x, y, glow, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
