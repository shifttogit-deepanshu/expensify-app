import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()

  export {firebase,database as default}
//   firebase.database().ref().set({
//       name:"Deepanshu",
//       age:19,
//       stressLevel:6,
//       job:{
//           title:'Google',
//           company:'US'
//       },
//       location:{
//           city:'Gurugram',
//           Country:'India'
//       },
//       isSingle:true
//   })


// //   firebase.database().ref('attributes').set({
// //       height:190,
// //       weight:85
// //   })

// //   firebase.database().ref('location/Country').set('United States')

// //   firebase.database().ref('isSingle').remove().then(()=>{
// //       console.log("data removed")
// //   }).catch((e)=>{
// //       console.log("removing failed", e)
// //   })

// firebase.database().ref().update({
//     stressLevel:9,
//     'job/company':'Amazon',
//     'location/city':"seattle"

// }
// ).then(()=>{
//     console.log("valuesupdated")
// }).catch((e)=>{
//     console.log(e)
// })

// firebase.database().ref().once('value')
// .then((snapshot)=>{
//     console.log(snapshot.val())
// })

// const valChange = firebase.database().ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// })
// setTimeout(()=>{
//     firebase.database().ref().update({
//         age:10
//     })
// },3000)
// setTimeout(()=>{
//     firebase.database().ref().update({
//         age:11
//     })
// },6000)
// setTimeout(()=>{
//     firebase.database().ref().update({
//         age:12
//     })
// },9000)
// setTimeout(()=>{
//     firebase.database().ref().off('value',valChange)
// },10000)

// setTimeout(()=>{
//     firebase.database().ref().update({
//         age:115
//     })
// },11000)


// database.ref('expenses').push({
//     description:'desc11',
//     name:'deepanshu',
//     amount:10000,
//     createdAt:100
// })



// database.ref('expenses').push({
//     description:'desc22',
//     name:'notesdkfndslfksd',
//     amount:40044530,
//     createdAt:2343240
// })


// database.ref('expenses').push({
//     description:'sdfdsf',
//     name:'dsfsf',
//     amount:342340,
//     createdAt:12313450
// })

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.val())
// })