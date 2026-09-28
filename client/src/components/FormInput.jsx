import { AlertCircle, Eye, EyeOff } from "lucide-react"
import { useAuthForm } from "../hooks/authForm"

// Form Input Field Component
const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  icon: Icon,
  rightElement,
  minLength,
  maxLength,
  register,
  rules = {},
  error,
}) => {

  const { showPassword, setShowPassword } = useAuthForm()

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-[11px] font-bold tracking-widest text-gray-600 uppercase font-body">
        {label}
      </label>
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 text-gray-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}

        <input
          {...register(name, {
            required: `${label} is required`,
            ...(minLength && {
              minLength: {
                value: minLength,
                message: `${label} must be at least ${minLength} characters`,
              },
            }),
            ...(maxLength && {
              maxLength: {
                value: maxLength,
                message: `${label} must be no more than ${maxLength} characters`,
              },
            }),
            ...rules,
          })}
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          required={true}
          minLength={minLength}
          maxLength={maxLength}
          className={`w-full py-3 text-sm text-gray-800 transition-all rounded-lg border focus:bg-white focus:outline-none focus:ring-1 ${error
            ? 'border-red-300 bg-red-50/40 focus:border-red-500 focus:ring-red-500/25'
            : 'border-gray-200/80 bg-input-var focus:border-(--color-primary) focus:ring-(--color-primary)'
            } ${Icon ? 'pl-10' : 'pl-4'} ${rightElement ? 'pr-11' : 'pr-4'}`}
        />

        {rightElement && (
          <div className="absolute right-3 flex items-center">
            {/* {rightElement} */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 focus:outline-1 focus:outline-(--color-neutral-muted) p-1 transition-colors cursor-pointer"
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-start gap-2 rounded-md border border-red-200/80 bg-red-50/70 px-2.5 py-2 text-[11px] font-medium leading-4 text-red-700 shadow-sm shadow-red-900/5"
        >
          <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertCircle className="h-3 w-3" />
          </span>
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

export default FormInput