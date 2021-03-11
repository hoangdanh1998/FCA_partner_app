import React from 'react';
import TabReadyScreen from '../screens/tab-ready/index'
import { LIGHT_COLOR } from '../constance/constance';
import StoreProfileTab from '../components/atoms/store-profile-tab';

const Tab = createMaterialTopTabNavigator();

export default function TabProfileNavigation() {
    return (
    
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: LIGHT_COLOR,
                    labelStyle: { fontSize: 20, color: '#603a18', fontWeight: 'bold' },
                    style: { backgroundColor: LIGHT_COLOR },
                }}                
                initialRouteName="UPCOMING">
                <Tab.Screen options={{tabBarLabel:"THÔNG TIN CHUNG"}} name="STORE_PROFILE" component={StoreProfileTab} />
                <Tab.Screen options={{tabBarLabel:"SẴN SÀNG"}} name="READY" component={TabReadyScreen} />
            </Tab.Navigator>
        
    );
}