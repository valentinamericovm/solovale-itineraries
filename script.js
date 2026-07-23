const continentNames = [...new Set(COUNTRY_DATA.map(country => country.continent))];
const countryGrid = document.getElementById('country-grid');
const filters = document.getElementById('continent-filters');
const dialog = document.getElementById('country-dialog');
const dialogContent = document.getElementById('country-dialog-content');

function renderFilters() {
  ['All', ...continentNames].forEach((continent, index) => {
    const button = document.createElement('button');
    button.className = `filter-button${index === 0 ? ' active' : ''}`;
    button.textContent = continent;
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      renderCountries(continent);
    });
    filters.appendChild(button);
  });
}

function renderCountries(continent = 'All') {
  const list = continent === 'All' ? COUNTRY_DATA : COUNTRY_DATA.filter(country => country.continent === continent);
  countryGrid.innerHTML = list.map(country => `
    <article class="country-card" data-code="${country.code}">
      <span class="continent">${country.continent}</span>
      <h3>${country.name}</h3>
      <p>${country.summary}</p>
      <span class="text-link">Explore country →</span>
    </article>
  `).join('');
  countryGrid.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', () => openCountry(card.dataset.code));
  });
}

function openCountry(code) {
  const country = COUNTRY_DATA.find(item => item.code === code);
  if (!country) {
    dialogContent.innerHTML = `
      <div class="dialog-inner">
        <p class="eyebrow">Destination guide</p>
        <h2>Guide coming soon</h2>
        <p>This country can be added to the website whenever you are ready. Visitors can still request a custom itinerary for it.</p>
        <div class="dialog-actions"><a class="primary-button" href="#itinerary" onclick="document.getElementById('country-dialog').close()">Request an itinerary</a></div>
      </div>`;
    dialog.showModal();
    return;
  }

  dialogContent.innerHTML = `
    <div class="dialog-inner">
      <p class="eyebrow">${country.continent}</p>
      <h2>${country.name}</h2>
      <p>${country.description}</p>
      <div class="country-meta">
        <div class="meta-item"><span>Currency</span>${country.currency}</div>
        <div class="meta-item"><span>Language</span>${country.languages}</div>
        <div class="meta-item"><span>Time zone</span>${country.timezone}</div>
        <div class="meta-item"><span>Safety overview</span>${country.safety}</div>
      </div>
      <p><small>Practical information should always be checked again before travel, especially entry rules, safety advice, transport and local regulations.</small></p>
      <div class="dialog-actions">
        <a class="primary-button" href="#itinerary" onclick="prefillDestination('${country.name}')">Request custom itinerary</a>
        <a class="secondary-button" href="#blog" onclick="document.getElementById('country-dialog').close()">Read blog entries</a>
      </div>
    </div>`;
  dialog.showModal();
}

function prefillDestination(country) {
  dialog.close();
  document.querySelector('[name="destination"]').value = country;
}
window.prefillDestination = prefillDestination;

function selectContinent(continent) {
  const button = [...document.querySelectorAll('.filter-button')].find(btn => btn.textContent === continent);
  if (button) button.click();
  document.getElementById('countries').scrollIntoView();
}

renderFilters();
renderCountries();

document.querySelectorAll('.continent-label').forEach(label => {
  label.addEventListener('click', () => selectContinent(label.dataset.continent));
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});

const map = new jsVectorMap({
  selector: '#world-map',
  map: 'world',
  backgroundColor: 'transparent',
  zoomButtons: false,
  zoomOnScroll: false,
  regionStyle: {
    initial: { fill: '#ffffff', stroke: '#6f9da2', strokeWidth: 0.7, fillOpacity: 1 },
    hover: { fill: '#54a7b0', cursor: 'pointer' },
    selected: { fill: '#741044' }
  },
  onRegionClick(event, code) {
    openCountry(code);
  },
  onRegionTooltipShow(event, tooltip, code) {
    const country = COUNTRY_DATA.find(item => item.code === code);
    if (country) tooltip.text(country.name);
  }
});

const blogGrid = document.getElementById('blog-grid');
blogGrid.innerHTML = BLOG_POSTS.map(post => `
  <article class="blog-card">
    <span class="tag">${post.country}</span>
    <h3>${post.title}</h3>
    <p>${post.excerpt}</p>
    <span class="text-link">Article link to be added →</span>
  </article>
`).join('');

const form = document.getElementById('itinerary-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const interests = data.getAll('interests').join(', ') || 'Not specified';
  const subject = `Custom itinerary quote request: ${data.get('destination')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Destination: ${data.get('destination')}`,
    `Travel dates: ${data.get('dates') || 'Not specified'}`,
    `Travellers: ${data.get('travellers')}`,
    `Budget: ${data.get('budget') || 'Not specified'}`,
    `Place selection: ${data.get('places-choice')}`,
    `Places: ${data.get('places') || 'Not specified'}`,
    `Pace: ${data.get('pace')}`,
    `Interests: ${interests}`,
    `Detail level: ${data.get('detail')}`,
    `Additional notes: ${data.get('notes') || 'None'}`
  ].join('\n');
  window.location.href = `mailto:hello@solovale.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();
