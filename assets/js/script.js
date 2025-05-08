document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu-container');

  const allBtn = document.getElementById('all-btn');
  const kebapBtn = document.getElementById('kebap-btn');
  const icecekBtn = document.getElementById('icecek-btn');
  const durumBtn = document.getElementById('durum-btn');
  const donerBtn = document.getElementById('doner-btn');
  const pideBtn = document.getElementById('pide-btn');
  const corbaBtn = document.getElementById('corba-btn');

  fetch('/assets/json/menu.json')
    .then(response => response.json())
    .then(data => {
      const kebaplar = data.kebaplar;
      const icecekler = data.icecekler;
      const durumler = data.durumler;
      const doner = data.doner;
      const pide = data.pide;
      const corba = data.corba;

      const showItems = (items) => {
        items.forEach(item => {
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

      const showAll = () => {
        menuContainer.innerHTML = '';
        showItems(kebaplar);
        showItems(icecekler);
        showItems(durumler);
        showItems(doner);
        showItems(pide);
        showItems(corba);
      };

      // Sayfa açıldığında tümü göster
      showAll();

      allBtn.addEventListener('click', showAll);
      kebapBtn.addEventListener('click', () => {
        menuContainer.innerHTML = '';
        showItems(kebaplar);
      });
      icecekBtn.addEventListener('click', () => {
        menuContainer.innerHTML = '';
        showItems(icecekler);
      });
      durumBtn.addEventListener('click', () => {
        menuContainer.innerHTML = '';
        showItems(durumler);
      });
      donerBtn.addEventListener('click', () => {
        menuContainer.innerHTML = '';
        showItems(doner);
      });
      pideBtn.addEventListener('click', () => {
        menuContainer.innerHTML = '';
        showItems(pide);
      });
      corbaBtn.addEventListener('click', () => {
        menuContainer.innerHTML = '';
        showItems(corba);
      });
    })
    .catch(error => console.error('Menü verisi yüklenemedi:', error));
});
