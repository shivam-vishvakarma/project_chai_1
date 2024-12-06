import {ColorValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export interface FlatCardProps {
  text: string;
  backgroundColor?: ColorValue;
}

const FlatCard: React.FC<FlatCardProps> = ({text, backgroundColor}) => {
  return (
    <View style={[styles.card, {backgroundColor}]}>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    aspectRatio: 1,
    backgroundColor: '#3498db',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});
