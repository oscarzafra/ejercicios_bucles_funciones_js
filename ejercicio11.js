const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  
  function averageMovieDuration(movies) {
        let totalDuration = 0;
      
        for (let i = 0; i < movies.length; i++) {
          totalDuration += movies[i].duration;
        }
      
        const averageDuration = totalDuration / movies.length;
        return averageDuration;
      }
      
      const averageDuration = averageMovieDuration(movies);
      console.log(`La duración media es de ${averageDuration} minutos.`);
  
  
  