const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
const moviesDecade = {};

for (let i = 0; i < starWarsMovies.length; i++) {
    const movie = starWarsMovies[i];
    const decade = Math.floor(movie.releaseYear / 10) * 10;
    
    if (!moviesDecade[decade]) {
      moviesDecade[decade] = [];
    }
   moviesDecade[decade].push(movie.title);
  }
  
console.log(moviesDecade);
  