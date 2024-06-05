import multiplicacao from "./multiplicacao";

describe('Testes de multiplicação', () => {
    test('deve verificar o resultado de uma multiplicação', () => {
        expect(multiplicacao(7, 3)).toBeCloseTo(21) // toBeCloseTo cerve para ponto flutuante 
        expect(multiplicacao(6,5)).toBeCloseTo(30)
        expect(multiplicacao(10,3)).toBeCloseTo(30)
    })

    test('deve verificar o resultado incorreto de uma multiplicação', () => {
        expect(multiplicacao(8,3)).not.toBeCloseTo(4)
    })
})

