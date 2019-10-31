import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const SubmitButton = styled(RectButton)`
  padding: 12px;
  justify-content: center;
  align-items: center;
  background: #003366;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Message = styled.Text`
  font-size: 18px;
  color: #003366;
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const Cat = styled.View`
  flex-direction: row;
`;

export const CatName = styled.Text`
  font-size: 20px;
  color: #003366;
`;

export const CatAge = styled.Text`
  font-size: 18px;
  color: #003366;
`;
