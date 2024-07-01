import '../../../style/globals.css';

export default function ProductDetailsLayout({children}: {children: React.ReactNode}){
    return (
        <>
            {children}
            <h2 className="bg-green-200">Feature Products</h2>
        </>
    )
}