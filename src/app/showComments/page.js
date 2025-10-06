import XssDemo from "../components/step-1/XssDemo"

export default function ShowComments(){
    return(
        <>
            <div className="m-10 glass-box max-w-[900px] mx-auto">
                <h5>Comments:</h5>
                <div className="m-10 glass-box">
                    <h6 className="text-start">Demo Title</h6>
                    <p className="text-stone-600">Ullamco pariatur sint duis nulla aute Lorem irure do nostrud amet occaecat. Labore deserunt laboris elit id ea fugiat veniam incididunt tempor anim irure nisi pariatur. Est aliquip velit aute in sunt elit incididunt mollit amet fugiat incididunt consectetur. Labore occaecat anim excepteur Lorem aliquip eu proident eu labore voluptate. Sint id elit ex qui minim non fugiat adipisicing.</p>
                    <h6 className="text-start">Author name</h6>
                </div>
            </div>
            <XssDemo />
        </>
    )
}