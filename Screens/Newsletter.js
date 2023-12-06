import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';

const Newsletter = () => {
  const handleLinkPress = () => {
    const url = 'https://loremipsum.io/generator/?n=5&t=p';
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.box}>
          <Text style={styles.title}>Newsletter</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Blandit turpis cursus in hac habitasse platea dictumst. Odio tempor orci dapibus ultrices. Dolor sit amet consectetur adipiscing. Etiam sit amet nisl purus. Eget magna fermentum iaculis eu non. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Malesuada fames ac turpis egestas sed tempus. Massa sapien faucibus et molestie ac feugiat sed. Sapien faucibus et molestie ac feugiat. Dictum fusce ut placerat orci. Porttitor eget dolor morbi non arcu risus quis varius quam. Est velit egestas dui id ornare arcu odio ut.

Pellentesque massa placerat duis ultricies lacus sed turpis. Facilisis sed odio morbi quis. Consectetur adipiscing elit ut aliquam purus. Tincidunt augue interdum velit euismod in pellentesque massa. Maecenas volutpat blandit aliquam etiam erat velit. Viverra accumsan in nisl nisi scelerisque eu. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Velit ut tortor pretium viverra suspendisse. Nunc eget lorem dolor sed viverra ipsum. Id consectetur purus ut faucibus pulvinar. Integer enim neque volutpat ac tincidunt.

Mauris augue neque gravida in. Lobortis scelerisque fermentum dui faucibus in. Adipiscing enim eu turpis egestas. Viverra orci sagittis eu volutpat. Vulputate ut pharetra sit amet aliquam id diam. Ipsum dolor sit amet consectetur adipiscing. Risus at ultrices mi tempus imperdiet nulla malesuada. Amet consectetur adipiscing elit duis tristique. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Vitae purus faucibus ornare suspendisse sed nisi. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Ac auctor augue mauris augue neque gravida in fermentum. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Massa placerat duis ultricies lacus. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Quam adipiscing vitae proin sagittis nisl rhoncus mattis.

Semper quis lectus nulla at volutpat diam ut venenatis. Phasellus faucibus scelerisque eleifend donec pretium. Eu volutpat odio facilisis mauris sit amet massa. Nulla pellentesque dignissim enim sit. Elit duis tristique sollicitudin nibh sit amet. Integer vitae justo eget magna fermentum. Quis commodo odio aenean sed adipiscing diam donec. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Risus viverra adipiscing at in tellus integer. At ultrices mi tempus imperdiet nulla malesuada.

Lacus luctus accumsan tortor posuere ac ut consequat. Nibh nisl condimentum id venenatis a condimentum vitae. Non enim praesent elementum facilisis leo vel fringilla est. Varius duis at consectetur lorem donec. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Id neque aliquam vestibulum morbi blandit cursus risus. Donec ac odio tempor orci. Sit amet cursus sit amet. Pharetra sit amet aliquam id diam maecenas ultricies. Eu tincidunt tortor aliquam nulla facilisi cras. Hac habitasse platea dictumst vestibulum rhoncus. Id aliquet risus feugiat in. In iaculis nunc sed augue lacus viverra vitae. Purus non enim praesent elementum facilisis. Bibendum enim facilisis gravida neque. Volutpat sed cras ornare arcu dui. Erat velit scelerisque in dictum non consectetur. Potenti nullam ac tortor vitae purus faucibus.
          </Text>
        </View>

        <TouchableOpacity onPress={handleLinkPress}>
          <View style={styles.box}>
            <Text style={styles.conclusion}>
              This article was created and hosted by Loremipso.io.
              <Text style={styles.link}> Click here to read in its original link.</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  box: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  body: {
    color: '#333333',
  },
  conclusion: {
    color: '#555555',
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default Newsletter;
