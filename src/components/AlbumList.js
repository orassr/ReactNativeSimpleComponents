import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

    //this method will fetch our data(componentWillMount)
state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    //helper method to create the album details list.
    renderAlbums() {
        // list of albums
        // returns this array :
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        ); //fat arrow action
    }

    render() {
            console.log(this.state);

        return (
            // making a reference to (renderAlbums)
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}


export default AlbumList;
