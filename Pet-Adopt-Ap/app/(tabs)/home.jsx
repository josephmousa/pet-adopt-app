import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import PetListByCategory from '../../components/Home/PetListByCategory'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors'

export default function Home() {
  return (
    <View style={{
      padding:20,
      marginTop:20,
    }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Header></Header>
      {/* Slider */}
      <Slider></Slider>
      {/* Category */}
      <PetListByCategory></PetListByCategory>
      {/* List of Pets */}

      {/* Add new Pet option */}
      <TouchableOpacity style={styles.addNewPetContainer}>
        <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
        <Text style={{
          fontFamily: 'outfit-medium',
          color: Colors.PRIMARY,
          fontSize: 18,
        }}>Add new pet</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  addNewPetContainer:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.LIGHT_PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 15,
    borderStyle: 'dashed',
    justifyContent: 'center'
  }
})