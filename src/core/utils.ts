

export function randIndex(length: number): number {

    return(Math.floor(Math.random() * length));
}


export function gnomeSort(arr: number[]): number[] {
    let pos: number = 0;
    let temp: number[] = arr;

    while(pos < temp.length) {
        
        if(pos === 0 || temp[pos] >= temp[pos-1]) {

            pos += 1;

        } else {
            //swapping pos-1 with pos
            let buffer = temp[pos];
            temp[pos] = temp[pos-1];
            temp[pos-1] = buffer;

            pos -= 1;
        }
    }

    return temp;
}