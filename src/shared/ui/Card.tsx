import { type PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => {
    return (
        <div className='card' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>
    )
}
