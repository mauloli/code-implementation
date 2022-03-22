
const palindrom = (kalimat) => {
    let newArr = []
    let arr = kalimat.split('')
    if (kalimat.length > 2) {
        for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
            newArr[i] = arr[j]
        }
        hasil = newArr.join()
        if (arr.join() == newArr.join()) {
            console.log('palindrom')
        } else {
            console.log('bukan palindrom')
        }
    } else {
        console.log('masukan lebih dr 2 huruf')
    }
}


palindrom('malamm')
