import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  { 
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '16/07/2023',
    type: 0 // despesas
  },
  { 
    id: 2,
    label: 'Pix cliente X',
    value: '2.500,00',
    date: '16/07/2023',
    type: 1 // receitas
  },
  { 
    id: 3,
    label: 'Salário',
    value: '9.000,00',
    date: '16/07/2023',
    type: 1 // receitas
  }
]

export default function Home() {
  return(
    <View style={styles.container}>
      <Header name={'Marcelo Simim'}/>

      <Balance balance='15.000,00' expense='-500,00' />

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList style={styles.list}
        data={list}
        keyExtrator={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => <Movements data={item}/>}
        />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: { 
    fontWeight: 'bold',
    fontSize: 18,
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});