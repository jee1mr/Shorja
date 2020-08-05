// Imports
import React, { useState } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native'

// Component
const Item = ({ title = 'Tomato', image, price = '4.25' }) => {
  // State
  const [itemCount, setItemCount] = useState(0)

  // Add Item
  const addItem = () => {
    setItemCount(itemCount + 1)
  }

  // Remove Item
  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1)
    }
  }

  // Render
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        borderColor: 'black',
        borderTopWidth: 0.2,
        borderLeftWidth: 0.2,
      }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
        <Text style={styles.itemText}>{title}</Text>
        <Text style={styles.itemText}>${price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableHighlight onPress={removeItem} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>
        <Text category="h4">{itemCount}</Text>
        <TouchableHighlight onPress={addItem} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    backgroundColor: '#f4f3f2',
    padding: 10,
  },
  button: {
    backgroundColor: '#eaeaea',
    width: 30,
    height: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 20,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    flex: 3,
    resizeMode: 'contain',
  },
  itemText: {
    textAlign: 'center',
    marginTop: 2,
    flex: 1,
  },
})

export default Item
