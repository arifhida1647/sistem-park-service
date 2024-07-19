const { getFirestore, updateDoc, doc, collection, getDocs } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaFVN-iOAyXI7SAgE5_9Vv7WXLZA8qlfs",
  authDomain: "test-233ed.firebaseapp.com",
  databaseURL: "https://test-233ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-233ed",
  storageBucket: "test-233ed.appspot.com",
  messagingSenderId: "77536234251",
  appId: "1:77536234251:web:729f72db340720b453b00e",
  measurementId: "G-VPTGFL682H"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Function to update status in Firestore
async function updateStatusIot(docId, status) {
  const db = getFirestore(firebaseApp);
  const docRef = doc(db, 'iotData', docId);

  try {
    await updateDoc(docRef, {
      status: status
    });
    console.log(`Document ${docId} updated successfully.`);
    return true;
  } catch (error) {
    console.error('Error updating document:', error);
    return false;
  }
}
async function updateStatusCam(docId, status) {
  const db = getFirestore(firebaseApp);
  const docRef = doc(db, 'camData', docId);

  try {
    await updateDoc(docRef, {
      status: status
    });
    console.log(`Document ${docId} updated successfully.`);
    return true;
  } catch (error) {
    console.error('Error updating document:', error);
    return false;
  }
}
async function fetchAllCamData() {
  const db = getFirestore(firebaseApp);
  const camDataCollection = collection(db, 'camData');

  try {
    const querySnapshot = await getDocs(camDataCollection);
    const camData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Sorting the iotData by id (assuming id is a number)
    const sortedcamData = camData.sort((a, b) => a.id - b.id);

    console.log('IotData:', sortedcamData);
    return sortedcamData;
  } catch (error) {
    console.error('Error fetching iotData:', error);
    return [];
  }
}
// Function to fetch all data from iotData collection
async function fetchAllIotData() {
  const db = getFirestore(firebaseApp);
  const iotDataCollection = collection(db, 'iotData');

  try {
    const querySnapshot = await getDocs(iotDataCollection);
    const iotData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Sorting the iotData by id (assuming id is a number)
    const sortedIotData = iotData.sort((a, b) => a.id - b.id);

    console.log('IotData:', sortedIotData);
    return sortedIotData;
  } catch (error) {
    console.error('Error fetching iotData:', error);
    return [];
  }
}
module.exports = {
  updateStatusIot,
  updateStatusCam,
  fetchAllCamData,
  fetchAllIotData
};
