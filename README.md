# WALL-E On Mars
Uses [NASA Mars Rover Photos API](https://api.nasa.gov/) and a [Quotes API](https://type.fit/api/quotes) to fetch images for specific dates (i.e. earth date) with the ability to like photos which saves them in your library locally.


## Features
- Date picker to load images from specific dates
- Loading state with accompanying CSS loading spinner animation
- Using local storage to save liked photos
- Uses a quotes API and assigns each image post a random quote
- Ability to load more images (10 at a time) to prevent information overload on load
- Seperately routed pages for "explore" page and "liked" page


## Technologies Used
- React.js
- CSS + Bulma CSS Library
- Axios for fetching from APIs
- React Router DOM
- Google Font API
- LocalStorage API
- Deployed using Netlify

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
