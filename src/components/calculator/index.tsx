import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import CalculatorKeyboard from "./calculatorKeyboard";
import CalculatorDisplay from "./calculatorDisplay";

export default function Calculator (){

    const [valorTela, setValorTela] = useState('')
    const [valorTelaSuperior, setValorTelaSuperior] = useState('')
    const [valorAux1, setValorAux1] = useState(0)
    const [valorAux2, setValorAux2] = useState(0)
    const [operador, setOperador] = useState('')

    useEffect(() => {
        realizarOperacao(valorAux1, valorAux2, operador)
    }, [valorAux2])

    useEffect(() => {
        if (valorAux1 == 0){
            setValorTelaSuperior("")
        }
        else{
            setValorTelaSuperior(valorAux1 + " " + operador)
        }
    }, [operador])

    const realizarOperacao = (valor1: number, valor2: number, operador: string) => {
        let valor = 0
        let valorString = ''

        switch (operador) {
            case "÷":
                valor = valor1 / valor2
                valorString = valor.toString()
                if (valorString.length > 9) {
                    valorString = valorString.substring(0, 9)
                    if (valorString[8] == '.') {
                        valorString = valorString.substring(0, 8)
                    }
                }
                setValorTela(valorString)
                setValorAux1(0)
                setValorAux2(0)
                setOperador('')
                break
            case "x":
                valor = valor1 * valor2
                valorString = valor.toString()
                if (valorString.length > 9) {
                    valorString = valorString.substring(0, 9)
                    if (valorString[8] == '.') {
                        valorString = valorString.substring(0, 8)
                    }
                }
                setValorTela(valorString)
                setValorAux1(0)
                setValorAux2(0)
                setOperador('')
                break
            case "+":
                valor = valor1 + valor2
                valorString = valor.toString()
                if (valorString.length > 9) {
                    valorString = valorString.substring(0, 9)
                    if (valorString[8] == '.') {
                        valorString = valorString.substring(0, 8)
                    }
                }
                setValorTela(valorString)
                setValorAux1(0)
                setValorAux2(0)
                setOperador('')
                break
            case "-":
                valor = valor1 - valor2
                valorString = valor.toString()
                if (valorString.length > 9) {
                    valorString = valorString.substring(0, 9)
                    if (valorString[8] == '.') {
                        valorString = valorString.substring(0, 8)
                    }
                }
                setValorTela(valorString)
                setValorAux1(0)
                setValorAux2(0)
                setOperador('')
                break
        }
    }

    const operando = (operando: string) => {
        switch (operando) {
            case "AC":
                setValorTela('')
                break
            case "⌫":
                setValorTela(valorTela.substring(0, valorTela.length-1))
                break
            case "÷":
                if (valorTela.includes('.')){
                    setValorAux1(Number.parseFloat(valorTela))
                }
                else{
                    setValorAux1(Number.parseInt(valorTela))
                }
                setOperador(operando)
                setValorTela('')
                break
            case "x":
                if (valorTela.includes('.')){
                    setValorAux1(Number.parseFloat(valorTela))
                }
                else{
                    setValorAux1(Number.parseInt(valorTela))
                }
                setOperador(operando)
                setValorTela('')
                break
            case "+":
                if (valorTela.includes('.')){
                    setValorAux1(Number.parseFloat(valorTela))
                }
                else{
                    setValorAux1(Number.parseInt(valorTela))
                }
                setOperador(operando)
                setValorTela('')
                break
            case "-":
                if (valorTela.includes('.')){
                    setValorAux1(Number.parseFloat(valorTela))
                }
                else{
                    setValorAux1(Number.parseInt(valorTela))
                }
                setOperador(operando)
                setValorTela('')
                break
            case ".":
                if (!valorTela.includes('.')){
                    if (valorTela == ''){
                        setValorTela('0.')
                    }
                    else{
                        setValorTela(valorTela + '.')
                    }
                }
                break
            case "=":
                if (valorTela.includes('.')){
                    setValorAux2(Number.parseFloat(valorTela))
                }
                else{
                    setValorAux2(Number.parseInt(valorTela))
                }
                break
        }
    }

    const recebeValor = (valorBotao: any) => {
        if (valorTela.length == 9){
            if (typeof valorBotao == 'number'){
                alert("Máximo de dígitos em tela atingido!!")
            }
            else{
                operando(valorBotao)
            }
        }
        else{
            if (typeof valorBotao == 'number'){
                if (valorTela == '0'){
                    if(valorBotao != 0){
                        setValorTela(valorBotao.toString())
                    }
                }
                else{
                    setValorTela(valorTela + valorBotao)
                }
            }
            else{
                operando(valorBotao)
            }
        }
    }
    
    return(
        <View style={styles.calculadora}>
            <CalculatorDisplay
                displayValue1={valorTelaSuperior}
                displayValue2={valorTela}
            />
            <CalculatorKeyboard onPress={recebeValor} />
        </View>
    )
}

const styles = StyleSheet.create({
    calculadora: {
        rowGap: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        height: Dimensions.get("screen").height * 0.8,
    }
})