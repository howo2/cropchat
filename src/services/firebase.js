import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDaAXj1aWwctsIZp--e6BD0YBvHtiIEQlo',
  authDomain: 'vue-test-6124e.firebaseapp.com',
  databaseURL: 'https://vue-test-6124e.firebaseio.com',
  projectId: 'vue-test-6124e',
  storageBucket: 'vue-test-6124e.appspot.com',
  messagingSenderId: '635136045499'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
