import React from 'react';
import { 
 StyleSheet,
 Text,
 View, 
 TextInput, 
 ScrollView, 
 TouchableOpacity, 
 KeyboardAvoidingView
} from 'react-native';

import Note from './Note';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noteArray: [],
			noteText: ''
		}
	}
  render() {

  	let notes = this.state.noteArray.map((val, key) => {
  		return <Note key={key} keyval={key} val = {val}
  				deleteMethod ={ ()=> this.deleteNote(key)} />
  	});
    return (
      <View style = {styles.container}>
      	<View style = {styles.header}>
      		<Text style = {styles.headerText}> Todo </Text>
      	</View>

      	<ScrollView style = {styles.scrollContainer}>
      		{notes}

      	</ScrollView>

      	<KeyboardAvoidingView style = {styles.footer}>
      		<TextInput 
      		style = {styles.textInput}
      		onChangeText={(noteText) => this.setState({noteText})}
      		value={this.state.noteText}
      		placeholder = 'Enter task here'
      		placeholderTextColor = 'rgba(255, 255, 255, 0.25)'
      		> 
      		</TextInput> 
      	</KeyboardAvoidingView>

      	<TouchableOpacity onPress={this.addNote.bind(this)} style = {styles.addButton}> 
      		<Text style = {styles.addButtonText}>+</Text>


      	</TouchableOpacity> 

      </View>
    );
  }

  addNote() {
  	if (this.state.noteText) {
  		var date = new Date(); 
  		this.state.noteArray.push({
  			'date': date.getFullYear() + 
  			"/" + (date.getMonth() + 1) +
  			 "/" + date.getDate(), 
  			 'note': this.state.noteText
  		});
  		this.setState({
  			noteArray: this.state.noteArray,
  			noteText: ''
  		});
  	}
  }

  deleteNote(key) {
  	this.state.noteArray.splice(key, 1);
  	this.setState({
  		noteArray: this.state.noteArray
  	});
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1, 
  }, 
  header: {
  	backgroundColor: '#ff2d55',
  	alignItems: 'center', 
  	justifyContent: 'center', 
  	borderBottomWidth: 10, 
  	borderBottomColor: '#ddd'
  }, 
  headerText: {
  	color: 'white', 
  	fontSize: 18, 
  	padding: 20, 
  	marginTop: 20
  }, 
  scrollContainer: {
  	flex: 1, 
  	marginBottom: 100
  }, 
  footer: {
  	 position: 'absolute', 
  	 bottom: 0, 
  	 left: 0, 
  	 right: 0, 
  	 zIndex: 10
  }, 
  textInput: {
  	alignSelf: 'stretch', 
  	color: '#fff', 
  	padding: 20, 
  	backgroundColor: '#252525', 
  	borderTopWidth: 2, 
  	borderTopColor: '#ededed'
  }, 
  addButton: {
  	position: 'absolute', 
  	zIndex: 11, 
  	right: 20, 
  	bottom: 90, 
  	backgroundColor: '#ff2d55', 
  	width: 90, 
  	height: 90,
  	borderRadius: 50, 
  	alignItems: 'center', 
  	justifyContent: 'center', 
  	elevation: 8, 
  	shadowColor: 'rgba(0, 0, 0, 1.0)', 
    shadowOffset: {width: 0, height: 2}, 
    shadowRadius: 4,
    shadowOpacity: 0.5, 
  }, 
  addButtonText: {
  	color: '#fff', 
  	fontSize: 30
  }
});

