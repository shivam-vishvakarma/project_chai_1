import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export interface ElevatedCardProps {
  text: string;
  backgroundColor?: string;
}

const ElevatedCard: React.FC<ElevatedCardProps> = ({text, backgroundColor}) => {
  return (
    <View
      style={[styles.card, {backgroundColor, shadowColor: backgroundColor}]}>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    margin: 5,
    aspectRatio: 1,
    backgroundColor: '#3498db',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    width: 120,
  },

  cardText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});
