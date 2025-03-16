import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeBottomTabNavigation } from './HomeBottomTabNavigation';

export type ContainerStackParams = {
    HomeBottomTabNavigation: undefined;
};

const Stack = createNativeStackNavigator<ContainerStackParams>();

export const ContainerStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeBottomTabNavigation"
      screenOptions={{contentStyle: {backgroundColor: 'white'},
      headerShown: false 
      }}>
        <Stack.Screen
              name="HomeBottomTabNavigation"
              component={HomeBottomTabNavigation}
            />
    </Stack.Navigator>
  );
};