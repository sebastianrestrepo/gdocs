import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DocView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blocks: [
                {
                    id: 0,
                    type: 'text',
                    text: 'Lorem ipsum lo que sea'
                },
                {
                    id: 1,
                    type: 'img',
                    url: 'https://cdn-images-1.medium.com/max/2600/1*wFXJ9xfPOdEMcY8uXrZY0Q.jpeg'
                }
            ],
        };
        this.addText = this.addText.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    addText() {
        this.setState((prevState) => {
            return {
                blocks: [...prevState.blocks, {
                    id: prevState.blocks.length,
                    type: 'text',
                    text: 'Hola' + Math.random()
                }]
            }
        });
    }

    addImage() {
        this.setState((prevState) => {
            return {
                blocks: [...prevState.blocks, {
                    id: prevState.blocks.length,
                    type: 'img',
                    url: 'https://cdn-images-1.medium.com/max/1091/1*qvFfplwA_GPfzCElidWS4Q.png'
                }]
            }
        });
    }


    render() {
        let { id } = this.props.match.params;
        return (
            <View>
                <Text>DocView {id}</Text>

                {this.state.blocks && this.state.blocks.map((block) => {
                    if (bloack.type === 'text') {
                        return <Text key={block.id}>{block.text}</Text>
                    } else {
                        return <Image key={block.id} style={{ height: 50 }} source={{ uri: block.url }}></Image>
                    }
                })}

                <View>
                    <Button onPress={this.addText}>Add Text</Button>
                    <Button onPress={this.addImage}>Add Image</Button>
                </View>

            </View>
        );
    }

}