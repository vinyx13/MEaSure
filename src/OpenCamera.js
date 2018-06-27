import React, { Component } from 'react';
import { Button } from 'react-native';

export class OpenCamera extends Component {
    render() {
        return(
            <Button onPress={openNativeCamera} 
            title="Press Me"></Button>
        );
    }
}

function openNativeCamera() {
    alert("Open Native Camera");
}



