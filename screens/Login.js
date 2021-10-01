import { StatusBar } from 'expo-status-bar';
import React  from "react";
import {View} from "react-native"; 
//formik
import { Formik } from 'formik';
//icons
import { Octicons } from '@expo/vector-icons';
//colors
import { 
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    SubTitle,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon, 
    Colors,
} from "../components/style";

const {brand,darkLight} = Colors;

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Test Application</PageTitle>
                <SubTitle>Вход в аккаунт</SubTitle>

                <Formik 
                    initialValues={{ email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur,handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput
                            label="Email"
                            icon="mail"
                            placeholder="JohnDoe@gmail.com"
                            placeholderTextColor={darkLight}
                            OnChangeText={handleChange('email')}
                            OnBlur={handleBlur('email')}
                            value={values.email}
                            keybordType="email"
                        />
                         <MyTextInput
                            label="Пароль"
                            icon="lock"
                            placeholder="* * * * * * * * * * * * * *"
                            placeholderTextColor={darkLight}
                            OnChangeText={handleChange('password')}
                            OnBlur={handleBlur('password')}
                            value={values.password }
                            secureTextEntry={true}
                        />
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon, ...props}) => {
        return (<View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
        </View>);
};


export default Login;