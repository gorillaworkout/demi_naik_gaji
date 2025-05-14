import Link from "next/link";
import MCQTest from "@/components/MCQTest";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900">
      <header className="container mx-auto mb-8">
        <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold">Exam Training Tool</h1>
          <nav className="flex gap-4">
            <Link 
              href="/manage-questions"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Manage Questions
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto">
        {/* MCQ Test Component */}
        <MCQTest />
      </main>

      <footer className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
        <p>Exam Training Tool &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
