import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log("Yes");
    console.log("Rendu : " + this.props.film.title);
    return (
      <View style={styles.main_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>{this.props.film.title}</Text>
          <Text style={styles.vote_text}>{this.props.film.grade}</Text>
        </View>
        <Text style={styles.description_text} numberOfLines={6}>{this.props.film.overview}</Text>
        <Text style={styles.date_text}>Comments : {this.props.film.comments}</Text>
        <Text style={styles.date_text}>Link IMDB : {this.props.film.link_IMDB}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'column',
    padding: 20,
    margin: 20,
    backgroundColor: "#fff",
  },
  title_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_text: {
    color: '#666666'
  },
  date_text: {
    textAlign: 'left',
    fontSize: 14
  }
})

export default FilmItem