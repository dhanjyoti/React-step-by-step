import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
}

export default function Blog(){
    return (
        <div>
            This is a Blog!
        </div>
    )
}