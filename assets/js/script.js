document.addEventListener('DOMContentLoaded', () => {
  const kebapBtn = document.getElementById('kebap-btn');
  const icecekBtn = document.getElementById('icecek-btn');
  const durumBtn = document.getElementById('durum-btn');
  const menuContainer = document.getElementById('menu-container');

  // Menü verilerini JSON dosyasından çekme
  fetch('assets/json/menu.json')
    .then(response => response.json())
    .then(data => {
      // Kebaplar, İçecekler ve Dürümler verileri
      const kebaplar = data.kebaplar;
      const icecekler = data.icecekler;
      const durumler = data.durumler;

      // Kebapları gösteren fonksiyon
      const showKebaplar = () => {
        menuContainer.innerHTML = ''; // Önceki içerikleri temizle
        kebaplar.forEach(item => {
          const div = document.createElement('div');
          div.className = 'menu-item';
          div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
          `;
          menuContainer.appendChild(div);
        });
      };

      // İçecekleri gösteren fonksiyon
      const showIcecekler = () => {
        menuContainer.innerHTML = ''; // Önceki içerikleri temizle
        icecekler.forEach(item => {
          const div = document.createElement('div');
          div.className = 'menu-item';
          div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
          `;
          menuContainer.appendChild(div);
        });
      };

      // Dürümleri gösteren fonksiyon
      const showDurumler = () => {
        menuContainer.innerHTML = ''; // Önceki içerikleri temizle
        durumler.forEach(item => {
          const div = document.createElement('div');
          div.className = 'menu-item';
          div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
          `;
          menuContainer.appendChild(div);
        });
      };

      // Hem Kebapları hem de İçecekleri hem de Dürümleri göster
      const showAll = () => {
        menuContainer.innerHTML = ''; // Önceki içerikleri temizle
        kebaplar.forEach(item => {
          const div = document.createElement('div');
          div.className = 'menu-item';
          div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
          `;
          menuContainer.appendChild(div);
        });

        durumler.forEach(item => {
          const div = document.createElement('div');
          div.className = 'menu-item';
          div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
          `;
          menuContainer.appendChild(div);
        });

        icecekler.forEach(item => {
          const div = document.createElement('div');
          div.className = 'menu-item';
          div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
          `;
          menuContainer.appendChild(div);
        });
      };

      // Sayfa ilk yüklendiğinde hem kebaplar, içecekler ve dürümler gösterilsin
      showAll();

      // Kebaplar butonuna tıklama
      kebapBtn.addEventListener('click', showKebaplar);

      // Dürümler butonuna tıklama
      durumBtn.addEventListener('click', showDurumler);

      // İçecekler butonuna tıklama
      icecekBtn.addEventListener('click', showIcecekler);
    })
    .catch(error => console.error('Menü verisi yüklenemedi:', error));
});
