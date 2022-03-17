import React, {useState} from 'react';
import {View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

import {
    StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea,
    LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, Colors, StyledButton, ButtonText, Line, MsgBox,
    ExtraView, TextLink, TextLinkContent, ExtraText
} from './../components/styles';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


const {brand, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/Keyboardavoidingwrapper';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const siteLogo = require('../assets/kidsland.png');
  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
            <PageLogo resizeMode="cover" source={siteLogo} />
            <PageTitle>Kids Wonderland</PageTitle>
            <SubTitle>Account Login</SubTitle>

            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
            {({handleChange, handleBlur, handleSubmit, values, isPassword}) => (<StyledFormArea>
                <MyTextInput 
                    label="Email Address"
                    icon="mail"
                    placeholder="example@gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    />

                <MyTextInput 
                    label="Password"
                    icon="lock"
                    placeholder="*******"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    />    
                    <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>    
                </StyledButton>
                <Line />
                <StyledButton onPress={handleSubmit} google={true}>
                    <Fontisto name="google" color={primary} size={25} />
                    <ButtonText google={true}>Google Sign-in</ButtonText>    
                </StyledButton>
                <ExtraView>
                    <ExtraText>Don't have an account? </ExtraText>
                    <TextLink>
                        <TextLinkContent>Sign-up</TextLinkContent>
                    </TextLink>
                </ExtraView>
                </StyledFormArea>)}
            </Formik>
        </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            { isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword? 'md-eye-off': 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login