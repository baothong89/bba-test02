// tạo mảng 1-100
const poneglyph=[];
for(let i = 1; i <= 100; i++){
    poneglyph.push(i);
};
let laughTale = 0;
for(let i = 1; i <= poneglyph.length; i++){
    for (let j = i; j <= poneglyph.length; j++){
        if((i*j)%19 === 0){
            console.log(`Cặp (${i},${j}) là 1 cặp Laugh Tale `);
            laughTale++;
        };
    };
};
console.log(`Tổng số cặp  Laugh Tale là: ${laughTale} `);
