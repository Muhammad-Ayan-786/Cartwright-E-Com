import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createProductApi, updateProductApi } from "../apis/productApis";
import { useNavigate } from "react-router";

export const useProductForm = (initialData = null, isEditMode = false) => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } =
    useForm({
      defaultValues: {
        title: initialData?.title || '',
        description: initialData?.description || '',
        priceAmount: initialData?.price?.amount || 0,
        currency: initialData?.price?.currency || 'ZAR',
        stock: initialData?.stock ?? 0,
        images: initialData?.images || []
      },
      mode: 'onSubmit'
    })

  const images = watch('images') || []

  const addImages = (files) => {
    const currentImages = getValues('images') || []

    if (currentImages.length + files.length > 5) {
      setError('images', { type: 'max', message: 'You can upload up to 5 images.' })
      return
    }

    const newImages = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file)
    }))

    setValue('images', [...currentImages, ...newImages], { shouldValidate: true })
    clearErrors('images')
  }

  const removeImage = (index) => {
    const currentImages = getValues('images') || []
    const removedImage = currentImages[index]

    if (removedImage?.previewUrl) URL.revokeObjectURL(removedImage.previewUrl)

    setValue(
      'images',
      currentImages.filter((_, imageIndex) => imageIndex !== index),
      { shouldValidate: true }
    )
  }

  useEffect(() => () => {
    (getValues('images') || []).forEach((image) => {
      if (image.previewUrl) URL.revokeObjectURL(image.previewUrl)
    })
  }, [getValues])

  const onSubmit = async (data) => {
    const productData = {
      title: data.title,
      description: data.description,
      price: {
      amount: data.priceAmount,
      currency: data.currency
      },
      stock: data.stock
    }

    try {
      let response

      if (isEditMode) {
        response = await updateProductApi(initialData._id, productData)
      } else {
        const formData = new FormData()
        formData.append('title', productData.title)
        formData.append('description', productData.description)
        formData.append('price', JSON.stringify(productData.price))
        formData.append('stock', String(productData.stock))
        data.images.forEach(({ file }) => {
          if (file) formData.append('images', file)
        })

        response = await createProductApi(formData)
      }

      navigate('/products')
      return response
    } catch (error) {
      setError('root.server', {
        type: 'server',
        message: error.message || 'Unable to create product. Please try again.'
      })
      return null
    }
  }

  return {
    navigate,
    register,
    handleSubmit,
    control,
    errors,
    watch,
    isSubmitting,
    images,
    addImages,
    removeImage,
    onSubmit
  }

}