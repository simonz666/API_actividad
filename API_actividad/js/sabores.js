const API_DISHES_URL = 'https://api-colombia.com/api/v1/TypicalDish';

/* imagen si no se encuentra nada */
const FALLBACK_DISH_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RhOn5b34pIunyRfOcESaxFNXgReA3oDhaDzyHaZPvw&s=10';

const loaderEl = document.getElementById('loader');
const errorEl = document.getElementById('error-message');
const counterEl = document.getElementById('dishes-counter');
const dishesGrid = document.getElementById('dishes-grid');

async function fetchDishes() {
    try {
        const response = await fetch(API_DISHES_URL);

        const dishes = await response.json();
        renderDishes(dishes);
  } catch (error) {
        console.error('Error al obtener los platos típicos:', error);
        loaderEl.classList.add('hidden');
        errorEl.textContent = 'No se pudieron cargar los platos típicos.';
        errorEl.classList.remove('hidden');
  }
}

function renderDishes(dishes) {
    loaderEl.classList.add('hidden');

    if (!Array.isArray(dishes) || dishes.length === 0) {
        errorEl.textContent = 'No se encontraron platos típicos disponibles.';
        errorEl.classList.remove('hidden');
        return;
  }

    counterEl.textContent = `Total de platos típicos registrados: ${dishes.length}`;
    counterEl.classList.remove('hidden');

    dishesGrid.innerHTML = '';

    dishes.forEach((dish) => {
        const card = document.createElement('article');
        card.className = 'dish-card';

        const departmentName = dish.department?.name || 'Varias regiones';
        const imageUrl = dish.imageUrl && dish.imageUrl.startsWith('http')
            ? dish.imageUrl
            : FALLBACK_DISH_IMAGE;

    card.innerHTML = `
      <img 
        src="${imageUrl}" 
        alt="${dish.name || 'Plato típico colombiano'}" 
        class="dish-img"
        loading="lazy"
        onerror="this.onerror=null; this.src='${FALLBACK_DISH_IMAGE}';"
      >
      <div class="dish-body">
        <span class="dish-department">${departmentName}</span>
        <h3 class="dish-title">${dish.name || 'Plato sin nombre'}</h3>
        <p class="dish-desc">${dish.description || 'Sin descripción disponible.'}</p>
      </div>
    `;

    dishesGrid.appendChild(card);
  });

    dishesGrid.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', fetchDishes);
