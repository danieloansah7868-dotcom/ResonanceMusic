import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'ghost' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600
    hover:from-primary-600 hover:to-primary-700 text-white font-semibold
    shadow-primary transition-all duration-300 hover:shadow-primary-lg hover:scale-[1.02]
    focus:outline-none focus:ring-4 focus:ring-primary-500/50 active:scale-[0.98]
    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`,
  secondary: `inline-flex items-center justify-center bg-white dark:bg-gray-800
    border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold
    hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-primary-500/50 active:scale-[0.98]
    disabled:opacity-60 disabled:cursor-not-allowed`,
  gold: `inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-500
    hover:from-gold-500 hover:to-gold-600 text-gray-900 font-semibold
    shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02]
    focus:outline-none focus:ring-4 focus:ring-gold-500/50 active:scale-[0.98]
    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`,
  ghost: `inline-flex items-center justify-center text-gray-700 dark:text-gray-300
    hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-gray-500/50 active:scale-[0.98]
    disabled:opacity-60 disabled:cursor-not-allowed`,
  outline: `inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600
    text-gray-700 dark:text-gray-300 font-medium hover:border-primary-500 dark:hover:border-primary-500
    hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500/50 active:scale-[0.98]
    disabled:opacity-60 disabled:cursor-not-allowed`,
  danger: `inline-flex items-center justify-center bg-gradient-to-r from-error-500 to-error-600
    hover:from-error-600 hover:to-error-700 text-white font-semibold
    shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
    focus:outline-none focus:ring-4 focus:ring-error-500/50 active:scale-[0.98]
    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-base rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-lg rounded-xl gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
