import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Triangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cote1: '',
            cote2: '',
            cote3: '',
            resultat: "Le Résultat s'affichera ici",
            text_resultat: {
                textAlign: 'center',
                fontSize: 14,
                color: '#F0A149',
                marginBottom: 20,
            },
        }
    }

    _printResult(text, color) {
        switch (color) {
            case 0:
                this.setState({text_resultat: {
                                    textAlign: 'center',
                                    fontSize: 14,
                                    color: '#F0A149',
                                    marginBottom: 20,
                                }});
                break;
            case 1:
                this.setState({text_resultat: {
                                    textAlign: 'center',
                                    fontSize: 14,
                                    color: '#4DC29D',
                                    marginBottom: 20,
                                }});
                break;

        }
        this.setState({resultat: text});
    }

    _validation() {
        console.log('onPress')
        let tab = [Number(this.state.cote1), Number(this.state.cote2), Number(this.state.cote3)];

        console.log(tab)
        let define = true;
        let valid = true;
        let invalid_values = '';
        let message;
        for (let i=0; i<3; i++) {
            if (isNaN(tab[i])) {
                define = false;
                invalid_values += `${i+1} `
            } 
        }
        if (define) {
            if (tab[0] >= tab[1]+tab[2]) {
                valid = false
                message = 'Wouaaawww le côté 1 est beaucoup trop grand';
            } else if (tab[1] >= tab[0]+tab[2]) {
                valid = false
                message = 'Wouaaawww le côté 2 est beaucoup trop grand';
            } else if (tab[2] >= tab[1]+tab[0]) {
                valid = false
                message = 'Wouaaawww le côté 3 est beaucoup trop grand';
            }
        }
        if (define && valid) {
            if (tab[0] == tab[1] && tab[1] == tab[2]) {
                this._printResult(`Un triangle équilatéral de côté ${tab[0]}`, 1);
            } 
            else if (tab[0] == tab[1]) {
                this._printResult(`Un triangle isocèle de côté ${tab[0]} et de base ${tab[2]}`, 1);
            } else if (tab[1] == tab[2]) {
                this._printResult(`Un triangle isocèle de côté ${tab[1]} et de base ${tab[0]}`, 1);
            } else if (tab[2] == tab[0]) {
                this._printResult(`Un triangle isocèle de côté ${tab[2]} et de base ${tab[1]}`, 1);
            } 
            else if (Math.max.apply(null, tab) == tab[0] && Math.pow(tab[0], 2) == Math.pow(tab[1], 2)+Math.pow(tab[2], 2)) {
                this._printResult(`Un triangle rectangle d'hypoténuse ${tab[0]}`, 1);
            } else if (Math.max.apply(null, tab) == tab[1] && Math.pow(tab[1], 2) == Math.pow(tab[0], 2)+Math.pow(tab[2], 2)) {
                this._printResult(`Un triangle rectangle d'hypoténuse ${tab[1]}`, 1);
            } else if (Math.max.apply(null, tab) == tab[2] && Math.pow(tab[2], 2) == Math.pow(tab[1], 2)+Math.pow(tab[0], 2)) {
                this._printResult(`Un triangle rectangle d'hypoténuse ${tab[2]}`, 1);
            }
            
            else {
                this._printResult(`Un triangle quelconque, Nickel tu me fais perdre mon temps !`, 0);
            }
        } else if (!define) {
            this._printResult(`Oups la case ${invalid_values}n'est pas encore définie`, 0);
        } else {
            this._printResult(message, 0);
        }
    }

    _typing(text, bloc) {
        console.log(`typing ${text} into ${bloc}`)
        switch (bloc) {
            case 1:
                this.setState({cote1: text});
                break;
            case 2:
                this.setState({cote2: text})
                break;
            case 3:
                this.setState({cote3: text})
                break;
        }
    }




    render () {
        return (
            <View style={view_styles.container}>
                <View style={view_styles.top}>
                    <Text style={component_styles.text_colab}>Jeff et 4T</Text>
                    <Text style={component_styles.text_title}>Triangle</Text>
                </View>
                <View>
                    <View>
                        <Text style={component_styles.text_cote}>Entre le côté 1 : </Text>
                        <TextInput 
                            placeholder='Valeur entière'
                            onChangeText={(text) => this._typing(text, 1)}
                            style={component_styles.text_valeure}
                            placeholderTextColor = '#F0A149'
                        />
                    </View>
                    <View>
                        <Text style={component_styles.text_cote}>Entre le côté 3 : </Text>
                        <TextInput 
                            placeholder='Valeur entière'
                            onChangeText={(text) => this._typing(text, 2)}
                            style={component_styles.text_valeure}
                            placeholderTextColor = '#F0A149'
                        />
                    </View>
                    <View>
                        <Text style={component_styles.text_cote}>Entre le côté 2 : </Text>
                        <TextInput 
                            placeholder='Valeur entière'
                            onChangeText={(text) => this._typing(text, 3)}
                            style={component_styles.text_valeure}
                            placeholderTextColor = '#F0A149'
                        />
                    </View>
                </View>
                <View  sytle={view_styles.resultat}>
                    <Text style={component_styles.text_intro_resultat}>Ton triangle est : </Text>
                    <Text style={this.state.text_resultat}>{this.state.resultat}</Text>
                </View>
                <Button title='Valider' onPress={() => this._validation()}  color='#4DC29D'/>
            </View>
        )
    }
}



const view_styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F3EAC9',
    },

    top: {
        backgroundColor: '#9C4440',
    },
    middle: {
        backgroundColor: '#F3EAC9',
    },
    result: {
        backgroundColor: '#fff',
    },
});

const component_styles = StyleSheet.create({
    text_colab: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 14,
        color: '#F3EAC9',
        marginHorizontal: 5,
        backgroundColor: '#9C4440',
    },
    text_title: {
        textAlign: 'center',
        fontSize: 35,
        color: '#F3EAC9',
        marginBottom: 20,
        backgroundColor: '#9C4440',
    },
    button: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#F3EAC9',
    },
    text_cote: {
        fontSize: 14,
        color: '#9C4440',
        marginTop: 20,
        marginHorizontal: 5,
        backgroundColor: '#F3EAC9',
    },
    text_valeure: {
        textAlign: 'center',
        fontSize: 14,
        color: '#4DC29D',
        backgroundColor: '#F3EAC9',
    },
    text_intro_resultat: {
        fontSize: 20,
        color: '#9C4440',
        marginTop: 20,
        marginHorizontal: 5,
        backgroundColor: '#F3EAC9',
    },
});

