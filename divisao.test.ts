import divisao from "./divisao";

describe('Testes de divisão', () => {
    test('deve verificar o resultado de uma divisão', () => {
        expect(divisao(10, 5)).toBeCloseTo(2) // toBeCloseTo cerve para ponto flutuante 
        expect(divisao(8.2, 2)).toBeCloseTo(4.1)
        expect(divisao(10, 2)).toBeCloseTo(5)
    })

    test('deve verificar o resultado incorreto de uma divisão', () => {
        expect(divisao(8,3)).not.toBeCloseTo(4)
    })
})

