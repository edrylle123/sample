import React from 'react'
import { Container, View, Text } from 'native-base'

export default class Look extends React.Component{
    
    render(){
        const { navigate } = this.props.navigation;
        return(
            <Container>
                <View>
                    <Text>
                        Hello
                    </Text>
                </View>
            </Container>
        )
    }
}

 // itemName={`${hh.item}`}
                  // itemDescription={`${hh.begin}, ${hh.pasok}, ${hh.out},${hh.perpend},
                  //               ${hh.physicalinv},${hh.remarks},${hh.perres}`}