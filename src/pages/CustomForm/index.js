import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Form, Input, SubmitButton, TextButton} from './styles';

export default class CustomForm extends Component {
  static navigationOptions = {
    title: 'Adicionar um gatinho',
  };

  state = {
    cats: [],
    newCat: {
      name: '',
      age: '',
      description: '',
    },
    update: false,
  };

  componentDidMount() {
    this.getStorage();
  }

  componentDidUpdate(_, prevState) {
    const {cats} = this.state;

    if (JSON.stringify(prevState.cats) !== JSON.stringify(cats)) {
      this.setStorage(cats);
    }
  }

  setStorage(cats) {
    AsyncStorage.setItem('cats', JSON.stringify(cats));
  }

  async getStorage(_, prevState) {
    const cats = await AsyncStorage.getItem('cats');

    const {navigation} = this.props;
    const cat = navigation.getParam('item');

    if (cats) {
      this.setState({
        cats: JSON.parse(cats),
        update: cat ? true : false,
        newCat: cat ? cat : '',
      });
    }
  }

  handleNavigate = () => {
    const {navigation} = this.props;

    navigation.navigate('Main');
  };

  handleSubmit = () => {
    const {cats, newCat} = this.state;

    this.setState({
      cats: [newCat, ...cats],
      newCat: '',
    });

    this.handleNavigate();
  };

  handleUpdate = () => {
    const {cats, newCat} = this.state;
    const {navigation} = this.props;
    const index = navigation.getParam('index');
    const updatedCats = cats;
    updatedCats[index] = newCat;

    this.setState({
      cats: updatedCats,
    });

    this.setStorage(cats);
    this.handleNavigate();
  };

  render() {
    const {newCat, update} = this.state;

    return (
      <Container>
        <Form>
          <Input
            defaultValue={newCat.name}
            value={update ? null : newCat.name}
            onChangeText={text =>
              this.setState({newCat: {...newCat, name: text}})
            }
            placeholder="Nome do gatinho"
          />
          <Input
            defaultValue={newCat.age}
            value={update ? null : newCat.age}
            onChangeText={text =>
              this.setState({newCat: {...newCat, age: text}})
            }
            placeholder="Idade do gatinho"
          />
          <Input
            defaultValue={newCat.description}
            value={update ? null : newCat.description}
            onChangeText={text =>
              this.setState({newCat: {...newCat, description: text}})
            }
            placeholder="Descrição do gatinho"
            returnKeyType="send"
            onSubmitEditing={update ? this.handleUpdate : this.handleSubmit}
          />
          <SubmitButton
            onPress={update ? this.handleUpdate : this.handleSubmit}>
            <TextButton>Add</TextButton>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}