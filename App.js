import React,{Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import{Card} from 'react-native-paper';

export default class App extends Component
{

     constructor(props)
     {

        super(props)

        this.state={
             UserList:[
               {FirstName:'Ross', LastName:'Geller', Age:'30', Email:'rossgeller30@gmail.com'},
               {FirstName:'Monica', LastName:'Geller', Age:'29', Email:'monicageller29@gmail.com'},
               {FirstName:'Rachel', LastName:'Green', Age:'29', Email:'rachelgreen29@gmail.com'},
               {FirstName:'chandlar', LastName:'Bing', Age:'30', Email:'chandlarbing30@gmail.com'},
               {FirstName:'Joey', LastName:'Tribiani', Age:'30', Email:'joeytribiani30@gmail.com'},
               {FirstName:'phoebe', LastName:'Buffay', Age:'29', Email:'phoebebuffay29@gmail.com'},
               {FirstName:'Chloe', LastName:'decker', Age:'28', Email:'chloedecker28@gmail.com'},
               {FirstName:'Lucifer', LastName:'Morningstar', Age:'30', Email:'lucifer30@gmail.com'},
               {FirstName:'Damon', LastName:'Salvatore', Age:'30', Email:'damon30@gmail.com'},
               {FirstName:'Elena', LastName:'Salvatore', Age:'27', Email:'elena27@gmail.com'}
             ]
        };
     }
 
     render()
       {
            return(
                  <View  style={{flex:1, padding:5}}>
                          <FlatList
                              data={this.state.UserList}
                           
                              renderItem={({item})=>
                                  <Card style={{margin:5, backgroundColor:'powderblue', borderRadius:10,marginTop:40, marginBottom:5}} >
                                         <View style={{flex:1, flexDirection:'row', padding:10, marginLeft:20}}>
                                              <Text style={{flex:1, fontSize:15, fontWeight:'bold'}}>First Name :</Text>
                                              <Text style={{flex:1, fontSize:15}}>{item.FirstName}</Text>
                                         </View>
                                    <    View style={{flex:1, flexDirection:'row', padding:10, marginLeft:20}}>
                                              <Text style={{flex:1, fontSize:15, fontWeight:'bold'}}>Last Name :</Text>
                                              <Text style={{flex:1, fontSize:15}}>{item.LastName}</Text>
                                         </View> 
                                         <View style={{flex:1, flexDirection:'row', padding:10, marginLeft:20}}>
                                              <Text style={{flex:1, fontSize:15, fontWeight:'bold'}}>Age :</Text>
                                              <Text style={{flex:1, fontSize:15}}>{item.Age}</Text>
                                         </View> 
                                         <View style={{flex:1, flexDirection:'row', padding:10, marginLeft:20}}>
                                             <Text style={{flex:1, fontSize:15, fontWeight:'bold'}}>Email :</Text>
                                             <Text style={{flex:1, fontSize:15}}>{item.Email}</Text>
                                        </View>      
                              
                                 </Card>
                               }   
                              keyExtractor={item=>item.FirstName}   
                           />
                    </View>
              );
       }
     
}