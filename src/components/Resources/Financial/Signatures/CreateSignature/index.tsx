import { Controller, useForm } from 'react-hook-form'
import { Form, Group, ImageUploadPhotoWithCrop, Top, WrapperDateHour } from '../styles'

import { Button } from '../../../../_ui/Button'
import { ContainerMain } from '../../../containerMain'
import { CreateSubscriptionDto } from '../../../../../generated/graphql'
import { DatePickerInput } from '../../../../../components/_ui/Input/datePickerInput'
import { Input } from '../../../../../components/_ui/Input/textInput'
import { UploadPhotoWithCrop } from '../../../../../components/_ui/UploadPhotoWithCrop'
import { editFormSchema } from './validateForm'
import {graphqlRequestClient} from '../../../../../lib/graphql.request'
import moment from 'moment'
import { toast } from 'react-toastify'
import { uploadImages } from '../../../../../lib/imgBB'
import { useCreateSubscriptionsMutation } from '../../../../../generated/graphql'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

export const CreateSignatures = () => {

    const [imageProvider, setImageProvider] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm<CreateSubscriptionDto>({
        resolver: yupResolver(editFormSchema),
    })

    const { mutate: createSubscription } = useCreateSubscriptionsMutation(graphqlRequestClient)

    const handleCreateSubscription = async (values: CreateSubscriptionDto) => {
        console.log(values, imageProvider)
        try {
            if (imageProvider && !imageProvider.includes('imgbb')) {
                const { data } = await uploadImages(imageProvider)
                values.urlImage = data.url
            }
            createSubscription({
                data: {
                    urlImage: values.urlImage,
                    provider: values.provider,
                    subscriptionPlans: {
                        name: values.name,
                        amount: values.amount,
                        validFrom: moment(values.validFrom).format('YYYY-MM-DD'),
                        validTo: moment(values.validTo).format('YYYY-MM-DD'),

                    },
                }
            }, {
                onSuccess: () => {
                    reset()
                    setImageProvider(null)
                    toast.success('Subscription created successfully')
                },
              },
            )
      
        } catch (error) {
            toast.error('Subscription not created')
        }
    }

    return (
        <>
            <ContainerMain title="Create Signatures">
                <Form>
                    <Top>
                        <div>
                            <ImageUploadPhotoWithCrop>
                                <UploadPhotoWithCrop
                                    setBanner={(value: string) => setImageProvider(value)}
                                    imageUser={imageProvider}
                                />
                            </ImageUploadPhotoWithCrop>
                        </div>
                    </Top>
                    <Group>
                        <Input
                            label="Provider"
                            placeholder="Provider Name"
                            {...register('provider')}
                        />
                    </Group>
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
                    <Button onClick={handleSubmit(handleCreateSubscription)}>Create Subscription</Button>
                </Form>
            </ContainerMain>
        </>
    )
}
