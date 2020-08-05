// Imports
import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

// UI
import CheckBox from '@react-native-community/checkbox'

// App Imports
import Menu from '../Menu'
import Item from '../Item'

// Component
const Home = () => {
  // State
  const [vegetable, setVegetable] = useState(true)
  const [fruit, setFruit] = useState(true)

  const images = {
    tomato: require('../../../assets/tomato.png'),
    potato: require('../../../assets/potato.png'),
    orange: require('../../../assets/orange.png'),
    apple: require('../../../assets/apple.png'),
  }

  // Render
  return (
    // Container
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {/* Logo */}
      <View
        style={{
          backgroundColor: 'powderblue',
          justifyContent: 'center',
          height: 70,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Shorja
        </Text>
      </View>
      {/* Category */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {/* Vegetable */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}>
          <CheckBox
            disabled={false}
            value={vegetable}
            onValueChange={(newValue) => setVegetable(newValue)}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}>
            Vegetables
          </Text>
        </View>
        {/* Fruit */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}>
          <CheckBox
            disabled={false}
            value={fruit}
            onValueChange={(newValue) => setFruit(newValue)}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}>
            Fruits
          </Text>
        </View>
      </View>
      {/* Vegetables */}
      {(vegetable || (!vegetable && !fruit)) && (
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <Item title="Tomato" image={images.tomato} />
          <Item title="Potato" image={images.potato} />
        </View>
      )}
      {/* Fruits */}
      <View style={{ flex: 3, flexDirection: 'row' }}>
        {(fruit || (!vegetable && !fruit)) && (
          <>
            <Item title="Orange" image={images.orange} />
            <Item title="Apple" image={images.apple} />
          </>
        )}
      </View>
      {/* Blank Space */}
      {!vegetable && fruit && (
        <View style={{ flex: 3, flexDirection: 'row' }}></View>
      )}
      {/* Checkout */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{
          justifyContent: 'center',
          backgroundColor: '#84c225',
          height: 70,
        }}>
        <View style={styles.button}>
          <Text style={{ fontSize: 20, color: 'white' }}>Checkout</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
})

export default Home
