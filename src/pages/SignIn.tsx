import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import axios from 'axios'
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignIn(event: FormEvent) {
        event.preventDefault()

        await axios.post('/sessions', {
            email: 'vitoria@praciano.com.br',
            password: '12345678'
        })

        setIsUserSignedIn(true)
    }
    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
            <header className='flex flex-col items-center'>
                <Heading size='lg' className='mt-4'>Tela de login</Heading>
                <Text size='lg' className='text-gray-400 mt-1'>Faça login para entrar</Text>
            </header>

            <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-center w-full max-w-min mt-10'>
                {isUserSignedIn && <Text>Login realizado!</Text>}
                <label htmlFor='email' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>Endereço de e-mail</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
                    </TextInput.Root>
                </label>

                <label htmlFor='password' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input type='password' id='password' placeholder='********' />
                    </TextInput.Root>
                </label>

                <label htmlFor='remember' className='flex items-center gap-2'>
                    <Checkbox id='remember' />
                    <Text size='sm' className='text-gray-200'>Lembrar de mim</Text>
                </label>

                <Button type='submit' className='mt-4'>Entrar</Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                    <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
                </Text>
                <Text asChild size='sm'>
                    <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui uma conta? Crie uma agora</a>
                </Text>
            </footer>
        </div>
    )
}