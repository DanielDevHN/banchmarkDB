import db from './firebaseConfig';
import { DocumentData, collection, getDocs } from 'firebase/firestore';

/**
 * Prueba la conexión a Firestore intentando leer un documento específico.
 * Retorna un objeto con la data del documento o un mensaje de error.
 */
export const testFirestoreConnection = async (): Promise<{ success: boolean; data?: DocumentData; message?: string }> => {
  try {
    const queryDoc = await getDocs(collection(db, 'users'));
    queryDoc.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
    });
    console.info('Conexión a Firestore exitosa');
    return { success: true, data: queryDoc.docs[0].data() };
  } catch (error) {
    console.error('Error al conectar a Firestore:', error);
    return { success: false, message: 'Error al conectar a Firestore' };
  }
};
