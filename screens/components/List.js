import React from 'react'
import { Card, CardItem, Text, Button } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'


class List extends React.Component {
    render() {
        
        const { itemDescription } = this.props
        const { itemName} = this.props
        return (
            <ScrollView>

            
            <Card>
             <CardItem header>
              <Text style={{fontWeight:'bold'}}>{itemName}</Text>
              <Text> {itemDescription} </Text>
              <Button
              title= "Edit"
              type = "Outline"/>

             
            </CardItem>
        
            </Card>
            </ScrollView>
        )
    }
}


export default List
