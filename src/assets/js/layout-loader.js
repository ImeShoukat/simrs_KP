document.addEventListener('DOMContentLoaded', () => {
  const loadComponent = (selector, file) => {
    const target = document.querySelector(selector);
    if (target) {
      fetch(`/src/components/${file}`)
        .then(res => res.text())
        .then(html => {
          target.innerHTML = html;
        })
        .catch(err => {
          console.error(`Gagal memuat komponen: ${file}`, err);
        });
    }
  };

  loadComponent('#navbar', 'navbar.html');
  loadComponent('#sidebar', 'sidebar.html');
});
