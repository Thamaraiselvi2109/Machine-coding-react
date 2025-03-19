import { useEffect, useState } from "react"

export const ProgressBar = ({ progress }: { progress: number }) => {

    const [animatedbar, setAnimatedbar] = useState(0)

    useEffect(()=>{
        setAnimatedbar(progress)
    },[])
    return (
        <>
            <div className="outer">
                <div className="inner" style={{ transform: `translateX(${animatedbar-100}%)` }}>
                    {progress}%
                </div>
            </div>
        </>
    )
}