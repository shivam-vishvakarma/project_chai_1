import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export interface PlaceCardProps {
  img: string;
  place: string;
  city: string;
  description: string;
  link?: string;
}

const PlaceCard: React.FC<PlaceCardProps> = props => {
  const openBrowser = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.card}>
      <Image style={styles.img} src={props.img} />
      <View style={styles.cardContent}>
        <Text style={[styles.text, styles.place]}>{props.place}</Text>
        <Text style={[styles.text, styles.city]}>{props.city}</Text>
        <Text style={[styles.text, styles.desc]} numberOfLines={3}>
          {props.description}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => openBrowser(props.link || 'https://youtube.com')}>
        <Text style={[styles.text, styles.button]}>More Info</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  place: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 15,
    marginBottom: 5,
    color: '#666',
  },
  desc: {
    fontSize: 20,
  },
  text: {
    color: '#333',
  },
  button: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
