import React from 'react'
import "./Favorite.css"
import { useFavorites } from '../context/favoritesContext'

const Favorites = () => {
  const { favorites, deleteFav } = useFavorites()

  return (
    <div className="favorites">
      <header>
        <h1>Kedvenc filmek</h1>
      </header>
      <main>
        <ul>
          {favorites.length > 0 &&
            favorites.map((t: string, i: number) => (
              <li key={i}>
                {t} <a onClick={() => deleteFav(t)}>Törlés</a>
              </li>
            ))}
        </ul>
      </main>
    </div>
  )
}

export default Favorites