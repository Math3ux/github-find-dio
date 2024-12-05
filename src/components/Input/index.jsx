import { InputContainer } from './styles'

export const Input = ({value, onChange }) => {
    return (
        <InputContainer>
            <input type="text" value={value} onChange={onChange}/>
        </InputContainer>
    )
}