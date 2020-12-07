import {React} from 'react'
import PropsFunc from './PropsFunc'
import PropsClass from './PropsClass'
import {render} from '@testing-library/react'
function PropsRoot()
{
    render()
    {
        return (
            <div>
                <PropsFunc name='Parametr' surname='Kowalski' />
                <PropsClass name='Jan' surname='Kowalski' />
            </div>
        )
    }
}

export default PropsRoot
