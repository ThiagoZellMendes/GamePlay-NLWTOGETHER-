import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/Home'
import { SignIn } from "../screens/Signin";
import { AppointmentDetails } from '../screens/AppointmentDetails'

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      headerMode= "none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen 
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
    </Navigator>
  )
}