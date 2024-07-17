const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
  ];
  
for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const artistName = artist.name;
    const influences = artist.influences;

    for (let j = 0; j < influences.length; j++) {
        console.log(`${artistName} is influenced by ${influences[j]}`)
    }
}
  