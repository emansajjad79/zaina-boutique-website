const collections = [
  { id: "winter", title: "Winter", em: "Collection", icon: "fa-snowflake",
    desc: "Wrap yourself in warmth — luxurious coats, soft knits and cosy layers designed for chilly days.",
    chips: ["All", "Coats", "Knitwear", "Dresses"] },
  { id: "summer", title: "Summer", em: "Collection", icon: "fa-sun",
    desc: "Light, breezy and full of colour — floral dresses, maxis and lawn pieces for sunny days.",
    chips: ["All", "Maxi", "Midi", "Mini"] },
  { id: "casual", title: "Casual", em: "Wear", icon: "fa-shirt",
    desc: "Effortless everyday style — tees, blouses, co-ords and denim that you'll love wearing.",
    chips: ["All", "Tops", "Bottoms", "Sets"] },
  { id: "fancy", title: "Fancy", em: "& Formal", icon: "fa-gem",
    desc: "Show-stopping outfits for weddings, parties and festive nights — gowns, sarees and embroidered suits.",
    chips: ["All", "Gowns", "Eastern", "Party"] },
];

const products = [
  // Winter
  { id: 1, cat: "winter", sub: "Knitwear", name: "Ivory Knit Pullover", price: 4490, old: 5990, tag: "Sale", rating: 4.8, reviews: 112, img: "w1", colors: ["#efe6d8", "#8b5e3c"] },
  { id: 2, cat: "winter", sub: "Coats", name: "Plaid Wool Overcoat", price: 9990, tag: "New", rating: 4.9, reviews: 86, img: "w2", colors: ["#1f2b3a", "#5b3a2e"] },
  { id: 3, cat: "winter", sub: "Coats", name: "Sky Blue Long Coat", price: 8750, rating: 4.7, reviews: 64, img: "w3", colors: ["#9fb7d6", "#f2efe9"] },
  { id: 4, cat: "winter", sub: "Coats", name: "Sunshine Puffer Jacket", price: 7490, old: 8990, tag: "Hot", rating: 4.8, reviews: 140, img: "w4", colors: ["#f2c230", "#222"] },
  { id: 5, cat: "winter", sub: "Coats", name: "Noir Ruffle Trench", price: 10500, tag: "New", rating: 4.9, reviews: 58, img: "w5", colors: ["#111", "#7a1f2b"] },
  { id: 6, cat: "winter", sub: "Coats", name: "Grey Checked Blazer", price: 6990, rating: 4.6, reviews: 73, img: "w6", colors: ["#9a9a9a", "#2d2d2d"] },
  { id: 7, cat: "winter", sub: "Dresses", name: "Maroon Corduroy Dress", price: 5490, old: 6490, tag: "Sale", rating: 4.7, reviews: 91, img: "w7", colors: ["#6d1f35", "#3a2a1f"] },
  { id: 8, cat: "winter", sub: "Knitwear", name: "Cream Crochet Poncho", price: 3290, rating: 4.5, reviews: 47, img: "w8", colors: ["#efe6d0", "#c9a77c"] },
  // Summer
  { id: 9, cat: "summer", sub: "Midi", name: "Floral Wrap Dress", price: 3990, tag: "New", rating: 4.8, reviews: 98, img: "s1", colors: ["#f5efe6", "#c74a4a"] },
  { id: 10, cat: "summer", sub: "Mini", name: "White Frill Mini Dress", price: 3490, rating: 4.7, reviews: 77, img: "s2", colors: ["#fff", "#f4c7c3"] },
  { id: 11, cat: "summer", sub: "Maxi", name: "Powder Blue Wrap Maxi", price: 4990, old: 5990, tag: "Hot", rating: 4.9, reviews: 156, img: "s3", colors: ["#a9c1dc", "#f4e6df"] },
  { id: 12, cat: "summer", sub: "Midi", name: "Red Floral Swing Dress", price: 4290, rating: 4.8, reviews: 102, img: "s4", colors: ["#c8202f", "#f2c230"] },
  { id: 13, cat: "summer", sub: "Mini", name: "Denim Shirt Dress", price: 3790, old: 4490, tag: "Sale", rating: 4.6, reviews: 69, img: "s5", colors: ["#6f8db3", "#2f4a6d"] },
  { id: 14, cat: "summer", sub: "Mini", name: "Cherry Blossom Sundress", price: 2990, rating: 4.7, reviews: 88, img: "s6", colors: ["#d7263d", "#fff"] },
  { id: 15, cat: "summer", sub: "Maxi", name: "Peach Lawn Maxi", price: 4490, tag: "New", rating: 4.8, reviews: 61, img: "s7", colors: ["#f2a48b", "#efe6d8"] },
  { id: 16, cat: "summer", sub: "Midi", name: "Textured Sheath Dress", price: 3890, rating: 4.6, reviews: 54, img: "s8", colors: ["#c8c8c8", "#f4e6df"] },
  // Casual
  { id: 17, cat: "casual", sub: "Tops", name: "Graphic Print Tee", price: 1790, rating: 4.5, reviews: 120, img: "c1", colors: ["#111", "#fff"] },
  { id: 18, cat: "casual", sub: "Bottoms", name: "Striped Wide-Leg Trousers", price: 2990, tag: "Hot", rating: 4.7, reviews: 83, img: "c2", colors: ["#111", "#f5f5f5"] },
  { id: 19, cat: "casual", sub: "Tops", name: "Classic Black Tee", price: 1490, rating: 4.6, reviews: 210, img: "c3", colors: ["#111", "#9a9a9a"] },
  { id: 20, cat: "casual", sub: "Tops", name: "Bow-Tie Silk Blouse", price: 2790, tag: "New", rating: 4.8, reviews: 66, img: "c4", colors: ["#fff", "#111"] },
  { id: 21, cat: "casual", sub: "Bottoms", name: "Blush Satin Joggers", price: 2490, old: 2990, tag: "Sale", rating: 4.6, reviews: 75, img: "c5", colors: ["#e7b9a8", "#c9a77c"] },
  { id: 22, cat: "casual", sub: "Sets", name: "Red Tee & Bomber Set", price: 3990, rating: 4.7, reviews: 52, img: "c6", colors: ["#c8202f", "#111"] },
  { id: 23, cat: "casual", sub: "Sets", name: "Navy Wrap Co-ord Set", price: 4290, tag: "New", rating: 4.9, reviews: 94, img: "c7", colors: ["#1f2a4a", "#111"] },
  { id: 24, cat: "casual", sub: "Bottoms", name: "High-Rise Flare Jeans", price: 3490, rating: 4.7, reviews: 133, img: "c8", colors: ["#7f9cc0", "#2f4a6d"] },
  { id: 25, cat: "casual", sub: "Tops", name: "Ruffle Off-Shoulder Top", price: 2690, rating: 4.8, reviews: 79, img: "c9", colors: ["#fff", "#f4e6df"] },
  { id: 26, cat: "casual", sub: "Tops", name: "Oversized Linen Shirt", price: 2390, old: 2890, tag: "Sale", rating: 4.5, reviews: 58, img: "c10", colors: ["#f5f1ea", "#c9a77c"] },
  { id: 27, cat: "casual", sub: "Sets", name: "Leopard Shirt & Trousers", price: 3690, rating: 4.6, reviews: 41, img: "c11", colors: ["#7a4b2a", "#e7d3b5"] },
  { id: 28, cat: "casual", sub: "Tops", name: "Cropped Denim Jacket", price: 3290, tag: "Hot", rating: 4.8, reviews: 117, img: "c12", colors: ["#8fb0d6", "#f4c7c3"] },
  // Fancy
  { id: 29, cat: "fancy", sub: "Eastern", name: "Ivory Embroidered Anarkali", price: 18500, tag: "New", rating: 5.0, reviews: 64, img: "f1", colors: ["#f5f1ea", "#c9a77c"] },
  { id: 30, cat: "fancy", sub: "Gowns", name: "Plum Velvet Off-Shoulder Gown", price: 15990, rating: 4.9, reviews: 48, img: "f2", colors: ["#5a1846", "#111"] },
  { id: 31, cat: "fancy", sub: "Gowns", name: "Scarlet Flowing Gown", price: 16500, old: 19500, tag: "Sale", rating: 4.9, reviews: 72, img: "f3", colors: ["#d0182b", "#111"] },
  { id: 32, cat: "fancy", sub: "Eastern", name: "Bridal Silk Saree", price: 24990, tag: "Hot", rating: 5.0, reviews: 39, img: "f4", colors: ["#d0303a", "#c9a24a"] },
  { id: 33, cat: "fancy", sub: "Eastern", name: "Mustard Embroidered Kurta", price: 7990, rating: 4.7, reviews: 85, img: "f5", colors: ["#e3a21a", "#c8202f"] },
  { id: 34, cat: "fancy", sub: "Eastern", name: "Royal Banarasi Saree", price: 19500, tag: "New", rating: 4.9, reviews: 57, img: "f6", colors: ["#3d2a5a", "#c9a24a"] },
  { id: 35, cat: "fancy", sub: "Gowns", name: "Rose Print Ball Gown", price: 21000, rating: 4.8, reviews: 33, img: "f7", colors: ["#e0457b", "#fff"] },
  { id: 36, cat: "fancy", sub: "Party", name: "Ruby Velvet Evening Gown", price: 14500, old: 16990, tag: "Sale", rating: 4.8, reviews: 46, img: "f8", colors: ["#b3121f", "#111"] },
  { id: 37, cat: "fancy", sub: "Party", name: "Blush Organza Dress", price: 11990, rating: 4.7, reviews: 51, img: "f9", colors: ["#f4c7d0", "#fff"] },
  { id: 38, cat: "fancy", sub: "Party", name: "Emerald Chiffon Maxi", price: 9990, tag: "Hot", rating: 4.8, reviews: 62, img: "f10", colors: ["#1f7a6d", "#c9a77c"] },
  { id: 39, cat: "fancy", sub: "Eastern", name: "Mirror-Work Festive Suit", price: 12500, rating: 4.9, reviews: 44, img: "f11", colors: ["#2a9a5a", "#d0303a"] },
];

const PAGE = 8;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const fmt = (n) => "Rs. " + n.toLocaleString("en-PK");
const imgSrc = (p) => `images/${p.img}.jpg`;
const byId = (id) => products.find((p) => p.id === id);
const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));

let cart = JSON.parse(localStorage.getItem("zaina-cart") || "[]");
let wish = JSON.parse(localStorage.getItem("zaina-wish") || "[]");

function cardHTML(p) {
  const tagCls = p.tag ? p.tag.toLowerCase() : "";
  const off = p.old ? `-${Math.round((1 - p.price / p.old) * 100)}%` : p.tag;
  return `
  <article class="card reveal" data-id="${p.id}" data-sub="${p.sub}">
    <div class="card-img" data-qv="${p.id}">
      <img src="${imgSrc(p)}" alt="${p.name}" loading="lazy" />
      ${p.tag ? `<span class="tag ${tagCls}">${off}</span>` : ""}
      <button class="wish ${wish.includes(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="Add to wishlist"><i class="fa-${wish.includes(p.id) ? "solid" : "regular"} fa-heart"></i></button>
      <div class="card-actions">
        <button class="qv" data-qv="${p.id}"><i class="fa-regular fa-eye"></i> Quick View</button>
        <button class="add" data-add="${p.id}"><i class="fa-solid fa-bag-shopping"></i> Add</button>
      </div>
    </div>
    <div class="card-body">
      <small>${p.sub}</small>
      <h3 data-qv="${p.id}">${p.name}</h3>
      <div class="rating">${stars(p.rating)}<span>(${p.reviews})</span></div>
      <div class="price"><strong>${fmt(p.price)}</strong>${p.old ? `<del>${fmt(p.old)}</del>` : ""}
        <span class="swatches">${p.colors.map((c) => `<i style="background:${c}"></i>`).join("")}</span></div>
    </div>
  </article>`;
}

function renderCollections() {
  $("#collections").innerHTML = collections.map((c) => `
    <section class="collection" id="${c.id}">
      <div class="container">
        <div class="col-banner reveal">
          <div>
            <span class="tagline"><i class="fa-solid ${c.icon} col-icon"></i>${products.filter((p) => p.cat === c.id).length} Styles</span>
            <h2>${c.title} <em>${c.em}</em></h2>
            <p>${c.desc}</p>
          </div>
          <div class="chips">${c.chips.map((ch, i) => `<button class="chip ${i ? "" : "active"}" data-chip="${ch}">${ch}</button>`).join("")}</div>
        </div>
        <div class="grid">${products.filter((p) => p.cat === c.id).map(cardHTML).join("")}</div>
        <div class="more-wrap"><button class="btn btn-line more">Load More <i class="fa-solid fa-chevron-down"></i></button></div>
      </div>
    </section>`).join("");

  $$(".collection").forEach((sec) => {
    sec.dataset.filter = "All";
    sec.dataset.expanded = "";
    applyFilter(sec);
  });
}

function applyFilter(sec) {
  const f = sec.dataset.filter;
  const expanded = sec.dataset.expanded === "1";
  const cards = $$(".card", sec);
  const matching = cards.filter((c) => f === "All" || c.dataset.sub === f);
  cards.forEach((c) => c.classList.add("hide"));
  matching.forEach((c, i) => {
    if (expanded || i < PAGE) { c.classList.remove("hide"); c.classList.add("in"); }
  });
  $(".more-wrap", sec).style.display = !expanded && matching.length > PAGE ? "" : "none";
}

// Cart
function saveCart() { localStorage.setItem("zaina-cart", JSON.stringify(cart)); renderCart(); }
function addToCart(id, qty = 1, size = "M") {
  const item = cart.find((i) => i.id === id && i.size === size);
  item ? (item.qty += qty) : cart.push({ id, qty, size });
  saveCart();
  toast(`<i class="fa-solid fa-check"></i> ${byId(id).name} added to bag`);
  const btn = $("#cartBtn"); btn.animate([{ transform: "scale(1)" }, { transform: "scale(1.25)" }, { transform: "scale(1)" }], { duration: 400 });
}
function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $("#cartCount").textContent = count;
  const box = $("#cartItems");
  if (!cart.length) {
    box.innerHTML = `<div class="empty"><i class="fa-solid fa-bag-shopping"></i>Your bag is empty.<br/>Start adding beautiful pieces!</div>`;
  } else {
    box.innerHTML = cart.map((i, idx) => {
      const p = byId(i.id);
      return `<div class="c-item"><img src="${imgSrc(p)}" alt="" /><div><h4>${p.name}</h4><small>Size ${i.size} · ${fmt(p.price)}</small><br/>
        <div class="qty"><button data-dec="${idx}">−</button><span>${i.qty}</span><button data-inc="${idx}">+</button></div></div>
        <button class="rm" data-rm="${idx}" aria-label="Remove"><i class="fa-regular fa-trash-can"></i></button></div>`;
    }).join("");
  }
  const sub = cart.reduce((s, i) => s + byId(i.id).price * i.qty, 0);
  const ship = sub === 0 || sub >= 5000 ? 0 : 250;
  $("#subtotal").textContent = fmt(sub);
  $("#shipping").textContent = ship ? fmt(ship) : (sub ? "Free" : fmt(0));
  $("#total").textContent = fmt(sub + ship);
}

// Wishlist
function toggleWish(id) {
  const on = wish.includes(id);
  wish = on ? wish.filter((w) => w !== id) : [...wish, id];
  localStorage.setItem("zaina-wish", JSON.stringify(wish));
  $$(`[data-wish="${id}"]`).forEach((b) => { b.classList.toggle("on", !on); b.innerHTML = `<i class="fa-${!on ? "solid" : "regular"} fa-heart"></i>`; });
  renderWish();
  toast(on ? "Removed from wishlist" : `<i class="fa-solid fa-heart"></i> Added to wishlist`);
}
function renderWish() {
  $("#wishCount").textContent = wish.length;
  const box = $("#wishItems");
  box.innerHTML = wish.length ? wish.map((id) => {
    const p = byId(id);
    return `<div class="c-item"><img src="${imgSrc(p)}" alt="" /><div><h4>${p.name}</h4><small>${fmt(p.price)}</small><br/>
      <button class="btn btn-dark" style="padding:7px 16px;font-size:.8rem;margin-top:6px" data-add="${id}">Add to Bag</button></div>
      <button class="rm" data-wish="${id}" aria-label="Remove"><i class="fa-regular fa-trash-can"></i></button></div>`;
  }).join("") : `<div class="empty"><i class="fa-regular fa-heart"></i>No favourites yet.</div>`;
}

// Drawers
function openDrawer(id) { $("#" + id).classList.add("open"); $("#overlay").classList.add("show"); }
function closeAll() {
  $$(".drawer").forEach((d) => d.classList.remove("open"));
  $("#overlay").classList.remove("show");
  $("#navLinks").classList.remove("open");
  document.body.classList.remove("menu-open");
}

// Quick view
let mState = { id: null, qty: 1, size: "M" };
function openModal(id) {
  const p = byId(id);
  mState = { id, qty: 1, size: "M" };
  $("#mImg").src = imgSrc(p); $("#mImg").alt = p.name;
  $("#mCat").textContent = `${collections.find((c) => c.id === p.cat).title} · ${p.sub}`;
  $("#mName").textContent = p.name;
  $("#mRating").innerHTML = `${stars(p.rating)} <span style="color:var(--text)">${p.rating} (${p.reviews} reviews)</span>`;
  $("#mPrice").innerHTML = `<strong>${fmt(p.price)}</strong>${p.old ? `<del>${fmt(p.old)}</del>` : ""}`;
  $("#mDesc").textContent = `Beautifully crafted ${p.name.toLowerCase()} from our ${p.cat} collection. Premium fabric, flattering fit and fine finishing — perfect for adding a touch of elegance to your wardrobe.`;
  $("#mSizes").innerHTML = ["XS", "S", "M", "L", "XL"].map((s) => `<button class="${s === "M" ? "active" : ""}" data-size="${s}">${s}</button>`).join("");
  $("#qVal").textContent = 1;
  $("#modal").classList.add("show");
}
function closeModal() { $("#modal").classList.remove("show"); }

// Toast
let tTimer;
function toast(msg) {
  const t = $("#toast"); t.innerHTML = msg; t.classList.add("show");
  clearTimeout(tTimer); tTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// Global click delegation
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-add],[data-wish],[data-qv],[data-chip],.more,[data-inc],[data-dec],[data-rm],[data-size],[data-close],.s-item");
  if (!t) return;
  if (t.dataset.wish) { e.stopPropagation(); return toggleWish(+t.dataset.wish); }
  if (t.dataset.add) { e.stopPropagation(); return addToCart(+t.dataset.add); }
  if (t.dataset.qv) return openModal(+t.dataset.qv);
  if (t.dataset.chip) {
    const sec = t.closest(".collection");
    $$(".chip", sec).forEach((c) => c.classList.toggle("active", c === t));
    sec.dataset.filter = t.dataset.chip; sec.dataset.expanded = "";
    return applyFilter(sec);
  }
  if (t.classList.contains("more")) { const sec = t.closest(".collection"); sec.dataset.expanded = "1"; return applyFilter(sec); }
  if (t.dataset.inc) { cart[+t.dataset.inc].qty++; return saveCart(); }
  if (t.dataset.dec) { const i = +t.dataset.dec; cart[i].qty > 1 ? cart[i].qty-- : cart.splice(i, 1); return saveCart(); }
  if (t.dataset.rm) { cart.splice(+t.dataset.rm, 1); return saveCart(); }
  if (t.dataset.size) { mState.size = t.dataset.size; $$("#mSizes button").forEach((b) => b.classList.toggle("active", b === t)); return; }
  if (t.hasAttribute("data-close")) return closeAll();
  if (t.classList.contains("s-item")) { closeSearch(); return openModal(+t.dataset.id); }
});

$("#cartBtn").onclick = () => openDrawer("cartDrawer");
$("#wishBtn").onclick = () => openDrawer("wishDrawer");
$("#overlay").onclick = closeAll;
$("#menuToggle").onclick = () => { document.body.classList.add("menu-open"); $("#navLinks").classList.add("open"); $("#overlay").classList.add("show"); };
$$("#navLinks a").forEach((a) => a.addEventListener("click", closeAll));
$("#modalClose").onclick = closeModal;
$("#modal").onclick = (e) => { if (e.target.id === "modal") closeModal(); };
$("#qPlus").onclick = () => { mState.qty++; $("#qVal").textContent = mState.qty; };
$("#qMinus").onclick = () => { mState.qty = Math.max(1, mState.qty - 1); $("#qVal").textContent = mState.qty; };
$("#mAdd").onclick = () => { addToCart(mState.id, mState.qty, mState.size); closeModal(); };
$("#checkout").onclick = () => {
  if (!cart.length) return toast("Your bag is empty");
  cart = []; saveCart(); closeAll();
  toast(`<i class="fa-solid fa-circle-check"></i> Order placed! We'll contact you on WhatsApp.`);
};
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeAll(); closeSearch(); } });

// Search
function closeSearch() { $("#searchBar").classList.remove("open"); }
$("#searchBtn").onclick = () => { $("#searchBar").classList.toggle("open"); $("#searchInput").focus(); };
$("#closeSearch").onclick = closeSearch;
$("#searchInput").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const res = q ? products.filter((p) => (p.name + " " + p.sub + " " + p.cat).toLowerCase().includes(q)) : [];
  $("#searchResults").innerHTML = q && !res.length ? `<p style="padding:6px">No dresses found for "${e.target.value}"</p>` :
    res.map((p) => `<div class="s-item" data-id="${p.id}"><img src="${imgSrc(p)}" alt="" /><div><strong>${p.name}</strong><span>${fmt(p.price)}</span></div></div>`).join("");
});

// Forms
$("#contactForm").addEventListener("submit", (e) => { e.preventDefault(); e.target.reset(); toast(`<i class="fa-solid fa-circle-check"></i> Message sent! We'll reply soon.`); });
$("#newsForm").addEventListener("submit", (e) => { e.preventDefault(); e.target.reset(); toast(`<i class="fa-solid fa-envelope-circle-check"></i> Welcome to the Zaina Club!`); });

// Countdown (rolling 3 days)
const end = Date.now() + 3 * 864e5 + 7 * 36e5;
function tick() {
  const d = Math.max(0, end - Date.now());
  const pad = (n) => String(Math.floor(n)).padStart(2, "0");
  $("#dd").textContent = pad(d / 864e5); $("#hh").textContent = pad((d / 36e5) % 24);
  $("#mm").textContent = pad((d / 6e4) % 60); $("#ss").textContent = pad((d / 1e3) % 60);
}

// Nav state + reveal
function onScroll() {
  $("#navbar").classList.toggle("scrolled", scrollY > 20);
  $("#toTop").classList.toggle("show", scrollY > 600);
  let current = "home";
  $$("section[id]").forEach((s) => { if (scrollY >= s.offsetTop - 140) current = s.id; });
  $$("#navLinks a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}

renderCollections();
renderCart();
renderWish();
tick(); setInterval(tick, 1000);
$("#year").textContent = new Date().getFullYear();
$$(".cat-card, .perks-grid > div, .review, .about-imgs, .about-text, .offer-text, .contact-info, .contact-form, .insta-grid a, .categories .head, .reviews .head, .insta .head").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
$$(".reveal").forEach((el) => io.observe(el));
addEventListener("scroll", onScroll, { passive: true });
onScroll();
