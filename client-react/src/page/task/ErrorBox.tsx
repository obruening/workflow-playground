import Box from "../../Box";

export interface ErrorBoxProps {
    errorMessageKey: string;
}

function formatError(s: string) {
    //return s.replace(/(?:\\\r\n|\r|\n)/g, '<br />');
    return s.replace(/(?:\\[rn])+/g, '\n').replace(/(?:\\[t])+/g, ' '.repeat(10));;
}

function ErrorBox(errorProps: ErrorBoxProps) {

    return (
        <Box>
            <div className="notification is-danger is-light">
                <pre style={{ "backgroundColor": "inherit" }}>
                    {formatError(errorProps.errorMessageKey)}
                </pre>
            </div>
        </Box>
    )
}

export default ErrorBox;
