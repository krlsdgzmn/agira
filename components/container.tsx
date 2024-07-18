export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container min-h-full w-full max-w-screen-2xl">
      {children}
    </div>
  );
}
