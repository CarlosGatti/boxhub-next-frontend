import { Controller, useForm } from 'react-hook-form'
import { Form, Group, Info, Label, ListSubscriptionsPlans, ModalBody, Signature, Top, WrapperDateHour, WrapperSignatures } from '../styles'
import { useCreateSubscriptionPlanMutation, useDeleteSubscriptionPlanMutation, useGetSubscriptionPlanByIdQuery } from '../../../../../generated/graphql'
import { useEffect, useState } from 'react'

import { Button } from '../../../../_ui/Button'
import { ContainerMain } from '../../../containerMain'
import { CreateSubscriptionDto } from '../../../../../dto/createSubscription.dto'
import { DatePickerInput } from '../../../../../components/_ui/Input/datePickerInput'
import { DeleteButton } from '../../../../_ui/ButtonIcon/Delete'
import { EditButton } from '../../../../_ui/ButtonIcon/Edit'
import Image from 'next/image'
import { Input } from '../../../../../components/_ui/Input/textInput'
import { Modal } from '../../../../_ui/Modal'
import { SubscriptionPlanInput } from '../../../../../generated/graphql'
import { editFormSchema } from './validateForm'
import {graphqlRequestClient} from '../../../../../lib/graphql.request'
import moment from 'moment'
import { toast } from 'react-toastify'
import { useGetSubscriptionsQuery } from '../../../../../generated/graphql'
import { yupResolver } from '@hookform/resolvers/yup'

type SubscriptionPlanType = {
    __typename?: "SubscriptionPlan" | undefined;
    id: string;
    name: string;
    amount: number;
    validFrom: string;
    validTo: string;
};


export const EditSignatures = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        // reset,
    } = useForm<SubscriptionPlanType>({
        resolver: yupResolver(editFormSchema),
    })
    const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(null);

    const { data: subscriptions } = useGetSubscriptionsQuery(graphqlRequestClient)

    const { mutate: deleteSubscriptionPlan } = useDeleteSubscriptionPlanMutation(graphqlRequestClient)

    const { mutate: createSubscriptionPlan } = useCreateSubscriptionPlanMutation(graphqlRequestClient)

    //query subscription plan by id
    const { data: subscriptionPlan, refetch } = useGetSubscriptionPlanByIdQuery(graphqlRequestClient, {
        id: parseInt(selectedSubscriptionId, 10) ?? 0,
    })


    // refetch dados depois de deletar

    const handleDeleteSubscriptionPlan = async (plan) => {
        try {
            await deleteSubscriptionPlan(
                {
                    id: parseInt(plan.id, 10),
                },
                {
                    onSuccess: async () => {
                        console.log("Deleting subscription plan, refetching...");
                        await refetch({ id: parseInt(selectedSubscriptionId, 10) });
                        toast.success('Subscription Plan deleted successfully!');
                    },
                    onError: (error) => {
                        console.error('Error deleting subscription plan:', error);
                        toast.error('Error deleting subscription plan');
                    }
                }
            )
        } catch (error) {
            console.log('error', error)
            toast.error('Error deleting subscription plan')
        }
    }


    const handleCreateSubscriptionPlan = async (values: SubscriptionPlanType) => {


        console.log('values', values)
        try {
            await createSubscriptionPlan(
                {
                    data: {
                        name: values.name,
                        amount: values.amount,
                        validFrom: values.validFrom,
                        validTo: values.validTo,
       
        

                    },
                    subscriptionId: parseInt(selectedSubscriptionId, 10),
                
                },
                {
                    onSuccess: async () => {
                        // Refetch após a criação bem-sucedida
                        await refetch({ id: parseInt(selectedSubscriptionId, 10) });
                        toast.success('Subscription Plan created successfully!');
                    },
                    onError: (error) => {
                        console.error('Error creating subscription plan:', error);
                        toast.error('Error creating subscription plan');
                    }
                }
            )
        } catch (error) {
            console.log('error', error)
            toast.error('Error creating subscription plan')
        }
    }


    



    useEffect(() => {
        if (selectedSubscriptionId) {
            refetch({ id: parseInt(selectedSubscriptionId, 10)});
        }

        console.log('subscriptionPlan', subscriptionPlan)
    }, [selectedSubscriptionId])


    const [selectedSubscription, setSelectedSubscription] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleEditSubscription = async (subscription) => {
        setSelectedSubscription(subscription);
        setSelectedSubscriptionId(subscription.id);
        setIsModalOpen(true);
    }




    return (
        <ContainerMain title="Edit Subscriptions">

            <WrapperSignatures>

                {
                    subscriptions?.getSubscriptions.map(subscription => (
                        <Signature key={subscription.id}>
                            <div>
                                <Image
                                    width={100}
                                    height={100}
                                    src={subscription.urlImage || '/images/placeholder.png'}
                                    alt="assinatura"
                                />
                                <Info>
                                    <h4>{subscription.provider}</h4>
                                    <p>
                                        {subscription.subscriptionPlans[0].name} - ${subscription.subscriptionPlans[0].amount}
                                    </p>
                                    <span>Renews on {moment(subscription.subscriptionPlans[0].validTo).format('MMMM Do')}</span>
                                </Info>




                            </div>



                            <EditButton aria-label="editar assinatura" onClick={() => handleEditSubscription(subscription)} />



                        </Signature>


                    ))
                }
            </WrapperSignatures>

            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onOpenChange={handleCloseModal}
                >
                    <ModalBody title="Editar Subscriptions">

                        <Group>
                            <Top>
                                <Label>{selectedSubscription.provider}</Label>
                            </Top>
                        </Group>


                        {
                            subscriptionPlan?.getSubscriptionPlanById?.map((plan, index) => (
                                <Group key={index}>
                                    <ListSubscriptionsPlans>{plan.name}<DeleteButton onClick={() => handleDeleteSubscriptionPlan(plan)} /></ListSubscriptionsPlans>

                                </Group>
                            ))
                        }
                        <Form>



                            <Group>
                                <Input
                                    label="Subscription Name"
                                    placeholder="Subscription Name"
                                    {...register('name')}
                                />
                            </Group>


                            <Group>
                                <Input
                                    type='number'
                                    label="Amount"
                                    placeholder="Amount"
                                    {...register('amount')}
                                />
                            </Group>
                            <Group>
                                <WrapperDateHour>
                                    <Controller
                                        name="validFrom"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <DatePickerInput
                                                label="validFrom"
                                                id="validFrom"
                                                type="date"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </WrapperDateHour>
                                <WrapperDateHour>
                                    <Controller
                                        name="validTo"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <DatePickerInput
                                                label="validTo"
                                                id="validTo"
                                                type="date"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </WrapperDateHour>
                            </Group>



                            <Button onClick={handleSubmit(handleCreateSubscriptionPlan)}> Create Subscription Plan </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            )}




        </ContainerMain>
    )
}
