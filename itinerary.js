const form = document.getElementById('itinerary-form');
const destination = new URLSearchParams(location.search).get('destination');
if (destination) form.elements.destination.value = destination;
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const body = [`Name: ${data.get('name')}`,`Email: ${data.get('email')}`,`Destination: ${data.get('destination')}`,`Travel dates: ${data.get('dates') || 'Not specified'}`,`Travellers: ${data.get('travellers')}`,`Budget: ${data.get('budget') || 'Not specified'}`,`Place selection: ${data.get('places-choice')}`,`Places: ${data.get('places') || 'Not specified'}`,`Pace: ${data.get('pace')}`,`Interests: ${data.getAll('interests').join(', ') || 'Not specified'}`,`Detail level: ${data.get('detail')}`,`Additional notes: ${data.get('notes') || 'None'}`].join('\n');
  location.href = `mailto:hello@solovale.com?subject=${encodeURIComponent(`Custom itinerary quote request: ${data.get('destination')}`)}&body=${encodeURIComponent(body)}`;
});
