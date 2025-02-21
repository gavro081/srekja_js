import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const reservationsCollection = collection(db, 'reservations');

export const addReservation = async (tableId, date, startTime, endTime, placeIsTerrace) => {
    try {
        await addDoc(reservationsCollection, {
            tableId,
            date,
            startTime,
            endTime,
            placeIsTerrace,
        });
    } catch (error) {
        console.error('Error adding reservation: ', error);
    }
};

export const getReservations = async (date) => {
    const q = query(reservationsCollection, where('date', '==', date));
    const querySnapshot = await getDocs(q);
    const reservations = [];
    querySnapshot.forEach((doc) => {
        reservations.push({ id: doc.id, ...doc.data() });
    });
    return reservations;
};