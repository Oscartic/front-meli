import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

beforeEach(()=> {
    render(<SearchForm />);
});

describe('SearchForm component =>', () => {

    it('should renders the form elements', () => {
        const formElement = screen.getByRole('textbox');
        const btnElement = screen.getByRole('button');
        expect(formElement).toBeInTheDocument();
        expect(btnElement).toBeInTheDocument();
    });

    it('Should render placeholder search input', () => {
        const textPlaceholder = screen.getByPlaceholderText('Buscar productos, marcas y más...');
        expect(textPlaceholder).toBeInTheDocument();
    });
}); 