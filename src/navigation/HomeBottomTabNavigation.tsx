import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PrincipalScreen } from '../screens/PrincipalScreen/PrincipalScreen';
import { Horse, Heart, Cube } from 'phosphor-react-native';

export type BottomStackParams = {
    PrincipalScreen: undefined;
    DetailScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomStackParams>();

export const HomeBottomTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="PrincipalScreen">
            <Tab.Screen name="PrincipalScreen" component={PrincipalScreen}
                options={{
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({focused}) => (
                        <Horse />
                    )
                }} />
        </Tab.Navigator>
    );
};