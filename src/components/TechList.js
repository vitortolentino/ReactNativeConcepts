import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from "react-native";


const TechList = ({techs}) => (
  <View style={styles.techsContainer}>
    {techs.map((tech, id) => (
        <Text key={tech} style={styles.tech}>
          {tech}
        </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
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
});

export default TechList;