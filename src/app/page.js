import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="main">
      <div className="text-center max-w-[500px] mx-auto glass-box  m-5">
        <p>{`A supplementary demo project for the research paper “From Form to Database,” showcasing practical examples of web input validation and security concepts (SQL Injection, XSS, and CSP)`}</p>
      </div>
      <div className="text-center m-10 glass-box">
        <div className="mb-4">
          <p >Start SQLi Test:</p>
        </div>
        <div>
          <Link href="/sendComment" className="bg-green-600 m-2 p-2 rounded-full cursor-pointer">Try SQLi Demo</Link>
        </div>
      </div>
      <div className="text-center m-10 glass-box">
        <div className="mb-4">
          <p >Start XSS Test:</p>
        </div>
        <div>
          <Link href="/showComments" className="bg-green-600 m-2 p-2 rounded-full cursor-pointer">Try XSS Demo</Link>
        </div>
      </div>
      <footer className="">
        <p>
          This project is a practical extension of the research paper
          <strong>"From Form to Database"</strong>,
          demonstrating secure input handling and web vulnerabilities prevention
          (SQL Injection, XSS, and validation in both frontend & backend).
        </p>
        <p>
          Source code and documentation available on
          <a href="https://github.com/mehdiAB21" target="_blank">
            GitHub
          </a>.
        </p>
        <p>© 2025 — Built for educational and research purposes.</p>
      </footer>
    </div>
  );
}
