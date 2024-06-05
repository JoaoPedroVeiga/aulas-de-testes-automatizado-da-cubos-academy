import subtracao from "./subtracao"; 

describe('Testes de subtração', () => {
    test('deve verificar o resultado de uma subtração', () => {
        expect(subtracao(8.7, 3.5)).toBeCloseTo(5.2) // toBeCloseTo cerve para ponto flutuante 
        expect(subtracao(8,2)).toBeCloseTo(6)
        expect(subtracao(10,3)).toBeCloseTo(7)
    })

    test('deve verificar o resultado incorreto de uma subtração', () => {
        expect(subtracao(8,3)).not.toBeCloseTo(4)
    })
})

