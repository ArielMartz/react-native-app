import React from "react";
import { View, StyleSheet } from 'react-native';
import StyledText from "./StyledText";



const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    strong:{
        fontWeight:'bold',
        marginBottom:5
    }
})




const RepositoryItem = (props) => {
  <View>
    {repositories.map((props) => (
      <View
        key={props.id}
        style={styles.container}>
        <StyledText big bold>id:{props.id}</StyledText>
        <StyledText blue>Fullname:{props.fullname}</StyledText>
        <StyledText bold>Description:{props.description}</StyledText>
        <StyledText blue>Language:{props.language}</StyledText>
        <StyledText small>Stars:{props.stars}</StyledText>
        <StyledText small>Forks:{props.forks}</StyledText>
        <StyledText small>Review:{props.review}</StyledText>
        <StyledText small>Rating:{props.rating}</StyledText>
      </View>
    ))}
  </View>;
};

export default RepositoryItem;