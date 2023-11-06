"use client"
import CountButton from "./CountButton"

export default function Page() {
    return (
    <div>
        <CountButton increment={1} />
        <CountButton increment={2} />
        <hr />
        <a href="https://github.com/BryceLehnen/CSCI-331-ReactJS">The Github Repo for this ReactJS project</a>
        <hr />

    </div>
    )
}
