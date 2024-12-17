import {StyleSheet, Text, View} from 'react-native';
import React, {ReactElement} from 'react';

export interface SectionProps {
  heading: string;
}

const Section: React.FC<React.PropsWithChildren<SectionProps>> = ({
  children,
  heading,
}) => {
  return (
    <>
      <Text style={styles.cardHeading}>{heading}</Text>
      {children}
    </>
  );
};

export default Section;

const styles = StyleSheet.create({
  cardHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 20,
  },
});
