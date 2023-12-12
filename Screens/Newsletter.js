//Created by Ankith Goutham and Ahmed Khan
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

const Newsletter = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const apiKey = '407f824c5328489eb494a31c123ca6e4';
    const apiUrl = `https://newsapi.org/v2/everything?q=recycling%20reduce%20reuse%20-paper%20-metal%20-electronics%20-evs&apiKey=${apiKey}&pageSize=5&page=${page}`;

    fetchNews(apiUrl);
  }, [page]);

  const fetchNews = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Filter
        const filteredNews = data.articles.filter((article) => {
          const lowerCaseTitle = article.title.toLowerCase();
          return !lowerCaseTitle.includes('electronics') && !lowerCaseTitle.includes('ev') && !lowerCaseTitle.includes('toyotas');
        });

        setNews((prevNews) => [...prevNews, ...filteredNews]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.title}>Sustainability News</Text>

        {news.map((article, index) => (
          <View key={index} style={styles.articleBox}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleContent}>{article.description}</Text>
          </View>
        ))}

        {loading ? (
          <ActivityIndicator size="large" color="#555555" style={styles.loadingIndicator} />
        ) : (
          <TouchableOpacity onPress={handleLoadMore} style={styles.loadMoreButton}>
            <Text style={styles.loadMoreButtonText}>Load More</Text>
          </TouchableOpacity>
        )}
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
  articleBox: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#388E3C',
    padding: 10,
    borderRadius: 5,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  articleContent: {
    color: '#555555',
  },
  loadingIndicator: {
    marginVertical: 20,
  },
  loadMoreButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loadMoreButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Newsletter;
