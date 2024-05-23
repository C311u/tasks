import React, {Component} from "react"
import { StyleSheet, View, Text } from "react-native"

export default class Task_List extends Component { //uma classe que vai ter as características de uma tela; está herdando características do Components
    render(){ //renderizar os conteúdos da tela
        return(
            <View>
                <Text>Lista de tarefas</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
}) //variável para colocar o CSS