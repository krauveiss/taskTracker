
type ButtonProps = {
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    children?: React.ReactNode
}

export const Button = ({ type = "button", disabled = false, children }: ButtonProps) => {
    return (
        <button className='buttons' type={type} disabled={disabled}>{children}</button>
    )
}
