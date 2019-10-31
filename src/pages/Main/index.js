import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationEvents} from 'react-navigation';

import {
  Container,
  Message,
  SubmitButton,
  TextButton,
  List,
  Cat,
  CatName,
  CatAge,
} from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Gatinhos da Fabrícia',
  };

  state = {
    cats: [],
    newCat: {
      name: '',
      age: '',
      description: '',
    },
  };

  componentDidMount() {
    this.handleStorage();
  }

  componentDidUpdate(_, prevState) {
    const {cats} = this.state;

    if (JSON.stringify(prevState.cats) !== JSON.stringify(cats)) {
      AsyncStorage.setItem('cats', JSON.stringify(cats));
    }
  }

  async handleStorage(_, prevState) {
    const cats = await AsyncStorage.getItem('cats');
    console.log('handleStorage', {cats});
    if (cats) {
      this.setState({cats: JSON.parse(cats)});
      console.log('setState', this.state.cats);
    }
  }

  handleNavigate = (item, index) => {
    const {navigation} = this.props;

    item
      ? navigation.navigate('CustomForm', {item, index})
      : navigation.navigate('CustomForm');
  };

  handleDelete = item => {
    const {cats} = this.state;
    const copyCats = cats.slice();
    const index = copyCats.indexOf(item);

    if (index !== -1) {
      copyCats.splice(index, 1);
      this.setState({
        cats: copyCats,
      });
    }
  };

  render() {
    const {cats} = this.state;

    return (
      <Container>
        <NavigationEvents onWillFocus={() => this.handleStorage()} />
        <SubmitButton title="add" onPress={this.handleNavigate}>
          <TextButton>Adicionar</TextButton>
        </SubmitButton>
        {cats.length ? (
          <List
            data={cats}
            keyExtractor={(cat, index) => index.toString()}
            renderItem={({item, index}) => (
              <Cat>
                <CatName>{item.name}</CatName>
                <SubmitButton onPress={() => this.handleNavigate(item, index)}>
                  <TextButton>Editar</TextButton>
                </SubmitButton>
                <SubmitButton onPress={() => this.handleDelete(item)}>
                  <TextButton>Excluir</TextButton>
                </SubmitButton>
              </Cat>
            )}
          />
        ) : (
          <Container>
            <Message>Não há gatinhos cadastrados</Message>
          </Container>
        )}
      </Container>
    );
  }
}