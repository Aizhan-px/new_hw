
// * 4 - в файле GreetingContainer.tsx дописать типизацию пропсов
// * 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error
// * 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
// * 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами

// * 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)



import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[],
    addUserCallback: (name: string) => void
}

export const pureAddUser = ( name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) =>
{
    if (!name.trim()){
        setError('Ошибка! Введите имя!')
    }
    else {
        setName('')
        setError('')
        addUserCallback(name)
    }
}

export const pureOnBlur = (name: string, setError: (error: string) => void,) => {
    if (!name.trim()){
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if(e.key === 'Enter') {
        addUser()
    }
}

export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')


    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
       error && setError('')
    }

    const addUser = () => { pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = users[users.length - 1]?.name
    // * 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}
