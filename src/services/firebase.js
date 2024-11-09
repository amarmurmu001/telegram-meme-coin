import { db } from '../config/firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  query, 
  where, 
  getDocs,
  orderBy 
} from 'firebase/firestore';

// Users Collection
export const usersRef = collection(db, 'users');

// Create or update user
export const saveUser = async (userId, userData) => {
  const userRef = doc(usersRef, userId);
  await setDoc(userRef, userData, { merge: true });
};

// Get user data
export const getUser = async (userId) => {
  const userRef = doc(usersRef, userId);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
};

// Update user balance
export const updateUserBalance = async (userId, newBalance) => {
  const userRef = doc(usersRef, userId);
  await updateDoc(userRef, { balance: newBalance });
};

// Get leaderboard
export const getLeaderboard = async () => {
  const q = query(usersRef, orderBy('balance', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get user's friends
export const getUserFriends = async (userId) => {
  const q = query(
    collection(db, 'friends'),
    where('userId', '==', userId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

// Add friend
export const addFriend = async (userId, friendId) => {
  const friendRef = doc(collection(db, 'friends'));
  await setDoc(friendRef, {
    userId,
    friendId,
    createdAt: new Date().toISOString()
  });
}; 