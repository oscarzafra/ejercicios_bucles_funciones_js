const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    for (let i = 0; i < mutants.length; i++) {
        if (mutants[i].power === power) {
          return `${power} poder encontrado! ${mutants[i].name} tiene este poder.`;
        }
      }
      return `${power} no se ha encontrado el poder entre los mutantes.`;
    }
    
    console.log(findMutantByPower(mutants, 'telekinesis')); 
    console.log(findMutantByPower(mutants, 'invisibility')); 
  
