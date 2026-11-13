const verificarIdade = require('./idade');

test('Deve retornar true para idade adulta', () => {
    expect(verificarIdade(25)).toBe(true);
});

test('Deve retornar false para menor de idade', () => {
    expect(verificarIdade(15)).toBe(false);
});

test('Deve retornar true para idade igual a 18', () => {
    expect(verificarIdade(18)).toBe(true);
});