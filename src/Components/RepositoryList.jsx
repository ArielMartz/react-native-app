import React from "react";
import repositories from '.../data/repositories.js';
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
    return(
        <FlatList
            data={repositories}
            itemSeparatorComponent={()=> <Text> </Text>}
            renderItem={( {item: repo}) => (
                <RepositoryItem/>
            )}
            />
            
    )
}

export default RepositoryList;
