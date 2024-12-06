import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCard, {FlatCardProps} from '../components/FlatCard';
import ElevatedCard, {ElevatedCardProps} from '../components/ElevatedCard';
import {elevatedCardData, flatCardData} from '../server/data';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardHeading}>Flat Cards</Text>
      <View style={styles.flatCardContainer}>
        {flatCardData.map((data, index) => (
          <FlatCard
            key={index}
            text={data.text}
            backgroundColor={data.backgroundColor}
          />
        ))}
      </View>
      <Text style={styles.cardHeading}>Elevated Cards</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.elevatedCardContainer}>
        {elevatedCardData.map((data, index) => (
          <ElevatedCard
            key={index}
            text={data.text}
            backgroundColor={data.backgroundColor}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 20,
  },
  flatCardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  elevatedCardContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
});
