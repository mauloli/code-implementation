const divide = (num) => {
    let arr = num.toString().split("0")
    let hasil = []


    arr.map((item) => {
        let newArr = [...item]
        console.log(newArr)
        newArr = newArr.sort()

        hasil.push(newArr)
    })
    console.log(hasil)
    hasil = hasil.join().replaceAll(",", "")
    console.log(parseInt(hasil))

}


divide(43565807346096)

// var a = 120343434232
// const b = a.toString()
// console.log(b)