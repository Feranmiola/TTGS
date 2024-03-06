import "./css/table.css"

export class TableBuilder {
    headerNames: Array<string> = [];
    rows: Array<any> = [];

    constructor() {}

    addHeaders(...rest: Array<string>) {
        this.headerNames.push(...rest);
    }

    addRow(row: any) {
        this.rows.push(row);

    }

    render(): JSX.Element {

        return (
            <>
                <section>
                    <table>
                        <thead className="tableHeaderRow">
                            <tr>
                                {this.headerNames.map(name => <th className="headerSpan" key={name}>{name.slice(0, 1).toUpperCase() + name.slice(1)}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.rows.map((content, index) => {
                                return (
                                    <tr className="tableRow" key={index}>
                                        {this.headerNames.map(name => <td key={content[name]}>{content[name]}</td>)}
                                    </tr>
                                )
                                }
                            )}
                        </tbody>
                    </table>
                </section>
            </>
        )
    }
}