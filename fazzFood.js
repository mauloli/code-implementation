function fazzfood(harga, voucher, jarak, pajak) {
    let hargaDisc;
    let arr = []
    let hargaJarak = 0
    let hargaPajak = 0
    let subTotal

    if (voucher == 'DITRAKTIR60') {                       //cek harga 
        if (harga >= 25000) {
            hargaDisc = harga * 60 / 100
            if (hargaDisc > 30000) {
                hargaDisc = 30000
            }

        } else {
            hargaDisc = 0
        }
    } else if (voucher == 'FAZFOOD50') {                       //cek harga 
        if (harga >= 50000) {
            hargaDisc = harga * 50 / 100
            if (hargaDisc > 50000) {
                hargaDisc = 50000
            }

        } else {
            hargaDisc = 0
        }
    } else {
        hargaDisc = 0
    }



    for (let i = 0; i < jarak; i++) {
        if (i <= 1) {
            arr.push(5000)
        } else {
            arr.push(3000)
        }
        hargaJarak += arr[i]
    }

    if (pajak) {
        hargaPajak = harga * 5 / 100
    } else {
        hargaPajak = 0
    }
    subTotal = harga - hargaDisc + hargaJarak + hargaPajak

    console.log(`
    harga : ${harga} 
    potongan : ${hargaDisc} 
    biaya antar : ${hargaJarak} 
    pajak : ${hargaPajak}
    subTotal: ${subTotal}
    `)

}

fazzfood(20000, 'DITRAKTIR60', 12, false)