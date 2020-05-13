import React from 'react'
import { Container, View, Text } from 'native-base'

export default class Edit extends React.Component{
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