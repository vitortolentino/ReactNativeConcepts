import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import Repository from './components/Repository';

import api from './services/api';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api
      .get('/repositories')
      .then(({data: repositoriesArray}) => {
        setRepositories(repositoriesArray);
      })
      .catch(console.log);
  }, []);

  async function handleLikeRepository(recievedId) {    
    try {
      await api.post(`repositories/${recievedId}/like`);
      const mappedRepositoryArray = repositories.map(repository => {
        if (repository.id !== recievedId) return repository;
        
        const updatedLikesRepository = {
          ...repository,
          likes: repository.likes + 1
        };

        return updatedLikesRepository;
      });

      setRepositories(mappedRepositoryArray);

    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.repositoryContainer}
          data={repositories}
          keyExtractor={({id}) => id}
          renderItem={({ item: repository }) => <Repository 
            {...repository} 
            handleLikeRepository={handleLikeRepository} 
          />}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
});
