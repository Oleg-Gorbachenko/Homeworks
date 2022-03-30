import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {PeopleType} from "../../HW8";

let initialState: PeopleType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: 'up'})
    expect(initialState[1]).toBe(newState[0])
    expect(initialState[3]).toBe(newState[1])
    expect(initialState[4]).toBe(newState[2])
    expect(initialState[5]).toBe(newState[3])
    expect(initialState[2]).toBe(newState[4])
    expect(initialState[0]).toBe(newState[5])
    expect(newState.length).toBe(6)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT', payload: 'down'})
    expect(initialState[1]).toBe(newState[5])
    expect(initialState[3]).toBe(newState[4])
    expect(initialState[4]).toBe(newState[3])
    expect(initialState[5]).toBe(newState[2])
    expect(initialState[2]).toBe(newState[1])
    expect(initialState[0]).toBe(newState[0])
    expect(newState.length).toBe(6)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK', payload: 18})
    expect(newState.length).toBe(4)
    expect(initialState[1]).toBe(newState[0])
    expect(initialState[3]).toBe(newState[1])
    expect(initialState[4]).toBe(newState[2])
    expect(initialState[5]).toBe(newState[3])
})
