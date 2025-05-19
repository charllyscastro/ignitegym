
import {Text, View } from 'react-native';
import {useFonts,Roboto_700Bold, Roboto_400Regular} from '@expo-google-fonts/roboto'

export default function App() {

  const [fontsLoading] = useFonts({ Roboto_700Bold, Roboto_400Regular})
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     { fontsLoading ? <Text>Home</Text> : <View />}
    </View>
  );
}
