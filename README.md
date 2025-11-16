**Movie List**

- **Project:** A small React + Vite app to browse and view movie details.
- **Purpose:** Demo/movie-list app showcasing components, routing, and an API service.

**Quick Start**

- **Prerequisites:** Node.js (16+) and `npm`
- **Install:**

  ```powershell
  npm install
  ```

- **Run (dev):**

  ```powershell
  npm run dev
  ```

- **Build:**

  ```powershell
  npm run build
  ```

**What’s included**

- **Framework:** React with Vite
- **Styling:** CSS files under `src/css/`
- **Routing / Pages:** `src/pages/Home.jsx`, `src/pages/MovieDetails.jsx`
- **Components:** `src/components/MovieCard.jsx`, `src/components/NavBar.jsx`
- **Service:** `src/services/api.js` — central place for API calls

**Project Structure**

```
.
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
|  ├─ App.jsx
|  ├─ pages/
|  │  ├─ Home.jsx
|  │  └─ MovieDetails.jsx
|  ├─ components/
|  │  ├─ MovieCard.jsx
|  │  └─ NavBar.jsx
|  ├─ css/
|  └─ services/
|     └─ api.js
└─ public/
```

**Usage notes**

- The app uses Vite dev server. Open the URL shown after `npm run dev` (usually `http://localhost:5173`).
- API integration is centralized in `src/services/api.js`. If you need to change the data source, update that file.
- Styles are split into small files under `src/css/` mapped to components and pages.

**Development tips**

- Add new components under `src/components/` and their styles under `src/css/`.
- Keep API-related logic in `src/services/` to simplify mocking and testing.
