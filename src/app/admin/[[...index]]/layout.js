export default function Layout({ children }) {
  return (
    <main className="absolute top-0 left-0 h-screen w-screen z-50">
      {children}
    </main>
  );
}
