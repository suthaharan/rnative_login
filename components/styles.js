import styled from 'styled-components/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#e5e7eb",
    tertiary: "#1f2937",
    darkLight: "#9ca3af",
    brand: "#6d28d9",
    green: "#10b981",
    red: "#ef4444"
}

const {primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 50}px;
    background-color: ${primary};
`;


export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

export const Avavtar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    min-width: 100%;
    height: 50%;
`;


export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
    ${(props) => props.welcome && `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    height: 60px;
    margin-vertial: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
    font-size: 16px; 
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 14px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1
`;


export const StyledButton = styled.TouchableOpacity`
    background-color: ${brand};
    padding: 15px;
    justify-content: center;
    border-radius: 5px;
    height: 60px;
    margin-vertial: 5px;
    align-items: center;
    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
    ${(props) => props.google == true && `
        padding: 25px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;


export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;


export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    color: ${tertiary};
    font-size: 15px;
`;


export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;

