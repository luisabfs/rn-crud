import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  border-bottom-width: 2px;
  padding: 5px;
`;

export const Input = styled.TextInput` 
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #003366;
  border-radius: 7px;
`;

export const SubmitButton = styled(RectButton)`
  padding: 12px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  background: #003366;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
`;
