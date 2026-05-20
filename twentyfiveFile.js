const movie = {
    title: 'os cagados e ralados',
    realesedate: '2067',
    cast: ['kid', 'Martin', 'Lialvan'],
    watched: true,
    description: function () {
        console.log(`
Title: ${this.title}
Release year: ${this.realesedate}
Cast:`)

        for (let actor of this.cast) {
            console.log(`- ${actor}`)
        }

        if (this.watched) {
            console.log('Watched: Yes')
        } else {
            console.log('Watched: No')
        }
    }

}
movie.cast[0] = 'Xuxa'
movie.characters = ['Kid buu', 'Pablo', 'jorginho']
movie.description()

function activation() {
    for (let actor of movie.cast)
        for (let character of movie.characters)
            console.log(`${actor}:${character}, `)
}

activation()