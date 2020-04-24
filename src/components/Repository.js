import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import TechList from './TechList';

const Respository = ({ title, techs, id, likes, handleLikeRepository }) => {

  return (
    <View style={styles.respositoryContainer}>
      <Text style={styles.repository}>{title}</Text>      
      
      <TechList techs={techs}/>      

      <View style={styles.likesContainer}>
        <Text
          style={styles.likeText}
          testID={`repository-likes-${id}`}
        >
          {likes} curtidas
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLikeRepository(id)}
        testID={`like-button-${id}`}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>      
    </View>
  );
};

const styles = StyleSheet.create({
  respositoryContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#cecece',
    paddingBottom: 15
  },  
  repository: {
    fontSize: 32,
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});

export default Respository;