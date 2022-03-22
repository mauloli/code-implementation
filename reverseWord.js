function reverseWord(kata) {
    let arr = kata.split(' ')
    if (arr.length > 1) {
        arr.reverse()
        console.log(arr)
    } else {
        console.log('masukan lebih dari 1 kata')
    }
}
reverseWord('saya belajar javascript')