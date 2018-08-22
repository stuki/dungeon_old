import fetchival from 'fetchival';

// const baseurl = "http://rem-rest-api.herokuapp.com/api/users";

const baseurl = "https://dungeon-api20180821104258.azurewebsites.net/";

// function haeTapahtumaLista(callback) {
//     fetch(baseurl)
//         .then(function (response) {
//             if (!response.ok) {
//                 const errviesti = {
//                     status: response.status,
//                     statusText: response.statusText,
//                     viesti: "Listanhaku"
//                 };
//                 throw errviesti;
//             }
//             return response.json()
//         })
//         .then(function (lista) {
//             callback(lista);
//         });
// }

// export function luoEvent(event, callback) {
//     return fetch(baseurl, {

//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(event)
//     })

//         .then(function (response) {
//             callback(response.status);
//         });
// }

// function poistaEvent(id) {

//     return fetch(baseurl + "?id=" + id, {

//         method: 'DELETE',
//     });
// }

// function haeKayttajaLista(callback) {
//     fetch(baseurlUser)
//         .then(function (response) {
//             if (!response.ok) {
//                 const errviesti = {
//                     status: response.status,
//                     statusText: response.statusText,
//                     viesti: "Listanhaku"
//                 };
//                 throw errviesti;
//             }
//             return response.json()
//         })
//         .then(function (lista) {
//             callback(lista);
//         });
// }

// export function luoKayttaja(event) {
//     return fetch(baseurlUser, {

//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(event)
//     });
        
// }

// function poistaKayttaja(id) {

//     return fetch(baseurlUser + "?id=" + id, {
//         method: 'DELETE',
//     });
// }
// playerName

async function getUser(name) {
    var players = fetchival(baseurl + "api/players/" + name);
    const playerName = await players.get();
    // var player = (kyrb['data'].find(a => a.firstName === name));
    console.log(playerName);
    // find(a => a.firstName === name));

    // { name: 'cherries', quantity: 5 }
    // fetch("api/players", {
    //     method: 'GET',
    // })

    //     .then(function (response) {
    //         if (!response.ok) {
    //             alert("An error occured");
    //             const errMessage = {
    //                 status: response.status,
    //                 statusText: response.statusText,
    //                 message: "Player search"
    //             };
    //             throw errMessage;
    //         }
    //         return response.json()
    //     })
        // .then(function (olio) {
        //     if (olio.pw === password) {
                
        //         //VIIME HETKEN MUUTOS
        //         console.log("Täsmää!");
        //         cb(olio);
        //     }
        //     else {
        //         console.log("Ei täsmää");
        //         alert("Virheellinen salasana tai sähköpostioisoite");
        //     }
        // });

}

export { getUser }


