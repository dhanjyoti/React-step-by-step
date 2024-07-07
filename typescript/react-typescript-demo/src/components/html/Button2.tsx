type ButtonProps ={
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const Button2=({variant, children, ...rest}: ButtonProps)=>{
    return (
        <button className={`class-with-${variant}`} {...rest}>
            {children}
        </button>
    )
}