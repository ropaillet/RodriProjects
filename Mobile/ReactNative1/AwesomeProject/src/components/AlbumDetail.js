import React from 'react';
import { Linking, Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button1 from './Button1';

const AlbumDetail = ({ album }) => {
  //deconstruct the props object into an object and numerate them
  const { title, artist, thumbnail_image, image, url } = album;
  //deconstruct style object to make it acccesible without typing.styles
  const { cardHeaderLeft, cardHeaderRight,
          cardHeaderLeftImage, albumTitle,
          artistName, albumImageCont, albumImage, buttonView } = styles;
  //component return
  return (
    <Card>
      <CardSection>
        <View style={cardHeaderLeft}>
          <Image
            style={cardHeaderLeftImage}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={cardHeaderRight}>
          <Text style={albumTitle}>{title}</Text>
          <Text style={artistName}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={albumImageCont}>
          <Image
            style={albumImage}
            source={{ uri: image }}
          />
        </View>
      </CardSection>

      <CardSection>
        <View style={buttonView}>
            <Button1 onPress={() => Linking.openURL(url)}>
               Buy Now on Amazon
            </Button1>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  cardHeaderLeft: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeaderLeftImage: {
    borderRadius: 50,
    width: 50,
    height: 50
  },
  cardHeaderRight: {
    marginLeft: 7,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  artistName: {
    fontStyle: 'italic',
    color: '#000000',
    fontFamily: 'Sacramento',
    fontFamily: 'cursive',
  },
  albumImage: {
    flex: 1,
    height: 300,
  },
  albumImageCont: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  buttonView: {
    flexDirection: 'row',
    flex: 1,
  }
};

export default AlbumDetail;
