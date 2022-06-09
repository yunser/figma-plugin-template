import { useEffect, useRef, useCallback } from 'react'
import classes from './app.module.less'

const App = () => {
    const textbox = useRef<HTMLInputElement>()

    const countRef = useCallback((element: HTMLInputElement) => {
        if (element) element.value = '5'
        textbox.current = element
    }, [])

    const onCreate = () => {
        const count = parseInt(textbox.current?.value || '', 10)
        parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
    }

    const onCancel = () => {
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
    }

    useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const { type, message } = event.data.pluginMessage
            if (type === 'create-rectangles') {
                console.log(`Figma Says: ${message}`)
            }
        }
    }, [])

    return (
        <div>
            <h2 className={classes.name}>Rectangle Creator</h2>
            <p>
                Count: <input ref={countRef} />
            </p>
            <button id="create" onClick={onCreate}>
                Create
            </button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}

export default App
