import React from 'react';
import MathHelper from '../src/MathHelper';

describe('MathHelper', () => {
    test('apakah penjumlahannya benar? ', () => {
        expect(MathHelper.jumlah(1, 2)).toBe(3);
        expect(MathHelper.jumlah(1, 3)).toBe(4);
        expect(MathHelper.jumlah(1, 4)).toBe(5);
    });

    test('apakah pengurangannya benar? ', () => {
        expect(MathHelper.kurang(1, 2)).toBe(-1);
        expect(MathHelper.kurang(2, 2)).toBe(0);
        expect(MathHelper.kurang(3, 2)).toBe(1);
    });
});