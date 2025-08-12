interface HttpMessageProps {
    ok: boolean,
    message: string
}

const HttpMessage = ({ ok, message }: HttpMessageProps) => {
    return(
        <>
            { ok ? 
                null
                :
                <p className="text-center text-red-500 bg-red-100 border border-red-500 rounded-lg py-1">{ message }</p> 
            }
        </>
    );
}
export default HttpMessage;