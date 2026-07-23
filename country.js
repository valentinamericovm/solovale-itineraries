const code = new URLSearchParams(location.search).get('code');
const country = COUNTRY_DATA.find(c => c.code === code);
const page = document.getElementById('country-page');
if (!country) {
  page.innerHTML = `<section class="page-hero"><div class="wrap"><p class="eyebrow">Destination guide</p><h1>Guide not found</h1><p class="intro">Return to the destination library and choose another country.</p><a class="primary-button" href="destinations.html">View destinations</a></div></section>`;
} else {
  document.title = `${country.name} travel information | Solo Vale`;
  page.innerHTML = `<section class="page-hero"><div class="wrap"><p class="eyebrow">${country.continent}</p><h1>${country.name}</h1><p class="intro">${country.summary}</p></div></section><section class="content-section"><div class="wrap country-layout"><div><p class="country-description">${country.description}</p><p>Use this page as the practical starting point for the destination. Entry requirements, local safety advice, transport conditions and regulations should always be checked again close to the travel date.</p><div class="action-row"><a class="primary-button" href="itinerary.html?destination=${encodeURIComponent(country.name)}">Request a custom itinerary</a><a class="secondary-button" href="blog.html?country=${encodeURIComponent(country.name)}">Read blog entries</a></div></div><div class="country-meta"><div class="meta-item"><span>Currency</span>${country.currency}</div><div class="meta-item"><span>Language</span>${country.languages}</div><div class="meta-item"><span>Time zone</span>${country.timezone}</div><div class="meta-item"><span>Safety overview</span>${country.safety}</div></div></div></section>`;
}
