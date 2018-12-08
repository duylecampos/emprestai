import React from 'react';
import Book from './Book/Book';

const books = props => {
    const books = props.data.map(book => <Book data={book} />);
    return <div>
        {books}
    </div>;
}

export default books;