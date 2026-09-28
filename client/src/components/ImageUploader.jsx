import { Upload, X } from 'lucide-react';

const ImageUploader = ({ images, onAddImages, onRemoveImage, readOnly = false }) => {
  const maxImages = 5;

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    onAddImages(files);
    e.target.value = '';
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-(--color-neutral-muted)">
        <span className="font-semibold text-(--color-neutral)">Product Photos</span>
        <span>{images.length} of {maxImages} uploaded</span>
      </div>

      {/* Uploaded Items List */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
          {images.map((img, index) => (
            <div
              key={img.clientId || img.file?.name || img.fileId || index}
              className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-black/10 shadow-2xs"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <img
                  src={img.previewUrl || img.url}
                  alt={`Preview ${index + 1}`}
                  className="w-12 h-12 rounded-lg object-cover bg-black/5 shrink-0"
                />
                <div className="truncate text-xs">
                  <div className="font-medium text-(--color-neutral) truncate">
                    {img.file?.name || `Image ${index + 1}`}
                  </div>
                </div>
              </div>

              {!readOnly && (
                <button
                  type="button"
                  onClick={() => onRemoveImage(index)}
                  className="p-1.5 hover:bg-red-50 text-neutral-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Drag & Drop Upload Zone */}
      {!readOnly && images.length < maxImages && (
        <label className="border-2 border-dashed border-black/10 hover:border-(--color-primary)/40 bg-white/50 hover:bg-white rounded-2xl p-6 flex flex-col items-center justify-center transition-all cursor-pointer group">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="w-10 h-10 rounded-full bg-(--color-tertiary) text-(--color-primary) flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <Upload className="w-5 h-5" />
          </div>
          <p className="text-xs font-semibold text-(--color-neutral) mb-0.5">
            Click or drag photos to upload
          </p>
          <p className="text-[11px] text-(--color-neutral-muted)">
            PNG, JPG or WEBP up to 8MB each (Max 5 photos)
          </p>
        </label>
      )}
    </div>
  );
};

export default ImageUploader;