const selectedCountry = new URLSearchParams(location.search).get('country');
const posts = selectedCountry ? BLOG_POSTS.filter(p => p.country === selectedCountry) : BLOG_POSTS;
const grid = document.getElementById('blog-grid');
grid.innerHTML = posts.length ? posts.map(post => `<article class="blog-card"><span class="tag">${post.country}</span><h3>${post.title}</h3><p>${post.excerpt}</p><span class="text-link">Article link to be added →</span></article>`).join('') : `<div class="empty-state" style="grid-column:1/-1"><h3>No articles added yet</h3><p>This country page is ready for future blog entries.</p><a class="secondary-button" href="blog.html">View all blog sections</a></div>`;
