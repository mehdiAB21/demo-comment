import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function XssDemo() {
    return (
        <div className="my-10">
            <p className="text-center">User-supplied content is rendered into HTML without sanitization and may execute in the browser.</p>
            <div className='max-w-[700px] mx-auto mt-3'>
                <h6 className='text-red-600'>Unsafe:</h6>
                <SyntaxHighlighter language="javascript" style={atomOneDark} >
                    {`
// Unsafe render on client: using innerHTML directly
list.innerHTML = comments.map(c => \`<div>\${c.comment}</div>\`).join('');
`}
                </SyntaxHighlighter>
            </div>
            <div className='max-w-[700px] mx-auto mt-3 bg-red-300'>
                <h6 className='text-red-600 '>Danger :</h6>
                <p>if user add a script to DB can be Danger for webApp</p>
            </div>
             
            <div className='max-w-[700px] mx-auto mt-3 bg-green-500 '>
                <h6 className='text-green-700 '>Safe:</h6>
                <SyntaxHighlighter language="javascript" style={atomOneDark} >
                    {`
// Safe render: use textContent or sanitize before innerHTML
comments.forEach(c => {
  const d = document.createElement('div');
  d.textContent = c.comment; // safe: treats input as text
  list.appendChild(d);
});

`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}