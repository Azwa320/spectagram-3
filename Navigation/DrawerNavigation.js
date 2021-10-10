import React from 'react'
import{createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import Profile from '../screens/profile'

const Drawer=createDrawerNavigator();
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator}/>
    <Drawer.Screen name="profile" component={Profile}/>
    </Drawer.Navigator>
  )
}
export default DrawerNavigator