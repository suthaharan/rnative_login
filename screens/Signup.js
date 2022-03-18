import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

import {
    StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea,
    LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, Colors, StyledButton, ButtonText, Line, MsgBox,
    ExtraView, TextLink, TextLinkContent, ExtraText
} from './../components/styles';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


const {brand, darkLight, primary} = Colors;
//Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';
// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/Keyboardavoidingwrapper';

const Signup = ({navigation}) => {

  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  // Actual date
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  }

  const showDatePicker = () => {
    setShow(true);
  }
  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
            <PageTitle>Kids Wonderland</PageTitle>
            <SubTitle>Account Signup</SubTitle>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
            <Formik
                initialValues={{email: '', password: '', confirmpassword: '', dateofbirth:'', fullname: ''}}
                onSubmit={(values) => {
                    console.log(values);
                    navigation.navigate('Welcome');
                }}
            >
            {({handleChange, handleBlur, handleSubmit, values, isPassword}) => (<StyledFormArea>
                <MyTextInput 
                    label="Full Name"
                    icon="person"
                    placeholder="Tony Blair"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                    value={values.fullname}
                    />
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
                    label="Date of Birth"
                    icon="calendar"
                    placeholder="YYYY - MM - DD"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('dateofbirth')}
                    onBlur={handleBlur('dateofbirth')}
                    value={dob ? dob.toDateString(): ''}
                    isDate={true}
                    editable={false}
                    showDatePicker={showDatePicker}
                    />
                <MyTextInput 
                    label="Password"
                    icon="lock"
                    placeholder="* * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    />
                <MyTextInput 
                    label="Confirm Password"
                    icon="lock"
                    placeholder="* * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('confirmpassword')}
                    onBlur={handleBlur('confirmpassword')}
                    value={values.confirmpassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    />        
                    <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>Signup</ButtonText>    
                </StyledButton>
                <Line />
                <ExtraView>
                    <ExtraText>Already registered? </ExtraText>
                    <TextLink onPress={()=> navigation.navigate('Login')}>
                        <TextLinkContent>Sign-in</TextLinkContent>
                    </TextLink>
                </ExtraView>
                </StyledFormArea>)}
            </Formik>
        </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, showDatePicker, isDate, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
                </TouchableOpacity>}
            { isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword? 'md-eye-off': 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Signup