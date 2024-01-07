import React, { FC } from 'react'
import styles from './Registration.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import useRegistration from '@/features/auth_form/lib/hooks/useRegistration'
import Input from '@/shared/ui/input'
import Button from '@/shared/ui/button'



interface IAuthFields {
    login: string,
    email: string,
    password: string
  
  }
  
  interface Props {
    setMode: React.Dispatch<React.SetStateAction<"register" | "auth">>
  }


const Registration : FC<Props> = ({setMode}) => {
    const registration = useRegistration()

    const { control, handleSubmit, formState: { errors},reset } = useForm<IAuthFields>({
        defaultValues: {
        login: '',
          email: '',
          password: ''
        }
      })


      const onSubmit: SubmitHandler<IAuthFields> = (data) => {
        const {email, password, login} = data
        console.log(`ваш email ${email} ваш пароль ${password}`)
        registration({username: login, email, password})
      }


  return (
    <div className={styles.root}>
    <h1 className={styles.title}>Зарегистрироваться</h1>
    <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <form onSubmit={handleSubmit(onSubmit)} >
    <div className={styles.inputs_holder}>
    <Controller
          name='login'
          rules={{required:'Это поле обязательно'}}
          control={control}
          render={({ field }) => <Input width={'full'} placeholder="Логин..." {...field} /> }
        />


        {errors?.login?.message && <div style={{ color: 'red' }} >{errors.login.message}</div>}
    <Controller
          name='email'
          rules={{required:'Это поле обязательно',
        pattern:{
          value: 
          /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
          message: ' Пожалуйста введите корректный email'
        }
        }}
          control={control}
          render={({ field }) => <Input width={'full'} placeholder="E-mail..." {...field} /> }
        />


        {errors?.email?.message && <div style={{ color: 'red' }} >{errors.email.message}</div>}
      
      <Controller
          name='password'
          rules={{required:'Это поле обязательно',
            minLength: {
              value: 6,
              message: 'Длина пароля должна быть не менее 6 символов'
            }
        }}
          control={control}
          render={({ field }) => <Input width={'full'} placeholder="Пароль..." {...field} />}
        />

        {errors.password?.message && <div style={{ color: 'red' }} >{errors.password.message}</div>}
    </div>
  
    <div className={styles.buttons_holder}>
      <Button
      type='submit'
        width={"full"}
        variant={"primary"}
      >
        Продожить
      </Button>
      <Button
        onClick={() =>{ setMode("auth"); reset()}}
        width={"full"}
        variant={"primary_outlined"}
      >
        Авторизоваться
      </Button>
    </div>
    </form>
  </div>
  )
}

export default Registration