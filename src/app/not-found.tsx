import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-muted-foreground mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
