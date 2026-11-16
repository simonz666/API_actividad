const API_COUNTRY_URL = 'https://api-colombia.com/api/v1/Country/Colombia';

const loaderEl = document.getElementById('loader');
const errorEl = document.getElementById('error-message');
const countryContainer = document.getElementById('country-container');

async function fetchCountryData() {
    try {
        const response = await fetch(API_COUNTRY_URL);

        const data = await response.json();
        renderCountry(data);
    } catch (error) {
        console.error('Error al obtener datos de Colombia:', error);
        loaderEl.classList.add('hidden');
        errorEl.textContent = 'No se pudo cargar la información de Colombia. Por favor, intenta de nuevo más tarde.';
        errorEl.classList.remove('hidden');
  }
}

function renderCountry(country) {
    loaderEl.classList.add('hidden');
    const population = country.population
        ? country.population.toLocaleString('es-CO') + ' habitantes'
        : 'No disponible';

    const surface = country.surface
        ? country.surface.toLocaleString('es-CO') + ' km²'
        : 'No disponible';

    const languages = Array.isArray(country.languages)
        ? country.languages.join(', ')
        : 'Español';

    const timeZone = country.timeZone || 'UTC-5';
    const currency = `${country.currency || 'Peso colombiano'} (${country.currencyCode || 'COP'})`;
    const flagUrl = country.flags?.[0] || 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg';
    countryContainer.innerHTML = `
    <div class="country-hero">
      <img 
        src="${flagUrl}" 
        alt="Bandera de ${country.name}" 
        class="country-flag"
        onerror="this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg';"
      >
      <div class="country-intro">
        <h3>República de ${country.name || 'Colombia'}</h3>
        <p><strong>Capital:</strong> ${country.stateCapital || 'Bogotá D.C.'} | <strong>Región:</strong> ${country.region || 'América'} (${country.subRegion || 'Sudamérica'})</p>
      </div>
    </div>

    <p class="country-description">${country.description || 'Descripción no disponible.'}</p>

    <div class="data-grid">
      <div class="data-item">
        <span>Capital</span>
        <strong>${country.stateCapital || 'Bogotá'}</strong>
      </div>
      <div class="data-item">
        <span>Población</span>
        <strong>${population}</strong>
      </div>
      <div class="data-item">
        <span>Superficie</span>
        <strong>${surface}</strong>
      </div>
      <div class="data-item">
        <span>Moneda Oficial</span>
        <strong>${currency}</strong>
      </div>
      <div class="data-item">
        <span>Símbolo Monetario</span>
        <strong>${country.currencySymbol || '$'}</strong>
      </div>
      <div class="data-item">
        <span>Idiomas</span>
        <strong>${languages}</strong>
      </div>
      <div class="data-item">
        <span>Prefijo Telefónico</span>
        <strong>+${country.phonePrefix || '57'}</strong>
      </div>
      <div class="data-item">
        <span>Dominio Internet</span>
        <strong>${country.internetDomain || '.co'}</strong>
      </div>
      <div class="data-item">
        <span>Código ISO</span>
        <strong>${country.isoCode || 'COL'}</strong>
      </div>
      <div class="data-item">
        <span>Zona Horaria</span>
        <strong>${timeZone}</strong>
      </div>
      <div class="data-item">
        <span>Símbolo Aeronáutico</span>
        <strong>${country.aircraftPrefix || 'HK'}</strong>
      </div>
      <div class="data-item">
        <span>Fronteras Terrestres</span>
        <strong>${Array.isArray(country.borders) ? country.borders.join(', ') : '5 países'}</strong>
      </div>
    </div>
  `;

  countryContainer.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', fetchCountryData);
