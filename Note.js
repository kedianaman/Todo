import React from 'react';
import { 
 StyleSheet,
 Text,
 View, 
 TouchableOpacity, 
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      <View key = {this.props.keyval} style = {styles.note}>
        <Text style = {styles.noteText}>{this.props.val.note}</Text>
        <Text style = {styles.dateText}>{this.props.val.date}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style = {styles.noteDelete}>
          <Text style = {styles.noteDeleteText}>D</Text> 
        </TouchableOpacity>
      </View> 

    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20, 
    paddingRight: 100, 
    borderBottomWidth: 2, 
    borderBottomColor: '#ededed', 
    justifyContent: 'center',
  }, 
  dateText: {
    fontSize: 16, 
    fontWeight: "200",
    paddingLeft: 20,
    borderLeftWidth: 10, 
    borderLeftColor: '#E91E63', 
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10, 
    borderLeftColor: '#E91E63', 
    fontSize: 18, 
    fontWeight: "500"
  }, 
  noteDelete: {
    position: 'absolute', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'red', 
    padding: 10, 
    top: 10, 
    bottom: 10, 
    right: 10
  }, 
  noteDeleteText: {
    color: 'white'
  }
});


