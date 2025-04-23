tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-hover': 'var(--color-primary-hover)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                'text-base': 'var(--color-text-base)',
                'text-muted': 'var(--color-text-muted)',
                'text-inverted': 'var(--color-text-inverted)',
                'bg-main': 'var(--color-bg-main)',
                'bg-card': 'var(--color-bg-card)',
                'bg-dark': 'var(--color-bg-dark)',
                'bg-header-footer': 'var(--color-bg-header-footer)',
                'border-light': 'var(--color-border-light)',
            }
        }
    }
}
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 700,
        once: true
    });
} 