import React from 'react'
import { View, Text, Form, Item, Button, Container } from 'native-base'
import { ScrollView, TextInput } from 'react-native-gesture-handler';






class Additem extends React.Component{

    sampleSubmit() {
        const {navigate} =this.props.navigation;
        const form = this.state

        if(!form.begin) {
            console.log('error')

            return
        }

        this.props.route.params.onFormComplete(form)
        navigate('Home')
    }
    constructor(props) {
        super(props);

        this.state = {
        item: "",
        begin:"",
        pasok:"",
        out:"",
        perpend:"",
        physicalinv:"",
        remarks:"",
        perres:""
        };
      }
    

   
    render(){
        const {navigate} =this.props.navigation
        return(
            <Container>
                <View style = {{ marginLeft: 20, marginTop: 20}}>
                    <Text>Item Name</Text>
                        <Item fixedLabel>
                        <TextInput
                            onChangeText= {(item)=>this.setState({item})}
                            placeholder={'Item Name '}
                        />
                        </Item>
                </View>
                <ScrollView>

                
                <View style = {{ margin: 20}}>

                    <Text>Beginning Inventory</Text>
                    <Item fixedLabel>
                    <TextInput
                        onChangeText= {(begin)=>this.setState({begin})}
                        placeholder={'Beginning Inventory '}
                    />
                    </Item>
                    <Text>IN</Text>
                    <Item fixedLabel>
                    <TextInput
                        onChangeText= {(pasok)=>this.setState({pasok})}
                        placeholder={'IN'}
                    />
                    </Item>
                    
                    <Text>OUT</Text>
                    <Item fixedLabel>
                    <TextInput
                        onChangeText= {(out)=>this.setState({out})}
                        placeholder={'OUT'}
                    />
                    </Item>
                    
                    <Text>Perpetual Ending</Text>
                    <Item fixedLabel>
                    <TextInput
                        onChangeText= {(perpend)=>this.setState({perpend})}
                        placeholder={'Perpetual Ending '}
                    />
                    </Item>
                    
                    <Text>Physical Inventory</Text>
                    <Item fixedLabel>
                    <TextInput
                        onChangeText= {(physicalinv)=>this.setState({physicalinv})}
                        placeholder={'Physical Inventory'}
                    />
                    </Item>
                    
                    <Text>Remarks</Text>
                    <Item fixedLabel>
                    <TextInput
                        onChangeText= {(remarks)=>this.setState({remarks})}
                        placeholder={'Remarks'}
                    />
                    </Item>
                    
                    <Text>Person Responsible</Text>
                    <Item fixedLabel>
                    <TextInput
                        onChangeText= {(perres)=>this.setState({perres})}
                        placeholder={'Person Responsible'}
                    />
                    </Item>
                    
                    
                </View>
                </ScrollView>
            

                <View style = {{padding: 25}}>
                    <Button rounded success style = {{alignContent: 'center', justifyContent:'center'}}
                    onPress={() => this.sampleSubmit()}>
                        <Text style = {{alignContent: 'center', justifyContent:'center'}}>
                            SAVE
                        </Text>
                    </Button>
                </View>

                </Container>
               


            
        )
    }
}



export default Additem;