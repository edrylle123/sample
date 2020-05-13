import React from 'react'
import { Container, View, Text } from 'native-base'
import List from './components/List'
import { ScrollView } from 'react-native-gesture-handler'

export default class Look extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          List: []
    
        };
      }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <View>
                    {this.state.List.map((hh) => (
                        <List
                            itemName={`${hh.item}`}
                            itemDescription={`${hh.begin}, ${hh.pasok}, ${hh.out},${hh.perpend},
                                            ${hh.physicalinv},${hh.remarks},${hh.perres}`}

                        />
                    ))
                    }
                </View>
            </Container>
        )
    }
}

