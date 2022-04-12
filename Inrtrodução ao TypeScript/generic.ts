function adcionaApendiceALista<T>(array: any[], valor: T) {
    return array.map(item => item + valor);
}

adcionaApendiceALista([1, 2, 3], 4);

adcionaApendiceALista(['a', 'b', 'c'], 1);