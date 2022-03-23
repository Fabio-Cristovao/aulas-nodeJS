// function StockQuoteGenerator(symbol) {
//     this.symbol = symbol;
//     console.log(this.symbol);

//     setInterval(function() {
//         console.log('The price of', this.symbol, 'is', (Math.random() * 100).toFixed(2))
//     }, 1000);
// }

// function StockQuoteGenerator(symbol) {
//     this.symbol = symbol;
//     console.log(this.symbol);

//     const that = this;

//     setInterval(function() {
//         console.log('The price of', that.symbol, 'is', (Math.random() * 100).toFixed(2))
//     }, 1000);
// }

// function StockQuoteGenerator(symbol) {
//     this.symbol = symbol;
//     console.log(this.symbol);

//     setInterval(() =>
//         console.log('The price of', this.symbol, 'is', (Math.random() * 100).toFixed(2)), 
//         1000
//     );
// }

// const sqg = new StockQuoteGenerator('IBM');

const jukebox = {
    songs: [
        { title: 'Song A', artist: 'Artist A'},
        { title: 'Song B', artist: 'Artist B'},
    ],
    printSong: function (song) {
        console.log(`${song.artist} - ${song.title}`);
    }, 
    // printSongs: function() {
    //     this.songs.forEach(function (song) {
    //         this.printSong(song);
    //     }.bind(this));
    // }
    printSongs: function() {
        this.songs.forEach((song) => this.printSong(song));
    }
};

jukebox.printSongs();