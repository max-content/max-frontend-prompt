import React from 'react';
import { Form, SubmitMe } from '../Styled';

export default function Search({ onChange, onSubmitHandler, placeholder, query }) {
    return (
        <Form>
            <input
                className="SearchInput"
                type="text"
                onChange={onChange}
                placeholder={placeholder}
                value={query}
            />
            <SubmitMe onClick={onSubmitHandler}>
                Search
            </SubmitMe>
        </Form>
    );
}