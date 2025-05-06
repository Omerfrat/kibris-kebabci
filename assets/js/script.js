document.addEventListener('DOMContentLoaded', () => {
  // Menü verilerini JSON dosyasından çekme
  fetch('assets/json/menu.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('menu-container');

      data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          <div class="price">${item.price}</div>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => console.error('Menü verisi yüklenemedi:', error));
});
