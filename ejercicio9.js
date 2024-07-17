const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
    let oldestMember = xMen[0];

    for(let i = 1; i < xMen.length; i++) {
        if (xMen[i].year < oldestMember.year) {
            oldestMember = xMen[i];
        }
    }
    return oldestMember;
  }

  const oldestxMen = findOldestXMen(xMen);
  console.log(`El miembro más antiguo de los X-Men es ${oldestxMen.name}, que apareció en ${oldestxMen.year}.`)

  
  
  