// import React, {useState} from 'react'
// import {homeWorkReducer} from './bll/homeWorkReducer'
// import s from './HW8.module.css'
// import s2 from '../../s1-main/App.module.css'
// import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
// import User from './User'

/*
* 1 - дописать типы и логику (сортировка по имени, фильтрация по совершеннолетию)
* homeWorkReducer, проверить тестом
*
* 2 - дописать компоненту User
* 3 - сделать стили в соответствии с дизайном
* */


//Состояние сайта при обратной сортировке по имени:
//Состояние сайта при сортировке по имени по алфавиту:
//Состояние сайта при фильтрации по совершеннолетию:


import  { useState } from 'react'
import User from './User'
import s from "./HW8.module.css"
import s2 from "./HW8.module2.css"
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {homeWorkReducer} from './bll/homeWorkReducer'


export type UserType = {
    _id: number
    name: string
    age: number
}



export const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 16},
    {_id: 2, name: 'Коля', age: 40},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 55},
    {_id: 5, name: 'Ирина', age: 66},
]

const HW8 = () => {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const sortUp = () => setPeople(homeWorkReducer(people, { type: 'sort', payload: 'up' }))
    const sortDown = () => setPeople(homeWorkReducer(people, { type: 'sort', payload: 'down' }))
    const check18 = () => setPeople(homeWorkReducer(people, { type: 'check', payload: 18 }))

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #8</div>
            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.buttonsContainer}>
                        <SuperButton id={'hw8-button-up'} onClick={sortUp} xType="secondary">
                            Sort up
                        </SuperButton>
                        <SuperButton id={'hw8-button-down'} onClick={sortDown} xType="secondary">
                            Sort down
                        </SuperButton>
                        <SuperButton id={'hw8-button-18'} onClick={check18} xType="secondary">
                            Check 18+
                        </SuperButton>
                    </div>

                    <table id={'hw8-users'} className={s.users}>
                        <thead className={s.thead}>
                        <tr>
                            <td className={s.nameCol}>Name</td>
                            <td className={s.ageCol}>Age</td>
                        </tr>
                        </thead>
                        <tbody>
                        {people.map(u => (
                            <User key={u._id} u={u}/>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HW8
// const initialPeople: UserType[] = [
//     // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
//     {_id: 0, name: 'Кот', age: 3},
//     {_id: 1, name: 'Александр', age: 16},
//     {_id: 2, name: 'Коля', age: 40},
//     {_id: 3, name: 'Виктор', age: 44},
//     {_id: 4, name: 'Дмитрий', age: 55},
//     {_id: 5, name: 'Ирина', age: 66},
// ]
//
// const HW8 = () => {
//     const [people, setPeople] = useState<UserType[]>(initialPeople)
//     const [currentSort, setCurrentSort] = useState('')
//
//     const finalPeople = people.map(u => <User key={u._id} u={u}/>)
//
//     const sortUp = () => setPeople(homeWorkReducer(people,{ type: 'sort', payload: 'up' }))
//     const sortDown = () => setPeople(homeWorkReducer(people,{ type: 'sort', payload: 'down' }))
//     const check18 = () => setPeople(homeWorkReducer(people,{ type: 'check', payload: 18 }))
//
//     console.log('People IDs:', people.map(p => p._id))
//     console.log('Rendered keys:', finalPeople.map(f => f.key))
//
//     return (
//         <div id={'hw3'}>
//             <div className={s2.hwTitle}>Homework #8</div>
//             <div className={s2.hw}>
//                 <div className={s.container}>
//                     <div className={s.buttonsContainer}>
//                         <SuperButton id={'hw8-button-up'} onClick={sortUp}  xType={currentSort === 'up' ? '' : 'secondary'}>Sort up</SuperButton>
//                         <SuperButton id={'hw8-button-down'} onClick={sortDown} xType={currentSort === 'down' ? '' : 'secondary'}>Sort down</SuperButton>
//                         <SuperButton id={'hw8-button-18'} onClick={check18} xType={currentSort === '18' ? '' : 'secondary'}>Check 18+</SuperButton>
//                     </div>
//
//                     <table id={'hw8-users'} className={s.users}>
//                         <thead className={s.thead}>
//                         <tr>
//                             <td className={s.nameCol}>Name</td>
//                             <td className={s.ageCol}>Age</td>
//                         </tr>
//                         </thead>
//                         <tbody>{finalPeople}</tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }






// const HW8 = () => {
//     const [people, setPeople] = useState<UserType[]>(initialPeople)
//     const [currentSort, setCurrentSort] = useState('')
//
//     const finalPeople = people.map((u: UserType) => (
//         <User key={u._id} u={u}/>))
//
//     const sortUp = () => {
//         setPeople(homeWorkReducer(people,{ type: 'sort', payload: 'up' }))
//         setCurrentSort('up')
//     }
//
//     const sortDown = () => {
//         setPeople(homeWorkReducer(people, { type: 'sort', payload: 'down' }))
//         setCurrentSort('down')
//     }
//
//     const check18 = () => {
//         setPeople(homeWorkReducer(people,{ type: 'check', payload: 18 }))
//         setCurrentSort('18')
//     }
//     console.log('People IDs:', people.map(p => p._id));
//             return (
//                 <div id={'hw3'}>
//                     <div className={s2.hwTitle}>Homework #8</div>
//                     <div className={s2.hw}>
//                         <div className={s.container}>
//                             <div className={s.buttonsContainer}>
//                                 <SuperButton id={'hw8-button-up'} onClick={sortUp}  xType={currentSort === 'up' ? '' : 'secondary'}>
//                                     Sort up
//                                 </SuperButton>
//                                 <SuperButton id={'hw8-button-down'} onClick={sortDown} xType={currentSort === 'down' ? '' : 'secondary'}>
//                                     Sort down
//                                 </SuperButton>
//                                 <SuperButton id={'hw8-button-18'} onClick={check18} xType={currentSort === '18' ? '' : 'secondary'}>
//                                     Check 18+
//                                 </SuperButton>
//                             </div>
//
//                             <table id={'hw8-users'} className={s.users}>
//                                 console.log('Rendered keys')
//                                 <thead className={s.thead}>
//                                 <tr>
//                                     <td className={s.nameCol}>Name</td>
//                                     <td className={s.ageCol}>Age</td>
//                                 </tr>
//                                 </thead>
//                                 <tbody>{finalPeople}</tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//export default HW8