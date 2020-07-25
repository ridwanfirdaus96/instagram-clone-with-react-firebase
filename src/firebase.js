import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDD8kPioI1C4rSGTkdQsm39JaOqWo-qi_c',
  authDomain: 'instagram-clone-14b70.firebaseapp.com',
  databaseURL: 'https://instagram-clone-14b70.firebaseio.com',
  projectId: 'instagram-clone-14b70',
  storageBucket: 'instagram-clone-14b70.appspot.com',
  messagingSenderId: '76272687604',
  appId: '1:76272687604:web:e668b5ec9d735f251481a1',
  measurementId: 'G-E33GCCLST2'
})

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }

export default firebaseApp
