import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function StepOne() {
    return (
        <div className="my-10">
            <p className="text-center">User input is concatenated into SQL strings, allowing the query structure to be altered</p>
            <div className='max-w-[700px] mx-auto mt-3'>
                <h6 className='text-red-600'>Unsafe:</h6>
                <SyntaxHighlighter language="javascript" style={atomOneDark} >
                    {`
app.post("/comment", (req, res) => {
  const comment = req.body.comment;
  const query = "INSERT INTO comments (text) VALUES ('" + comment + "')"
  db.query(query);
  res.send("Comment added!");
});`}
                </SyntaxHighlighter>
            </div>
            <div className='max-w-[700px] mx-auto mt-3 bg-red-300'>
                <h6 className='text-red-600 '>Danger Payload:</h6>
                <SyntaxHighlighter language="javascript" style={atomOneDark} >
                    {`
'); DROP TABLE comments; --
`}
                </SyntaxHighlighter>
            </div>
             <div className='max-w-[700px] mx-auto mt-3 '>
                <h6 className='text-blue-700 '>converted query:</h6>
                <SyntaxHighlighter language="javascript" style={atomOneDark} >
                    {`
INSERT INTO comments (text) VALUES (''); DROP TABLE comments; --')

`}
                </SyntaxHighlighter>
            </div>
            <div className='max-w-[700px] mx-auto mt-3 bg-green-500 '>
                <h6 className='text-green-700 '>Safe:</h6>
                <SyntaxHighlighter language="javascript" style={atomOneDark} >
                    {`
app.post("/comment", async (req, res) => {
  const comment = req.body.comment;
  await db.query("INSERT INTO comments (text) VALUES (?)", [comment]);
  res.send("Comment added safely!");
});
`}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}