export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-4 lg:px-20">{children}</div>;
}
