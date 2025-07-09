import { CategoryInfo, CategoryItem, Form, Group, ModalBody } from '../styles'
import { Controller, useForm } from 'react-hook-form'
import { TransactionFinancialType, useCreateCategoriesMutation, useDeleteCategoriesMutation, useGetCategoriesQuery, useUpdateCategoriesMutation } from '../../../../../generated/graphql'
import { useEffect, useState } from 'react'

import { Button } from '../../../../_ui/Button'
import { CategoryCreateWithoutUserInput } from '../../../../../generated/graphql'
import { ContainerMain } from '../../../containerMain'
import { DeleteButton } from '../../../../_ui/ButtonIcon/Delete'
import { EditButton } from '../../../../_ui/ButtonIcon/Edit'
import { Input } from '../../../../../components/_ui/Input/textInput'
import { Modal } from '../../../../_ui/Modal'
import { TransactionTypeSelect } from '../../../../_ui/TransactionTypeSelect'
import { editFormSchema } from './validateForm'
import {graphqlRequestClient} from '../../../../../lib/graphql.request'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'

type CategoryType = {
    __typename?: "Category" | undefined;
    id: string;
    name: string;
    type: TransactionFinancialType;
};


export const EditCategories = () => {

    const { mutate: updateCategory } = useUpdateCategoriesMutation(graphqlRequestClient)
    const { mutate: deleteCategory } = useDeleteCategoriesMutation(graphqlRequestClient)
    const { data: categories, refetch } = useGetCategoriesQuery(graphqlRequestClient)
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleEditCategory = (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (selectedCategory && isModalOpen) {
            // Use reset para inicializar os valores do formulário
            reset({
                name: selectedCategory.name,
                type: selectedCategory.type,
            });
        }
    }, [selectedCategory, isModalOpen, reset]);
    const {
        control,
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<CategoryCreateWithoutUserInput>({
        resolver: yupResolver(editFormSchema),
    })


    const handleUpdateCategory = async (values: CategoryCreateWithoutUserInput) => {
        try {
            await updateCategory(
                {
                    id: parseInt(selectedCategory.id, 10),
                    data: {
                        name: { set: values.name },
                        type: { set: values.type },
                    },
                },
                {
                    onSuccess: async () => {
                        // Refetch após a criação bem-sucedida
                        await refetch();
                        toast.success('Category updated successfully!');
                        setIsModalOpen(false);
                    },
                    onError: (error) => {
                        console.error('Error updating category:', error);
                        toast.error('Error updating category');
                    }
                }
            )
        } catch (error) {
            console.log('error', error)
            toast.error('Error updating category')
        }
    }

    const handleDeleteCategory = async (category) => {
        try {
            await deleteCategory(
                {
                    id: parseInt(category.id, 10),
                },
                {
                    onSuccess: async () => {
                        console.log("Deleting category, refetching...");
                        await refetch();
                        toast.success('Category deleted successfully!');
                    },
                    onError: (error) => {
                        console.error('Error deleting category:', error);
                        toast.error('Error deleting category');
                    }
                }
            )
        } catch (error) {
            console.log('error', error)
            toast.error('Error deleting category')
        }
    }

    return (
        <>
            <ContainerMain title="EditCategories">
                {
                    categories?.getCategories?.map((category) => (
                        <CategoryItem key={category.id}>
                            <Group>
                                <CategoryInfo>

                                    <p>{category.name}</p>
                                </CategoryInfo>
                                <CategoryInfo>
                                    <span>{category.type}</span>
                                </CategoryInfo>

                            </Group>
                            <Group>
                                <EditButton onClick={() => handleEditCategory(category)} />

                                <DeleteButton onClick={() => handleDeleteCategory(category)} />
                            </Group>
                        </CategoryItem>
                    ))
                }

                {isModalOpen && (
                    <Modal
                        isOpen={isModalOpen}
                        onOpenChange={handleCloseModal}
                    >
                        <ModalBody title="Editar Category">
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
                                <Button onClick={handleSubmit(handleUpdateCategory)}> Update Category </Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                )}



            </ContainerMain>


        </>
    )
}
