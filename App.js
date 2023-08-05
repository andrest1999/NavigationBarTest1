import { Home, Projects, Settings, Users } from './src/screens/index'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
export default function App () {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Projects" component={Projects} />
                <Tab.Screen name="Settings" component={Settings} />
                <Tab.Screen name="Users" component={Users} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}
