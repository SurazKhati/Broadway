//write a js program using any loop to print first twenty even number
/**for(i=0;i<=40;i++){
    if(i%2==0){
        console.log(i);
    }
}
 */


 /**for(i=5;i>=1;i--){
    let toPrint = ""
    for(let j=1; j<=i;j++){
        toPrint += j+'   ';
    }
    console.log(toPrint)
}

//HW
/**
 * p
 * P R
 * P R O
 * P R O G
 * P R O G R
 * P R O G R A
 * P R O G R A M
 * P R O G R A M M
 * P R O G R A M M I
 * P R O G R A M M I N
 * P R O G R A M M I N G
 */

/**
 * 1 1 1 1 1
 * 2       2
 * 3       3
 * 4       4
 * 5       5
 * 6 6 6 6 6
 * 7
 * 8
 * 9
 */

for(let elem of allUsersObj){
    if(elem && (elem.hasOwnProperty('name') && elem.hasOwnProperty('email') && elem.hasOwnProperty('address') &&elem.hasOwnProperty('phone')) ){
        console.log(`------${elem.name}----`)
        console.log("Name:",elem.name)
        console.log("Name:",elem.email)
        console.log("Name:",elem.address)
        console.log("Name:",elem.phone)
        console.log("--------------")
    }
}