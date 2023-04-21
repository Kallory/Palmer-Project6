import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ScrollView,
} from 'react-native';
import Album from './components/Album';
import store from './redux';
import { Provider } from 'react-redux'
import glamorous from 'glamorous-native';

const { Image } = glamorous;

const Container = glamorous.view({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
});

const AlbumText = glamorous.text({
    fontSize: 26,
    paddingBottom: 4,
    paddingTop: 4,
    color: '#3d403d'
});

const Title = glamorous.text({
    fontSize: 30,
    paddingBottom: 4,
    paddingTop: 4,
    color: '#854e07'
});

const URL = glamorous.text({
    fontSize: 20,
    paddingBottom: 4,
    paddingTop: 4,
    color: '#ffe500'
});

const ThumbnailURL = glamorous.text({
    fontSize: 20,
    paddingBottom: 4,
    paddingTop: 4,
    color: '#ff759e'
});

const ButtonText = glamorous.text({
    fontSize: 18,
    color: 'white'
});

const Button = glamorous.touchableHighlight(
    { padding: 10 },
    props => ({ backgroundColor: props.warning ? 'red' : 'blue' })
);

const photosMap = new Map();

const photo1 = {
    albumId: 1,
    id: 1,
    title: "Photo1",
    url: "https://paradepets.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.webp",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
};

const photo2 = {
    albumId: 1,
    id: 2,
    title: "Photo2",
    url: "https://paradepets.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkxMzY1Nzg4NDA2MzI2ODgy/cutest-dog-breeds-yorkshire-terrier.webp",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
};

const photo3 = {
    albumId: 2,
    id: 3,
    title: "Photo3",
    url: "https://paradepets.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkxMzY1Nzg4NjczOTEwMzcw/french-bulldog.webp",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
};

photosMap.set(photo1.id, photo1);
photosMap.set(photo2.id, photo2);
photosMap.set(photo3.id, photo3);

console.log(photosMap.get(photo1.id));
console.log(photosMap.get(photo2.id));
console.log(photosMap.get(photo3.id));

let currentPhotoId = 1;
const photoKeysIterator = photosMap.keys();

function getNextPhotoId() {
    const nextPhotoId = photoKeysIterator.next().value;
    if (!nextPhotoId) {
        // Start over if we reach the end of the keys iterator
        currentPhotoId = photosMap.keys().next().value;
    } else {
        currentPhotoId = nextPhotoId;
    }
    return currentPhotoId;
}

const cycleKeys = (map) => {
    console.log("Cycling");
    console.log(map.get(getNextPhotoId()));
}

const App = () => {
    
    return (
        <Provider store={store}>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <AlbumText>Album with glamorous</AlbumText>
                        <Album />
                        <Container>
                            <Title>{photo1.title}</Title>
                            <Image height={250} width={250} borderRadius={20} source={{ uri: photo1.url }} />
                            <URL>{photo1.url}</URL>
                            <ThumbnailURL>{photo1.thumbnailUrl}</ThumbnailURL>
                        </Container>
                        <Container>
                            <Title>{photo2.title}</Title>
                            <Image height={250} width={250} borderRadius={20} source={{ uri: photo2.url }} />
                            <URL>{photo2.url}</URL>
                            <ThumbnailURL>{photo2.thumbnailUrl}</ThumbnailURL>
                        </Container>
                        <Container>
                            <Title>{photo3.title}</Title>
                            <Image height={250} width={250} borderRadius={20} source={{ uri: photo3.url }} />
                            <URL>{photo3.url}</URL>
                            <ThumbnailURL>{photo3.thumbnailUrl}</ThumbnailURL>
                        </Container>
                        <Button onPress={() => cycleKeys(photosMap)}>
                            <ButtonText>Cycle keys</ButtonText>
                        </Button>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </Provider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
    },
});
export default App;