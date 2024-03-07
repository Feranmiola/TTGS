import { useRef } from "react";
import "./css/form.css"
import { Button } from "@nextui-org/react";
import usePost from "./hooks/usePost";

type FormObject = {
    [key: string]: any
}

export default class FormBuilder {
    formName: string = "";
    dataNames: Array<string> = [];

    constructor(name: string) {
        this.formName = name;
    }

    addDataNames(...rest: Array<string>) {
        this.dataNames.push(...rest);
    }

    render(showForm: boolean | null): JSX.Element {
        const {postData, loading, error} = usePost();
        const myRefs = useRef<HTMLInputElement[]>([]);

        const addToRefs = (element: HTMLInputElement) => {
            if (element && !myRefs.current.includes(element)) {
                myRefs.current.push(element);
            }
        };

        const submit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            const formObject: FormObject = {};
    
            this.dataNames.forEach((name, index) => {
                formObject[name] = myRefs.current[index].value;
            })
            
            await postData(formObject, "http://localhost:3000/course");
        }

        return (
            <>
                <form className="formBuilder" method="POST" style={{display: showForm ? 'block' : 'none'}}>
                    <div style={{textAlign: 'center', paddingBottom: '1rem'}}>
                        {this.formName}
                    </div>
                    {this.dataNames.map(dataName => {
                        return (
                            <div key={dataName} className="formElementDiv">
                                <label htmlFor={dataName}>{dataName[0].toUpperCase() + dataName.slice(1)}</label>
                                <input ref={addToRefs} type="text" id={dataName} name={dataName} required />
                            </div>
                        )
                    })}
                    <div className="flex justify-center">
                        <Button type="submit" className="shad-button_primary px-8 py-1 rounded-md mt-4 w-30 place-self-center" onClick={submit}>
                            Submit
                        </Button>
                    </div>
                    {/* <button type="submit" onClick={this.submit}></button> */}
                </form>
            </>
        )
    }
}