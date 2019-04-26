import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

const styles = StyleSheet.create({
  docsList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#fffafa',
  },
  docCard: {
    width: 150, 
    height: 200,
    margin: '2% 3% 2% 3%',
    backgroundColor: '#FFF',
  },
  docName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default class DocsList extends React.Component {
  render() {
    return (
      <View style={styles.docsList}>

        <Link to="/doc/1" >
          <View style={styles.docCard}>
            <Text style={styles.docName}>Documento 1</Text>
          </View>
        </Link>

        <Link to="/doc/2" >
          <View style={styles.docCard}>
            <Text style={styles.docName}>Documento 2</Text>
          </View>
        </Link>

        <Link to="/doc/3" >
          <View style={styles.docCard}>
            <Text style={styles.docName}>Documento 3</Text>
          </View>
        </Link>

      </View>
    );
  }
}

