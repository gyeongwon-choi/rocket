export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <main>
                    <section>
                        {children}
                    </section>
                </main>
            </body>
        </html>
    );
}