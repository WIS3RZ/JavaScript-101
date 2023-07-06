const satuan = 'cm';
const orang = {
    'nama': 'Gunahar Wisers',
    'usia': '20',
    'height' : `170 ${satuan}`,
    'ucapkan': function(benda="..."){
        console.log(`Halo, saya ingin ${benda}`);
    },
    berbincang(dengan="..."){
        console.log(`Saya berbicara dengan ${dengan}`)
    }
}
console.log(orang.nama);
orang.ucapkan("suntik benda ini ke dunia penuh kekerasan");
orang.berbincang("Alex Baena");