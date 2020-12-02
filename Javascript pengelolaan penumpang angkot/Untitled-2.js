var penumpang = ['dendi', 'rda', undefined];
var tambahpenumpang = function (nama, penumpang) {
    if (penumpang.length === 0) {
        penumpang.push(nama);
    } else if (penumpang.some(name => name === nama)) {
        console.log('sudah ada penumpang dengan nama yang sama');
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === undefined) {
                penumpang[i] = nama;
                break;
            } else if (penumpang.length - 1 == i) {
                penumpang.push(nama);
            }
        }
    }
    return penumpang;
}
var hapuspenumpang = function (nama, penumpang) {
    if (penumpang.some(name => name === nama)) {
        return newPenumpang = penumpang.map(function (e, i) {
            if (e == nama) {
                penumpang[i] = undefined;
            }
            return penumpang[i];
        })
    } else {
        console.log("tidak ada penumpang dengan nama tersebut");
        return penumpang;
    }

}
