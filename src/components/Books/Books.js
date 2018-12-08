import React from 'react';
import Book from './Book/Book';
import classes from './Books.module.css';


const books = props => {
    const books = props.data.map(book => 
        <Book 
            title={book.title}
            writer={book.writer}
            owner={book.owner}
            cover={book.cover}
        />
    );
    return <div className={classes.Books}>
        {books}
    </div>;
}

export default books;