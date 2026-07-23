const REGIONS = ['All', 'Europe', 'North America', 'Central America and Caribbean', 'South America', 'Africa', 'Middle East', 'Asia', 'Australia', 'New Zealand'];
function countryRegion(country) {
  if (country.code === 'MX') return 'Central America and Caribbean';
  if (country.code === 'AU') return 'Australia';
  if (country.code === 'NZ') return 'New Zealand';
  return country.continent;
}
const tabs = document.getElementById('region-tabs');
const grid = document.getElementById('country-grid');
const requested = new URLSearchParams(location.search).get('region');
let selected = REGIONS.includes(requested) ? requested : 'All';
function renderTabs() {
  tabs.innerHTML = REGIONS.map(region => `<button class="region-tab ${region === selected ? 'active' : ''}" data-region="${region}">${region}</button>`).join('');
  tabs.querySelectorAll('button').forEach(button => button.addEventListener('click', () => { selected = button.dataset.region; history.replaceState(null, '', selected === 'All' ? 'destinations.html' : `destinations.html?region=${encodeURIComponent(selected)}`); renderTabs(); renderCountries(); }));
}
function renderCountries() {
  const countries = selected === 'All' ? COUNTRY_DATA : COUNTRY_DATA.filter(c => countryRegion(c) === selected);
  grid.innerHTML = countries.length ? countries.map(c => `<a class="country-card" href="country.html?code=${c.code}"><span class="continent">${countryRegion(c)}</span><h3>${c.name}</h3><p>${c.summary}</p><span class="text-link">Open country guide →</span></a>`).join('') : `<div class="empty-state" style="grid-column:1/-1"><h3>Guides coming soon</h3><p>This area is already part of the website structure and country guides can be added whenever needed.</p><a class="primary-button" href="itinerary.html">Request an itinerary for this region</a></div>`;
}
renderTabs(); renderCountries();
