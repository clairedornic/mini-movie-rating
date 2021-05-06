import React from 'react'
import { View, TextInput, Text, StyleSheet, Button} from 'react-native'

class AddFilm extends React.Component {
    constructor(props) {
        super(props) 
        this.stateUpdated = false
        this.state = {
            title: '',
            grade: '',
            overview: '',
            comments: '',
            link_IMDB: '',
            isFormValid: false
          }  
    }

    render() {
        return(
            <View style={styles.main_container}>
                <TextInput 
                value={this.state.title}
                onChangeText={this.titleChange} 
                placeholder="Title" 
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                value={this.state.grade}
                onChangeText={this.gradeChange} 
                placeholder="Grade" 
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                value={this.state.overview}
                onChangeText={this.overviewChange} 
                placeholder="Overview" 
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                value={this.state.comments}
                onChangeText={this.commentsChange} 
                placeholder="Comments" 
                style={styles.textinput}>
                </TextInput>
                <TextInput 
                value={this.state.link_IMDB}
                onChangeText={this.link_IMDBChange}
                placeholder="Link to IMDB" 
                style={styles.textinput}>
                </TextInput>
                <View style={styles.container_btn}>
                    <Button title='Add film' color="#ff4d01" onPress={ () => this.handleSubmit()} disabled={!this.state.isFormValid} />
                </View>
            </View>
        );
    }

    validForm = () => {
      if (this.state.title.length > 1) {
          this.setState({ isFormValid: true })
      } else {
          this.setState({ isFormValid: false })
      }
  }

  titleChange = title => {
      this.setState({ title: title }, this.validForm)
  }

  gradeChange = grade => {
      this.setState({ grade: grade }, this.validForm)
  }

  overviewChange = overview => {
      this.setState({ overview: overview }, this.validForm)
  }
  commentsChange = comments => {
      this.setState({ comments: comments }, this.validForm)
  }

  link_IMDBChange = link_IMDB => {
    this.setState({ link_IMDB: link_IMDB }, this.validForm)
}

  handleSubmit = () => {
    this.props.route.params.addFilm(this.state)
    this.props.navigation.goBack()
  }
}

const styles = StyleSheet.create({
    main_container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textinput: {
      width: "90%",
      margin: 10,
      padding: 10,
      backgroundColor: "#fff",
      color: "#000",
      height: 50,
    //   shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 0,
    //     },
    //     shadowOpacity: 0.30,
    //     shadowRadius: 4.65,

    //     elevation: 0,
    //   paddingLeft: 5
    },
    container_btn: {
        width: "80%",
        margin: 10,
    }
  })
  

export default AddFilm