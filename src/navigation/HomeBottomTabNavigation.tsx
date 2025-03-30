import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PrincipalScreen } from '../screens/PrincipalScreen/PrincipalScreen';
import { Horse, Balloon, ChatsTeardrop } from 'phosphor-react-native';
import StatusScreen from '../screens/Status/StatusScreen';

export type BottomStackParams = {
    Chats: undefined;
    Estados: undefined;
};

const Tab = createBottomTabNavigator<BottomStackParams>();

export const HomeBottomTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Chats">
            <Tab.Screen name="Chats" component={PrincipalScreen}
                options={{
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({focused}) => (
                        <ChatsTeardrop />
                    )
                }} />
            <Tab.Screen name="Estados" component={StatusScreen}
                options={{
                    tabBarLabel: 'Estados',
                    tabBarIcon: ({focused}) => (
                        <Balloon />
                    ),
                }} />
        </Tab.Navigator>
    );
};