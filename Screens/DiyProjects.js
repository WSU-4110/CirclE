//Created by Ankith Goutham
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';

const DiyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const projectsData = [
      {
        title: 'DIY Project 1',
        description: '17 Cheap and Easy DIY Zero-Waste Products',
        link: 'https://mindfulofthehome.com/zero-waste-diy-ideas/',
      },
      {
        title: 'DIY Project 2',
        description: '16 Eco-Friendly Projects for a Zero-Waste Home',
        link: 'https://blog.spoonflower.com/2020/04/03/easy-and-eco-friendly-diy-projects/',
      },
      {
        title: 'DIY Project 3',
        description: '26 Easy Earth Day Crafts for Kids of All Ages, Using Recycled Materials',
        link: 'https://www.womansday.com/home/crafts-projects/g39430524/earth-day-crafts-ideas/',
      },
      {
        title: 'DIY Project 4',
        description: 'Recycled Crafts That Look Anything But Trashy',
        link: 'https://modpodgerocksblog.com/recycled-crafts/',
      },
      {
        title: 'DIY Project 5',
        description: '14 Recycle & Reuse Decor Ideas That Are Eco-Friendly',
        link: 'https://www.thepondsfarmhouse.com/14-recycle-reuse-decorate-ideas/',
      },
    ];

    // Simulating API call or data fetching
    simulateFetchProjects(projectsData);
  }, []);

  const simulateFetchProjects = (data) => {
    // Simulating delay for fetching data
    setTimeout(() => {
      setProjects(data);
      setLoading(false);
    }, 1000);
  };

  const handleProjectClick = (link) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.title}>DIY Projects</Text>

        {projects.map((project, index) => (
          <TouchableOpacity
            key={index}
            style={styles.projectBox}
            onPress={() => handleProjectClick(project.link)}
          >
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
          </TouchableOpacity>
        ))}

        {loading ? (
          <ActivityIndicator size="large" color="#555555" style={styles.loadingIndicator} />
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 20,
  },
  projectBox: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#388E3C',
    padding: 10,
    borderRadius: 5,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  projectDescription: {
    color: '#555555',
  },
  loadingIndicator: {
    marginVertical: 20,
  },
});

export default DiyProjects;
