import { CategoryInfo, CategoryItem, Form, Group } from '../styles'
import { Controller, useForm } from 'react-hook-form'
import { useCreateCategoriesMutation, useGetCategoriesQuery } from '../../../../../generated/graphql'

import { Button } from '../../../../_ui/Button'
import { CategoryCreateWithoutUserInput } from '../../../../../generated/graphql'
import { ContainerMain } from '../../../containerMain'
import { Input } from '../../../../../components/_ui/Input/textInput'
import { TransactionTypeSelect } from '../../../../_ui/TransactionTypeSelect'
import { editFormSchema } from './validateForm'
import {graphqlRequestClient} from '../../../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

export const CreateCategories = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { mutate: createCategory } = useCreateCategoriesMutation(graphqlRequestClient)
    const { data: categories, refetch } = useGetCategoriesQuery(graphqlRequestClient)

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CategoryCreateWithoutUserInput>({
        resolver: yupResolver(editFormSchema),
    })
    const handleCreateCategories = async (values: CategoryCreateWithoutUserInput) => {
        setIsLoading(true)
        try {
            createCategory(
                {
                    data: {
                        name: values.name,
                        type: values.type,

                    },
                },
                {
                    onSuccess: async () => {
                        // Refetch após a criação bem-sucedida
                        await refetch();
                        toast.success('Categories created successfully!');
                        setIsLoading(false);
                    },
                    onError: (error) => {
                        console.error('Error creating categories:', error);
                        toast.error('Error creating Categories');
                        setIsLoading(false);
                    }
                }
            )
            await refetch();
        } catch (error) {
            console.log('error', error)
            toast.error('Error creating Categories')
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            <ContainerMain title="Create Categories">
                <Form>
                    <Group>
                        <Input
                            label="Categories *"
                            type="text"
                            placeholder="Type the name of the category"

                            {...register('name')}
                            error={errors.name}
                        />
                    </Group>
                    <Group>
                        <Controller
                            control={control}
                            name="type"
                            render={({ field, fieldState: { error } }) => (
                                <TransactionTypeSelect
                                    field={field}
                                    error={error}
                                />
                            )}
                        />
                    </Group>
                </Form>
                <Button onClick={handleSubmit(handleCreateCategories)} isLoading={isLoading}> Create Categories </Button>

                {
                    categories?.getCategories?.map((category) => (
                        <CategoryItem key={category.id}>
                            <CategoryInfo>
                                <p>{category.name}</p>
                                <span>{category.type}</span>
                            </CategoryInfo>
                        </CategoryItem>
                    ))
                }
            </ContainerMain>
        </>
    )
}
