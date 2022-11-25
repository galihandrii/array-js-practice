const NFTStore = {
    artPieces: [
      {
        pieceName: "Emo Flamingos",
        price: 30,
        ownerList: [
          {
            name: "Fida Ernest",
            userID: 23849,
            purchaseDate: "09/13/2021",
          },
          {
            name: "Eric Karger",
            userID: 23510,
            purchaseDate: "09/14/2021",
          },
        ],
      },
      {
        pieceName: "Where is my bit wallet",
        price: 100,
        ownerList: [],
      },
    ],
    storeCredits: 1000,
  };

  // ambil purchase date eric karger
console.log(NFTStore.artPieces[0].ownerList[1].purchaseDate);

//isi ownerlist wheres my bit wallet
NFTStore.artPieces[1].ownerList = ["dadang",'dudung'];
console.log(NFTStore);
console.log(NFTStore.artPieces[1].ownerList);

//console ownerlist ema flamingos
console.log(NFTStore.artPieces[0].ownerList);