import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import React from 'react';
import { TouchableOpacity } from 'react-native';


// import all pages of the app

//homePage + registration
import { HomePage } from '../screens/HomePage';
import { SignUpByEmail } from '../screens/registration/SignUpByEmail';
import { SignUp } from '../screens/registration/SignUp';
import { LogIn } from '../screens/registration/LogIn';

import { LogOut } from '../screens/LogOut';
import { ForgetPassword } from '../screens/registration/ForgetPassword';
import { ResetPassword } from '../screens/registration/ResetPassword';
import { VerifyCode } from '../screens/registration/VerifyCode';

// admin screens
import { AdminPanel } from '../screens/adminScreens/AdminPanel';
import { AddClass } from '../screens/adminScreens/AddClass';
import { AddProfession } from '../screens/adminScreens/AddProfession';
import { AddUser } from '../screens/adminScreens/AddUser';
import { BelongsProfessionClass } from '../screens/adminScreens/BelongsProfessionClass';
import { BelongsStudentClass } from '../screens/adminScreens/BelongsStudentClass';
import { DeleteClass } from '../screens/adminScreens/DeleteClass';
import { DeleteTeacher } from '../screens/adminScreens/DeleteTeacher';
import { DeleteProfession } from '../screens/adminScreens/DeleteProfession';
import { RemoveStudentClass } from '../screens/adminScreens/RemoveStudentClass';


// teacher screens
import { classSelection } from '../screens/teacherScreens/classSelection'
import { ProfessionsSelection } from '../screens/teacherScreens/ProfessionsSelection'
import { StudentSelection } from '../screens/teacherScreens/StudentSelection'
import { RemoveProfessionClass } from '../screens/adminScreens/RemoveProfessionClass'

import { Settings } from '../screens/Settings';

const defaultOptions = {
    headerTitleAlign: 'center',
    headerBackTitleStyle: {
        color: '#284e4f',
    },
    headerTintColor: '#284e4f',
}


const HomePageNavigator = createStackNavigator({

    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerTitle: 'I have eyes in my back',
            headerTitleStyle: {
                color: '#284e4f',
                fontWeight: 'bold',
            }
        }
    },
    SignUpByEmail: SignUpByEmail,
    SignUp: SignUp,
    LogIn: LogIn,
    ForgetPassword: ForgetPassword,
    ResetPassword: ResetPassword,
    VerifyCode: VerifyCode

},
    {
        defaultNavigationOptions: defaultOptions
    }
    

);

const logOut = ({navigation}) => ({
    headerTitleAlign: 'center',
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 2
    },
    headerBackTitleStyle: {
        color: '#284e4f',
    },
    headerTintColor: '#284e4f',
    
    
    headerRight: () => 
        <TouchableOpacity activeOpacity={0.6} style={{paddingRight: 15}}>
            <Entypo name="log-out" size={26} coloe='#284e4f' 
            onPress={ () => {
                navigation.navigate('LogOut')
            }
            }/>
        </TouchableOpacity>
            
    ,
})

const AdminNavigator = createStackNavigator({

    
    HomePage: AdminPanel,   
    AddUser: AddUser,
    AddClass: AddClass,
    DeleteClass: DeleteClass,
    DeleteProfession: DeleteProfession,
    DeleteTeacher: DeleteTeacher,
    AddProfession: AddProfession,
    BelongsProfessionClass: BelongsProfessionClass,
    RemoveProfessionClass, RemoveProfessionClass,
    BelongsStudentClass: BelongsStudentClass,
    RemoveStudentClass: RemoveStudentClass,
    LogOut: LogOut,
    Settings: {
        screen: Settings,
        navigationOptions: {
            headerTitle: 'שינוי פרטי פרופיל'
        },
    },
},
{
    defaultNavigationOptions :  logOut
});



const TeacherNavigator = createStackNavigator({ 
    
    HomePage: classSelection,
    ProfessionsSelection: ProfessionsSelection,
    StudentSelection: StudentSelection,
    LogOut: LogOut,
    Settings: {
        screen: Settings,
        navigationOptions: {
            headerTitle: 'שינוי פרטי פרופיל'
        },
    },

 

},
{
    defaultNavigationOptions: logOut
}
);


const TabNavigatorAdmin = createBottomTabNavigator({
    homePage: {
        screen: AdminNavigator,
        navigationOptions: {
            tabBarLabel: 'עמוד בית',
            tabBarIcon: (tabInfo) => {
                return(
                    <Ionicons name="ios-home-outline" size={24} color={tabInfo.tintColor} />
                )
            },
        },
    },
    Settings:  {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'הגדרות',
            tabBarIcon: (tabInfo) => {
                return(
                    <Ionicons name="settings-outline" size={24} color={tabInfo.tintColor} />
                )
            },
        },
    },
   
        
}, {
    tabBarOptions: {
        activeTintColor: '#435D5E'
    }
})



const TabNavigatorTeacher = createBottomTabNavigator({
    homePage: {
        screen: TeacherNavigator,
        navigationOptions: {
            tabBarLabel: 'עמוד בית',
            tabBarIcon: (tabInfo) => {
                return(
                    <Ionicons name="ios-home-outline" size={24} color={tabInfo.tintColor} />
                )
            },
        },
    },
    
    Settings:  {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'הגדרות',
            tabBarIcon: (tabInfo) => {
                return(
                    <Ionicons name="settings-outline" size={24} color={tabInfo.tintColor}  />
                )
            },
        },
    },
   
        
}, {
    tabBarOptions: {
        activeTintColor: '#435D5E'
    }
})

const mainNavigator = createSwitchNavigator({
    HomePageNavigator: HomePageNavigator,
    AdminNavigator: TabNavigatorAdmin,
    TeacherNavigator: TabNavigatorTeacher
    
})

export default createAppContainer(mainNavigator)


