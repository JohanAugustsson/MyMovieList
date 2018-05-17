import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';


export default class App extends React.Component {
  render() {



    return (
      <ScrollView >
        <View style={styles.wrapper}>
          <Image source={require('./img/deadpool2.jpg')}></Image>

          <View style={{width:"75%"}}>
            <Text style={styles.header}>Deadpool2</Text>
            <Text style={styles.text}>Amerikansk superhjältefilm om Marvel Comics-figuren med samma namn, i regi av David Leitch efter ett manus av Rhett Reese, Paul Wernick och Ryan Reynolds. Filmen utspelar sig i samma kontinuetet som X-Men filmerna</Text>
          </View>
        </View>

        <View style={styles.wrapper}>
          <Image source={require('./img/coco.jpg')}></Image>
          <View style={{width:"75%"}}>
            <Text style={styles.header}>Coco</Text>
            <Text style={styles.text}>Coco är en amerikansk 3D-animerad film producerad av Pixar Animation Studios och distribuerad av Walt Disney Pictures.</Text>
          </View>
        </View>

        <View style={styles.wrapper}>
          <Image source={require('./img/solo.jpg')}></Image>
          <View style={{width:"75%"}}>
            <Text style={styles.header}>Solo: A Star Wars Story</Text>
            <Text style={styles.text}>Kommande amerikansk film som förväntas ha premiär den 25 maj 2018. Filmen handlar om Han Solos äventyr och är den andra fristående Star Wars-filmen</Text>
          </View>
        </View>

        <View style={styles.wrapper}>
          <Image source={require('./img/awengers.jpg')}></Image>
          <View style={{width:"75%"}}>
            <Text style={styles.header}>Awengers: Infinity War</Text>
            <Text style={styles.text}>Amerikansk superhjältefilm från 2018, baserad på superhjältegruppen Avengers från Marvel Comics, producerad av Marvel Studios, och distribuerad av Walt Disney Studios Motion Pictures.</Text>
          </View>
        </View>

        <View style={styles.wrapper}>
          <Image source={require('./img/youwhere.jpg')}></Image>
          <View style={styles.innerWrapper}>
            <Text style={styles.header}>You Were Never Really Here</Text>
            <Text style={styles.text}>Lynne Ramsay är tillbaka med en mörk skildring av en besatt räddare i nöden som fritar flickor från torskar, hallickar och pedofiler. En unik skildring av ett verkligt våld med ett nyskapande filmspråk.</Text>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width:"100%",
    height:"auto",
    backgroundColor:"powderblue",
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginBottom: 2
  },
  innerWrapper : {
    width: "75%"
  },
  img : {
    width: "50%",
    height: "auto",
    borderRadius: 5
  },
  text : {
    fontFamily: "Roboto",
    padding: 10,
    width: "80%"
  },
  header : {
    fontFamily: "serif",
    fontSize: 16,
    paddingLeft: 10,
    width: "80%"
  }
});
