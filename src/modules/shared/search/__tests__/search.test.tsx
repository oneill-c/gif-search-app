import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'

import Search, { SearchProps } from '..'

describe('<Search /> tests', () => {
    let snapshot: ReactTestRenderer
    let component: ReactWrapper<{}>

    const props: SearchProps = {
        id: 'test',
        onComplete: jest.fn()
    }

    it('snapshot test', () => {
        snapshot = renderer.create(
            <Search {...props} />
        )
        expect(snapshot).toMatchSnapshot()
    })

    describe('Event tests', () => {

        beforeEach(() => {
            component = mount(
                <Search {...props} />
            )
        })

        it('calls `onComplete` when enter key pressed', () => {
            const input = component.find('input')
            input.simulate('change', {
                target: {
                    name: 'search',
                    value: 'test'
                }
            })
            input.simulate('keyup', {
                keyCode: 13
            })

            expect(props.onComplete).toBeCalled()
        })
    })
})