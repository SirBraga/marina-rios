"use client";

export default function CTAButton({ 
  children, 
  href, 
  onClick, 
  variant = "primary",
  className = "",
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform active:scale-95 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-light)] text-white hover:from-[var(--brand-accent-light)] hover:to-[var(--brand-accent)] focus:ring-[var(--brand-accent)] shadow-lg hover:shadow-xl",
    ghost: "border-2 border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-white focus:ring-[var(--brand-accent)] bg-transparent",
    whatsapp: "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:from-[#128C7E] hover:to-[#25D366] focus:ring-[#25D366] shadow-lg hover:shadow-xl"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const ButtonContent = () => (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      <ButtonContent />
    </button>
  );
}