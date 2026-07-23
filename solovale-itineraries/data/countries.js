const COUNTRY_DATA = [
  {
    code: "IT", name: "Italy", continent: "Europe", currency: "Euro (EUR)", languages: "Italian", timezone: "CET / CEST", safety: "Generally safe, with normal precautions in busy tourist areas.",
    summary: "Historic cities, coastal villages, mountain landscapes and one of the world's most varied regional food cultures.",
    description: "Italy works especially well for travellers who want to combine art, food, history and landscapes in one trip. The best route depends heavily on the season and on how many regions you want to include."
  },
  {
    code: "ES", name: "Spain", continent: "Europe", currency: "Euro (EUR)", languages: "Spanish, plus regional languages", timezone: "CET / CEST; Canary Islands WET / WEST", safety: "Generally safe. Watch for pickpocketing in major visitor areas.",
    summary: "Lively cities, Mediterranean coast, diverse regional cultures and excellent food.",
    description: "Spain is much more varied than a classic Madrid and Barcelona itinerary suggests. Andalusia, the Basque Country, Galicia, the islands and the Mediterranean coast each offer a very different trip."
  },
  {
    code: "FR", name: "France", continent: "Europe", currency: "Euro (EUR)", languages: "French", timezone: "CET / CEST", safety: "Generally safe, with standard urban precautions.",
    summary: "Art, architecture, wine regions, Atlantic villages, Alpine scenery and Mediterranean coastlines.",
    description: "France is ideal for a city break, a regional road trip or a longer route linking Paris with Provence, Normandy, the Alps or the Atlantic coast."
  },
  {
    code: "PT", name: "Portugal", continent: "Europe", currency: "Euro (EUR)", languages: "Portuguese", timezone: "WET / WEST", safety: "Generally considered a safe destination.",
    summary: "Colourful cities, dramatic Atlantic scenery, islands and a relaxed food culture.",
    description: "Portugal is compact enough for a varied itinerary, but Lisbon, Porto, the Algarve, Madeira and the Azores each deserve time of their own."
  },
  {
    code: "GR", name: "Greece", continent: "Europe", currency: "Euro (EUR)", languages: "Greek", timezone: "EET / EEST", safety: "Generally safe, with seasonal heat and ferry logistics to consider.",
    summary: "Ancient history, island landscapes, clear water and relaxed Mediterranean meals.",
    description: "A strong Greece itinerary balances Athens or the mainland with islands selected according to your preferred atmosphere, budget and travel month."
  },
  {
    code: "BG", name: "Bulgaria", continent: "Europe", currency: "Bulgarian lev (BGN)", languages: "Bulgarian", timezone: "EET / EEST", safety: "Generally safe with normal travel precautions.",
    summary: "Mountain trails, Orthodox heritage, Black Sea coast and good value travel.",
    description: "Bulgaria combines cities such as Sofia and Plovdiv with monasteries, mountain towns, hiking areas and coastal stops."
  },
  {
    code: "JP", name: "Japan", continent: "Asia", currency: "Japanese yen (JPY)", languages: "Japanese", timezone: "Japan Standard Time (UTC+9)", safety: "Generally very safe, though natural hazards and local emergency guidance should be understood.",
    summary: "Hypermodern cities, temples, mountain landscapes, exceptional transport and regional cuisine.",
    description: "Japan rewards detailed planning. Rail passes, luggage forwarding, seasonal crowds and the balance between major cities and quieter regions can transform the trip."
  },
  {
    code: "TH", name: "Thailand", continent: "Asia", currency: "Thai baht (THB)", languages: "Thai", timezone: "Indochina Time (UTC+7)", safety: "Generally manageable for travellers, with road safety, heat and local rules requiring attention.",
    summary: "Temples, street food, tropical islands, northern mountains and wellness retreats.",
    description: "Thailand can be planned as a cultural route, an island holiday, a wellness trip or a combination, but transfer times and monsoon patterns matter."
  },
  {
    code: "ID", name: "Indonesia", continent: "Asia", currency: "Indonesian rupiah (IDR)", languages: "Indonesian, plus many local languages", timezone: "Three time zones from UTC+7 to UTC+9", safety: "Conditions vary by island. Transport, volcanic activity and local regulations should be checked.",
    summary: "Thousands of islands with distinct cultures, volcanoes, beaches and wildlife.",
    description: "Indonesia is not one single type of destination. Bali, Java, Lombok, Flores and the other islands require different timing and transport choices."
  },
  {
    code: "CO", name: "Colombia", continent: "South America", currency: "Colombian peso (COP)", languages: "Spanish", timezone: "Colombia Time (UTC−5)", safety: "Safety varies significantly by region and neighbourhood. Current local advice is important.",
    summary: "Andean cities, Caribbean coast, coffee landscapes, rainforest and energetic local culture.",
    description: "Colombia is well suited to multi-stop itineraries, but distances are large and domestic flights are often more practical than overland travel."
  },
  {
    code: "BR", name: "Brazil", continent: "South America", currency: "Brazilian real (BRL)", languages: "Portuguese", timezone: "Multiple time zones", safety: "Safety conditions vary by city and area. Neighbourhood-level planning is important.",
    summary: "Vast landscapes, music, beaches, colonial towns, rainforest and major cities.",
    description: "Brazil requires selective planning because of its size. A focused route is usually better than trying to combine too many distant regions."
  },
  {
    code: "US", name: "United States", continent: "North America", currency: "US dollar (USD)", languages: "English is the main language; Spanish is also widely spoken", timezone: "Multiple time zones", safety: "Conditions vary by destination. Transport, insurance and local guidance should be planned carefully.",
    summary: "National parks, road trips, major cities and enormous regional variety.",
    description: "The United States is best planned by region. Distances, car rental, park reservations and seasonal weather strongly shape the route."
  },
  {
    code: "MX", name: "Mexico", continent: "North America", currency: "Mexican peso (MXN)", languages: "Spanish and numerous Indigenous languages", timezone: "Multiple time zones", safety: "Conditions vary widely by state and route, so current destination-specific advice is essential.",
    summary: "Archaeological sites, vibrant cities, coastlines and deeply regional food traditions.",
    description: "Mexico offers very different experiences across Yucatán, Oaxaca, Mexico City, Baja California, the Pacific coast and central colonial cities."
  },
  {
    code: "MA", name: "Morocco", continent: "Africa", currency: "Moroccan dirham (MAD)", languages: "Arabic and Amazigh; French widely used", timezone: "Usually UTC+1, with seasonal adjustments", safety: "Common visitor routes are well established. Respect local customs and monitor current advice.",
    summary: "Historic medinas, desert routes, mountain villages and Atlantic towns.",
    description: "Morocco is ideal for a route combining cities and landscapes, but drive times, desert transfers and cultural expectations should be planned realistically."
  },
  {
    code: "ZA", name: "South Africa", continent: "Africa", currency: "South African rand (ZAR)", languages: "Twelve official languages", timezone: "South Africa Standard Time (UTC+2)", safety: "Safety varies considerably by area. Local advice, transport choices and accommodation location matter.",
    summary: "Wildlife, dramatic coastal routes, wine regions, mountains and diverse cities.",
    description: "South Africa supports very different itineraries, from Cape Town and the Garden Route to safari regions and mountain landscapes."
  },
  {
    code: "AU", name: "Australia", continent: "Oceania", currency: "Australian dollar (AUD)", languages: "English", timezone: "Multiple time zones", safety: "Generally safe, with distance, heat, ocean conditions and wildlife guidance to consider.",
    summary: "Coastal cities, reefs, deserts, road trips and unique wildlife.",
    description: "Australia's scale is the main planning challenge. Choosing one or two regions generally creates a better trip than attempting to cross the entire country quickly."
  },
  {
    code: "NZ", name: "New Zealand", continent: "Oceania", currency: "New Zealand dollar (NZD)", languages: "English, Māori and New Zealand Sign Language", timezone: "NZST / NZDT", safety: "Generally safe, with mountain weather and outdoor preparation important.",
    summary: "Mountain scenery, hiking, geothermal areas and scenic road trips.",
    description: "New Zealand is ideal for self-drive travel, but ferry connections, one-way rentals and seasonal conditions need to be included in the route."
  }
];

const BLOG_POSTS = [
  { country: "Italy", title: "Add your Italian travel stories", excerpt: "Create links to your existing posts from Puglia, Sicily, Molise, Liguria and the rest of your scooter journey." },
  { country: "Bulgaria", title: "Bansko, Sofia and the mountains", excerpt: "A space for your Sofia guides, Bansko stories, Bezbog hike and other Bulgaria posts." },
  { country: "Japan", title: "Your Japan articles", excerpt: "Add destination guides, personal stories and practical posts organised by country." },
  { country: "Colombia", title: "Your Colombia articles", excerpt: "Keep all future Medellín and Colombia posts together in one easy destination archive." },
  { country: "Thailand", title: "Retreats, islands and city stops", excerpt: "A future home for your Koh Samui, Bangkok and Thailand travel content." },
  { country: "More destinations", title: "Easy to expand", excerpt: "Duplicate one entry in the data file to add another article or country." }
];
