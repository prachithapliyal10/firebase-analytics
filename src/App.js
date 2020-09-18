import React from "react";
import firebase from "firebase/app";
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCzbBQAfG61QbPsnA5mT6VTKYpDK9SEPMo",
  authDomain: "fir-analytics-ebe1d.firebaseapp.com",
  databaseURL: "https://fir-analytics-ebe1d.firebaseio.com",
  projectId: "fir-analytics-ebe1d",
  storageBucket: "fir-analytics-ebe1d.appspot.com",
  messagingSenderId: "649300400966",
  appId: "1:649300400966:web:d24a64f058455600782347",
  measurementId: "G-G019B82KEC"
};
  
function App() {
  firebase.initializeApp(firebaseConfig);

  let item_jeggings = {
    item_id: 'SKU_123',
    item_name: 'jeggings',
    item_category: 'pants',
    item_variant: 'black',
    item_brand: 'Google',
    price: 9.99
  };

  let item_boots = {
    item_id: 'SKU_456',
    item_name: 'boots',
    item_category: 'shoes',
    item_variant: 'brown',
    item_brand: 'Google',
    price: 24.99
  };

  let item_socks = {
    item_id: 'SKU_789',
    item_name: 'ankle_socks',
    item_category: 'socks',
    item_variant: 'red',
    item_brand: 'Google',
    price: 5.99
  };

  const params1 = {
    item_list_id: 'L001',
    item_list_name: 'Related products1',
    items: [item_jeggings]
  };

  const params2 = {
    item_list_id: 'L002',
    item_list_name: 'Related products2',
    items: [item_boots, item_socks]
  };

  return (
    <div className="App">
      <button onClick={() => firebase.analytics().logEvent(firebase.analytics.EventName.VIEW_ITEM_LIST, params1)}>Button1</button>
      <button onClick={() => firebase.analytics().logEvent(firebase.analytics.EventName.VIEW_ITEM_LIST, params2)}>Button2</button>
    </div>
  );
}

export default App;
