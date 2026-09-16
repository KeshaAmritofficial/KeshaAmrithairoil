const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener('click', function(e){
    const id = this.getAttribute('href');
    if(id && id.length > 1){
      const target = document.querySelector(id);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    }
  });
});

/* KeshaAmrit bottle size selection */
document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".product-option");
  const sizeLabel = document.getElementById("selected-size-label");
  const mrpEl = document.getElementById("selected-mrp");
  const offerEl = document.getElementById("selected-offer");
  const heroButtons = document.querySelectorAll(".order-whatsapp");

  const updateWhatsApp = (size) => {
    const cleanSize = size.replace(/\s+/g, "");
    const message = `Hi KeshaAmrit, I want ${cleanSize} KeshaAmrit Dr.Soumya Krishnan Formulated Ayurvedic Hair Oil.`;
    const url = `https://wa.me/919496739361?text=${encodeURIComponent(message)}`;
    heroButtons.forEach(btn => {
      btn.href = url;
      btn.dataset.size = size;
    });
  };

  options.forEach(option => {
    option.addEventListener("click", () => {
      options.forEach(item => item.classList.remove("active"));
      option.classList.add("active");

      const size = option.dataset.size;
      const mrp = Number(option.dataset.mrp);
      const offer = Number(option.dataset.offer);

      if (sizeLabel) sizeLabel.textContent = `KESHAAMRIT • ${size.toUpperCase()}`;
      if (mrpEl) mrpEl.textContent = `₹${mrp.toLocaleString("en-IN")}`;
      if (offerEl) offerEl.textContent = `₹${offer.toLocaleString("en-IN")}`;
      updateWhatsApp(size);

      document.getElementById("order")?.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });
});


// Direct WhatsApp order handler
document.querySelectorAll(".order-whatsapp").forEach(btn => {
  btn.addEventListener("click", () => {
    const size = btn.dataset.size || "100 ml";
    const message = `Hi KeshaAmrit, I want ${size.replace(/\s+/g, "")} KeshaAmrit Dr.Soumya Krishnan Formulated Ayurvedic Hair Oil.`;
    btn.href = `https://wa.me/919496739361?text=${encodeURIComponent(message)}`;
  });
});
