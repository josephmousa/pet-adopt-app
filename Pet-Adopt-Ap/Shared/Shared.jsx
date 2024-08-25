import { getDoc } from 'firebase/firestore'
import { db } from './../config/FirebaseConfig'

GetFavList=async(user)=>{
    const docSnap = await getDoc(doc(db, 'UserFavPet', user?.primaryEmailAddress?.emailAddress))
    if (docSnap?.exists()) {
        return docSnap.data();
    }
    else {
        await setDoc(doc(db, 'UserFavoritePet', user?.primaryEmailAddress?.emailAddress), {
            email: user?.primaryEmailAddress?.emailAddress,
            favoorites: []
        })
    }
}

export default {
    GetFavList
}