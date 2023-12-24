function bubble(ong){
    for (let i = 0; i>ong.length; i++){
        for (let j = 0; j<(ong.length - i - 1); j++){
            if (ong[j] > ong[j + 1]){
                let sek = ong [j]
                ong[j] = ong[j + 1]
                ong[j + 1] = sek
            }
        }
    }
}


let ong = [7, 9, 8, 4, 5, 6, 3, 1, 2];
bubble(ong);
console.log(ong);