import React from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'

import FilmItem from './FilmItem' 

class ListFilm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: [],
    }   
  }

  addFilm = (film) => {
    this.setState(prevState => ({
      films: [...prevState.films, film]
    }))
    console.log(this.state.films);
  }

  renderItemFilm = ({item}) => {
    console.log(item);
    return <FilmItem film={item}></FilmItem>
    
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    console.log(this.state.films); 
    return (
      <View style={styles.main_container}>
        <View style={styles.btn_container}>
          <Button color="#ff4d01" title='Ajouter un film' onPress={() => this.props.navigation.navigate("AddFilm", {
           addFilm: film => this.addFilm(film)
          })}/>
        </View>
        
        <FlatList 
          data={this.state.films}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItemFilm}
          style={styles.liste_container}
        /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
    // justifyContent: "center",
    alignItems: "center"
  },
  btn_container: { 
    width: "80%"
  },
  liste_container : {
    width: "90%"
  }
})

export default ListFilm