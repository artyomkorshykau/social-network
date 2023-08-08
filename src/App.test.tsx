import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {dialogsData, messageData, postsData} from "./index";

test('renders learn react link', () => {
    render(<App dialogsData={dialogsData}
                messageData={messageData}
                postsData={postsData}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
