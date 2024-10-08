import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Shared from './../../Shared/Shared'
import { useUser } from '@clerk/clerk-expo'
 
export default function MarkFav({pet}) {
    const {user} = useUser();
    const [favList, setFavList] = useState();
    useEffect(() => {
        user&&GetFav();
    }, [user])

    const GetFav = async () => {
        const result = await Shared.GetFavList(user);
        console.log(result);
        setFavList(result?.favorites?result?.favorites:[])
    }

    const AddToFav = async () => {
        const favResult = favList;
        favResult.push(pet.id);
        await Shared.UpdateFav(user, favResult);
        GetFav();
    }

  return (
    <View>
       {favList?.includes(pet.id)?
    <Pressable>
      <AntDesign name="heart" size={30} color="red" />
    </Pressable>:
    <Pressable onPress={()=>AddToFav()}>
      <AntDesign name="heart" size={30} color="gray" />
    </Pressable>}
    </View>
  )
}