import * as React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' | 'ghost' };
export function Button({ className = '', variant = 'default', ...props }: Props) {
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-xl transition border';
  const variants: Record<string,string> = {
    default: 'bg-zinc-900 text-white border-zinc-900 hover:opacity-90',
    outline: 'bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-50',
    ghost: 'bg-transparent text-zinc-700 border-transparent hover:bg-zinc-100',
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
