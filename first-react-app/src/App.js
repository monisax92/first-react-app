// import { Component } from "react";
import { useState, useEffect } from "react";

import "./App.css";
import CardsList from "./components/cards-list/cards-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [people, setPeople] = useState([]);

  const createAvatarSrc = () => {
    //randomly generating people avatars
    const topTypeArr = [
      "NoHair",
      "Hat",
      "Hijab",
      "Turban",
      "WinterHat2",
      "LongHairBun",
      "LongHairCurly",
      "LongHairBigHair",
      "LongHairBob",
      "LongHairCurvy",
      "LongHairDreads",
      "LongHairFrida",
      "LongHairFro",
      "LongHairFroBand",
      "LongHairNotTooLong",
      "LongHairShavedSides",
      "LongHairMiaWallace",
      "LongHairStraight",
      "LongHairStraight2",
      "ShortHairDreads01",
      "ShortHairDreads02",
      "ShortHairFrizzle",
      "ShortHairShaggyMullet",
      "ShortHairShortCurly",
      "ShortHairShortFlat",
      "ShortHairShortRound",
      "ShortHairShortWaved",
      "ShortHairSides",
      "ShortHairTheCaesar",
      "ShortHairTheCaesarSidePart"
    ];
    const accessoriesTypeArr = [
      "Blank",
      "Sunglasses",
      "Kurt",
      "Prescription01",
      "Prescription02",
      "Round"
    ];
    const hairColorArr = [
      "Auburn",
      "Platinum",
      "Balck",
      "Blonde",
      "BlondeGolden",
      "Black",
      "PastelPink",
      "DarkBrown",
      "SilverGray",
      "Red"
    ];
    const clotheTypeArr = [
      "ShirtCrewNeck",
      "Hoodie",
      "BlazerShirt",
      "BlazerSweater",
      "CollarSweater",
      "GraphicShirt",
      "Overall",
      "ShirtScoopNeck",
      "ShirtVNeck"
    ];
    const clotheColorArr = [
      "Heather",
      "PastelGreen",
      "PastelBlue",
      "PastelRed",
      "PastelYellow",
      "Black",
      "Blue01",
      "Blue02",
      "Blue03",
      "Gray01",
      "Gray02",
      "Pink",
      "Red",
      "White"
    ];
    const eyeTypeArr = [
      "WinkWacky",
      "Default",
      "EyeRoll",
      "Happy",
      "Side",
      "Squint",
      "Surprised",
      "Wink"
    ];
    const eyebrowTypeArr = [
      "SadConcerned",
      "Default",
      "DefaultNatural",
      "FlatNatural",
      "RaisedExcited",
      "UpDown",
      "UpDownNatural"
    ];
    const mouthTypeArr = ["Smile", "Default", "Serious", "Twinkle"];
    const skinColorArr = ["Pale", "Light", "Brown", "DarkBrown", "Black"];

    const generateRandom = arr => Math.floor(Math.random() * arr.length);

    const randomTopType = generateRandom(topTypeArr);
    const randomAccessoriesType = generateRandom(accessoriesTypeArr);
    const randomHairColor = generateRandom(hairColorArr);
    const randomClotheType = generateRandom(clotheTypeArr);
    const randomClotheColor = generateRandom(clotheColorArr);
    const randomEyeType = generateRandom(eyeTypeArr);
    const randomEyebrowType = generateRandom(eyebrowTypeArr);
    const randomMouthType = generateRandom(mouthTypeArr);
    const randomSkinColor = generateRandom(skinColorArr);

    return `https://avataaars.io/?avatarStyle=Transparent&topType=${topTypeArr[randomTopType]}&accessoriesType=${accessoriesTypeArr[randomAccessoriesType]}&hairColor=${hairColorArr[randomHairColor]}&facialHairType=Blank&clotheType=${clotheTypeArr[randomClotheType]}&clotheColor=${clotheColorArr[randomClotheColor]}&eyeType=${eyeTypeArr[randomEyeType]}&eyebrowType=${eyebrowTypeArr[randomEyebrowType]}&mouthType=${mouthTypeArr[randomMouthType]}&skinColor=${skinColorArr[randomSkinColor]}`;
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(users => {
        //adding random image src for every person
        let usersWithAvatars = users.map(person => ({
          ...person,
          avatarSrc: createAvatarSrc()
        }));

        setPeople(usersWithAvatars);
      });
  }, []);

  const onSearchChange = e => {
    const textInSearchField = e.target.value.toLowerCase();
    setSearchField(textInSearchField);
  };

  const selectedPeople = people.filter(person => {
    return person.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Avatars search</h1>

      <SearchBox
        className="search-box-people"
        placeholder="Search the name..."
        onChangeHandler={onSearchChange}
      />

      <CardsList listToDisplay={selectedPeople} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       people: [], //initial (empty) state
//       searchField: ""
//     };
//   }

//   createAvatarSrc = () => {
//     console.log("creating avatar");

//     //randomly generating people avatars
//     const topTypeArr = [
//       "NoHair",
//       "Hat",
//       "Hijab",
//       "Turban",
//       "WinterHat2",
//       "LongHairBun",
//       "LongHairCurly",
//       "LongHairBigHair",
//       "LongHairBob",
//       "LongHairCurvy",
//       "LongHairDreads",
//       "LongHairFrida",
//       "LongHairFro",
//       "LongHairFroBand",
//       "LongHairNotTooLong",
//       "LongHairShavedSides",
//       "LongHairMiaWallace",
//       "LongHairStraight",
//       "LongHairStraight2",
//       "ShortHairDreads01",
//       "ShortHairDreads02",
//       "ShortHairFrizzle",
//       "ShortHairShaggyMullet",
//       "ShortHairShortCurly",
//       "ShortHairShortFlat",
//       "ShortHairShortRound",
//       "ShortHairShortWaved",
//       "ShortHairSides",
//       "ShortHairTheCaesar",
//       "ShortHairTheCaesarSidePart"
//     ];
//     const accessoriesTypeArr = [
//       "Blank",
//       "Sunglasses",
//       "Kurt",
//       "Prescription01",
//       "Prescription02",
//       "Round"
//     ];
//     const hairColorArr = [
//       "Auburn",
//       "Platinum",
//       "Balck",
//       "Blonde",
//       "BlondeGolden",
//       "Black",
//       "PastelPink",
//       "DarkBrown",
//       "SilverGray",
//       "Red"
//     ];
//     const clotheTypeArr = [
//       "ShirtCrewNeck",
//       "Hoodie",
//       "BlazerShirt",
//       "BlazerSweater",
//       "CollarSweater",
//       "GraphicShirt",
//       "Overall",
//       "ShirtScoopNeck",
//       "ShirtVNeck"
//     ];
//     const clotheColorArr = [
//       "Heather",
//       "PastelGreen",
//       "PastelBlue",
//       "PastelRed",
//       "PastelYellow",
//       "Black",
//       "Blue01",
//       "Blue02",
//       "Blue03",
//       "Gray01",
//       "Gray02",
//       "Pink",
//       "Red",
//       "White"
//     ];
//     const eyeTypeArr = [
//       "WinkWacky",
//       "Default",
//       "EyeRoll",
//       "Happy",
//       "Side",
//       "Squint",
//       "Surprised",
//       "Wink"
//     ];
//     const eyebrowTypeArr = [
//       "SadConcerned",
//       "Default",
//       "DefaultNatural",
//       "FlatNatural",
//       "RaisedExcited",
//       "UpDown",
//       "UpDownNatural"
//     ];
//     const mouthTypeArr = ["Smile", "Default", "Serious", "Twinkle"];
//     const skinColorArr = ["Pale", "Light", "Brown", "DarkBrown", "Black"];

//     const generateRandom = arr => Math.floor(Math.random() * arr.length);

//     const randomTopType = generateRandom(topTypeArr);
//     const randomAccessoriesType = generateRandom(accessoriesTypeArr);
//     const randomHairColor = generateRandom(hairColorArr);
//     const randomClotheType = generateRandom(clotheTypeArr);
//     const randomClotheColor = generateRandom(clotheColorArr);
//     const randomEyeType = generateRandom(eyeTypeArr);
//     const randomEyebrowType = generateRandom(eyebrowTypeArr);
//     const randomMouthType = generateRandom(mouthTypeArr);
//     const randomSkinColor = generateRandom(skinColorArr);

//     // console.log(
//     //   topTypeArr[randomTopType],
//     //   accessoriesTypeArr[randomAccessoriesType],
//     //   hairColorArr[randomHairColor],
//     //   clotheTypeArr[randomClotheType]
//     // );

//     return `https://avataaars.io/?avatarStyle=Transparent&topType=${topTypeArr[randomTopType]}&accessoriesType=${accessoriesTypeArr[randomAccessoriesType]}&hairColor=${hairColorArr[randomHairColor]}&facialHairType=Blank&clotheType=${clotheTypeArr[randomClotheType]}&clotheColor=${clotheColorArr[randomClotheColor]}&eyeType=${eyeTypeArr[randomEyeType]}&eyebrowType=${eyebrowTypeArr[randomEyebrowType]}&mouthType=${mouthTypeArr[randomMouthType]}&skinColor=${skinColorArr[randomSkinColor]}`;
//   };

//   componentDidMount() {
//     // console.log("fetching data");

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(resp => resp.json())
//       // .then(users => {
//       //   this.setState(() => (this.state = { people: users }));
//       // })
//       .then(users => {
//         let usersWithAvatars = users.map(person => ({
//           ...person,
//           avatarSrc: this.createAvatarSrc()
//         }));

//         this.setState(
//           () =>
//             (this.state = {
//               people: usersWithAvatars
//             })
//           //   ,
//           // () => console.log("fetching", this.state.people)
//         );
//       });
//   }

//   updateSearchField = e => {
//     this.setState(() => {
//       return {
//         searchField: e.target.value.toLowerCase()
//       };
//     });
//   };

//   render() {
//     console.log("rendering app");

//     const { people, searchField } = this.state;
//     const { updateSearchField } = this;

//     const selectedPeople = people.filter(person => {
//       return person.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Avatars search</h1>
//         <SearchBox
//           className="search-box-people"
//           placeholder="Search the name..."
//           onChangeHandler={updateSearchField}
//         />

//         <CardsList listToDisplay={selectedPeople} />
//       </div>
//     );
//   }
// }

export default App;
