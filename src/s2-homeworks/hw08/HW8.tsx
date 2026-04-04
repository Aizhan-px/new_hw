import  {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import s from './HW8.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import User from './User'

/*
* 1 - дописать типы и
* логику (сортировка по имени, фильтрация по совершеннолетию)
*  homeWorkReducer, проверить тестом
* 2 - дописать компоненту User
*
*
* 3 - сделать стили в соответствии с дизайном
* */

//Состояние сайта при обратной сортировке по имени:
//Состояние сайта при сортировке по имени по алфавиту:
//Состояние сайта при фильтрации по совершеннолетию:

export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: UserType[] = [
    // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

const HW8 = () => {
    const [people, setPeople] = useState<UserType[]>(initialPeople)
    const [currentSort, setCurrentSort] = useState('')


    const finalPeople = people.map((u: UserType) => <User key={u._id} u={u}/>)




    // Что происходит в целом  // Когда ты нажимаешь кнопку:  // Вызывается sortUp  // Reducer сортирует initialPeopl // setPeople обновляет state // React перерисовывает список//  Пользователи отображаются в алфавитном порядке

    const sortUp = () => {
        setPeople(
            // ты всегда берёшь initialPeople, а не people // Это значит: каждый раз начинаешь с нуля предыдущие изменения не учитываются
            homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}) // {} это action (действие)<-
        ) // в алфавитном порядке a.name > b.name
        setCurrentSort('up') // Обновляется второе состояние currentSort записываем 'up', чтобы: знать текущую сортировку менять стиль кнопки (например, активная/неактивная)
    }



    const sortDown = () => {
        setPeople(
            homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'})
        ) // в обратном порядке a.name < b.name}
        setCurrentSort('down') //setPeople(новый_отсортированный_массив)
    }

    const check18 = () => {
        setPeople(
            homeWorkReducer(initialPeople, {type: 'check', payload: 18})
        ) // совершеннолетние
        setCurrentSort('18')
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #8</div>
            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.buttonsContainer}>
                        <SuperButton
                            id={'hw8-button-up'}
                            onClick={sortUp}
                            xType={currentSort === 'up' ? '' : 'secondary'}
                        >
                            Sort up
                        </SuperButton>
                        <SuperButton
                            id={'hw8-button-down'}
                            onClick={sortDown}
                            xType={currentSort === 'down' ? '' : 'secondary'}
                        >
                            Sort down
                        </SuperButton>
                        <SuperButton
                            id={'hw8-button-18'}
                            onClick={check18}
                            xType={currentSort === '18' ? '' : 'secondary'}
                        >
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

                        <tbody>{finalPeople}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HW8