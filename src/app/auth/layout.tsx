export default function AuthLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full grow bg-left-top bg-cover bg-[url('/images/auth/background.png')] flex items-center justify-center">
            {children}
        </div>
    )
}