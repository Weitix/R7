import { View , Text, Image, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Constants  from "expo-constants";

//colors

const StatusBarHeight = Constants.StatusBarHeight; 

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#000",
    green: "#10B981",
    red: "#EF4444",
};

const {primary,secondary,tertiary,darkLight,brand,green,red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;
export const InnerContainer = styled.View`
    flex: 1;
    
    align-items:center;
`;

export const PageLogo = styled.Image`
   
    height:200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: 400;
    color: ${brand};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20;
    letter-spasing: 1px;
    font-weight: 400;
    color: ${tertiary};
`


export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical:3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size:13px;
    texr-align: left;
    padding-left:10px;
`;

export const LeftIcon = styled.View`
    left:10px;
    padding-top:35px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    left: 15px,
    top:38px,
    position: absolute;
    z-index:1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius:5px;
    margin-vertical:5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16;
`;