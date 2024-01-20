import { useEffect, useState } from "react";

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {

        const myFunc = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    
        myFunc();

        window.addEventListener('resize', myFunc);

        const cleanUp = () => {
            window.removeEventListener('resize', myFunc)
        }

        return cleanUp;
    }, [])
   
    return windowSize;
}

export default useWindowSize;