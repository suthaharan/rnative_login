import React from 'react';
import {View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
    InnerContainer, PageTitle, SubTitle, StyledFormArea,
    LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, StyledButton, ButtonText, Line,
    WelcomeContainer, WelcomeImage, Avavtar
} from './../components/styles';

import {Octicons, Ionicons} from '@expo/vector-icons';


const Welcome = () => {
  const siteLogo = require('../assets/kidsland.png');
  return (
    <>
        <StatusBar style="light" />
        <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('../assets/kids-collage.png')} />    

            <WelcomeContainer>
                   
            <PageTitle welcome={true}>Welcome kids!</PageTitle>
            <SubTitle  welcome={true}>Tony Blair</SubTitle>
            <SubTitle  welcome={true}>tony@example.com</SubTitle>
            <StyledFormArea>
                <Avavtar resizeMode="cover" source={siteLogo} />
                <Line />
                <StyledButton onPress={() => {}}>
                    <ButtonText>Logout</ButtonText>    
                </StyledButton> 
            </StyledFormArea>
            </WelcomeContainer>
        </InnerContainer>
    </>
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

export default Welcome