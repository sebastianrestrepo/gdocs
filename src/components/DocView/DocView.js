import React from 'react';
import { Text, Image, View, Button } from 'react-native';

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
                    url: 'https://fotografias.lasexta.com/clipping/cmsimages01/2017/02/07/364CAAAC-A60E-43BB-8FED-05AA0B8F3AF9/58.jpg'
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
                    if (block.type === 'text') {
                        return <Text key={block.id}>{block.text}</Text>
                    } else {
                        return <Image key={block.id} style={{ height: 50 }} source={{ uri: block.url }} />
                    }
                })}

                <View>
                    <Button onPress={this.addText} title="Add Text" />
                    <Button onPress={this.addImage} title="Add Image" />
                </View>

            </View>
        );
    }

}