import React, {useEffect, useState} from 'react';

export const Response: React.FunctionComponent = () => {
    const [text, setText] = useState();

    useEffect(() => {
        fetch('/api/text').then(resp => resp.json()).then((json) => setText(json.text));
    }, [])

    return (
        <span>{text || "Loading..."}</span>
    );
}
