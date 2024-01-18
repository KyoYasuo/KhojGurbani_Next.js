
export default function LoginLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-left-top bg-cover bg-[url('/Images/Login/back.png')] flex items-center justify-center">
            {children}
        </div>
    )
}