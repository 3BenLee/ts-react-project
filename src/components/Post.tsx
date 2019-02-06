import * as React from 'react';

const post = (props: any) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
    </article>
);

export default post;