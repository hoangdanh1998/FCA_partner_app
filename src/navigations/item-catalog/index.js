import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MyHeader } from '../../components/atoms/header/Header';
import NewItemModal from '../../components/atoms/new-item-modal';
import ItemCatalogScreen from '../../screens/item-catalog';


const ItemCatalog = createStackNavigator();


function ItemCatalogStackScreen(props) {
    const handleLogOut = props.route.params.handleLogOut;
    return (
        // <NavigationContainer>
            <ItemCatalog.Navigator
                screenOptions={{
                    header: (props) => (
                        <MyHeader {...props} handleLogOut = {handleLogOut} />
                    )
                }}
            >
                <ItemCatalog.Screen name="ITEM_CATALOG" component={ItemCatalogScreen} /> 
                <ItemCatalog.Screen name="NEW_ITEMS" component={NewItemModal} />    
            </ItemCatalog.Navigator>
            
        // </NavigationContainer>

    );
};

export default ItemCatalogStackScreen;