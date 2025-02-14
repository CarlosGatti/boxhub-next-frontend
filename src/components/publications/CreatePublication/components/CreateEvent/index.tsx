import * as yup from 'yup'

import {
  Container,
  EventImage,
  Form,
  TitleEventImage,
  WrapperBanner,
  WrapperDateHour,
  WrapperGroup,
} from './styles'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '../../../../../components/_ui/Button'
import { DatePickerInput } from '../../../../../components/_ui/Input/datePickerInput'
import { GoLocation } from 'react-icons/go'
import { Input } from '../../../../../components/_ui/Input/textInput'
import { TextArea } from '../../../../../components/_ui/Input/textAreaInput'
import { UploadPhotoWithCrop } from '../../../../../components/_ui/UploadPhotoWithCrop'
import { convertImageToBase64 } from '../../../../../utils/functions'
import graphqlRequestClient from '../../../../../lib/graphql.request'
import moment from 'moment'
import { toast } from 'react-toastify'
import { uploadImages } from '../../../../../lib/imgBB'
import { useCreatePublicationMutation } from '../../../../../generated/graphql'
import { useState } from 'react'
import { useTimeline } from '../../../../../context/TimelineContext'
import { yupResolver } from '@hookform/resolvers/yup'

const createEventFormSchema = yup.object().shape({
  title: yup.string().required('title is required!'),
  repeat: yup.string(),
  start_date: yup.string().required('Start date is required'),
  start_hour: yup.string(),
  end_date: yup.string(),
  endTime: yup.string(),
  location: yup.string(),
  invite: yup.string(),
  description: yup.string().required('Description is required!'),
})

interface CreateEventData {
  start_date: string
  end_date: string
  start_hour: string
  end_hour: string
  description: string
  title: string
  location: string
}

interface CreateEventProps {
  cancelPublication: () => void
  communityId?: number
}

export function CreateEvent({
  cancelPublication,
  communityId,
}: CreateEventProps) {
  const [bannerPicture, setBannerPicture] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateEventData>({
    resolver: yupResolver(createEventFormSchema),
  })

  const { refetchTimeline } = useTimeline()

  const { mutate: createPub } =
    useCreatePublicationMutation(graphqlRequestClient)

  const handleCreateEvent = async (values: CreateEventData) => {
    const startDate = moment(values.start_date).format('DD/MM/YYYY')
    const endDate = moment(values.end_date).format('DD/MM/YYYY')

    const startHour = moment(values.start_hour).format('LT')
    const endHour = moment(values.end_hour).format('LT')

    const startDateTime = moment(
      startDate + ' ' + startHour,
      'DD/MM/YYYY HH:mm',
    )
    const endDateTime = moment(endDate + ' ' + endHour, 'DD/MM/YYYY HH:mm')

    try {
      setIsLoading(true)

      convertImageToBase64(
        bannerPicture,
        async (converted: string) =>
          await uploadImages(converted).then((res) => {
            createPub(
              {
                data: {
                  description: values.description,
                  communityId,
                  visibility: 'PUBLIC',
                  event: {
                    banner: res.data.url,
                    startDate: moment(startDateTime).format(),
                    endDate: moment(endDateTime).format(),
                    title: values.title,
                  },
                },
              },
              {
                onSuccess(data) {
                  if (data.createPublication.__typename === 'BaseResult') {
                    toast.success('Event published successfully!')
                    cancelPublication()
                    refetchTimeline()
                    setIsLoading(false)
                  } else {
                    toast.error(
                      'Unable to publish the event. Try again!',
                    )
                  }
                },
              },
            )
          }),
      )
    } catch (err) {
      setIsLoading(false)
      toast.error(`Error trying to create event, try again!`)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleCreateEvent)}>
        <WrapperGroup>
          <WrapperBanner>
            <TitleEventImage>
              <p>Foto da capa</p>
            </TitleEventImage>

            <EventImage>
              <UploadPhotoWithCrop
                imageUser="/image/banner-default.jpg"
                setBanner={(value) => setBannerPicture(value)}
              />
            </EventImage>
          </WrapperBanner>

          <div style={{ width: '100%' }}>
            <Input
              label="Título do evento"
              error={errors.title}
              {...register('title')}
            />
            <Input
              label="Localização ou URL"
              icon={<GoLocation />}
              iconPosition="left"
              {...register('location')}
            />
          </div>
        </WrapperGroup>

        <WrapperGroup>
          <WrapperDateHour>
            <Controller
              name="start_date"
              control={control}
              render={({ field: { value, onChange } }) => (
                <DatePickerInput
                  label="Data início"
                  id="startdata"
                  type="date"
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name="start_hour"
              control={control}
              render={({ field: { value, onChange } }) => (
                <DatePickerInput
                  type="time"
                  id="startdata"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </WrapperDateHour>

          <WrapperDateHour>
            <Controller
              name="end_date"
              control={control}
              render={({ field: { value, onChange } }) => (
                <DatePickerInput
                  label="Data de término"
                  id="startdata"
                  type="date"
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name="end_hour"
              control={control}
              render={({ field: { value, onChange } }) => (
                <DatePickerInput
                  type="time"
                  id="startdata"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </WrapperDateHour>
        </WrapperGroup>

        <TextArea
          label="Descrição"
          {...register('description')}
          error={errors.description}
        />

        <Button
          type="submit"
          buttonStyle={{ minHeight: 42, width: '100%' }}
          isLoading={isLoading}
        >
          Publish
        </Button>
      </Form>
    </Container>
  )
}
