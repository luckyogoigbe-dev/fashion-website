// ---------- Product data ----------
const PRODUCTS = [
  { id: 1, name: "Wool Trench Coat", price: 328, tag: "New", img: "https://picsum.photos/id/1040/500/650" },
  { id: 2, name: "Silk Slip Dress", price: 186, tag: "New", img: "https://picsum.photos/id/1041/500/650" },
  { id: 3, name: "Tailored Wide-Leg Trouser", price: 142, tag: null, img: "https://picsum.photos/id/1043/500/650" },
  { id: 4, name: "Cashmere Crewneck", price: 164, tag: "New", img: "https://picsum.photos/id/1047/500/650" },
  { id: 5, name: "Leather Ankle Boot", price: 245, tag: null, img: "https://picsum.photos/id/1048/500/650" },
  { id: 6, name: "Oversized Blazer", price: 268, tag: "New", img: "https://picsum.photos/id/1050/500/650" },
  { id: 7, name: "Linen Shirt", price: 98, tag: null, img: "https://picsum.photos/id/1056/500/650" },
  { id: 8, name: "Structured Tote Bag", price: 212, tag: null, img: "https://picsum.photos/id/1060/500/650" },
];

const fmt = (n) => '$' + n.toFixed(2);

// ---------- Render products ----------
const grid = document.getElementById("productsGrid");
grid.innerHTML = PRODUCTS.map(p => `
  <div class="product-card">
    <div class="product-img-wrap">
      ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <div class="product-info">
      <h4>${p.name}</h4>
      <p class="product-price">${fmt(p.price)}</p>
      <button class="add-to-bag" data-id="${p.id}">Add to Bag</button>
    </div>
  </div>
`).join("");

// ---------- Cart ----------
let cart = [];

function renderCart() {
  const itemsEl = document.getElementById("cartItems");
  const countEl = document.getElementById("cartCount");
  const totalEl = document.getElementById("cartTotal");

  countEl.textContent = cart.length;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="empty">Your bag is empty.</p>`;
    totalEl.textContent = fmt(0);
    return;
  }

  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-info">
        <h5>${item.name}</h5>
        <span>${fmt(item.price)}</span>
      </div>
      <button class="cart-item-remove" data-idx="${idx}" aria-label="Remove">✕</button>
    </div>
  `).join("");

  const total = cart.reduce((sum, i) => sum + i.price, 0);
  totalEl.textContent = fmt(total);
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-bag");
  if (!btn) return;
  const product = PRODUCTS.find(p => p.id === Number(btn.dataset.id));
  cart.push(product);
  renderCart();
  openCart();
  btn.textContent = "Added ✓";
  setTimeout(() => { btn.textContent = "Add to Bag"; }, 1200);
});

document.getElementById("cartItems").addEventListener("click", (e) => {
  const btn = e.target.closest(".cart-item-remove");
  if (!btn) return;
  cart.splice(Number(btn.dataset.idx), 1);
  renderCart();
});

// ---------- Cart drawer open/close ----------
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");

function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("open");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("open");
}
document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

// ---------- Mobile menu ----------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ---------- Smooth scroll for in-page links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ---------- Newsletter form ----------
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.getElementById("newsletterStatus");
  status.textContent = "Thanks for subscribing! This form is a front-end demo — connect it to Mailchimp, Klaviyo, or a backend to collect real signups.";
  e.target.reset();
});

// ---------- Scroll reveal animation ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Search toggle (simple demo) ----------
document.getElementById("searchToggle").addEventListener("click", () => {
  const query = prompt("Search VELOURA:");
  if (query) alert(`Searching for "${query}"… (front-end demo — connect to a real product search)`);
});
