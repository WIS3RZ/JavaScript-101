function tambahNomor(namaAnda,...nomor){
    let total = 0;
    for(index in nomor){
        total = total + nomor[index];
    }
    return `${namaAnda}, hasil yang Anda input adalah ${total}`;
}
const totalBaru = tambahNomor("WSRZ", 1,3,5,7);
console.log(totalBaru);