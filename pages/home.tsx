import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCard from '../components/FlatCard';
import ElevatedCard from '../components/ElevatedCard';
import {elevatedCardData, flatCardData, trendingPlaces} from '../server/data';
import Section from '../components/Section';
import PlaceCard from '../components/PlaceCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <Section heading="Flat Cards">
        <View style={styles.flatCardContainer}>
          {flatCardData.map((data, index) => (
            <FlatCard
              key={index}
              text={data.text}
              backgroundColor={data.backgroundColor}
            />
          ))}
        </View>
      </Section>
      <Section heading="Elevated Cards">
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
      </Section>
      <Section heading="Trending Places">
        {trendingPlaces.map((data, index) => (
          <PlaceCard
            key={index}
            img={data.img}
            place={data.place}
            city={data.city}
            description={data.description}
            link={data.link}
          />
        ))}
      </Section>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
