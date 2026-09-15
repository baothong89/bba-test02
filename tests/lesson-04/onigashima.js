// Bài 1: tạo hàm upgradeCrew

// Tạo danh sách hải tặc thất vũ hải 
const pirates =[
    {name:"Boa Hancock",bounty:4000000, strength: 10000},
    {name:"Jinbe",bounty:2200000, strength: 1300},
    {name:"Mihawk",bounty:14000000, strength: 1300},
    {name:"Doflamingo",bounty:12200000, strength: 200},
    {name:"Kuma",bounty:4420000, strength: 200},
    {name:"Moria",bounty:22200000, strength: 200},
    {name:"Crocodile",bounty:4230000, strength: 200},
];

// Hàm awakenedPirates tăng sức mạnh và tiền thưởng của hải tặc 
const awakenedPirates = pirates.map((pirate) => ( {
    nameUpperCase: pirate.name.toUpperCase(),
    newBounty: pirate.bounty*2, 
    newStrenght: pirate.strength*1.5
}));
    
// Filter ra hải tặc có sức mạnh > 500
const monsterTrioCandidates = awakenedPirates.filter( awakenedPirate => awakenedPirate.newStrenght > 500 );

// Bài 2: tạo hàm printBountyLeaderBoard

const leaderBoard = [
    {name:"Zoro", bounty: 12312323 },
    {name:"Luffy", bounty: 412312123 },
    {name:"Nami", bounty: 123233 },
    {name:"Sanji", bounty: 23123123 },
    {name:"Usopp", bounty: 23123 },
    {name:"Chopper", bounty: 123123 },
    {name:"Robin", bounty: 123123 },
    {name:"Franky", bounty: 543123 },
    {name:"Brook", bounty: 55123 },
];
leaderBoard.sort((a,b) => b.bounty - a.bounty);

const medals = ["🥇", "🥈", "🥉"];

for(let i = 0; i < leaderBoard.length; i++){
    if (i===0){
        console.log(`${medals[0]} ${i+1}. ${leaderBoard[i].name} - ${leaderBoard[i].bounty} berries`)
    }else if(i===1){
        console.log(`${medals[1]} ${i+1}. ${leaderBoard[i].name} - ${leaderBoard[i].bounty} berries`)
    }else if(i===2){
        console.log(`${medals[2]} ${i+1}. ${leaderBoard[i].name} - ${leaderBoard[i].bounty} berries`)
    }else {
        console.log(`${i+1}. ${leaderBoard[i].name} - ${leaderBoard[i].bounty} berries`)
    }
}

//Cách 2 dùng forEach với array

function newLeaderboard(){
    leaderBoard.forEach( (leaderBoard,i) => {
        if (i===0){
        console.log(`🥇 ${i+1}. ${leaderBoard.name} - ${leaderBoard.bounty} berries`)
    }else if(i===1){
        console.log(`🥈 ${i+1}. ${leaderBoard.name} - ${leaderBoard.bounty} berries`)
    }else if(i===2){
        console.log(`🥉 ${i+1}. ${leaderBoard.name} - ${leaderBoard.bounty} berries`)
    }else {
        console.log(`${i+1}. ${leaderBoard.name} - ${leaderBoard.bounty} berries`)
    }
    });
};
newLeaderboard();



