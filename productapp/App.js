import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AddProductForm from './AddProductForm';

export default function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    setShowForm(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <Button title="Add Product" onPress={() => setShowForm(true)} />
      {showForm && <AddProductForm onAdd={handleAddProduct} />}
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Price: ₹{item.price}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  productItem: { marginVertical: 10, padding: 10, backgroundColor: '#eee' },
  name: { fontSize: 18, fontWeight: 'bold' },
});
