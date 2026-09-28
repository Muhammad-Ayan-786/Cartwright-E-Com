import { ArrowLeft, Check, Sparkles, AlertCircle } from 'lucide-react';
import { Controller } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageUploader from '../components/ImageUploader';
import { useProductForm } from '../hooks/useProductForm';

const ProductFormPage = ({ initialData, isEditMode }) => {

  const {
    navigate,
    register,
    handleSubmit,
    errors,
    watch,
    control,
    images,
    addImages,
    removeImage,
    isSubmitting,
    onSubmit
  } = useProductForm(initialData, isEditMode);

  const title = watch('title') || '';
  const description = watch('description') || '';
  const stock = watch('stock') ?? 0;



  return (
    <div className="min-h-screen bg-(--color-canvas) text-(--color-neutral) font-body flex flex-col justify-between">
      <div>
        {/* Existing Reused Navbar */}
        <Navbar />

        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          {/* Top Breadcrumb & Status */}
          <div className="flex items-center justify-between mb-6 text-xs text-(--color-neutral-muted)">
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="flex items-center gap-1.5 font-medium hover:text-(--color-neutral) transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalog</span>
            </button>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {isEditMode ? 'Editing Mode' : 'Create Mode'}
            </span>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl border border-black/5 shadow-xs p-6 sm:p-8">
            {/* Form Subheader */}
            <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-6">
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-(--color-neutral-muted) mb-1">
                  INVENTORY MANAGEMENT
                </div>
                <h1 className="font-headline text-2xl sm:text-3xl font-semibold text-(--color-neutral)">
                  {isEditMode ? `Editing: ${title || 'Product'}` : 'Create New Product'}
                </h1>
                <p className="text-xs text-(--color-neutral-muted) mt-1">
                  Configure product parameters, store availability, and merchandising media.
                </p>
              </div>
              <div className="hidden sm:block text-right">
                <span className="font-mono text-xs text-(--color-neutral-muted) bg-(--color-tertiary)/40 px-2.5 py-1 rounded-md border border-black/5">
                  {isEditMode ? 'SKU-77402-CW' : 'NEW-LISTING'}
                </span>
              </div>
            </div>

            {/* Main Form Fields */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Product Title Field */}
              <div>
                <label className="block text-xs font-semibold text-(--color-neutral) mb-1.5">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('title', {
                    required: 'Title is required.',
                    minLength: {
                      value: 2,
                      message: 'Title must be at least 2 characters.'
                    },
                    maxLength: {
                      value: 100,
                      message: 'Title cannot exceed 100 characters.'
                    }
                  })}
                  type="text"
                  placeholder="e.g. Casual Black Suit Pants"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all"
                />
                <div className="flex justify-between items-center mt-1 text-[11px]">
                  {errors.title ? (
                    <span className="text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.title.message}
                    </span>
                  ) : (
                    <span className="text-(--color-neutral-muted)">Min 2, Max 100 characters</span>
                  )}
                  <span className="text-(--color-neutral-muted) ml-auto font-mono">
                    {title.length}/100
                  </span>
                </div>
              </div>

              {/* Price & Stock Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Price Amount */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-(--color-neutral) mb-1.5">
                    Price Amount <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('priceAmount', {
                      required: true,
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: 'Price amount must be at least 0.'
                      },
                      max: {
                        value: 99999,
                        message: 'Price amount cannot exceed 99999.'
                      }
                    })}
                    type="number"
                    min="0"
                    step="any"
                    placeholder="150"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all"
                  />
                  {errors.priceAmount && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.priceAmount.message}</p>
                  )}
                </div>

                {/* Currency Selector */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-(--color-neutral) mb-1.5">
                    Currency
                  </label>
                  <select
                    {...register('currency', { required: true })}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all cursor-pointer font-mono"
                  >
                    <option value="ZAR">ZAR (R)</option>
                    <option value="USD">USD ($)</option>
                    <option value="INR">INR (₹)</option>
                  </select>
                </div>

                {/* Stock Input & Status Indicator */}
                <div className="sm:col-span-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-(--color-neutral)">
                      Stock Count
                    </label>
                    <span className={`text-[10px] font-bold ${stock > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {stock > 0 ? '• In Stock' : '• Out of Stock'}
                    </span>
                  </div>
                  <input
                    {...register('stock', {
                      required: true,
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: 'Stock count must be at least 0.'
                      },
                      max: {
                        value: 99999,
                        message: 'Stock count cannot exceed 99999.'
                      }
                    })}
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all"
                  />
                  {errors.stock && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.stock.message}</p>
                  )}
                </div>
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-xs font-semibold text-(--color-neutral) mb-1.5">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register('description', {
                    required: true,
                    minLength: {
                      value: 20,
                      message: 'Description must be at least 20 characters long.'
                    },
                    maxLength: {
                      value: 500,
                      message: 'Description cannot exceed 500 characters.'
                    }
                  })}
                  rows={4}
                  minLength={20}
                  maxLength={500}
                  placeholder="Comfortable, office wear suit pants crafted with breathable fabric..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all resize-none"
                />
                <div className="flex justify-between items-center mt-1 text-[11px]">
                  {errors.description ? (
                    <span className="text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.description.message}
                    </span>
                  ) : (
                    <span className="text-(--color-neutral-muted)">Min 20, Max 500 characters</span>
                  )}
                  <span className="text-(--color-neutral-muted) ml-auto font-mono">
                    {description.length}/500
                  </span>
                </div>
              </div>

              {/* Image Upload Component */}
              <div className="pt-2">
                <Controller
                  name="images"
                  control={control}
                  rules={{ validate: (images) => images.length > 0 || 'Please add at least one image.' }}
                  render={() => (
                    <ImageUploader
                      images={images}
                      onAddImages={addImages}
                      onRemoveImage={removeImage}
                      readOnly={isEditMode}
                    />
                  )}
                />
                {errors.images && (
                  <p className="text-red-500 text-[11px] mt-1.5">{errors.images.message}</p>
                )}
              </div>

              {errors.root?.server && (
                <p className="text-sm text-red-600" role="alert">{errors.root.server.message}</p>
              )}

              {/* Form Actions Row */}
              <div className="pt-6 border-t border-black/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2.5 px-6 bg-(--color-primary) hover:bg-(--color-primary-hover) text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
                  >
                    <Check className="w-4 h-4" />
                    <span>{isSubmitting ? 'Publishing...' : isEditMode ? 'Save Changes' : 'Publish Product'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="py-2.5 px-4 bg-white border border-black/10 hover:bg-black/5 text-(--color-neutral) text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

                {isEditMode && (
                  <button
                    type="button"
                    onClick={() => { }}
                    className="py-2.5 px-4 bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Delete Product
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Form Footer Note */}
          <div className="mt-4 text-center text-[11px] text-(--color-neutral-muted) flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-(--color-primary)" />
            <span>Product will immediately be visible on the catalog page upon publishing.</span>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProductFormPage;