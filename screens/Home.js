import React from 'react'
import { Container, View, Button } from 'native-base'
import { Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import List from './components/List'





class Home extends React.Component {
  processForm(formDetails) {
    this.setState((state) => {
      return {
        ...state,
        List: [
          ...state.List,
          formDetails,
        ]
      }
    })
    console.log(formDetails)
  }

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
          <Text style={style.txtheader}>
            Stock Inventory Control
          </Text>
 

          <View>
            <Text style={{ fontSize: 25 }}>
              Products
            </Text>
          </View>
          <View>
            {this.state.List.map((hh) => (
              <FlatList
                data={this.state.List}
                renderItem={({ item }) => <Button><Text style={{ marginHorizontal: 100 }}> {item.item} </Text>
                  <Text onPress={() => navigate('Look')}>
                    View
                </Text>
                  <Text onPress={() => navigate('Edit')}>
                    Edit
                </Text>
                  <Text>
                    Delete
                </Text>
                </Button>}
              />
            ))
            }

          </View>
          <View style={style.MainContainer}>
            <TouchableOpacity onPress={() => navigate('Additem', {
              onFormComplete: (formDetails) => this.processForm(formDetails)
            })}
              activeOpacity={0.7}  >
              <Text style={style.button}>
                New Item
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </Container>
    )
  }
}

const style = StyleSheet.create({

  txtheader: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 25,
    marginHorizontal: 65

  },
  date: {
    padding: 5,
    fontSize: 25

  },
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 15,
    fontSize: 20
  }

})

export default Home;