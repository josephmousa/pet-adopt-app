import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react'
import {db} from './../../config/FirebaseConfig'
import Colors from './../../constants/Colors'

export default function Category({category}) {
    
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Dogs');
    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        setCategoryList([])
        const snapshot = await getDocs(collection(db,'Category'));
        snapshot.forEach((doc) => {
            setCategoryList(categoryList=>[...categoryList,doc.data()])
        })

    }

  return (
    <View style={{
        marginTop: 20,
    }}>
      <Text style={{
        fontFamily: 'outfit-medium',
        fontSize: 20,
      }}>Category</Text>

      <FlatList data={categoryList}
                numColumns={4}
                renderItem={({item, index}) => (
                    <TouchableOpacity 
                    onPress={()=>{
                        setSelectedCategory(item.name)
                        category(item.name)
                    }}
                    style={{
                        flex:1
                    }}>
                        <View style={[styles.container, selectedCategory==item.name&&styles.selectedCategoryContainer]}>
                            <Image source={{uri:item?.imageUrl}}
                                    style={{
                                        width:40,
                                        height:40,
                                    }}>

                            </Image>
                        </View>
                        <Text style={{
                            textAlign:'center',
                            fontFamily:'outfit',
                        }}>{item?.name}</Text>
                    </TouchableOpacity>
                )}>

      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       backgroundColor:Colors.LIGHT_PRIMARY,
       padding:15,
       alignItems:'center',
       borderWidth:1,
       borderRadius:15,
       borderColor:Colors.PRIMARY,
       margin:5
    },
    selectedCategoryContainer:{
        backgroundColor:Colors.SECONDARY,
        borderColor:Colors.SECONDARY,
    }
})