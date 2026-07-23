# Solo Vale Custom Travel Itineraries

A responsive static website designed for GitHub Pages.

## Included

- Minimal modern layout using the Solo Vale logo and brand colours
- Interactive country map
- Continent filters and country cards
- Country information modal
- Custom itinerary quote form
- $70 travel consultation section
- Blog placeholders grouped by destination
- About and contact section
- Mobile navigation

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `solovale-itineraries`.
2. Upload all files and folders from this project.
3. Open the repository **Settings**.
4. Open **Pages** under **Code and automation**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and the `/root` folder, then save.
7. GitHub will provide the public website address after deployment.

## Important edits before publishing

### Email address

Replace every instance of:

`hello@solovale.com`

with the email address you want to use.

### Countries

Country information is stored in:

`data/countries.js`

Duplicate an existing country object and edit its fields to add another country.

### Blog posts

Blog placeholder cards are stored in the `BLOG_POSTS` list at the bottom of:

`data/countries.js`

Later, each card can be linked to a separate HTML article or to an existing blog or Instagram post.

### Form

The current form creates a pre-filled email. It does not store submissions online. For automatic submissions, connect it to a service such as Formspree, Basin, Netlify Forms or a custom backend.

## Map note

The map library and fonts are loaded from public CDNs, so the website needs an internet connection. No paid service is required.
